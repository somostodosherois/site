import React from 'react';

import { BsCurrencyDollar, BsBookmarkHeart, BsPeople, BsSuitHeart } from "react-icons/bs";

const features = [
  {
    number: '127',
    description:
      'crianças foram impactadas com as doações feitas na STH.',
    icon: BsSuitHeart,
  },
  {
    number: 'R$ 350.456,60',
    description:
      'foram arrecadados através das doações feitas na STH.',
    icon: BsCurrencyDollar,
  },
  {
    number: '6078',
    description:
      'doações foram realizadas na STH.',
    icon: BsBookmarkHeart,
  },
  {
    number: '100',
    description:
      '​usuários cadastrados na plataforma STH.',
    icon: BsPeople,
  },
]

const OngNumbers = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:py-8 lg:px-6 lg:items-center lg:justify-between lg:gap-x-12">
        <h2 className="text-3xl lg:text-6xl font-bold text-gray-600">Impactos que geramos até aqui</h2>
        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
          {features.map((feature) => (
            <div className='bg-white py-8 items-center content-center text-center border border-transparent rounded-md'>
              <div className='flex' style={{ justifyContent: 'center' }}>
                <feature.icon className="h-8 w-8 lg:h-10 lg:w-10" fill="#DC2626"/>
              </div>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block text-gray-700">{feature.number}</span>
              </h2>
              <h5 className="mt-2 px-2 text-xl lg:text-2xl tracking-tight text-gray-900 sm:text-2xl">
                <span className="block text-gray-500">{feature.description}</span>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OngNumbers