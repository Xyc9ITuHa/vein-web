import { LogoColors } from '../icons/LogoColors'
import type { SVGProps } from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Mail, MapPin, Phone } from 'lucide-react'
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
                <svg role="img" {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
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