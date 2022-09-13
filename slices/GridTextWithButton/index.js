import React from 'react';

const GridTextWithButton = ({ slice }) => {
  if (!slice) return null

  const label = slice?.primary?.label_text
  const title = slice?.primary?.title
  const description = slice?.primary?.description
  const items = slice?.items

  return (
    // style={{ background: 'repeating-linear-gradient( 120deg, #f3f4f6, #f3f4f6 10px, #ffffff 15px, #ffffff 11px)' }}
    <div className="pt-6 pb-16 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-900 font-semibold tracking-wide uppercase">{label}</h2>
          <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-red-600 uppercase">
            {title}
          </p>
          <p className="mt-4 max-w-6xl text-lg md:text-xl text-gray-600 lg:mx-auto"> {description} </p>
        </div>

        <div className="mt-16">
          <dl className={`space-y-10 md:space-y-0 grid md:grid-cols-${items.length} md:gap-x-16 md:gap-y-10`}>
            {items && items.map(({ title, description, image, button_link, button_label }, index) => (
              <div key={index} className="text-center justify-center items-center">
                <div>
                  <img src={image?.url} className='inline' style={{ height: '60px' }} />
                  <p className="text-xl md:text-2xl font-medium text-gray-800">{title}</p>
                  <dd className="mt-2 text-lg md:text-xl text-gray-500">{description}</dd>
                </div>
                <div className="mt-5 sm:mt-8 flex justify-center">
                  <div className="rounded-md shadow">
                    <a
                      href={button_link?.link?.url}
                      className="w-full cursor-pointer flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-2 md:text-lg"
                    >
                      {button_label}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default GridTextWithButton