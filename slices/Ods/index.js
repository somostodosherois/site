import React from 'react'

const Card = ({ image }) => (
  <div id="sdg-3" className="rounded-xl bg-cover rounded shadow-xl" style={{ backgroundImage: `url('${image}')` }}></div>
)

const ODS = ({ slice }) => {

  if (!slice) return null

  const title = slice?.primary?.title || ''
  const items = slice?.items || []

  return (
    <div className="p-8 bg-white" >
      <div className="max-w-7xl mx-auto grid lg:flex gap-x-8 gap-y-8 justify-center items-center">
        <p className="leading-8 font-extrabold tracking-tight text-red-600 text-xl sm:text-2xl lg:text-2xl uppercase">
          {title}
        </p>

        <div className="grid sm:flex gap-x-8 gap-y-8">
          {items && items.map(({ image }, index) => (
            <div key={index} className="flex justify-center">
              <Card image={image.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ODS