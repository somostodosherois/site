import React from 'react'
import { BsGraphUp, BsLightbulb, BsSuitHeart, BsThermometerHigh, BsPeople } from "react-icons/bs";

const features = [
  {
    number: 'Maturidade',
    description:
      '​​Questionamos ações que não estejam de acordo com nossos valores e assumimos a responsabilidade pelo nosso trabalho.',
    icon: BsThermometerHigh,
  },
  {
    number: 'Desempenho',
    description:
      'Entendemos que não saber não é motivo para não fazer. Ao contrário, é o primeiro passo para ampliar nossas habilidades.',
    icon: BsGraphUp,
  },
  {
    number: 'Aprendizado',
    description:
      'Um membro que valoriza o aprendizado tem sede de conhecimento e fome de aplicação. Desafia os pressupostos existentes com justificativa e sugere melhores abordagens. E sempre busca os modelos já existentes e aprende com eles: copiar antes de inventar.',
    icon: BsLightbulb,
  },
  {
    number: 'Propósito',
    description:
      '​Incentivamos nossos membros a perseguirem algo maior do que si, encarando novos desafios e aprendendo com suas ações. Dessa forma, o impacto do seu trabalho transforma todos ao seu redor e todo esforço investido se pereniza e serve de exemplo aos que virão depois!',
    icon: BsSuitHeart,
  },
  {
    number: '​Senso de Dono',
    description:
      'Incentivamos nossos membros à pensarem e agirem como donos, fazendo escolhas difíceis e tratando cada doação como se fosse sua.',
    icon: BsPeople,
  },
]

const CardsIconsText = () => (
  <div className="bg-red-600 pb-16 px-4">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 items-center content-center text-center">
      <div className="grid max-w-2xl mx-auto py-8 sm:py-24 lg:py-12 lg:max-w-none">
        <h2 className="text-4xl text-white">Nossos valores</h2>
      </div>

      <div className="lg:grid lg:grid-cols-5 lg:gap-x-12 lg:gap-y-32">
        {features.map((feature) => (
          <div className='bg-white py-8 my-8 lg:my-0 items-center content-center text-center border border-transparent rounded-md'>
            <div className='flex' style={{ justifyContent: 'center' }}>
              <feature.icon className="h-10 w-10" fill="#DC2626" />
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              <span className="block text-gray-700">{feature.number}</span>
            </h2>
            <h5 className="mt-2 px-2 text-xl tracking-tight text-gray-900 sm:text-xl">
              <span className="block text-gray-500">{feature.description}</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default CardsIconsText