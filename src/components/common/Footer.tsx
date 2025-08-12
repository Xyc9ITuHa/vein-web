import { LogoColors } from '../icons/LogoColors'
import type { SVGProps } from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { WhatsApp } from '../icons/WhatsApp'

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
            href: 'https://www.instagram.com/veindesign.be/',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <Instagram {...props} />
            ),
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/32498811365?text=Hello!%20I%20need%20flowers%20for%20an%20event',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <WhatsApp {...props} />
            ),
        },
    ]
}


const contactInfo = [
    {
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <Phone strokeWidth={3} {...props} />
        ),
        label: '+32 (49) 881 1365',
        href: 'tel:+32498811365'
    },
    {
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <Mail strokeWidth={3} {...props} />
        ),
        label: 'info.veindesign@gmail.com',
        href: 'mailto:info.veindesign@gmail.com'
    },
    {
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <MapPin strokeWidth={3} {...props} />
        ),
        label: 'Bruges, Belgium',
        href: 'https://maps.google.com/maps?q=Bruges,+Belgium'
    }
]

export default function Footer() {
    return (
        <footer className="bg-dark-bg/95 backdrop-blur-xs border-t border-light-oak/20 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 overflow-hidden">

                {/* Logo and brand section */}
                <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <LogoColors
                        className="h-auto scale-500 absolute w-auto opacity-15 bottom-0 -z-10"
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
                        <div className="flex flex-col space-y-2 z-10">
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
                        <div className="flex flex-col space-y-3 z-10">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    target='_blank'
                                    className="flex items-center text-neutral-400 font-light hover:text-white text-sm transition-colors duration-200 group"
                                >
                                    <info.icon className="h-4 w-4 mr-2 group-hover:text-white transition-all" />
                                    {info.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social media */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-white font-medium mb-4">Follow Us</h3>
                        <div className="flex space-x-4 z-10s">
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