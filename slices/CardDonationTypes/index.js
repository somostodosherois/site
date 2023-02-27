import React from 'react';

const CardDonationTypes = ({ slice }) => {
  if (!slice) return null

  const titleCard = slice?.primary?.title[0]?.text || ''
  const items = slice?.items || []

  return (
    <div className="pt-16 pb-16 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 leading-8 font-extrabold tracking-tight text-red-600 text-xl sm:text-2xl lg:text-2xl uppercase">
            {titleCard}
          </p>
        </div>

        <div className="mt-16 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
          {items && items.map(({ title, description }, index) => (
            <div className='bg-white py-8 mb-8 lg:mb-0 items-center content-center border border-red-600 rounded-md min-h-full' key={index}>
              <div className="text-center">
                <p className="mt-2 leading-8 font-extrabold tracking-tight text-gray-800 text-xl lg:text-2xl uppercase">
                  {title}
                </p>
                <span className="w-32 my-4 h-1 bg-red-600 border rounded-xl block inline-block"></span>
              </div>
              <h5 className="mt-2 px-6 text-2xl text-left tracking-tight text-gray-900 lg:text-2xl">
                {description && description.map(({ text }, index) => (
                  <div className="flex mt-4 gap-x-6" key={index}>
                    <h2 className="mt-4 mx-4 text-2xl items-center content-center font-bold tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
                      <span className="block text-red-600">{index+1}</span>
                    </h2>
                    <span className="block text-gray-700 text-lg md:text-xl">{text}</span>
                  </div>
                ))}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardDonationTypes