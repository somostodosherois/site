import React from 'react'

const ods = [
  {
    number: 3,
    image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-3.svg'
  },
  {
    number: 4,
    image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg'
  },
  {
    number: 8,
    image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-8.svg'
  },
  {
    number: 10,
    image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-10.svg'
  },
  {
    number: 17,
    image: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-17.svg'
  },
]

const Card = ({ number, image }) => (
  <div id="sdg-3" className="rounded-xl w-40 h-40 bg-cover rounded shadow-xl hover:animate-bounce" style={{ backgroundImage: `url('${image}')` }}>
    <span className="sr-only">sdg-{number}</span>
  </div>
)

const ODS = () => {
  return (
    <div className="pb-16 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-red-600 sm:text-2xl lg:sm:text-3xl uppercase">
            A Somos Todos Heróis contribui com os seguintes Objetivos de Desenvolvimento Sustentável da ONU
          </p>
        </div>

        <div className="mt-16">
          <dl className="md:space-y-0 grid grid-cols-1 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 onu-grid">
            {ods.map(({ number, image }, index) => (
              <div key={index} className="flex justify-center">
                <Card number={number} image={image} />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default ODS