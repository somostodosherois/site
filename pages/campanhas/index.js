// ** React Imports
import { useState } from 'react'
import { PrismicRichText, SliceZone } from '@prismicio/react'


import Footer from '../../components/Footer'
import Header from '../../components/Header'


// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import CartHeart from 'mdi-material-ui/CartHeart'
import Stethoscope from 'mdi-material-ui/Stethoscope'
import Charity from 'mdi-material-ui/Charity'
import SilverwareClean from 'mdi-material-ui/SilverwareClean'
import AccountHeart from 'mdi-material-ui/AccountHeart'


// ** Demo Tabs Imports
import TabAccount from '../../components/TabAccount'
import TabSecurity from '../../components/TabSecurity'
import MissionsList from '../../components/MissionsList'
import PlataformNumbers from '../../components/PlataformNumbers'


import { components } from '../../slices'


import { createClient } from '../../prismicio'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import TitlePage from '../../components/TitlePage'
import TabCampanha from '../../components/TabCampanha/TabCampanha'

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

const Campanhas = ({ page, menu, metaTitle, metaDescription, slices, items }) => {
    // ** State
      if (!page || !menu) return null

    const data = page?.data || {}

    const [value, setValue] = useState('alimentos')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }


    return (
        <div>
            <Header metaTitle={metaTitle} metaDescription={metaDescription} />

            <div className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <TitlePage title='Campanhas' />

                    <Card className='shadow-none'>
                        <TabContext value={value} className='shadow-none'>
                            <TabList
                                onChange={handleChange}
                                aria-label='account-settings tabs text-left'
                                variant="fullWidth"
                                className='tab-campanhas'
                            >
                                <Tab
                                    value='alimentos'
                                    className='flex justify-left'
                                    label={
                                        <Box>
                                            <SilverwareClean />
                                            <TabName className='text-center m-4'>Alimentos</TabName>
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='higiene'
                                    label={
                                        <Box>
                                            <Charity />
                                            <TabName className='text-center m-4'>Higiene Pessoal</TabName>
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='acessorios'
                                    label={
                                        <Box>
                                            <CartHeart />
                                            <TabName className='text-center m-4'>Acessórios</TabName>
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='tratamentos'
                                    label={
                                        <Box>
                                            <Stethoscope />
                                            <TabName className='text-center m-4'>Tratamentos médicos</TabName>
                                        </Box>
                                    }
                                />
                                <Tab
                                    value='personalizado'
                                    label={
                                        <Box>
                                            <AccountHeart />
                                            <TabName className='text-center m-4'>Doação Personalizada</TabName>
                                        </Box>
                                    }
                                />
                            </TabList>



                            <TabPanel sx={{ p: 0 }} value='alimentos' className='pt-8'>
                                <TabCampanha items={items} />
                            </TabPanel>

                            <TabPanel sx={{ p: 0 }} value='higiene' className='pt-8'>
                            </TabPanel>

                            <TabPanel sx={{ p: 0 }} value='acessorios'>
                            </TabPanel>

                            <TabPanel sx={{ p: 0 }} value='tratamentos'>
                            </TabPanel>

                            <TabPanel sx={{ p: 0 }} value='personalizado'>
                            </TabPanel>
                        </TabContext>
                    </Card>

                    {/* <SliceZone slices={slices} components={components} /> */}

                    
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
    const items = await fetch(`https://sth.org.br/missions.php?status=open`).then(res => res.json());

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
