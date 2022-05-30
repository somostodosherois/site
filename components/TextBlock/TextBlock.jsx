import React from 'react'
import ReactPlayer from 'react-player'

import TitleSession from '../TitleSession/TitleSession'

const TextBlock = ({ title, description, isAboutUs, background }) => (
  <div className={`bg-${background} pb-12 px-4`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
      <TitleSession title={title} />
      {isAboutUs
        ?
        <div className='sm:grid lg:flex gap-x-8'>
          <div className='max-w-3xl'>
            <p className="text-2xl text-gray-600 lg:mx-auto">
              {description}
            </p>
          </div>
          <div className='container-about-us mt-12 lg:mt-0'>
            <ReactPlayer url='https://www.youtube.com/watch?v=476hJXDHsoI&ab_channel=SomosTodosHer%C3%B3is' className='w-10' />
          </div>
        </div>
        :
        <p className="text-2xl text-gray-600 lg:mx-auto">
          {description}
        </p>
      }
    </div>
  </div>
)

export default TextBlock