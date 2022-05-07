import { CurrencyDollarIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const callouts = [
  {
    name: 'Deva Solar',
    description: 'R$ 1.000,00 arrecadados',
    imageSrc: 'https://sth.org.br/images/2022/04/Design-sem-nome-2.png',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Mega Otavio',
    description: 'R$ 3.495,00 arrecadados',
    imageSrc: 'https://sth.org.br/images/2022/03/Design-sem-nome-5.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Super Maria Alyce',
    description: 'R$ 1.591,50 arrecadados',
    imageSrc: 'https://sth.org.br/images/2021/11/WhatsAppImage2021-10-27at21.34.42-300x300.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Mega Heitor',
    description: 'R$ 1.994,00 arrecadados',
    imageSrc: 'https://sth.org.br/images/2021/11/20210831_102743-300x300.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function Carousel() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-16 lg:max-w-none">
          <h2 className="text-3xl font-extrabold text-gray-900">Missões em andamento</h2>

          <div className="flex">
            <div className="mr-10 mt-40">
              <ChevronLeftIcon stroke="#C80000" className="h-12 w-12"/>
            </div>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative bg-white p-3">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  {/* <p className="mt-2 text-sm text-gray-500">{callout.description}</p> */}

                  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
                    <div class="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}> 45%</div>
                  </div>

                  <div className='flex mt-4 justify-content'>
                    <CurrencyDollarIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    <p className="px-1 text-gray-500">R$ 1000,00 arrecadados</p> 
                  </div>

                  <div className='flex mt-4 justify-content'>
                    <CalendarIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                    <p className="px-2 text-gray-500">30 dias restantes</p> 
                  </div>

                  <div className="rounded-md mt-6 shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center border border-red-700 text-base rounded-md text-red-600 hover:bg-red-700 md:py-1 md:text-lg md:px-4"
                  >
                    Ajudar este herói
                  </a>
                </div>
                </div>
              ))}
            </div>

            <div className="ml-10 mt-40">
              <ChevronRightIcon className="h-12 w-12" stroke="#C80000" />
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}
