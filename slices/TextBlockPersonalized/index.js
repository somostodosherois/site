import React, { useEffect, useState } from 'react'
import { PrismicRichText } from '@prismicio/react'

import TitleSession from '../../components/TitleSession/TitleSession'

const TextBlockPersonalized = ({ slice }) => {
  const { title, description, image, imageSide, background } = slice.primary

  const [bg, setBg] = useState('bg-white text-gray-800')
  const [line, setLine] = useState('bg-red-600')

  useEffect(() => {
    if (background === 'Cinza') {
      setBg('bg-gray-100 text-gray-800')
    } else if (background === 'Vermelho') {
      setBg('bg-red-600 text-white')
      setLine('bg-white')
    }
  });

  const BlockText = () => (
    <div>
      <TitleSession title={title} colorLine={line} />
      <div className='paragraph-rich-text text-gray-700 lg:mx-auto'>
        <PrismicRichText field={description} />
      </div>
    </div>
  )

  const Image = () => (
    <img src={image.url}  className='image-text-block justify-right mt-4' />
  )

  return (
    <div className={`${bg} p-6 px-4`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center`}>

      {image && imageSide
        ?
        <div className='grid lg:flex gap-x-24'>
          <BlockText />
          <Image />
        </div>
        :
        <div className='grid lg:flex gap-x-24'>
          <Image />
          <BlockText />
        </div>
      }

      {!image && <BlockText />}
      </div>
    </div>
  )
}

export default TextBlockPersonalized