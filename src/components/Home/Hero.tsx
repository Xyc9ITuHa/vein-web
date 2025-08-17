import { lazy, useEffect, useRef } from "react";
import { LogoColors } from "../icons/LogoColors.tsx";
import { animate, createScope, onScroll, utils } from "animejs";
const ring_xl = "/images/ring_xl.webp";
const ring_lg = "/images/ring_lg.webp";
const ring_md = "/images/ring_md.webp";
const ring_sm = "/images/ring_sm.webp";
const ParallaxDiv = lazy(() => import("../common/ParalaxDiv.tsx"));



function Hero() {
    const root = useRef(null);
    const scope = useRef<ReturnType<typeof createScope> | undefined>(null)

    useEffect(() => {
        scope.current = createScope({ root });


        utils.$('#ring').forEach(($ring, key) => {
            animate($ring, {
                rotate: key % 2 === 0 ? '1turn' : '-1turn',
                loop: true,
                ease: 'linear',
                duration: 100000,
            });
        });

        animate('#parallax', {
            translateY: ['0%', '100%'],
            autoplay: onScroll({
                container: 'hero-container',
                enter: 'bottom top-=20px',
                leave: 'top bottom+=20px',
                sync: true,
            })
        });


        return () => { scope.current && scope.current.revert(); };
    }, []);

    return (
        <>
            <section id="hero" className="relative">
                <div ref={root} className="relative min-h-screen flex flex-col hero-container">



                    {/* Main content */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-8 sm:px-6 lg:px-8">
                        <div className="absolute -z-70 inset-0 overflow-hidden bg-gradient-to-bl from-cream to-accent">
                            <img src={ring_sm} id="ring" alt="small ring from flowers photo" className="absolute opacity-15 sepia brightness-200" />
                            <img src={ring_md} id="ring" alt="medium ring from flowers photo" className="absolute opacity-12 sepia-90 brightness-175" />
                            <img src={ring_lg} id="ring" alt="large ring from flowers photo" className="absolute opacity-9 sepia-80 brightness-150" />
                            <img src={ring_xl} id="ring" alt="very large ring from flowers photo" className="absolute opacity-6 sepia-70 brightness-100" />
                        </div>
                        <ParallaxDiv className="-z-60 relative flex flex-col items-center">
                            <LogoColors className="h-52 w-auto md:h-60 lg:h-70 xl:h-80" />
                            <h1 className="font-dune text-6xl lg:text-7xl xl:text-8xl text-secondary mt-2 sm:mt-3">
                                VEIN
                            </h1>
                            <h2 className="text-3xl font-helvetica font-light mt-1 text-secondary">
                                design
                            </h2>
                        </ParallaxDiv>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Hero;