import { LogoColors } from "../icons/LogoColors.tsx";
import Threads from "../common/Threads.tsx"
import ParallaxDiv from "../common/ParalaxDiv.tsx";


function Hero() {
    return (
        <>
            <div className="mt-16 relative flex flex-col items-center justify-center text-center">
                <div className="w-full h-80 opacity-75 -z-10 absolute transform top-0" >
                    <Threads
                        amplitude={1}
                        distance={0}
                        enableMouseInteraction={true}
                    />
                </div>
                <div className="w-full h-105 justify-center items-center flex flex-col">
                    <ParallaxDiv speed={1.4} className="z-10 relative">
                        <LogoColors className="self-center h-52 w-auto" />
                        <h1 className="font-dune text-7xl text-secondary self-center mt-3">VEIN</h1>
                        <h4 className="text-2xl font-helvetica font-light mt-0.4 self-center text-secondary">floral design</h4>
                    </ParallaxDiv>
                </div>
            </div>
        </>
    );
}

export default Hero;