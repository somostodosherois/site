import React from 'react';
import TitleSession from '../../components/TitleSession/TitleSession';

const ImagesList = ({ slice }) => {
  if (!slice) return null

  const title = slice?.primary?.title || ''
  const items = slice?.items || []

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
        <TitleSession title={title} />

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-y-8">
          {items && items.map(({ image, link }, index) => (
            <div className='cursor-pointer'>
              <a href={link.url} target='_blank' key={index} className="flex justify-content align-center bg-white border border-transparent rounded-xl">
                <img
                  src={image.url}
                  alt={image.alt}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImagesList