const photo = "/images/alona_photo.webp";
const flowers = "/images/flowers.webp";
import { useIntersection } from "../common/useIntersection";
import { lazy, useRef } from "react";
const Card = lazy(() => import("../common/Card"));

const Information = () => {
    const flowersRef = useRef(null);
    const isVisible = useIntersection(flowersRef, "100px");


    return (
        <section id="information" className="py-16 relative border-t-2 border-light-oak/50 bg-cream -z-20">
            <div className="container mx-auto px-4 flex flex-col lg:flex-col xl:flex-row gap-8 lg:gap-12 items-start">
                <div className="flex-shrink-0 md:w-full lg:w-auto">
                    <img
                        ref={flowersRef}
                        src={flowers}
                        alt="flowers on the floor"
                        className={`absolute -z-10 transition-all duration-1000 ease-in-out w-full h-auto lg:top-0 ${isVisible
                            ? 'opacity-70 scale-100 blur-none'
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
};

export default Information;