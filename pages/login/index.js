import React from 'react';
import Head from 'next/head'

import Logo from '../../public/logo.svg'
import Mascote from '../../public/mascote.png'


export default function Login() {
  return (
    <div>
      <Head>
        <title>Somos Todos Heróis</title>
        <meta name="description" content="Somos Todos Heróis" />
        <link rel="icon" href="https://sth.org.br/wp-content/themes/sth/images/favicon.png" />
      </Head>
      <div class="bg-white">
        <div class="flex justify-center h-screen">
          <div class="flex items-center w-full max-w-3xl px-6 mx-auto">
            <div class="flex-1 lg:ml-20">
              <div>
                <img src={Logo.src} width='700' />
              </div>

              <div class="mt-8">
                <form>
                  <div>
                    <label for="email" class="block mb-2 text-xl md:text-2xl text-gray-600">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-6 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label for="password" class="text-xl md:text-2xl text-gray-600">Senha</label>
                      <a href="#" class="text-lg md:text-xl text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Esqueceu sua senha?</a>
                    </div>

                    <input type="password" name="password" id="password" placeholder="********" class="block w-full px-6 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div class="mt-6">
                    <button
                      class="w-full px-6 py-4 tracking-wide text-white text-xl md:text-2xl transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50">
                      Entrar
                    </button>
                  </div>

                </form>

                <p class="mt-6 text-xl md:text-2xl text-center text-gray-400"><a href="#" class="text-red-600 focus:outline-none focus:underline hover:underline">Criar uma nova conta</a>.</p>
              </div>
            </div>
          </div>

          <div class="hidden bg-white lg:block lg:w-2/3" style={{ background: 'linear-gradient(to right, transparent 0%, transparent 40%, #C80000 40%, #C80000 100%)' }}>
            <div class="flex justify-center h-full">
              {/* <img src={Mascote.src}></img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}