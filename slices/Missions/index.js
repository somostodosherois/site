import React from 'react';
import { BsCurrencyDollar, BsCalendarDate } from "react-icons/bs";
import TitleSession from '../../components/TitleSession/TitleSession';


const callouts = [
  {
    name: 'Mega Otavio',
    description: 'Olá! Meu nome é Luis Otavio, mas pode me chamar de Mega Otavio! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná, e possuo ...',
    total: 'R$ 3.495,00 arrecadados',
    totalDays: '30 dias restantes',
    imageSrc: 'https://sth.org.br/images/2022/03/Design-sem-nome-5.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '1234',
  },
  {
    name: 'Super Maria Alyce',
    description: 'Querido Papai Noel, me chamo Maria Alyce, mas pode me chamar de Super Maria Alyce! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná.',
    total: 'R$ 1.591,50 arrecadados',
    totalDays: '30 dias restantes',
    imageSrc: 'https://sth.org.br/images/2021/11/WhatsAppImage2021-10-27at21.34.42-300x300.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '2132',
  },
  {
    name: 'Mega Heitor',
    description: 'Olá! Me chamo Heitor, mas pode me chamar de Mega Heitor! Tenho 2 aninhos, moro em São João de Meriti no estado do Rio de Janeiro, e...',
    total: 'R$ 1.591,50 arrecadados',
    totalDays: '30 dias restantes',
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '4343',
  },
  {
    name: 'Mega Otavio',
    description: 'Olá! Meu nome é Luis Otavio, mas pode me chamar de Mega Otavio! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná, e possuo ...',
    total: 'R$ 3.495,00 arrecadados',
    totalDays: '30 dias restantes',
    imageSrc: 'https://sth.org.br/images/2022/03/Design-sem-nome-5.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '434332',
  },
  {
    name: 'Super Maria Alyce',
    description: 'Querido Papai Noel, me chamo Maria Alyce, mas pode me chamar de Super Maria Alyce! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná.',
    total: 'R$ 1.591,50 arrecadados',
    totalDays: '30 dias restantes',
    imageSrc: 'https://sth.org.br/images/2021/11/WhatsAppImage2021-10-27at21.34.42-300x300.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Heitor',
    description: 'Olá! Me chamo Heitor, mas pode me chamar de Mega Heitor! Tenho 2 aninhos, moro em São João de Meriti no estado do Rio de Janeiro, e...',
    total: 'R$ 1.994,00 arrecadados',
    totalDays: '30 dias restantes',
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Otavio',
    description: 'Olá! Meu nome é Luis Otavio, mas pode me chamar de Mega Otavio! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná, e possuo ...',
    total: 'R$ 3.495,00 arrecadados',
    totalDays: '30 dias restantes',
    imageSrc: 'https://sth.org.br/images/2022/03/Design-sem-nome-5.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Super Maria Alyce',
    description: 'Querido Papai Noel, me chamo Maria Alyce, mas pode me chamar de Super Maria Alyce! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná.',
    total: 'R$ 1.591,50 arrecadados',
    totalDays: 0,
    imageSrc: 'https://sth.org.br/images/2021/11/WhatsAppImage2021-10-27at21.34.42-300x300.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Heitor',
    description: 'Olá! Me chamo Heitor, mas pode me chamar de Mega Heitor! Tenho 2 aninhos, moro em São João de Meriti no estado do Rio de Janeiro, e...',
    total: 'R$ 1.591,50 arrecadados',
    totalDays: 0,
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Otavio',
    description: 'Olá! Meu nome é Luis Otavio, mas pode me chamar de Mega Otavio! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná, e possuo ...',
    total: 'R$ 3.495,00 arrecadados',
    totalDays: 0,
    imageSrc: 'https://sth.org.br/images/2022/03/Design-sem-nome-5.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Super Maria Alyce',
    description: 'Querido Papai Noel, me chamo Maria Alyce, mas pode me chamar de Super Maria Alyce! Tenho 6 anos, moro em Francisco Beltrão no estado do Paraná.',
    total: 'R$ 1.591,50 arrecadados',
    totalDays: 0,
    imageSrc: 'https://sth.org.br/images/2021/11/WhatsAppImage2021-10-27at21.34.42-300x300.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Heitor',
    description: 'Olá! Me chamo Heitor, mas pode me chamar de Mega Heitor! Tenho 2 aninhos, moro em São João de Meriti no estado do Rio de Janeiro, e...',
    total: 'R$ 1.994,00 arrecadados',
    totalDays: 0,
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Heitor',
    description: 'Olá! Me chamo Heitor, mas pode me chamar de Mega Heitor! Tenho 2 aninhos, moro em São João de Meriti no estado do Rio de Janeiro, e...',
    total: 'R$ 1.994,00 arrecadados',
    totalDays: 0,
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Heitor',
    description: 'Olá! Me chamo Heitor, mas pode me chamar de Mega Heitor! Tenho 2 aninhos, moro em São João de Meriti no estado do Rio de Janeiro, e...',
    total: 'R$ 1.994,00 arrecadados',
    totalDays: 0,
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Heitor',
    description: 'Olá! Me chamo Heitor, mas pode me chamar de Mega Heitor! Tenho 2 aninhos, moro em São João de Meriti no estado do Rio de Janeiro, e...',
    total: 'R$ 1.994,00 arrecadados',
    totalDays: 0,
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

const inProgress = (callouts.length && callouts.filter(obj => obj.totalDays !== 0)) || []

const Cards = ({ items }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
    {items.map(({ name, imageAlt, imageSrc, href, description, total, totalDays }) => (
      <div key={name} className="group relative bg-white border border-transparent rounded-xl">
        <div className="hidden sm:block bg-white -group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 h-50 lg:aspect-w-1 lg:aspect-h-1">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className='p-4'>
          <h3 className="mt-4 text-base font-semibold text-gray-900">
            <a href={'missoes/' + href}>
              {name}
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-500 h-24">{description}</p>

          {totalDays !== 0 &&
            <div className="w-full bg-gray-200 rounded-full mt-4">
              <div className="bg-green-500 text-3xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}> 45%</div>
            </div>
          }


          <div className='flex mt-4 justify-content'>
            <BsCurrencyDollar className="h-6 w-6 text-green-600" aria-hidden="true" />
            <p className="px-1 text-gray-500">{total}</p>
          </div>

          {totalDays !== 0 &&
            <div className='flex mt-4 justify-content'>
              <BsCalendarDate className="h-6 w-6 text-blue-400" aria-hidden="true" />
              <p className="px-2 text-gray-500">{totalDays}</p>
            </div>
          }


          {totalDays !== 0 &&
            <div className="rounded-md mt-6 shadow">
              <a
                href="#"
                className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
              >
                Ajudar este herói
              </a>
            </div>
          }

          {totalDays !== 0 &&
            <div className="rounded-md mt-4 shadow">
              <a
                href="#"
                className="flex items-center justify-center bg-red-100 text-lg uppercase rounded-md text-red-500 py-1 px-4"
              >
                Doar por Pix rápido
              </a>
            </div>
          }
        </div>
      </div>
    ))}
  </div>
)

const ContainerMissions = ({ items, title }) => (
  <div className="bg-gray-100 pt-4 pb-12 px-4 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
      <TitleSession title={title} />
      <Cards items={items} />
    </div>
  </div>
)

const Missions = ({ slice }) => {

  const title = slice?.primary?.title

  if (!title) return null


  return <ContainerMissions items={inProgress} title={title} />
}

export default Missions