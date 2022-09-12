import React from 'react';

import getIcon from '../../hooks/getIcon';

const features = ['127', 'R$ 350.456,60', '6078', '100']

const OngNumbers = ({ slice }) => {
  if (!slice) return null

  const title = slice?.primary?.title || ''
  const items = slice?.items || []

  return (
    <div className="bg-gray-100 py-8">
      <div className="lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:py-8 lg:px-6 lg:items-center lg:justify-between lg:gap-x-12">
        <h2 className="text-3xl lg:text-6xl font-bold text-gray-700">{title}</h2>
        <div className="mt-16 lg:space-y-0 lg:grid lg:grid-cols-2 gap-x-8 gap-y-8">
          {items && items.map(({ icon, description }, index) => (
            <div className='bg-white py-8 mb-8 lg:mb-0 items-center content-center text-center border border-transparent rounded-md min-h-full'>
              <div className='flex' style={{ justifyContent: 'center' }}>
                {getIcon(icon, "h-8 w-8 lg:h-10 lg:w-10", "#DC2626")}
              </div>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block text-gray-700">{features[index]}</span>
              </h2>
              <h5 className="mt-2 px-2 text-xl lg:text-2xl tracking-tight text-gray-900 sm:text-2xl">
                <span className="block text-gray-500">{description}</span>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OngNumbers