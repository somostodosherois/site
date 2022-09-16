import React from 'react'
import ReactDOM from 'react-dom';

import { BsCurrencyDollar, BsCalendarDate } from "react-icons/bs";

const CardHero = ({ hero }) => {

  function createContent() {
    return {__html: hero.content};
  }

  // ReactDOM.render(<Pai />, document.querySelector('#content-hero'))

  // const diffDates = () => {

  // }

  // const convertTotHtml = () => {

  // }

  return (
    <div className='bg-gray-100 pb-8'>
      <div className='max-w-7xl mx-auto px-4 pt-12 sm:px-6 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-6 pt-20'>
        <div className='p-6 w-2xl mt-4 md:mt-12'>
          <center>
            <img src={hero.image}></img>
            <h1 className='mt-4 text-2xl leading-8 font-extrabold text-center tracking-tight text-red-600 sm:text-2xl uppercase'>{hero.name}</h1>

            <h3 className='m-2 text-xl leading-6 font-medium text-gray-800'>Meta: {hero.meta}</h3>

            <div className='flex mt-4 justify-content'>
              <BsCurrencyDollar className="h-5 w-5 mt-1 text-green-600 mr-2" aria-hidden="true" />
              <p className="max-w-6xl text-xl text-gray-600">R$ {hero.value} arrecadados</p>
            </div>

            <div className='flex mt-4 justify-content'>
              <BsCalendarDate className="h-5 w-5 mt-1 text-blue-400 mr-2" aria-hidden="true" />
              <p className="max-w-6xl text-xl text-gray-600">5 dias restantes</p>
            </div>
          </center>

          <div className="w-full bg-gray-200 rounded-full mt-6">
            <div className="bg-green-500 text-sm font-medium text-white text-center p-2 leading-none rounded-full" style={{ width: hero.percentage + '%' }}> {hero.percentage}% da meta atingida</div>
          </div>

        </div>
        <div id="content-hero" className='col-span-2'>
          <div dangerouslySetInnerHTML={createContent()} />
        </div>
      </div>
    </div>
  )
}

export default CardHero