import React from 'react';
import { BsCashCoin, BsCalendarDate } from "react-icons/bs";
import TitleSession from '../../components/TitleSession/TitleSession';
import diffDates from '../../hooks/diffDates';
import formatCurrent from '../../hooks/formatCurrent';

const Cards = ({ items }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
    {items.map(({ id, name, image, slug, status, metadesc, meta, arrecadado, prazo }) => (
      <a href={'missao/' + slug}>
        <div key={id} className="group relative bg-white border border-transparent rounded-xl h-full">
          <div className="hidden  sm:block bg-white -group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-center object-cover"
              style={{ height: '35vh' }}
            />
          </div>

          <div className='p-4'>
            <h3 className="mt-4 text-base font-semibold text-gray-900">{name}</h3>
            <p className="mt-2 text-sm text-gray-500 h-8 description-card-heros">Meta: {metadesc}</p>

            {status === 'open' &&
              <div className="w-full bg-gray-200 rounded-full mt-4">
                <div className="bg-green-500 text-3xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: parseInt((arrecadado * 100) / meta) + '%' }}> { parseInt((arrecadado * 100) / meta)}%</div>
              </div>
            }

            <div className='flex mt-4 justify-content'>
              <BsCashCoin className="h-6 w-6 text-green-600 mt-1" aria-hidden="true" />
              <p className="px-2 text-gray-500 text-base"><b>{formatCurrent(arrecadado)}</b> arrecadados</p>
            </div>

            {status === 'open' &&
              <div className='flex mt-4 justify-content'>
                <BsCalendarDate className="h-6 w-6 text-blue-400 mt-1" aria-hidden="true" />
                <p className="px-2 text-gray-500">{diffDates(prazo) - 1} {(diffDates(prazo) - 1)  > 1 ? 'dias restantes' : 'dia restante'}</p>
              </div>
            }


            {status === 'open' &&
              <div className="rounded-md mt-6 shadow">
                <a
                  href={'missao/' + slug}
                  className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                >
                  Ajudar este herói
                </a>
              </div>
            }
          </div>
        </div>
      </a>
    ))}
  </div>
)

const ContainerMissions = ({ items, title }) => (
  <div className="bg-gray-100 pt-4 pb-12 px-4 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
      <TitleSession title={title} />
      <Cards items={items} />

      {/* {items === isFinished &&
        <div className="rounded-md mx-auto items-center content-center text-center mt-16 w-64">
          <a
            href="#"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
          >
            Ver todas as missões
          </a>
        </div>
      } */}
    </div>
  </div>
)

const Missions = ({ slice, heros }) => {

  const variation = slice?.primary?.variation
  const title = slice?.primary?.title || 'Missões em Andamento'

  const inProgress = (heros.length && heros.filter(obj => obj.status === 'open')) || []
  const isFinished = (heros.length && heros.filter(obj => obj.status === 'finish')) || []

  return (
    <>
      <ContainerMissions items={inProgress} title={title} />
      {variation !== 'Home' && <ContainerMissions items={isFinished} title='Missões finalizadas' />}
    </>
  )
}

export default Missions