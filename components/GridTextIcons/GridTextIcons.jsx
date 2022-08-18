import React from 'react';

const GridTextIcons = ({ object, features }) => {
  return (
    // style={{ background: 'repeating-linear-gradient( 120deg, #f3f4f6, #f3f4f6 10px, #ffffff 15px, #ffffff 11px)' }}
    <div className="pt-20 pb-16 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-900 font-semibold tracking-wide uppercase">{object.helperText}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-600 sm:text-4xl uppercase">
            {object.title}
          </p>
          <p className="mt-4 max-w-6xl text-xl lg:text-2xl text-gray-600 lg:mx-auto"> {object.description} </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={feature.name} className="relative">
                <dd>
                  <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                    <span className="block text-red-600">{index+1}</span>
                  </h2>
                  <p className="ml-10 text-2xl md:text-3xl leading-6 font-medium text-gray-800">{feature.name}</p>
                </dd>
                <dd className="mt-2 ml-10 text-lg md:text-xl text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default GridTextIcons