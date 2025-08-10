import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LogoColors } from '../icons/LogoColors'

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About us', href: '#information', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-light-oak/90 w-full fixed top-0 z-50 backdrop-blur-xs overflow-hidden">
            <div className="mx-auto max-w-7xl pr-2 sm:pr-6 lg:pr-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="fixed inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-white hover:bg-dark-bg/70 hover:text-white focus:ring-1 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                        <div className="flex shrink-0 items-center justify-center">
                            <LogoColors className="h-20 w-auto opacity-30 absolute left-0 scale-130 -translate-x-3" colors={['#FFFFFF', '#FFFFFF']} isFrame={false} />
                            <div className="flex flex-col items-center fit-content ml-15">
                                <h1 className="font-dune text-3xl text-white mt-1">VeIn</h1>
                            </div>
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
