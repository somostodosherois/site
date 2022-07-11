import React from 'react'

import { navigationLeft, navigationRigth, classNames } from './globals'

const MenuDesktop = () => (
  <div className="flex-1 flex items-center justify-center sm:items-stretch">
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {navigationLeft.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'font-extrabold text-red-600' : 'text-red-600 hover:font-extrabold',
              'px-4 py-2 my-2 rounded-md text-sm'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}

        <a
          href="/doar"
          className="items-center text-sm justify-center my-1 rounded-md text-white bg-red-600 shadow border b-1 border-red-600 hover:bg-white hover:text-red-500 hover:border hover:b-1 hover:border-red-600 md:py-3 md:text-md md:px-4"
        >
          Doar
        </a>

        {navigationRigth.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'font-extrabold text-red-600' : 'text-red-600 hover:font-extrabold',
              'px-4 py-2 my-2 rounded-md text-sm'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default MenuDesktop