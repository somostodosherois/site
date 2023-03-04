import React from 'react'
import { Grid } from '@mui/material'

import TitleSession from '../../components/TitleSession/TitleSession'

const TextBlockWithIcons = ({ slice }) => {

  if (!slice) return null
  const { title, description } = slice.primary
  const items = slice?.items || []

  return (
    <div className="max-w-7xl mx-auto lg:items-center mb-8">
      <div className="max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 md:mr-0 text-lg md:text-xl text-gray-800">

        <TitleSession title={title} />
        <p className="text-lg md:text-xl text-gray-600 lg:mx-auto leading-8">
          {description}
        </p>

        <Grid className='block md:flex mt-8 gap-x-24'>
          {items.map(({ icon, description }, index) => (
            <Grid className='flex items-center justify-left md:justify-center gap-x-4' key={index}>
              <img src={icon.url} />
              <span>{description}</span>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
export default TextBlockWithIcons