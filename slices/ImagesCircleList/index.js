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
        <div className='max-w-2xl mx-8 flex gap-x-6'>
          {items.map(({ image, description }, index) => (
            <div key={index}>
              <ReactRoundedImage image={image.url} roundedSize="0" imageWidth="120" imageHeight="120" />
              <span className='text-lg'>{description}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ImagesCircleList