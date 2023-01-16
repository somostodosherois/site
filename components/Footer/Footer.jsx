import React from 'react';

import Logo from '../../public/logo.svg'
import { BsWhatsapp, BsFolder, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-600 relative z-50 bottom-0 mt-12">
      <div className="mx-6 py-12 lg:px-32">
        <div className="gap-8 grid grid-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <div className="">
            <img src={Logo.src} width='300' />
            <p className='mt-6 text-lg lg:pr-32'>
              A ONG jovem e digital que transforma a vida de crianças que necessitam de tratamentos médicos ao redor do país.
            </p>

            <div className='flex mt-6 gap-4'>
              <a href='#' className='hover:text-red-600'><BsInstagram className='text-2xl' /></a>
              <a href='#' className='hover:text-red-600'><BsFacebook className='text-2xl' /></a>
              <a href='#' className='hover:text-red-600'><BsLinkedin className='text-2xl' /></a>
            </div>
          </div>

          <div className="">
            <h4 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-xl">
              A STH
            </h4>
            <p className="mb-4">
              <a href="#!" className="text-gray-600 text-lg">Quem somos</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600 text-lg">Nossa equipe</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600 text-lg">Portal Transparência</a>
            </p>
            <p>
              <a href="#!" className="text-gray-600 text-lg">Política de Privacidade</a>
            </p>
          </div>

          <div className="">
            <h4 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-xl">
              Como ajudar
            </h4>
            <p className="mb-4">
              <a href="#!" className="text-gray-600 text-lg">Nossas missões</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600 text-lg">Seja um guardião</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600 text-lg">Seja voluntário</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600 text-lg">Dúvidas Frequentes</a>
            </p>
          </div>

          <div className="">
            <h4 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-xl">
              Faça uma doação e se torne um herói
            </h4>
            <p className="mb-4 text-lg">
              Transformar a vida de milhares de crianças e adolescentes que precisam de tratamento médico ao redor do mundo, resgatando o herói que cada um de nós tem dentro de si.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <a
                href="#"
                className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Realizar doação
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center items-center justify-center md:text-left">
          <h4 className="uppercase font-semibold mb-4 flex text-xl">
            Contato
          </h4>
          <div className='lg:flex gap-x-12'>
            <a href="#!" className="text-gray-600 text-lg">
              <span className="flex gap-2">
                <BsWhatsapp className='mt-1' /> WhatsApp
                <span className="lg:grid font-bold hover:text-red-600" style={{ alignItems: 'center' }}>
                  (32) 9 9954-5487
                </span>
              </span>
            </a>

            <a href="#!" className="text-gray-600 text-lg">
              <span className="flex gap-2">
                <BsFolder className='mt-1' /> E-mail
                <span className="mb-4 font-bold hover:text-red-600" style={{ alignItems: 'center' }}>
                  contato@sth.org.br
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <span className="w-100 my-2 mx-72 h-1 border-b border-b-1 border-gray-500 block"></span>

      <div className="text-center p-6 bg-gray-300">
        <span className='mx-2'>© 2021 Copyright -</span>
        <a className="text-gray-600 font-semibold" href="#">CNPJ: 29.229.489/0001-50</a>
      </div>
    </footer>
  )
}

export default Footer