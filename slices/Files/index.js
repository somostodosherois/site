import React from 'react'

const Files = ({ slice }) => {

  if (!slice) return null

  const title = slice?.primary?.title || ''
  const description = slice?.primary?.description || ''
  const items = slice?.items || []

  if (!title || !items) return null

  return (
    <section>
      <div className="max-w-7xl mx-auto lg:items-center">
        <div className="max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 sm:mr-0 text-lg md:text-xl text-gray-800">
          <dd className='mt-16'>
            <p className=" text-xl md:text-2xl leading-6 text-red-600 uppercase">{title}</p>
          </dd>
          <dd className="mt-2">{description}</dd>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-12 mb-12">
            {items.map(({ image, title, buttons_labels, buttons_links }) => (
              <div className="group relative bg-white shadow-xl rounded-xl pb-4">
                <div className="relative bg-white overflow-hidden -group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 h-50 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={image.url}
                    className="w-full h-full object-center object-cover"
                  />
                </div>

                <div className='text-center'>
                  <h3 className="mt-4 font-lg font-semibold text-gray-900">
                    {title}
                  </h3>

                  <div className='flex items-center justify-center gap-x-4'>
                    {buttons_labels.map(({ text }, index) => (
                      <div className="rounded-md mt-6 shadow">
                        <a
                          href={buttons_links[index].text}
                          target='_blank'
                          className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-6 hover:bg-red-700"
                        >
                          {text}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Files