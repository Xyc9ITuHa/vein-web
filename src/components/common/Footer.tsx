import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon
} from '@heroicons/react/24/outline'
import { LogoColors } from '../icons/LogoColors'
import type { SVGProps } from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Instagram } from 'lucide-react'

const navigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'About us', href: '#information' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '#contact' },
    ],
    social: [
        {
            name: 'Instagram',
            href: '#',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <Instagram {...props} />
            ),
        },
        {
            name: 'Facebook',
            href: '#',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Telegram',
            href: '#',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
            ),
        },
        {
            name: 'WhatsApp',
            href: '#',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
            ),
        },
    ],
}

const contactInfo = [
    {
        icon: PhoneIcon,
        label: '+1 (555) 123-4567',
        href: 'tel:+15551234567'
    },
    {
        icon: EnvelopeIcon,
        label: 'info@vein.com',
        href: 'mailto:info@vein.com'
    },
    {
        icon: MapPinIcon,
        label: 'Lviv, Ukraine',
        href: '#'
    }
]

export default function Footer() {
    return (
        <footer className="bg-dark-bg/95 backdrop-blur-xs border-t border-light-oak/20 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 overflow-hidden">

                {/* Logo and brand section */}
                <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <LogoColors
                        className="h-auto scale-500 absolute w-auto opacity-15 bottom-0 "
                        colors={['#504334', '#504334']}
                        isFrame={false}
                    />
                    <div className="flex-col flex items-center justify-center-safe">
                        <h2 className="font-dune text-2xl md:text-5xl text-white">VeIn</h2>
                        <div>
                            <p className="text-neutral-400 text-md font-light text-center md:text-center max-w-xs">
                                Beauty in every vein, where art meets nature. Discover the essence of Vein.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation and contact section */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">

                    {/* Quick links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-medium mb-4">Quick Links</h3>
                        <div className="flex flex-col space-y-2">
                            {navigation.main.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-neutral-400 font-light hover:text-white text-sm transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-medium mb-4">Contact</h3>
                        <div className="flex flex-col space-y-3">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    target='_blank'
                                    className="flex items-center text-neutral-400 font-light hover:text-white text-sm transition-colors duration-200 group"
                                >
                                    <info.icon className="h-4 w-4 mr-2 group-hover:text-white" />
                                    {info.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social media */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-medium mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-neutral-400 font-light hover:text-white transition-colors duration-200"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="border-t border-light-oak/20">
                <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex flex-col md:flex-row items-center md:justify-between w-full text-center md:text-left">
                        <p className="text-neutral-400 font-light text-sm">
                            &copy; {new Date().getFullYear()} VeIn. All rights reserved.
                        </p>
                        {/* {< div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-neutral-400 font-light hover:text-white text-sm transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-neutral-400 font-light hover:text-white text-sm transition-colors duration-200">
                            Terms of Service
                        </a>
                        <a href="#" className="text-neutral-400 font-light hover:text-white text-sm transition-colors duration-200">
                            Cookie Policy
                        </a>
                    </div>}*/}
                    </div>
                </div>
            </div>
        </footer >
    )
}