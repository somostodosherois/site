import React from 'react'

const Card = ({ image }) => (
  <div id="sdg-3" className="rounded-xl bg-cover rounded shadow-xl" style={{ backgroundImage: `url('${image}')` }}></div>
)

const ODS = ({ slice }) => {

  if (!slice) return null

  const title = slice?.primary?.title || ''
  const items = slice?.items || []

  return (
    <div className="pt-12 pb-12 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 leading-8 font-extrabold tracking-tight text-red-600 text-xl sm:text-2xl lg:text-2xl uppercase">
            {title}
          </p>
        </div>

        <div className="mt-16">
          <dl className="md:space-y-0 grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 onu-grid">
            {items && items.map(({ image }, index) => (
              <div key={index} className="flex justify-center">
                <Card image={image.url} />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ODS