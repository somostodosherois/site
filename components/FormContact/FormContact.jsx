import React from 'react'
import { BsWhatsapp, BsFolder, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const FormContact = () => (
  <div className="bg-red-600 py-8 px-4 pt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center pt-12">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h2 className="text-3xl lg:text-6xl font-bold text-white">Ficou com alguma dúvida?</h2>
            <p className="mt-1 text-sm text-white pb-8 sm:pb-16">Fale com um dos responsáveis pela ONG para que possamos esclarecer tudo para você.</p>

            <div className='grid gap-y-8'>
              <a href="#!" className="text-white text-lg">
                <span className="flex gap-2">
                  <BsWhatsapp className='mt-1' /> WhatsApp
                </span>
                <span className="lg:grid font-bold hover:text-gray-600" style={{ alignItems: 'center' }}>
                  (32) 9 9954-5487
                </span>
              </a>

              <a href="#!" className="text-white text-lg">
                <span className="flex gap-2">
                  <BsFolder className='mt-1' /> E-mail
                </span>
                <span className="mb-4 font-bold hover:text-gray-600" style={{ alignItems: 'center' }}>
                  contato@sth.org.br
                </span>
              </a>
            </div>

          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="company-website" className="block text-sm font-2xl text-gray-700">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email-address" className="block text-sm font-2xl text-gray-700">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email-address" className="block text-sm font-2xl text-gray-700">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md p-2"
                  />
                </div>

                <div>
                  <label htmlFor="about" className="block text-sm font-2xl text-gray-700">
                    Descrição
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="shadow-sm focus:ring-red-500 focus:border-red-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default FormContact