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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-12">
            {items.map(({ title, link }) => (
              <a 
                href={link?.url}
                target='_blank'
              >
                <div className="bg-local bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${image}')` }}>
                  <dd className='sm:p-12 lg:p-22 text-center' style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(1px)' }}>
                    <p className="text-xl md:text-4xl leading-6 text-white uppercase font-extrabold">{title}</p>
                  </dd>
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