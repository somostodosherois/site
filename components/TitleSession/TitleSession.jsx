import React from 'react'

const TitleSession = ({ title, colorLine }) => {
  const color = colorLine ? colorLine : 'bg-red-600'

  return(
    <div className="max-w-2xl mx-auto py-8 md:max-w-none">
      <h2 className="text-2xl md:text-3xl font-cartagena font-bold"> {title}</h2>
      <span className={`${color} w-32 my-4 h-1 border rounded-xl block`}></span>
    </div>
  )
}

export default TitleSession