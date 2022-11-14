import { PrismicRichText } from '@prismicio/react'
import React from 'react'
import ReactPlayer from 'react-player'

import TitleSession from '../TitleSession/TitleSession'

const TextBlock = ({ title, description, background, video }) => (
  <div className={`bg-${background} p-6 px-4`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
      <TitleSession title={title} />
      {description.length ?
        <PrismicRichText className="text-lg md:text-xl text-gray-600 lg:mx-auto indent-2.5" field={description} />
      :
        <p className="text-lg md:text-xl text-gray-600 lg:mx-auto">
          {description}
        </p>
      }
      
      {video &&
        <div className='flex justify-center mt-8'>
          <ReactPlayer url={video} className='w-10' />
        </div>
      }
    </div>
  </div>
)

export default TextBlock