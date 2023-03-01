import React from 'react'

import getIcon from '../../hooks/getIcon';

const CardsIconsText = ({ items }) => (
  <div className="bg-red-600 pb-16 px-4">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 items-center content-center text-center">
      <div className="grid max-w-2xl mx-auto py-8 lg:py-12 lg:max-w-none">
        <h2 className="text-3xl lg:text-4xl text-white">Nossos valores</h2>
      </div>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-12 gap-y-12">
        {items.map(({icon, title, content }, index) => (
          <div key={index} className='bg-white py-8 my-8 xl:my-0 items-center content-center text-center border border-transparent rounded-md'>
            <div className='flex' style={{ justifyContent: 'center' }}>
              {getIcon(icon, "h-10 w-10", "#9b0624")}
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              <span className="block text-gray-700">{title}</span>
            </h2>
            <h5 className="mt-2 px-2 text-lg tracking-tight text-gray-900 sm:text-xl">
              <span className="block text-gray-500">{content}</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default CardsIconsText