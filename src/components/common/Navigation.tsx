import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { LogoColors } from '../icons/LogoColors'

const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'About us', href: '#', current: false },
    { name: 'Gallery', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-dark-bg/90 w-full fixed top-0 z-50 backdrop-blur-xs">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-white hover:bg-dark-bg/70 hover:text-white focus:ring-1 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex shrink-0 items-center justify-center ml-2">
                            <LogoColors className="h-10 w-auto self" colors={['#FFFFFF', '#FFFFFF']} />
                            <h1 className="hidden sm:ml-2 sm:block font-dune text-3xl text-white mt-1">VeIn</h1>
                        </div>

                        <div className="hidden sm:block right-0">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-dark-bg text-white' : 'text-white hover:bg-dark-bg/60 hover:text-white',
                                            ' px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden right-0">
                <div className="space-y-1 px-2 pt-2 pb-3 ">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-dark-bg text-white' : 'text-white hover:bg-dark-bg/60 hover:text-white',
                                'block px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
