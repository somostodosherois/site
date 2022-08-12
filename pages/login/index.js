import React, { useState } from 'react';
import Head from 'next/head'

import Logo from '../../public/logo.svg'
import Mascote from '../../public/mascote.png'



export default function Login() {

  const [IsMenuVisible, setIsMenuVisible] = useState(true);
  const [isPasswordLogin, setisPasswordLogin] = useState(false);
  const [isTokenLogin, setisTokenLogin] = useState(false);
  const [isTokenInput, setisTokenInput] = useState(false);
  
  const handlePasswordLogin = () => {
    setisPasswordLogin(true);
    setIsMenuVisible(false);
  }

  const handleTokenLogin = () => {
    setIsMenuVisible(false);
    setisTokenLogin(true);
  }

  const handleSendToken = () => {
    setisTokenLogin(false);
    setisTokenInput(true);
  }

  const handleCancel = () => {
    setisTokenLogin(false);
    setisPasswordLogin(false);
    setisTokenInput(false);
    setIsMenuVisible(true);
  } 

  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
        <div className="bg-white">
          <div className="flex justify-center h-screen">
            <div className="flex items-center w-full max-w-3xl px-6 mx-auto">
              <div className="flex-1 lg:ml-20">
                <div>
                  <img src={Logo.src} width='700' />
                </div>

                {IsMenuVisible &&
                  <div className="flex flex-col mt-5">
                    <button onClick={handlePasswordLogin} className="text-gray-400 focus:text-red-600 hover:text-red-600 text-2xl">Entrar com senha</button>
                    <button onClick={handleTokenLogin} className="text-gray-400 focus:text-red-600 hover:text-red-600 text-2xl">Entrar com token</button>
                  </div>
                }

                {isPasswordLogin &&
                <div className="mt-8">
                  <form>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-xl md:text-2xl text-gray-600 dark:text-gray-200">Email</label>
                      <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-6 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-xl md:text-2xl text-gray-600 dark:text-gray-200">Senha</label>
                        <a href="#" className="text-lg md:text-xl text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Esqueceu sua senha?</a>
                      </div>

                      <input type="password" name="password" id="password" placeholder="********" className="block w-full px-6 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="mt-6">
                      <button
                        className="w-full px-6 py-4 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
                        Entrar
                      </button>
                    </div>
                  </form>
                  <p className="mt-6 text-xl md:text-2xl text-center text-gray-400"><a href="#" className="text-red-600 focus:outline-none focus:underline hover:underline">Criar uma nova conta</a>.</p>
                  <div className="text-center mt-5">
                    <button onClick={handleCancel} className="mt-6 text-xl text-gray-400">Voltar</button>    
                  </div>
                </div>
                }
                {isTokenLogin && 
                  <div className="mt-8">

                    <form>

                      <div>
                        <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-6 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>
                      
                      <div className="mt-6">
                        <button
                          onClick={handleSendToken}
                          className="w-full px-6 py-4 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
                          Enviar Token
                        </button>
                      </div>

                    </form>
                    <div className="text-center mt-5">
                      <button onClick={handleCancel} className="mt-6 text-xl text-gray-400">Voltar</button>    
                    </div>
                  </div>
                }
                {isTokenInput &&
                  <div className="mt-8">
                    <form>
                      <input type="text" name="token" placeholder="Token" className="block w-full px-6 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                      <button className="w-full mt-4 px-6 py-4 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
                        Login
                      </button>
                    </form>
                    <div className="text-center mt-5">
                      <button onClick={handleCancel} className="mt-6 text-xl text-gray-400">Voltar</button>    
                    </div>
                  </div>
                }
              </div>
            </div>

            <div className="hidden bg-white lg:block lg:w-2/3" style={{ background: 'linear-gradient(to right, transparent 0%, transparent 40%, #C80000 40%, #C80000 100%)' }}>
              <div className="flex justify-center h-full">
                {/* <img src={Mascote.src}></img> */}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}