import Image from "next/image";
import logo from '../../public/logo.png'
import Link from "next/link"
import { useRouter } from "next/router";

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'For Donors', href: '/for-donors'},
  { name: 'For Fundraisers', href: '/for-fundraisers'},
  { name: 'About Us', href: '/about-us'}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className=" max-w-full mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:justify-between">
                <div className="flex-shrink-0 flex items-center w-10 md:w-12 lg:w-16">
                  <Link
                    href='/'
                    passHref
                  >
                    <Image
                      className="block cursor-pointer"
                      src={logo}
                      alt='Help Ukraine Now'
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <Link
                            href={item.href}
                            key={item.name}
                            target={item.target}
                            rel={item.rel}
                        >
                            <a
                                className={`
                                    px-3 py-2 
                                    rounded-md 
                                    text-base md:text-lg 
                                    font-bold 
                                    ${router.pathname === item.href ? 
                                        'text-gray-800 hover:text-gray-800' 
                                        : 'text-gray-400 hover:text-gray-800'}`}
                            >
                                {item.name}
                            </a>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-3 pt-2 pb-4 space-y-1 bg-gray-100 rounded-2xl">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`
                    block px-3 py-2 rounded-md text-base font-bold
                    ${router.pathname === item.href ? 
                        'text-gray-800 hover:text-gray-800' 
                        :'text-gray-500 hover:text-gray-800'}`
                    }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
