import React from 'react'
import { Grid } from "@mui/material"

const features = ['127', '2160', '6078', '100']

const OngNumbersImage = ({ slice }) => {
  if (!slice) return null

  const title = slice?.primary?.title || ''
  const items = slice?.items || []

  if (!title || !items) return null

  return (
    <div className="bg-red-600 md:bg-fundo-herois bg-local bg-center bg-no-repeat bg-cover mt-24 mb-12" style={{ height: '60%' }}>
      <dd className='mt-16 p-8 sm:p-12 lg:p-22 lg:mb-4 text-center lg:text-left'>
        <p className="text-xl md:text-4xl leading-6 text-white uppercase font-bold">{title}</p>
      </dd>

      <div className="flex items-center justify-center pl-8 pr-8 lg:p-0">
        <Grid className="flex pb-12 gap-x-12 gap-y-4 sm:gap-y-8 md:gap-y-12  max-w-7xl grid grid-cols-2 lg:grid-cols-4 text-lg md:text-xl text-white text-center items-center justify-center">
          {items.map(({ description }, index) => (
            <Grid className="rounded-lg border border-white min-h-full">
              <h2 className="lg:mt-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight p-2 sm:p-4 lg:p-8">
                <span className="block">{features[index]}</span>
              </h2>
              <div className="flex h-16 lg:h-24 p-4 items-center min-h-full justify-center rounded-md border-t border-white text-lg sm:text-xl lg:text-3xl" style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
                {description}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>˝
    </div>
  )
}

export default OngNumbersImage