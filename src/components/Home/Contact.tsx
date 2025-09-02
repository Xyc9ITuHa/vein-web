import { lazy, type SVGProps } from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { WhatsApp } from '../icons/WhatsApp.tsx'
import Form from './Form.tsx';
const Card = lazy(() => import('../common/Card.tsx'));

const social = [
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
            <Form />
        </section>
    );
}

export default Contact;