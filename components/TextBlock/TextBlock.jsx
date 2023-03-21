import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { PrismicRichText } from '@prismicio/react'

import TitleSession from '../TitleSession/TitleSession'

const TextBlock = ({ title, description, isRichText, background, video }) => {

  return (
    <div className={`bg-${background} p-6 px-4`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center`}>
        <TitleSession title={title} />
        {isRichText ?
          <div className='paragraph-rich-text text-gray-700 lg:mx-auto'>
            <PrismicRichText field={description} />
          </div>
          :
          <p className="text-lg md:text-xl text-gray-700 lg:mx-auto leading-8">
            {description}
          </p>
        }

        {video &&
          <div className='flex justify-center mt-8'>
            <ReactPlayer url={video} />
          </div>
        }
      </div>
    </div>
  )
}

export default TextBlock