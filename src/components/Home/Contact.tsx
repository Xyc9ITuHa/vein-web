import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon
} from '@heroicons/react/24/outline'
import { lazy, type SVGProps } from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Instagram } from 'lucide-react'
const Card = lazy(() => import('../common/Card.tsx'));

const social = [
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
]

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

function Contact() {
    return (
        <section id="contact" className="py-8 items-center w-full flex flex-col ">
            <Card className="max-w-4xl">
                <div className="flex flex-col items-center justify-center p-8">
                    {/* Header */}
                    <h2 className="font-helvetica font-bold text-3xl mb-4">So what are you waiting for?</h2>
                    <p className="text-center mb-8 text-gray-600">
                        Have questions or want to place an order? Reach out to us!
                    </p>

                    {/* Contact Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                        {contactInfo.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.href}
                                className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group"
                            >
                                <contact.icon className="h-8 w-8 text-gray-600 group-hover:text-lime-700 group-hover:h-9 group-hover:w-9 group-hover:mb-2 stroke-lime-700 transition-all duration-200 mb-3" />
                                <span className="text-gray-800 font-medium text-center">
                                    {contact.label}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Social Media Links */}
                    <div className="border-t pt-6 w-full">
                        <h3 className="text-lg font-semibold text-center mb-4">Follow Us</h3>
                        <div className="flex justify-center space-x-6">
                            {social.map((platform) => (
                                <a
                                    key={platform.name}
                                    href={platform.href}
                                    className="p-3 rounded-full bg-gray-100 hover:bg-lime-800 text-gray-600 hover:text-white transition-all duration-200 transform hover:scale-110"
                                    aria-label={`Follow us on ${platform.name}`}
                                >
                                    <platform.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 mb-4">
                            Ready to get started? We're here to help you every step of the way.
                        </p>
                    </div>
                </div>

            </Card>
        </section>
    );
}

export default Contact;