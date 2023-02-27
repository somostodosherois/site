import React from 'react'

import TitleSession from '../../components/TitleSession/TitleSession'

const Files = ({ slice }) => {

  if (!slice) return null

  const title = slice?.primary?.title || ''
  const image = slice?.primary?.image.url || ''
  const items = slice?.items || []

  if (!title || !items) return null

  return (
    <section>
      <div className="max-w-7xl mx-auto lg:items-center">
        <div className="max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 sm:mr-0 text-lg md:text-xl text-gray-800">
          <TitleSession title={title} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mb-12">
            {items.map(({ title, link }, index) => (
              <a 
                href={link?.url}
                target='_blank'
                style={{ height: '20vh' }}
                key={index}
              >
                <div className="bg-local bg-center bg-no-repeat h-full bg-cover" style={{ backgroundImage: `url('${image}')` }}>
                  <div className='flex justify-center items-center text-center h-full w-full' style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(1px)' }}>
                    <p className="text-lg md:text-xl text-white uppercase font-extrabold">{title}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Files