import React from 'react';
import { PrismicRichText } from "@prismicio/react"

import ImageBanner from '../../public/bannerHome.png'

const BannerHome = ({ data }) => {
  if (!data) return null

  const buttons = data?.buttons || []
  const dataBanner = data?.homepage_banner[0] || {}
  const title = dataBanner.title
  const description = dataBanner.description

  const renderButtons = () => {
    if (!buttons) return null

    const button1 = buttons[0] || {}
    const button2 = buttons[1] || {}

    return (
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href={button1?.link?.url}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
          >
            {button1?.label}
          </a>
        </div>
        {button2.label &&
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={button2?.link?.url}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
            >
              {button2?.label}
            </a>
          </div>
        }

      </div>
    )
  }

  return (
    <div className="relative bg-white overflow-hidden pt-12 lg:p-20">
      <div className="max-w-7xl mx-auto sm:text-center lg:text-left">
        <main className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8 lg:flex grid flex justify-center items-center">
          <div className="lg:max-w-xl">
            <h1 className="text-3xl pb-4 tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              <span className="block xl:inline">Seja um herói na vida de </span>
              <span className="block text-red-600 xl:inline">crianças por todo o Brasil</span>
            </h1>
            {/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              <PrismicRichText field={description} />
            </p> */}
            {renderButtons()}
          </div>
          <div className="pt-8 lg:pt-0 lg:relative lg:right-0 lg:w-1/2">
            <img
                className="w-full"
                src={ImageBanner.src}
                alt="Somos Todos Heróis"
              />
          </div>
        </main>
      </div>
    </div>
  )
}

export default BannerHome