import React from 'react';
import TitleSession from '../../components/TitleSession/TitleSession';

import getIcon from '../../hooks/getIcon';

const features = ['135', '15', '+ R$ 300.000,00', '50']

const OngNumbers = ({ slice }) => {
  if (!slice) return null

  const { title, image } = slice?.primary || ''

  const items = slice?.items || []

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:py-8 lg:px-6 lg:items-center lg:justify-between lg:gap-x-12">
        <TitleSession title={title} />
        <div className="lg:space-y-0 lg:grid lg:grid-cols-2 gap-x-12 gap-y-8">

          <div>
            <img src={image.url} height={500} />
          </div>

          <div className='max-w-3xl'>
            {items && items.map(({ icon, description }, index) => (
              <div className='mb-8' key={index}>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-red-700 sm:text-4xl">
                  {features[index]}
                </h2>
                <h5 className="mt-2 px-2 text-xl lg:text-xl tracking-tight text-gray-900 sm:text-2xl">
                  {description}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OngNumbers