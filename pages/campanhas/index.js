// ** React Imports
import { useState } from 'react'
import { SliceZone } from '@prismicio/react'

import { components } from '../../slices'
import { createClient } from '../../prismicio'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TitlePage from '../../components/TitlePage'
import DonationSession from '../../components/DonationSession/DonationSession'
import Banner from '../../components/Banner'
import Tabs from '../../components/Tabs'
import Snackbar from '../../components/Snackbar/Snackbar';

const tabs = [
    {
        id: 'food',
        description: 'A campanha de Alimentos reúne crianças que necessitam de latas de leite.'
    },
    {
        id: 'personal hygiene',
        description: 'A campanha de Higiene Pessoal reúne crianças que necessitam de fraldas; pomadas; lenços umedecidos; entre outros.',
    },
    {
        id: 'accessories',
        description: 'A campanha de Acessórios reúne crianças que necessitam de cadeiras de rodas; andadores; banheiras; entre outros.',
    },
    {
        id: 'medical treatments',
        description: 'A campanha de Tratamentos Médicos reúne crianças que necessitam de sessões de fisioterapia; fonoaudiologia; entre outros.',
    }
]

const Campanhas = ({ page, metaTitle, metaDescription, banner, slices, items, progress }) => {
    // ** State
    if (!page || !items) return null

    const data = page?.data || {}
    const [campanha, setCampanha] = useState('food')
    const [openSnack, setOpenSnack] = useState(false)
    const [messageSnack, setMessageSnack] = useState('')
    const [typeSnack, setTypeSnack] = useState('info')

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

                    <Tabs campanha={campanha} setCampanha={setCampanha} tabs={tabs} items={items} progress={progress} />
                </div>

                <DonationSession value={campanha} setOpenSnack={setOpenSnack} setMessageSnack={setMessageSnack} setTypeSnack={setTypeSnack} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SliceZone slices={slices} components={components} />
                </div>
            </div>

            {messageSnack && <Snackbar message={messageSnack} type={typeSnack} open={openSnack} setOpenSnack={setOpenSnack} />}

            <Footer />
        </div>
    )
}

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('campaigns')
    const items = await fetch(`https://sth-api.herokuapp.com/api/missions`).then(res => res.json());
    const progress = await fetch(`https://sth-api.herokuapp.com/api/progress`).then(res => res.json());

    return {
        props: {
            page,
            metaTitle: page.data.meta_title,
            metaDescription: page.data.meta_description,
            banner: page.data.banner,
            slices: page.data.body || [],
            items: items,
            progress: progress
        },
    }
}

export default Campanhas
