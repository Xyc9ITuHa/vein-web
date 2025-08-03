import ParallaxDiv from "../common/ParalaxDiv";
import leaf1 from '/images/depositphotos_127680572-stock-photo-horizontal-floral-border-pattern-seamless.png';

function ParallaxLeafs() {
    return (
        <ParallaxDiv className="relative z-30 w-full overflow-hidden">
            <div className="relative w-full h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48">
                <img
                    src={leaf1}
                    alt="parallax leaf border"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            </div>
        </ParallaxDiv>
    );
}

export default ParallaxLeafs;