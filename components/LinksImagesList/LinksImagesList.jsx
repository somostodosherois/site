import React from 'react';

const callouts = [
  {
    imageSrc: '//sth.org.br/images/2020/05/download-300x80.png',
    imageAlt: 'AME',
    url: ''
  },
  {
    imageSrc: '//sth.org.br/images/2018/04/thumbnail_logo-chico-rei-300x83.png',
    imageAlt: 'Chico Rei',
    url: ''
  },
  {
    imageSrc: '//sth.org.br/images/2016/06/LOGO.gif',
    imageAlt: 'Home Host',
    url: ''
  },
]

const LinksImagesList = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-16 lg:max-w-none">
          <h2 className="text-4xl text-gray-700">Nossos parceiros</h2>
          <span className="w-32 my-4 h-2 bg-red-600 border rounded-xl block"></span>
        </div>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-y-8">
          {callouts.map((callout) => (
            <div key={callout.name} className="flex justify-content align-center bg-white border border-transparent rounded-xl">
              <img
                src={callout.imageSrc}
                alt={callout.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LinksImagesList