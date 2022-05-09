import React from 'react';

import { CurrencyDollarIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { BsCurrencyDollar, BsBookmarkHeart, BsPeople, BsSuitHeart } from "react-icons/bs";

const callouts = [
  {
    name: 'Mega Otavio',
    description: 'Olá! Meu nome é Luis Otavio, mas pode me chamar de Mega Otavio! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná, e possuo ...',
    total: 'R$ 3.495,00 arrecadados',
    imageSrc: 'https://sth.org.br/images/2022/03/Design-sem-nome-5.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Super Maria Alyce',
    description: 'Querido Papai Noel, me chamo Maria Alyce, mas pode me chamar de Super Maria Alyce! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná.',
    total: 'R$ 1.591,50 arrecadados',
    imageSrc: 'https://sth.org.br/images/2021/11/WhatsAppImage2021-10-27at21.34.42-300x300.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Heitor',
    description: 'Olá! Me chamo Heitor, mas pode me chamar de Mega Heitor! Tenho 2 aninhos, moro em São João de Meriti no estado do Rio de Janeiro, e...',
    total: 'R$ 1.591,50 arrecadados',
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Otavio',
    description: 'Olá! Meu nome é Luis Otavio, mas pode me chamar de Mega Otavio! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná, e possuo ...',
    total: 'R$ 3.495,00 arrecadados',
    imageSrc: 'https://sth.org.br/images/2022/03/Design-sem-nome-5.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Super Maria Alyce',
    description: 'Querido Papai Noel, me chamo Maria Alyce, mas pode me chamar de Super Maria Alyce! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná.',
    total: 'R$ 1.591,50 arrecadados',
    imageSrc: 'https://sth.org.br/images/2021/11/WhatsAppImage2021-10-27at21.34.42-300x300.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Heitor',
    description: 'Olá! Me chamo Heitor, mas pode me chamar de Mega Heitor! Tenho 2 aninhos, moro em São João de Meriti no estado do Rio de Janeiro, e...',
    total: 'R$ 1.994,00 arrecadados',
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

const Missions = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-16 lg:max-w-none">
          <h2 className="text-4xl text-gray-700">Missões em andamento</h2>
          <span className="w-32 my-4 h-2 bg-red-500 border rounded-xl block"></span>
        </div>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative bg-white border border-transparent rounded-xl">
              <div className="relative w-full h-110 bg-white overflow-hidden -group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              
              <div className='p-4'>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500 h-24">{callout.description}</p>

                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                  <div class="bg-green-500 text-3xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}> 45%</div>
                </div>

                <div className='flex mt-4 justify-content'>
                  <BsCurrencyDollar className="h-6 w-6 text-green-600" aria-hidden="true" />
                  <p className="px-1 text-gray-500">R$ 1000,00 arrecadados</p> 
                </div>

                <div className='flex mt-4 justify-content'>
                  <CalendarIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  <p className="px-2 text-gray-500">30 dias restantes</p> 
                </div>

                <div className="rounded-md mt-6 shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center border border-red-700 text-base rounded-md text-red-600 hover:bg-red-700 md:py-1 md:text-lg md:px-4"
                  >
                    Ajudar este herói
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-md mx-auto items-center content-center text-center mt-16 w-64">
          <a
            href="#"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
          >
            Ver todas as missões
          </a>
        </div>
      </div>
    </div>
  )
}

export default Missions