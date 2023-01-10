// ** React Imports
import { useState } from 'react'
import { SliceZone } from '@prismicio/react'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

// ** Icons Imports
import CartHeart from 'mdi-material-ui/CartHeart'
import Stethoscope from 'mdi-material-ui/Stethoscope'
import Charity from 'mdi-material-ui/Charity'
import SilverwareClean from 'mdi-material-ui/SilverwareClean'

import { components } from '../../slices'
import { createClient } from '../../prismicio'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TitlePage from '../../components/TitlePage'
import DonationSession from '../../components/DonationSession/DonationSession'
import Banner from '../../components/Banner'
import ProgressBarHorizontal from '../../components/ProgressBarHorizontal'
import Tabs from '../../components/Tabs'

import ImageCoin from "../../public/moeda.gif"

const changeNameCampanha = (value) => {
    if (value == 'food')
        return "Alimentos"
    else if (value == 'personal hygiene')
        return "Higiene Pessoal"
    else if (value == 'accessories')
        return "Acessórios"
    else if (value == 'medical treatments')
        return "Assistência médica"
}

const progressBarra = (name, progress, value) => (
    <div className='grid md:grid-cols-5 gap-y-4 bg-gray-300 border border-2 border pt-3 pl-5 pr-5 text-center w-full' style={{ position: 'fixed', bottom: 0 }}>
        <span className='text-xl font-bold text-center col-span-2 md:col-span-1 lg:mt-1'>Campanha: {changeNameCampanha(name)}</span>

        <div className='col-span-2 md:mt-1'>
            <ProgressBarHorizontal progress={progress} />
        </div>

        <div className='flex justify-center'>
            <img src={ImageCoin.src} className="moeda-gif hidden lg:block my-2" />
            <p className="px-2 py-1 text-black text-md"><b>{value}</b> moedas</p>
        </div>

        <div className="rounded-md shadow cursor-pointer md:mt-1">
            <a
                href={'missao/'}
                className="flex items-center justify-center bg-red-600 text-base uppercase rounded-md text-white py-1"
            >
                Finalizar campanha
            </a>
        </div>
    </div>
)

const tabs = [
    {
        value: 'food',
        description: 'A campanha de Alimentos reúne crianças que necessitam de latas de leite.'
    },
    {
        value: 'personal hygiene',
        description: 'A campanha de Higiene Pessoal reúne crianças que necessitam de fraldas; pomadas; lenços umedecidos; entre outros.'
    },
    {
        value: 'accessories',
        description: 'A campanha de Acessórios reúne crianças que necessitam de cadeiras de rodas; andadores; banheiras; entre outros.'
    },
    {
        value: 'medical treatments',
        description: 'A campanha de Tratamentos Médicos reúne crianças que necessitam de sessões de fisioterapia; fonoaudiologia; entre outros.'
    }
]


const Campanhas = ({ page, menu, metaTitle, metaDescription, slices, items }) => {
    // ** State
    if (!page || !menu || !items) return null

    const data = page?.data || {}
    const [campanha, setCampanha] = useState('food')
    
    return (
        <div>
            <Header metaTitle={metaTitle} metaDescription={metaDescription} />

            <div className='banner-campanhas'>
                <Banner data={page?.data} />
            </div>

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

            {progressBarra(campanha, 45, 1200)}

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
            slices: page.data.body || [],
            items: items
        },
    }
}

export default Campanhas
