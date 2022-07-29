import React from 'react'

const TitleSession = ({ title }) => (
  <div className="max-w-2xl mx-auto pt-16 lg:py-24 lg:pb-2 lg:max-w-none">
    <h2 className="text-2xl md:text-3xl text-gray-700"> {title}</h2>
    <span className="w-32 my-4 h-2 bg-red-600 border rounded-xl block"></span>
  </div>
)

export default TitleSession