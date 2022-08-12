// ** React Imports
import { useState } from 'react'

import Head from 'next/head'

import Footer from '../../components/Footer'
import Menu from '../../components/Menu';

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import AccountHeartOutline from 'mdi-material-ui/AccountHeartOutline'
import Apps from 'mdi-material-ui/Apps'


// ** Demo Tabs Imports
import TabAccount from '../../components/TabAccount'
import TabSecurity from '../../components/TabSecurity'
import MissionsList from '../../components/MissionsList'
import PlataformNumbers from '../../components/PlataformNumbers'




import Grid from '@mui/material/Grid'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import DonationHistory from '../../components/DonationHistory/DonationHistory';

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
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('dashboard')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <Menu />
      <div className='pt-12'></div>
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className='shadow-none'>
            <TabContext value={value} className='color-red-600'>
              <TabList
                onChange={handleChange}
                aria-label='account-settings tabs'
                className='bg-gray-100'
                sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
              >
                <Tab
                  value='dashboard'
                  className='color-red-600'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Apps />
                      <TabName>Dashboard</TabName>
                    </Box>
                  }
                />
                <Tab
                  value='myDonations'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccountHeartOutline />
                      <TabName>Minhas doações</TabName>
                    </Box>
                  }
                />
                <Tab
                  value='account'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccountOutline />
                      <TabName>Perfil</TabName>
                    </Box>
                  }
                />
                <Tab
                  value='security'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LockOpenOutline />
                      <TabName>Segurança</TabName>
                    </Box>
                  }
                />
              </TabList>



              <TabPanel sx={{ p: 0 }} value='dashboard' className='pt-8 bg-gray-100'>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6} lg={4}>
                    <MissionsList />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <PlataformNumbers />
                  </Grid>
                </Grid>
              </TabPanel>

              <TabPanel sx={{ p: 0 }} value='myDonations' className='pt-8 bg-gray-100'>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6} lg={6}>
                    <DonationHistory />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <h4 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-xl">
                      Se torne um guardião
                    </h4>
                    <p className="mb-4 text-lg">
                      Com menos de R$1,50 por dia você transforma a vida de uma criança todo mês. Ajude nossa ONG com gastos de manutenção para manter plataforma e impactar mais crianças.
                    </p>
                    <div className="flex items-center justify-center md:justify-start">
                      <a
                        href="/doar"
                        className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                      >
                        Quero ser um guardião
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value='account'>
                <TabAccount />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value='security'>
                <TabSecurity />
              </TabPanel>
            </TabContext>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AccountSettings
