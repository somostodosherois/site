import React from 'react'
import ReactDOM from 'react-dom';

import { BsCurrencyDollar, BsCalendarDate } from "react-icons/bs";
import formatCurrent from '../../hooks/formatCurrent';
import diffDates from '../../hooks/diffDates';
import ImageCoin from "../../public/moeda.gif"

const CardHero = ({ hero }) => {

  function convertTotHtml() {
    return { __html: hero.post_content };
  }

  // ReactDOM.render(<Pai />, document.querySelector('#content-hero'))

  const calcPercentage = () => {
    return parseInt((hero.arrecadado * 100) / hero.meta)
  }

  return (
    <div className='pb-8'>

      <div className='max-w-7xl mx-auto px-4 pt-12 sm:px-6 pt-20'>


        <div className='space-y-6 lg:grid lg:grid-cols-3 lg:gap-x-6'>
          <div className='p-6 w-2xl md:mt-12'>
            <center>
              <img src={hero.image} style={{ height: '250px' }} className='rounded-full shadow-xl'></img>


              {/* <div className='flex mt-4 justify-content'>
                <BsCurrencyDollar className="h-5 w-5 mt-1 text-green-600 mr-2" aria-hidden="true" />
                <p className="max-w-4xl text-xl text-gray-600">{formatCurrent(hero.arrecadado)} arrecadados de {formatCurrent(hero.meta)}</p>
              </div>

              <div className='flex mt-4 justify-content'>
                <BsCurrencyDollar className="h-5 w-5 mt-1 text-green-600 mr-2" aria-hidden="true" />
                <p className="max-w-4xl text-xl text-gray-600">{formatCurrent(hero.arrecadado)} arrecadados de {formatCurrent(hero.meta)}</p>
              </div>

              <div className='flex mt-4 justify-content'>
                <BsCalendarDate className="h-5 w-5 mt-1 text-blue-400 mr-2" aria-hidden="true" />
                <p className="max-w-6xl text-xl text-gray-600">{diffDates()} dias restantes</p>
              </div> */}
            </center>



          </div>
          <div className='col-span-2'>
            <h1 className='mt-4 text-2xl leading-8 font-extrabold text-left tracking-tight text-red-600 sm:text-2xl uppercase'>{hero.name}</h1>
            <h3 className='text-lg leading-6 font-medium text-gray-800 pt-2 pb-2'>Meta: <b>{hero.metadesc}</b></h3>

            <div className='lg:grid lg:grid-cols-3 lg:gap-x-6'>
              <div className='flex pt-4'>
                <img src={ImageCoin.src} className="moeda-gif mr-2" />
                <p className="text-lg text-gray-800 mt-1"><b>{formatCurrent(hero.meta)}</b> meta total</p>
              </div>
              <div className='flex pt-4'>
                <img src={ImageCoin.src} className="moeda-gif mr-2" />
                <p className="text-lg text-gray-800 mt-1"><b>{formatCurrent(hero.arrecadado)}</b> arrecadados</p>
              </div>
              {/* <div className='pt-4 flex'>
                <BsCalendarDate className="h-5 w-5 mt-1 text-blue-400 mr-2" aria-hidden="true" />
                <p className="text-lg text-gray-800"><b>{diffDates(hero.prazo) - 1}</b> dias restantes</p>
              </div> */}
            </div>

            <div id="content-hero" className='pt-8'>
              <div className='text-base' dangerouslySetInnerHTML={convertTotHtml()} />
            </div>

            <div className='text-center text-sm'>
              Porcentagem atingida da meta
              <div className="bg-gray-200 rounded-full mt-2">
                <div className="bg-green-500 text-sm text-white text-center p-1 leading-none rounded-full" style={{ width: calcPercentage() + '%' }}> {calcPercentage()}%</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardHero