import { useEffect } from "react";
import { animate, onScroll, createScope, utils, } from "animejs";
const photo = "/images/alona_photo.webp";
const flowers = "/images/flowers.webp";
import { useIntersection } from "../common/useIntersection";
import { lazy, useRef } from "react";
const Card = lazy(() => import("../common/Card"));

const Information = () => {
    const flowersRef = useRef(null);
    const isVisible = useIntersection(flowersRef, "100px");
    const root = useRef(null);
    const scope = useRef<ReturnType<typeof createScope> | undefined>(null)

    useEffect(() => {
        scope.current = createScope({ root });

        utils.set('.animated-border', {
            '--border-width': '0%',
            '--border-left': 'auto',
        }
        );

        utils.$('.animated-border').forEach(($el, idx) => {
            idx % 2 === 0 ?
                animate($el, {
                    '--border-width': '100%',
                    autoplay: onScroll({
                        container: 'phrase-container',
                        enter: 'center top',
                        leave: 'top bottom',
                        sync: true,
                    })
                }) :
                animate($el, {
                    '--border-width': '100%',
                    '--border-right': '0',
                    autoplay: onScroll({
                        container: 'phrase-container',
                        enter: 'center top',
                        leave: 'top bottom',
                        sync: true,
                    })
                });
        });

        utils.$('#phrase').forEach($phrase => {
            animate($phrase, {
                opacity: [0, 1],
                autoplay: onScroll({
                    container: 'phrase-container',
                    enter: 'bottom top',
                    leave: 'center bottom',
                    sync: true,
                })
            });
        });

        animate('#whoText', {
            x: '2rem',
            opacity: [0, 1],
            filter: ['blur(10px)', 'blur(0px)'],
            autoplay: onScroll({
                container: 'phrase-container',
                enter: 'bottom top',
                leave: 'center+=20% top',
                sync: true,
            })
        });

        animate('#expText', {
            x: '-2rem',
            opacity: [0, 1],
            filter: ['blur(10px)', 'blur(0px)'],
            autoplay: onScroll({
                container: 'phrase-container',
                enter: 'bottom top',
                leave: 'center+=20% top',
                sync: true,
            })
        });

        animate('#philText', {
            scale: [0.9, 1],
            opacity: [0, 1],
            filter: ['blur(10px)', 'blur(0px)'],
            autoplay: onScroll({
                container: 'phrase-container',
                enter: 'bottom top',
                leave: 'center+=20% top',
                sync: true,
            })
        });

        return () => { scope.current && scope.current.revert(); };
    }, []);

    return (
        <section id="information" ref={root} className="py-16 relative border-t-2 border-light-oak/50 bg-cream -z-50">
            <div className="top-0">
                <h1 className="font-black text-dark-bg text-6xl -z-50 top-3 mx-5">About Vein</h1>

                <div className="-z-30 h-fit bg-cream w-full pt-8 pb-12 phrase-container lg:px-16 xl:px-24">
                    <div className="mb-12 lg:mb-10 animated-border pb-10">
                        <p id="phrase" className="mb-6 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-bg tracking-tight">
                            Who We Are
                        </p>
                        <p id="whoText" className="text-dark-bg text-left max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose font-light">
                            VEIN is a creative team of artists, florists, and designers who specialize in creating unique decorative solutions using natural materials. We transform commercial spaces, create memorable events, and bring the beauty of nature into interior environments through innovative design approaches.
                        </p>
                    </div>
                    <div className="mb-12 lg:mb-10 animated-border pb-10">
                        <p id="phrase" className="mb-6 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-bg tracking-tight">
                            Our Expertise
                        </p>
                        <p id="expText" className="text-dark-bg text-right max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose font-light ml-auto">
                            We provide comprehensive design services including storefront and facade decoration, art objects and installations for events, space decoration, floristry, and interior design. Our work spans from intimate boutique displays to large-scale commercial installations.
                        </p>
                    </div>
                    <div className="mb-8 animated-border pb-10">
                        <p id="phrase" className="mb-6 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-bg tracking-tight">
                            Our Philosophy
                        </p>
                        <p id="philText" className="text-dark-bg text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose font-light mx-auto">
                            Our philosophy is rooted in respect for natural beauty. We emphasize textures, lines, and imperfections gifted by nature. We work with moss, wood, bark, dried flowers, mycelium, and organic fabiders — everything that lives in dialogue with the environment.
                        </p>
                    </div>

                </div>
            </div>
            <div className="container mx-auto px-4 flex flex-col lg:flex-col xl:flex-row gap-8 lg:gap-12 items-start">
                <div className="flex-shrink-0 md:w-full lg:w-auto">
                    <img
                        ref={flowersRef}
                        src={flowers}
                        alt="flowers on the floor"
                        className={`absolute -z-10 transition-all duration-1000 ease-in-out w-full h-auto ${isVisible
                            ? 'opacity-50 scale-100 blur-none'
                            : 'opacity-0 scale-75 blur-lg'
                            }`}
                    />
                    <h1 className="font-helvetica text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-dark-bg font-black leading-none relative z-10">
                        About<br />Alona
                    </h1>
                </div>

                <Card className="flex flex-col md:flex-row z-10">
                    <div className="flex-1 p-6 sm:p-8 flex items-center">
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                            Alona Malafeieva is a floral designer and decorator known for her poetic, nature-inspired installations. A graduate of the ArtHouse School of Floral Design in Dnipro, Ukraine, she has over 10 years of experience transforming urban spaces with flowers, grasses, and textures.

                            Now based in Belgium, Alona is the founder of <em>Vein Design</em>—a studio specializing in elegant storefronts, boutique displays, and intimate event styling. In 2022, her 600 m² ceiling installation made of natural materials won the Restaurant & Bar Design Award in London. In 2025, she presents her sixth creation at <em>Floraliën Brussels</em>—a signature piece blending raw beauty and modern design.
                        </p>
                    </div>
                    <div className="flex-shrink-0 sm:w-full md:w-96">
                        <img
                            src={photo}
                            alt="Floral design studio"
                            className="w-full h-64 sm:h-full object-cover "
                        />
                    </div>
                </Card>
            </div>
        </section>
    );
}
export default Information;