import { createScope } from "animejs";
import { useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";

function Services() {
    const root = useRef(null);
    const scope = useRef<ReturnType<typeof createScope> | undefined>(null);

    useEffect(() => {
        scope.current = createScope({ root });

        return () => {
            scope.current && scope.current.revert();
        }
    });

    return (
        <>
            <section id="services" className="py-7 bg-gradient-to-tr from-amber-950/90 to-yellow-900/70">
                <h1 className="text-6xl font-black text-center mb-2 text-white">Our Services</h1>
                <p className="text-lg text-center mb-9 text-gray-100">We offer a range of services to meet your creative needs.</p>
                <div className="justify-center items-center flex md:border-t-3  border-white/50 pt-6 pb-19 mb-9 ">

                    <div className="flex flex-col sm:grid sm:grid-cols-1 sm:gap-y-10 md:mx-1 md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-7 lg:grid lg:grid-cols-2 lg:gap-x-40 lg:gap-y-10 mx-6 items-center justify-center">
                        <ServiceCard
                            name="Seasonal decor"
                            recomendation={false}
                            price="600€"
                            servicesList={[
                                'Festive decoration concept',
                                'Flowers, decor, lighting',
                                'Installation and arrangement',
                                'Work of the floristry team'
                            ]}
                        />
                        <ServiceCard
                            name="Window and facade design"
                            recomendation={true}
                            price="800€"
                            servicesList={[
                                'Concept and design',
                                'Use of natural materials',
                                'Installation and dismantling',
                                'Seasonal updates'
                            ]}
                        />
                        <ServiceCard
                            name="Floral decoration for events"
                            recomendation={false}
                            price="1200€"
                            servicesList={[
                                'Decor and floristry concept',
                                'Flowers, textiles, photo zones',
                                'Installation and dismantling',
                                'Work of the floristry team'
                            ]}
                        />
                        <ServiceCard
                            name="Installations made from natural materials"
                            recomendation={true}
                            isVein={true}
                            price="2500€"
                            servicesList={[
                                'Original installation designt',
                                'Use of eco-friendly materials',
                                'Technical solutions and installation',
                                'Dismantling or long-term exhibition'
                            ]}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;