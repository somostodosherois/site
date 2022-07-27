import React from 'react';

const features = [
  {
    title: 'Mensal',
    description: [
      {
        text: "As doações mensais são destinadas a contribuir com o crescimento da ONG e impactar mais crianças."
      },
      {
        text: "Ao se tornar um guardião você estará fazendo a diferença na vida de várias crianças mês a mês. E como gesto de gratidão pelo seu ato heróico, a ONG te manda um mimo a cada 6 meses."
      }
    ]
  },
  {
    title: 'Pontual',
    description: [
      {
        text: "As doações pontuais são destinadas a missão de uma criança."
      },
      {
        text: "O valor total arrecado é 100% direcionado para a compra do que a criança necessita, seja fralda, próteses, tratamentos médicos, entre outros."
      }
    ]
  },
]

const CardDonationTypes = () => {
  return (
    <div className="pt-20 pb-16 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-600 sm:text-3xl uppercase">
            Escolha a modalidade de doação que melhor combina com você
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
          {features.map((feature) => (
            <div className='bg-white py-8 items-center content-center text-center border border-red-500 rounded-md'>
              <div className="lg:text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-600 sm:text-3xl uppercase">
                  {feature.title}
                </p>
                <span className="w-30 my-4 mx-56 h-2 bg-red-500 border rounded-xl block"></span>
              </div>
              <h5 className="mt-2 px-6 text-2xl text-left tracking-tight text-gray-900 sm:text-2xl">
                {feature.description.map(({ text }, index) => (
                  <div className="flex mt-4">
                    <h2 className="mt-4 mx-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      <span className="block text-red-500">{index+1}</span>
                    </h2>
                    <span className="block text-gray-500">{text}</span>
                  </div>
                ))}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardDonationTypes