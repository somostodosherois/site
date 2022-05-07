/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Nosso DNA',
    description:
      ' Trazemos ao processo toda a temática dos super-heróis, que remete a muitas memórias de infância e, ao mesmo tempo, transforma o feito de ajudar numa ação leve, divertida e impactante.',
    icon: GlobeAltIcon,
  },
  {
    name: '[a definir]',
    description:
      'Transformar a vida de milhares de crianças e adolescentes que precisam de tratamento médico ao redor do mundo, resgatando o herói que cada um de nós tem dentro de si.',
    icon: ScaleIcon,
  },
  {
    name: '[a definir]',
    description:
      'Imaginamos um mundo onde as crianças não tenham mais que abrir mão da sua diversão, vitalidade e educação devido a ausência de recursos e tratamentos que garantem a sua saúde.',
    icon: LightningBoltIcon,
  },
  // {
  //   name: 'Nossos valores',
  //   description:
  //     'Maturidade, Desempenho, Aprendizado, Propósito e Senso de Dono.',
  //   icon: AnnotationIcon,
  // },
]

export default function GridTextIcons() {
  return (
    // style={{ background: 'repeating-linear-gradient( 120deg, #f3f4f6, #f3f4f6 10px, #ffffff 15px, #ffffff 11px)' }}
    <div className="pt-20 pb-16 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-900 font-semibold tracking-wide uppercase">Saiba mais sobre a ong</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-600 sm:text-4xl uppercase">
            Somos Todos Heróis
          </p>
          <p className="mt-4 max-w-6xl text-2xl text-gray-600 lg:mx-auto">
            A <b>Somos Todos Heróis</b> é uma ONG jovem e digital que transforma a vida de crianças que necessitam de tratamentos médicos ao redor do país. Unimos pessoas como você, que estão dispostas a fazer a diferença na vida de alguém, incentivando a prática solidária por meio de doações diretas e resgatando o heroísmo que reside em cada um de nós. 
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={feature.name} className="relative">
                <dd>
                  <h2 className="text-5xl font-bold tracking-tight sm:text-5xl">
                    <span className="block text-red-600">{index+1}</span>
                  </h2>
                  <p className="ml-10 text-3xl leading-6 font-medium text-gray-800">{feature.name}</p>
                </dd>
                <dd className="mt-2 ml-10 text-xl text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
