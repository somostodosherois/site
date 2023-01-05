// ** React Imports
import { useState } from 'react'
import { SliceZone } from '@prismicio/react'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

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
import TabCampanha from '../../components/TabCampanha/TabCampanha'
import DonationSession from '../../components/DonationSession/DonationSession'
import ProgressBarComp from '../../components/ProgressBar/ProgressBar'
import ImageCoin from "../../public/moeda.gif"


const Tab = styled(MuiTab)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        minWidth: 100
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: 67
    },
}))

const TabName = styled('span')(({ theme }) => ({
    lineHeight: 1.71,
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const filterCampanhas = (items, campanha) =>
    items?.filter((item) => item?.category_1 === campanha || item?.category_2 === campanha)
        .sort((a, b) => a.url.localeCompare(b.url))

const countValueCampanha = (items) => {
    let sum = 0

    items.map(({ metaValue }) => {
        sum += parseFloat(metaValue)
    })

    return sum
}

const changeDivFlutuante = (value) => {
    if (value == 'food')
        return "Alimentos"
    else if (value == 'hygiene')
        return "Higiene Pessoal"
    else if (value == 'accessories')
        return "Acessórios"
    else if (value == 'medical')
        return "Assistência médica"
}


const Campanhas = ({ page, menu, metaTitle, metaDescription, slices, items }) => {
    // ** State
    if (!page || !menu || !items) return null

    const data = page?.data || {}
    const [value, setValue] = useState('food')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <Header metaTitle={metaTitle} metaDescription={metaDescription} />

            <div className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <TitlePage title='Campanhas' />

                    <p className="text-md md:text-lg text-gray-600 lg:mx-auto leading-8 mb-8">
                        A Somos Todos Heróis reúne crianças com necessidades de todo o Brasil em uma campanha com o intuito de levantar fundos para suprir essa necessidade de alguma forma. Abaixo você consegue ver todas as missões que estão abertas em nosso site de cada campanha.
                    </p>

                    <Card className='shadow-none'>
                        <TabContext value={value} className='shadow-none'>
                            <TabList
                                onChange={handleChange}
                                aria-label='account-settings tabs text-left'
                                variant="fullWidth"
                                className='tab-campanhas'
                            >
                                <Tab
                                    value='food'
                                    className='flex justify-left'
                                    label={
                                        <Box>
                                            <SilverwareClean />
                                            <TabName className='text-center m-4'>Alimentos</TabName>
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='hygiene'
                                    label={
                                        <Box>
                                            <Charity />
                                            <TabName className='text-center m-4'>Higiene Pessoal</TabName>
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='accessories'
                                    label={
                                        <Box>
                                            <CartHeart />
                                            <TabName className='text-center m-4'>Acessórios</TabName>
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='medical'
                                    label={
                                        <Box>
                                            <Stethoscope />
                                            <TabName className='text-center m-4'>Assistência médica</TabName>
                                        </Box>
                                    }
                                />
                            </TabList>


                            <TabPanel sx={{ p: 0 }} value='food' className='pt-8'>
                                <TabCampanha items={filterCampanhas(items, 'food')} value={countValueCampanha(filterCampanhas(items, 'food'))} description={'A campanha de Alimentos reúne crianças que necessitam de latas de leite.'} />
                            </TabPanel>

                            <TabPanel sx={{ p: 0 }} value='hygiene' className='pt-8'>
                                <TabCampanha items={filterCampanhas(items, 'personal hygiene')} value={countValueCampanha(filterCampanhas(items, 'personal hygiene'))} description={'A campanha de Higiene Pessoal reúne crianças que necessitam de fraldas; pomadas; lenços umedecidos; entre outros.'} />
                            </TabPanel>

                            <TabPanel sx={{ p: 0 }} value='accessories' className='pt-8'>
                                <TabCampanha items={filterCampanhas(items, 'accessories')} value={countValueCampanha(filterCampanhas(items, 'accessories'))} description={'A campanha de Acessórios reúne crianças que necessitam de cadeiras de rodas; andadores; banheiras; entre outros.'} />
                            </TabPanel>

                            <TabPanel sx={{ p: 0 }} value='medical' className='pt-8'>
                                <TabCampanha items={filterCampanhas(items, 'medical treatments')} value={countValueCampanha(filterCampanhas(items, 'medical treatments'))} description={'A campanha de Tratamentos Médicos reúne crianças que necessitam de sessões de fisioterapia; fonoaudiologia; entre outros.'} />
                            </TabPanel>
                        </TabContext>
                    </Card>
                </div>

                <DonationSession value={value} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SliceZone slices={slices} components={components} />
                </div>
            </div>

            {/* // Pegar o valor ja arrecadado e calcular a porcentagem
            // const progress =  */}
            <div className='hidden lg:block bg-white border rounded-lg shadow p-4 text-center' style={{ top: '15vh', position: 'fixed', right: '2%' }}>
                <span className='text-md font-bold'>{changeDivFlutuante(value)}</span>

                <ProgressBarComp progress={27} className='text-right' />

                <div className='flex justify-center'>
                    <img src={ImageCoin.src} className="moeda-gif" />
                    <p className="px-2 text-gray-500 text-md"><b>{12000}</b> moedas</p>
                </div>

                <div className="rounded-md shadow cursor-pointer">
                    <a
                        href={'missao/'}
                        className="flex items-center justify-center bg-red-600 text-base uppercase rounded-md text-white py-1 px-4"
                    >
                        Finalizar campanha
                    </a>
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
            slices: page.data.body || [],
            items: items
        },
    }
}

export default Campanhas
