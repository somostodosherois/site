import React from 'react'
import { Disclosure } from '@headlessui/react'

import { navigationLeft, navigationRigth, classNames } from './globals'

const MenuMobile = () => (
  <Disclosure.Panel className="sm:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navigationLeft.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
            item.current ? 'font-extrabold text-red-600' : 'text-red-600 hover:font-extrabold',
            'block px-3 py-2 rounded-md text-base'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}

      {navigationRigth.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
            item.current ? 'font-extrabold text-red-600' : 'text-red-600 hover:font-extrabold',
            'block px-3 py-2 rounded-md text-base'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}

      <Disclosure.Button
        as="a"
        className="items-center text-sm justify-center ml-2 mt-4 text-md px-3 rounded-md text-white bg-red-600 shadow border b-1 border-red-600 hover:bg-white hover:text-red-500 hover:border hover:b-1 hover:border-red-600">
        Doar
      </Disclosure.Button>
    </div>
  </Disclosure.Panel>
)

export default MenuMobile