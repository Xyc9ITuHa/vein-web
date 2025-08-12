import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LogoColors } from '../icons/LogoColors'

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About us', href: '#information', current: false },
    { name: 'Gallery', href: '/gallery/', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const linkClasses = (current: boolean) => classNames(
        current
            ? 'bg-dark-bg text-white'
            : 'text-white hover:bg-dark-bg/60 hover:text-white',
        'px-3 py-2 text-sm font-medium transition-colors duration-200'
    )

    const mobileLinkClasses = (current: boolean) => classNames(
        current
            ? 'bg-dark-bg text-white'
            : 'text-white hover:bg-dark-bg/60 hover:text-white',
        'block px-3 py-2 text-base font-medium transition-colors duration-200'
    )

    return (
        <Disclosure as="nav" className="bg-light-oak/90 w-full fixed top-0 z-50 backdrop-blur-sm overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <LogoColors
                                className="h-20 w-auto opacity-30 absolute -left-3 scale-125"
                                colors={['#FFFFFF', '#FFFFFF']}
                                isFrame={false}
                            />
                            <h1 className="font-dune text-3xl text-white ml-12">
                                VeIn
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={linkClasses(item.current)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button - Fixed positioning */}
                    <div className="sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-white hover:bg-dark-bg/70 hover:text-white focus:ring-1 focus:ring-white focus:outline-none focus:ring-inset transition-colors duration-200">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block size-6 group-data-[open]:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden size-6 group-data-[open]:block"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Panel */}
            <DisclosurePanel className="sm:hidden bg-light-oak/95 backdrop-blur-sm border-t border-white/10">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={mobileLinkClasses(item.current)}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}