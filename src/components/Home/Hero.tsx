import { lazy } from "react";
import { LogoColors } from "../icons/LogoColors.tsx";

const ParallaxDiv = lazy(() => import("../common/ParalaxDiv.tsx"));


function Hero() {
    return (
        <>
            <section id="hero" className="relative">
                <div className="relative min-h-screen flex flex-col">


                    {/* Main content */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-8 sm:px-6 lg:px-8">
                        <ParallaxDiv speed={1.3} className="-z-60 relative flex flex-col items-center">
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
            </section>
        </>
    );
}

export default Hero;