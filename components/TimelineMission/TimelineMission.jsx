import React from 'react'
import TitleSession from '../TitleSession/TitleSession'

const TimelineMission = () => {

  return (
    <div className='max-w-7xl p-8 mb-12 lg:p-0 mx-auto'>
      <TitleSession title='Últimos Atos Heroicos da Missão 💫' />
      <ol className="relative">
        <li className="mb-10 ml-10">
          <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex">
            <span className="flex absolute -left-2 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white">
              <img className="rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
            </span>
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
            <div className="text-lg font-normal text-gray-500"> <span className="font-semibold text-blue-600">Superguria</span> salvou o dia de Grabriel Hulk</div>
          </div>
        </li>
        <li className="mb-10 ml-10">
          <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex">
            <span className="flex absolute -left-2 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white">
              <img className="rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Thomas Lean image" />
            </span>
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
            <div className="text-lg font-normal text-gray-500"><span className="font-semibold text-blue-600">Luis Fernando Pimenta</span> salvou o dia de Grabriel Hulk</div>
          </div>
        </li>
        <li className="ml-10">
          <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex">
            <span className="flex absolute -left-2 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white">
              <img className="rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Jese Leos image" />
            </span>
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
            <div className="text-lg font-normal text-gray-500"><span className="font-semibold text-blue-600">Vitor Lozano</span> salvou o dia de Grabriel Hulk</div>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default TimelineMission