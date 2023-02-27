
import React from 'react';
import TitleSession from '../../components/TitleSession/TitleSession';

import { BsArrowRightShort } from "react-icons/bs"

const NewsList = ({ slice }) => {

  if (!slice) return null

  const title = slice?.primary?.title || ''
  const news = slice?.items || []

  return (
    <div className="pb-8 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
        <TitleSession title={title} />

        <div className="pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {news.map(({ image, title, description, author, date, link }, index) => (
            <a className="cursor-pointer shadow-lg justify-content align-center rounded-xl border:shadow" href={link.url} target='_blank' key={index}>
              <div className="text-center p-4">
                <img
                  src={image.url}
                  alt={image.alt}
                  style={{ height: '25vh' }}
                />
              </div>
              <div className="block p-4">
                <div style={{ height: '22vh' }}>
                  <h3 className="text-lg font-bold text-gray-700 pb-4 lg:pb-8">{title}</h3>
                  <p className="text-sm text-gray-700 pb-4 lg:pb-8">{description}</p>
                </div>
                <p className="text-sm text-gray-700">{author}</p>
                <p className="text-sm text-gray-700 mt-2 mb-4">{date}</p>
                <a className="text-md text-blue-600 flex">Ler mais <BsArrowRightShort className='h-6'/></a>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
export default NewsList