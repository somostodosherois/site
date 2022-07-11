import { Fragment } from 'react'
import { Disclosure, Menu as MenuNative, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Logo from '../../public/logoText.svg'
import { classNames } from './globals'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

const navigationProfile = [
  { submenu: 'Seu Perfil', link: '/sobrenos' },
  { submenu: 'Configurações', href: '/loja' },
  { submenu: 'Sair', href: '/loja' }
]

const ProfileItem = ({ submenu, link }) => (
  <Menu.Item>
    {({ active }) => (
      <a
        href={link}
        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
      >
        {submenu}
      </a>
    )}
  </Menu.Item>
)

const Menu = () => (
  <Disclosure as="nav" className="bg-white">
    {({ open }) => (
      <>
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-9 sm:h-12 w-auto pb-1"
                src={Logo.src}
              />
            </div>

            <MenuDesktop />

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <MenuNative as="div" className="ml-3 relative">
                <div>
                  <MenuNative.Button className="bg-red-600 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </MenuNative.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuNative.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {navigationProfile.map(({ submenu, link }) => (
                      <ProfileItem submenu={submenu} link={link} />
                    ))}
                  </MenuNative.Items>
                </Transition>
              </MenuNative>
            </div>
          </div>
        </div>

        <MenuMobile />

      </>
    )}
  </Disclosure>
)

export default Menu