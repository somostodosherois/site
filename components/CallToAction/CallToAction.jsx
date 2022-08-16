import React from 'react';

const CallToAction = ({ title, subtitle }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 sm:py-16 sm:px-8 sm:flex sm:items-center sm:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          <span className="block text-gray-700">{ title ? title : 'Vamos juntos?' }</span>
          <span className="block text-red-500">{ subtitle ? subtitle : 'Faça já a sua doação!' }</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Realizar doação
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction