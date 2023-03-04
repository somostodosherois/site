import React from 'react'
import ReactRoundedImage from "react-rounded-image";

import TextBlock from '../../components/TextBlock';

const ImagesCircleList = ({ slice }) => {

  const { title, description } = slice.primary
  const { items } = slice

  return (
    <>
      <TextBlock title={title} description={description} />

      <div className='max-w-7xl mx-auto lg:items-center'>
        <div className='max-w-2xl mx-12 grid sm:grid-cols-2 md:grid-cols-3 lg:flex gap-x-12 gap-y-12'>
          {items.map(({ image, title, description }, index) => (
            <div>
              <div key={index} className='flex justify-center'>
                <ReactRoundedImage image={image.url} roundedSize="0" imageWidth="120" imageHeight="120" />
              </div>
              <h6 className='text-sm text-center' style={{ paddingTop: '1rem' }}>{title}</h6>
              <h6 className='text-center text-sm font-bold'>{description}</h6>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ImagesCircleList