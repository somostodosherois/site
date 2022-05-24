import React from 'react'
import TitleSession from '../TitleSession/TitleSession'

const TextBlock = ({ title, description }) => (
  <div className="bg-gray-100 pb-12 px-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
      <TitleSession title={title} />
      <p className="text-2xl text-gray-600 lg:mx-auto">
        {description}
      </p>
    </div>
  </div>
)

export default TextBlock