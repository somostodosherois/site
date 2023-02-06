import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Grid } from '@mui/material'

import TitleSession from '../../components/TitleSession/TitleSession'

const DiagramWithIcon = ({ slice }) => {

  const { title } = slice.primary
  const { items } = slice


  return (
    <div className="max-w-7xl mx-auto lg:items-center">
      <div className="max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 md:mr-0 text-lg md:text-xl text-gray-800">
        <TitleSession title={title} />

        <div className='border-l-2 border-red-600 ml-6 sm:ml-12'>
          {items.map(({ image, description, subitems }, index) => (
            <div key={index}>
              <div className='flex items-center justify-center mt-8'>
                <span className="w-12 h-1 bg-red-600 border rounded-xl block"></span>
                <div className='sm:flex w-full	rounded-lg	items-center justify-left border-2 border-red-600 gap-x-6 p-4'>
                  <img src={image.url} />
                  <PrismicRichText field={description} />
                </div>
              </div>
              {subitems &&
                <Grid className='block lg:flex mt-6 mb-6 m-14 gap-x-8'>
                  {subitems.map(({ text }, index) => (
                    <Grid className='mb-4 lg:mb-0' key={index}>
                      <div className='sm:flex w-full rounded-lg items-center justify-center border-2 border-red-600 gap-x-6 p-4'>
                        <span className='text-lg'>{text}</span>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiagramWithIcon