// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import AccountHeartOutline from 'mdi-material-ui/AccountHeartOutline'
import Apps from 'mdi-material-ui/Apps'

// ** Components Imports
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TabAccount from '../../components/TabAccount/Account'
import TabSecurity from '../../components/TabAccount/Security'
import HistoricWithButton from '../../components/HistoricWithButton';

import imageSrc from '../../public/avatars/1.png'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

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

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('myDonations')
  // ** State
  const [imgSrc, setImgSrc] = useState(imageSrc.src)

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='bg-gray-100'>
      <Header metaTitle='STH - Minha conta' metaDescription='teste' />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Anexar imagem
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Remover
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Permitido apenas nos formatos PNG ou JPEG, com tamanh máximo de 800Kb.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Card className='shadow-none grid md:flex'>
          <TabContext value={value} className='color-red-600'>
            <TabList
              onChange={handleChange}
              className='bg-gray-100'
              orientation="vertical"
              variant="fullWidth"
            >

              {/* <Tab
                value='donations'
                icon={<Apps />}
                label='Área do doador'
              /> */}
              <Tab
                value='myDonations'
                icon={<AccountHeartOutline />}
                label='Minhas doações'
              />
              <Tab
                value='account'
                icon={<AccountOutline />}
                label='Perfil'
              />
              <Tab
                value='security'
                icon={<LockOpenOutline />}
                label='Segurança'
              />
            </TabList>

            {/* <TabPanel sx={{ p: 0 }} value='donations' className='pl-12 bg-gray-100'>
              <DonorArea />
            </TabPanel> */}
            <TabPanel sx={{ p: 0 }} value='myDonations' className='pl-12 bg-gray-100'>
              <HistoricWithButton title='Histórico de Doações' />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='account' className='pl-12 bg-gray-100'>
              <TabAccount />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='security' className='pl-12 bg-gray-100'>
              <TabSecurity />
            </TabPanel>
          </TabContext>
        </Card>

        


      </div>
      <Footer />
    </div>
  )
}

export default AccountSettings
