import Threads from "../common/Threads.tsx"

function Hero() {
    return (
        <>
            <div className="w-full relative h-800" id="gugu">
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>
        </>
    );
}

export default Hero;