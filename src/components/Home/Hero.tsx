import { LogoColors } from "../icons/LogoColors.tsx";
import Threads from "../common/Threads.tsx"
import ParallaxDiv from "../common/ParalaxDiv.tsx";
import ParalaxLeafs from "./ParalaxLeafs";

function Hero() {
    return (
        <>
            <section id="hero" className="relative">
                <div className="relative min-h-screen flex flex-col">
                    {/* Background threads */}
                    <div className="absolute inset-0 w-full h-full opacity-75 -z-10 top-80 ">
                        <Threads
                            amplitude={1}
                            distance={0}
                            enableMouseInteraction={true}
                        />
                    </div>

                    {/* Main content */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-8 sm:px-6 lg:px-8">
                        <ParallaxDiv speed={1.3} className="z-10 relative flex flex-col items-center">
                            <LogoColors className="h-52 w-auto md:h-60 lg:h-70 xl:h-80" />
                            <h1 className="font-dune text-6xl lg:text-7xl xl:text-8xl text-secondary mt-2 sm:mt-3">
                                VEIN
                            </h1>
                            <h4 className="text-2xl font-helvetica font-light mt-1 text-secondary">
                                floral design
                            </h4>
                        </ParallaxDiv>
                    </div>
                </div>
                <ParalaxLeafs />
            </section>
        </>
    );
}

export default Hero;