// ** React Imports
import { useState } from 'react'
import { SliceZone } from '@prismicio/react'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import { components } from '../../slices'
import { createClient } from '../../prismicio'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TitlePage from '../../components/TitlePage'
import DonationSession from '../../components/DonationSession/DonationSession'
import Banner from '../../components/Banner'
import Tabs from '../../components/Tabs'

const tabs = [
    {
        id: 'food',
        description: 'A campanha de Alimentos reúne crianças que necessitam de latas de leite.',
        value: 1200,
        progress: 45,
    },
    {
        id: 'personal hygiene',
        description: 'A campanha de Higiene Pessoal reúne crianças que necessitam de fraldas; pomadas; lenços umedecidos; entre outros.',
        value: 2200,
        progress: 24,
    },
    {
        id: 'accessories',
        description: 'A campanha de Acessórios reúne crianças que necessitam de cadeiras de rodas; andadores; banheiras; entre outros.',
        value: 5000,
        progress: 56,
    },
    {
        id: 'medical treatments',
        description: 'A campanha de Tratamentos Médicos reúne crianças que necessitam de sessões de fisioterapia; fonoaudiologia; entre outros.',
        value: 8000,
        progress: 30,
    }
]

const Campanhas = ({ page, menu, metaTitle, metaDescription, banner, slices, items }) => {
    // ** State
    if (!page || !menu || !items) return null

    const data = page?.data || {}
    const [campanha, setCampanha] = useState('food')

    return (
        <div>
            <Header metaTitle={metaTitle} metaDescription={metaDescription} />

            {banner &&
                <Banner banner={banner} />
            }

            <div className="pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <TitlePage title='Campanhas' />

                    <p className="text-md md:text-lg text-gray-600 lg:mx-auto leading-8 mb-8">
                        A Somos Todos Heróis reúne crianças com necessidades de todo o Brasil em uma campanha com o intuito de levantar fundos para suprir essa necessidade de alguma forma. Abaixo você consegue ver todas as missões que estão abertas em nosso site de cada campanha.
                    </p>

                    <Tabs campanha={campanha} setCampanha={setCampanha} tabs={tabs} items={items} />
                </div>

                <DonationSession value={campanha} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SliceZone slices={slices} components={components} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('campaigns')
    const menu = await client.getSingle("menu");
    const items = await fetch(`http://sth-api.herokuapp.com/api/missions`).then(res => res.json());

    return {
        props: {
            page,
            menu: menu.data,
            metaTitle: page.data.meta_title,
            metaDescription: page.data.meta_description,
            banner: page.data.banner,
            slices: page.data.body || [],
            items: items
        },
    }
}

export default Campanhas
