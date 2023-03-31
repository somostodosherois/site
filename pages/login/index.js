import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'

import api from '../../pages/api/config'
import Logo from '../../public/logo.svg'
import Snackbar from '../../components/Snackbar/Snackbar';
import { CoinsContext, useCoins } from '../../contexts/coins';

// MUI
import { Grid, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton';

function setSession({ email, token, id, setCoins }) {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('id', id);

  api.post("/getCoins", {
    userData: {
      email: email
    }
  }).then((response) => {
    const coinsQtd = response.data.coinsTotal - response.data.coinsDonated
    setCoins(parseFloat(coinsQtd))
    localStorage.setItem('coins', parseFloat(coinsQtd));
  }).catch((err) => {
      console.log(err)
  });

}

const Login = () => {

  const { coins, setCoins } = useContext(CoinsContext)

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)
  const [messageSnack, setMessageSnack] = useState('')
  const [typeSnack, setTypeSnack] = useState('success')

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [nextStep, setNextStep] = useState(false)
  const [cadStep, setCadStep] = useState(false)

  const handleLogin = () => {
    setLoading(true)

    try {
      api.post("/signinWithCode", {
        email: email,
        code: code
      })
        .then(function (response) {
          if (response.status === 200) {
            setSession({
              email: email,
              token: response.data.accessToken,
              id: response.data.id,
              setCoins: setCoins
            });
            window.location.href = '/'
          }
        })
    } catch (error) {
      setMessageSnack("O token informado não corresponde com o token enviado em seu e-mail.")
      setOpenSnack(true)
      setTypeSnack('error')

      setTimeout(() => {
        setOpenSnack(false)
      }, 3000);
    }

    setLoading(false)
  }

  const handleCadastro = () => {
    setLoading(true)

    try {
      api.post("/users", {
        name: {
          firstName: name,
          lastName: lastName
        },
        email: email
      })
        .then(function (response) {
          if (response.status === 200) {
            setMessageSnack("Cadastro realizado com sucesso.")
            setTypeSnack('success')
            setOpenSnack(true)

            setTimeout(() => {
              setOpenSnack(false)
              setCadStep(false)
            }, 3000);
          }
        })
    } catch (error) {
      setMessageSnack("E-mail já cadastrado!")
      setOpenSnack(true)
      setTypeSnack('error')

      setTimeout(() => {
        setOpenSnack(false)
      }, 3000);
    }

    setLoading(false)
  }

  const handleCancel = () => {
    // setIsTokenLogin(false);
    // setIsPasswordLogin(true);
    setNextStep(false);
    setIsMenuVisible(true);
  }

  const handleNextStep = () => {
    setLoading(true)
    api
      .post("/sendEmailWithCode", {
        email: email
      })
      .then((response) => {
        setNextStep(!nextStep)
        setIsMenuVisible(false)

        setMessageSnack("O token foi enviado para o seu e-mail!")
        setTypeSnack('success')
        setOpenSnack(true)

        setTimeout(() => {
          setOpenSnack(false)
        }, 2000);

      })
      .catch((err) => {
        setMessageSnack("Usuário não cadastrado!")
        setTypeSnack('error')
        setOpenSnack(true)

        setTimeout(() => {
          setOpenSnack(false)
        }, 2000);
      });

      setLoading(false)
  }


  return (
    <div>
      <Head>
        <title>Somos Todos Heróis - Login</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <div className='bg-gray-200'>
        <div className="flex justify-center h-screen">
          <div className="flex items-center justify-center w-full max-w-3xl px-6 mx-auto">

            <div className="p-16 border rounded-lg shadow-2xl bg-white">
              <div className='pb-2 flex items-center justify-center '>
                <img src={Logo.src} width='300' />
              </div>
              <label className="pb-8 block text-md text-gray-700">Faça seu login e torne-se já o herói de alguém.</label>

              {!cadStep && isMenuVisible &&
                <>
                  <Grid xs={12} sm={6} className="mb-2">
                    <TextField
                      fullWidth
                      label='Email'
                      placeholder='tony-stark@email.com'
                      color='error'
                      size='small'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid xs={12} sm={6} className="mt-2">
                    <LoadingButton
                      onClick={handleNextStep}
                      loading={loading}
                      variant='contained'
                      className="w-full mt-4 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
                      Continuar
                    </LoadingButton>
                  </Grid>

                  <div className='pt-4'>
                    Não tem uma conta? <a className='text-blue-700 cursor-pointer' onClick={() => setCadStep(true)}>Cadastre-se</a>
                  </div>
                </>
              }

              {nextStep &&
                <>
                  <Grid xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type='text'
                      label='Token'
                      placeholder='Digite o token'
                      color='error'
                      size='small'
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </Grid>

                  <div className="mt-2">
                    <LoadingButton
                      onClick={handleLogin}
                      loading={loading}
                      variant='contained'
                      className="w-full mt-4 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
                      Entrar
                    </LoadingButton>
                  </div>

                  <div className="text-center mt-2">
                    <button onClick={handleCancel} className="text-md text-gray-400">Voltar</button>
                  </div>
                </>
              }

              {cadStep &&
                <>
                  <Grid xs={12} sm={6} className="flex gap-x-4">
                    <TextField
                      type='text'
                      label='Nome'
                      placeholder='Tony'
                      color='error'
                      size='small'
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      type='text'
                      label='Sobrenome'
                      placeholder='Stark'
                      color='error'
                      size='small'
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} className="mt-4">
                    <TextField
                      fullWidth
                      type='email'
                      label='Email'
                      placeholder='tony-stark@email.com'
                      color='error'
                      size='small'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid xs={6} sm={6} className="flex gap-x-4 mt-2">
                    <Button
                      onClick={() => setCadStep(false)}
                      loading={loading}
                      variant='contained'
                      className="w-full mt-4 text-white text-xl md:text-2xl transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-gray-500">
                      Voltar
                    </Button>

                    <LoadingButton
                      onClick={handleCadastro}
                      loading={loading}
                      variant='contained'
                      className="w-full mt-4 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700">
                      Cadastrar
                    </LoadingButton>
                  </Grid>
                </>
              }
            </div>
          </div>
        </div>
      </div>
      {openSnack && messageSnack && <Snackbar message={messageSnack} open={openSnack} setOpenSnack={setOpenSnack} type={typeSnack} />}
    </div>
  )
}

export default Login