import React, { useState } from 'react';
import swal from 'sweetalert';
import Head from 'next/head'

import api from '../../pages/api/config'
import Logo from '../../public/logo.svg'

// MUI
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const FormToken = ({ setCode, handleLogin, handleCancel, loading }) => (
  <>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        type='text'
        label='Token'
        placeholder='Digite o token'
        color='error'
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
)

const FormEmail = ({ setEmail, handleNextStep, loading }) => (
  <>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        type='email'
        label='Email'
        placeholder='tony-stark@email.com'
        color='error'
        onChange={(e) => setEmail(e.target.value)}
      />
    </Grid>

    {/* <FormControl>
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
                </FormControl> */}

    <Grid item xs={12} sm={6} className="mt-2">
      <LoadingButton
        onClick={handleNextStep}
        loading={loading}
        variant='contained'
        className="w-full mt-4 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
        Continuar
      </LoadingButton>
    </Grid>
  </>
)

const Login = () => {

  const [email, setEmail] = useState('')
  const [codeResponse, setCodeResponse] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)


  const [isMenuVisible, setIsMenuVisible] = useState(true);
  // const [isPasswordLogin, setIsPasswordLogin] = useState(true);
  // const [isTokenLogin, setIsTokenLogin] = useState(true);
  const [nextStep, setNextStep] = useState(false)

  // const handlePasswordLogin = () => {
  //   setIsPasswordLogin(true);
  //   setIsTokenLogin(false)
  // }

  // const handleTokenLogin = () => {
  //   setIsTokenLogin(true);
  //   setIsPasswordLogin(false)
  // }

  const handleLogin = () => {
    setLoading(true)
    if (code === codeResponse) {
      api
        .post("/signinWithCode", {
          email: email,
          code: code
        })
        .then(() => {
          window.location.href = '/'
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    } else {
      swal({
        title: "Token inválido!",
        text: "O token informado não corresponde com o token enviado em seu e-mail.",
        icon: "error",
        button: false,
      })

      setTimeout(() => {
        swal.close()
      }, 2000);
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
        setCodeResponse(response.data.code)
        setNextStep(!nextStep)
        setIsMenuVisible(false)
        setLoading(false)
      })
      .catch((err) => {
        swal({
          title: "Usuário não cadastrado!",
          icon: "error",
          buttons: false
        })
      });
  }

  // const FormPassword = () => (
  //   <div>
  //     <form>
  //       <Grid item xs={12} sm={6}>
  //         <TextField
  //           fullWidth
  //           type='password'
  //           label='Senha'
  //           placeholder='*********'
  //           color='error'
  //           className='mb-2'
  //         />
  //       </Grid>
  //       <a href="#" className="text-md text-gray-400 focus:text-red-600 hover:text-red-600">Esqueceu sua senha?</a>

  //       <div className="mt-2">
  //         <button
  //           className="w-full mt-4 px-4 py-2 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
  //           Entrar
  //         </button>
  //       </div>
  //     </form>

  //     <div className="text-center mt-2">
  //       <button onClick={handleCancel} className="text-md text-gray-400">Voltar</button>
  //     </div>
  //   </div>
  // )

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

              {isMenuVisible &&
                <FormEmail setEmail={setEmail} handleNextStep={handleNextStep} loading={loading} />
              }

              {/* {nextStep && isPasswordLogin &&
                <FormPassword />
              } */}

              {nextStep &&
                <FormToken setCode={setCode} handleLogin={handleLogin} handleCancel={handleCancel} loading={loading} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login