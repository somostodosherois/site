import React from 'react';
import { GoQuote } from "react-icons/go";

const CallToAction = ({ slice }) => {
  if (!slice) return null

  const titleBlack = slice?.primary?.title_black || ''
  const titleRed = slice?.primary?.title_red || ''
  const reference = slice?.primary?.reference || ''

  const buttons = slice?.items || []

  const buttonLabel1 = buttons[0].label
  const buttonLink1 = buttons[0].link?.url

  const buttonLabel2 = buttons[1]?.label
  const buttonLink2 = buttons[1]?.link?.url

  return (
    <div className="pt-12 pb-12">
      <div className="max-w-7xl p-8 bg-gray-100 rounded-xl mx-auto grid lg:flex gap-x-8 sm:items-center justify-center md:justify-between">
        <div className='flex gap-x-8'>
          <h2 className="text-2xl tracking-tight text-gray-900">
            <span className="block text-red-600 font-extrabold">{titleBlack}</span>
            <span className="block text-gray-800 font-bold text-2xl">{titleRed}</span>
          </h2>

          {reference &&
          <div className='flex mt-8 md:mt-4'>
            <GoQuote className="h-6 w-6 lg:h-8 lg:w-8" fill="#9b0624" />
            <span className="block text-gray-800 ml-2 text-3xl font-extrabold">{reference}</span>
          </div>
        }
        </div>
        
        <div className='grid sm:flex mt-8 lg:mt-0 gap-y-8'>
          {buttonLabel1 && buttonLink1 &&
            <a
              href={buttonLink1}
              className="cursor-pointer text-center px-2 py-2 text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              {buttonLabel1}
            </a>
          }
          {buttonLabel2 && buttonLink2 &&
            <a
              href={buttonLink2}
              className="cursor-pointer text-center sm:ml-8 px-2 py-2 text-base font-medium rounded-md text-red-600 bg-white border border-red-600 hover:bg-gray-100"
            >
              {buttonLabel2}
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default CallToAction