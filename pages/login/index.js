import React, { useState } from 'react';
import Head from 'next/head'

import Logo from '../../public/logo.svg'

import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function Login() {

  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isPasswordLogin, setIsPasswordLogin] = useState(true);
  const [isTokenLogin, setIsTokenLogin] = useState(false);
  const [nextStep, setNextStep] = useState(false)

  const handlePasswordLogin = () => {
    setIsPasswordLogin(true);
    setIsTokenLogin(false)
  }

  const handleTokenLogin = () => {
    setIsTokenLogin(true);
    setIsPasswordLogin(false)
  }

  const handleCancel = () => {
    setIsTokenLogin(false);
    setIsPasswordLogin(true);
    setNextStep(false);
    setIsMenuVisible(true);
  }

  const handleNextStep = () => {
    setNextStep(!nextStep)
    setIsMenuVisible(false)
  }

  const FormPassword = () => (
    <div>
      <form>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='password'
            label='Senha'
            placeholder='*********'
            color='error'
            className='mb-2'
          />
        </Grid>
        <a href="#" className="text-md text-gray-400 focus:text-red-600 hover:text-red-600">Esqueceu sua senha?</a>

        <div className="mt-6">
          <button
            className="w-full mt-4 px-4 py-2 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
            Entrar
          </button>
        </div>
      </form>

      <div className="text-center mt-2">
        <button onClick={handleCancel} className="text-md text-gray-400">Voltar</button>
      </div>
    </div>
  )

  const FormToken = () => (
    <div>
      <form>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='text'
            label='Token'
            placeholder='Digite o token'
            color='error'
            className='mb-2'
          />
        </Grid>

        <div className="mt-6">
          <button
            className="w-full mt-4 px-4 py-2 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
            Entrar
          </button>
        </div>
      </form>

      <div className="text-center mt-2">
        <button onClick={handleCancel} className="text-md text-gray-400">Voltar</button>
      </div>
    </div>
  )

  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <div className='bg-gray-100'>
        <div className="flex justify-center h-screen">
          <div className="flex items-center justify-center w-full max-w-3xl px-6 mx-auto">

            <div className="items-center justify-center lg:ml-20">
              <div className='pb-2 flex items-center justify-center '>
                <img src={Logo.src} width='300' />
              </div>
              <label htmlFor="email" className="pb-8 block text-md text-gray-700">Faça seu login e torne-se já um herói de alguém.</label>

              {isMenuVisible &&
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type='email'
                      label='Email'
                      placeholder='tony-stark@email.com'
                      color='error'
                    />
                  </Grid>

                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      className='mt-4'
                      defaultValue="password"
                    >
                      <FormControlLabel value="password" control={<Radio color='error' onChange={handlePasswordLogin} />} label="Entrar com senha" />
                      <FormControlLabel value="token" control={<Radio color='error' onChange={handleTokenLogin} />} label="Entrar com token" />
                    </RadioGroup>
                  </FormControl>

                  <Grid item xs={12} sm={6}>
                    <button
                      onClick={handleNextStep}
                      className="w-full mt-4 px-4 py-2 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
                      Continuar
                    </button>
                    <p className="mt-4 text-md text-center text-gray-400">
                      <a href="#" className="text-red-600 focus:outline-none focus:underline hover:underline">Criar uma nova conta</a>
                    </p>
                  </Grid>
                </>
              }

              {nextStep && isPasswordLogin &&
                <FormPassword />
              }

              {nextStep && isTokenLogin &&
                <FormToken />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}