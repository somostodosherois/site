import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'

import api from '../../pages/api/config'
import Logo from '../../public/logo.svg'
import Snackbar from '../../components/Snackbar/Snackbar';

// MUI
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton';

function setSession(data) {
  sessionStorage.setItem('token', JSON.stringify(data.token));
  sessionStorage.setItem('email', JSON.stringify(data.email));
}


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
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)
  const [messageSnack, setMessageSnack] = useState('')
  const [typeSnack, setTypeSnack] = useState('success')

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

    try {
      api.post("/signinWithCode", {
        email: email,
        code: code
      })
      .then(function (response) {
        if(response.status === 200){
          setSession({
            email: email,
            token: response.data.accessToken
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

    // api
    //   .post("/signinWithCode", {
    //     email: email,
    //     code: code
    //   })
    //   .then(function (response) {
    //     if(response.status === 200){
    //       setToken(response.data.accessToken);
    //       window.location.href = '/'
    //     }
    //   })
    //   .catch(function (error) {
    //     if (error) {
    //       setMessageSnack("O token informado não corresponde com o token enviado em seu e-mail.")
    //       setOpenSnack(true)
    //       setTypeSnack('error')
  
    //       setTimeout(() => {
    //         setOpenSnack(false)
    //       }, 3000);
    //     }
    //   });

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
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        setMessageSnack("Usuário não cadastrado!")
        setTypeSnack('error')
        setOpenSnack(true)


        setTimeout(() => {
          setOpenSnack(false)
        }, 2000);
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
      {openSnack && messageSnack && <Snackbar message={messageSnack} open={openSnack} setOpenSnack={setOpenSnack} type={typeSnack} />}
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login