import React from 'react'

const TitleSession = ({ title }) => (
  <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:pb-2 lg:max-w-none">
    <h2 className="text-3xl text-gray-700"> {title}</h2>
    <span className="w-32 my-4 h-2 bg-red-500 border rounded-xl block"></span>
  </div>
)

export default TitleSession