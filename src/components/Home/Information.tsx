import photo from "../../images/photo.png";
import flowers from "../../images/flowers.webp";
import useIsInViewport from "../common/useIsInViewport";

function Information() {
    const [flowersRef, isInViewport] = useIsInViewport<HTMLImageElement>({ threshold: 0.5 });
    const text = `We are a floral design studio that specializes in creating unique and beautiful floral arrangements for all occasions. Our team of experienced florists is dedicated to providing exceptional service and quality, ensuring that every arrangement is crafted with care and attention to detail. Whether you're looking for a stunning bouquet for a wedding, a thoughtful gift for a loved one, or simply want to brighten up your home, we have the perfect floral solution for you.`;

    return (
        <section id="information" className="py-16 relative">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                <div className="flex-shrink-0 ">
                    <img
                        ref={flowersRef}
                        src={flowers}
                        alt="flowers on the floor"
                        className={`overflow-visible absolute -z-10 transition-all duration-1000 ease-in-out w-full h-auto lg:top-0 ${isInViewport
                            ? 'blur-none opacity-80 translate-y-0'
                            : 'opacity-0 translate-y-10 blur-lg'
                            }`}
                    />
                    <h1 className="font-helvetica text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-dark-bg font-black leading-none relative z-10">
                        Who<br />We<br />Are.
                    </h1>
                </div>

                {/* Content Card */}
                <div className="shadow-xl rounded-2xl w-full bg-white flex flex-col sm:flex-row overflow-hidden">
                    {/* Text Content */}
                    <div className="flex-1 p-6 sm:p-8 flex items-center">
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                            {text}
                        </p>
                    </div>
                    <div className="flex-shrink-0 sm:w-80 md:w-96">
                        <img
                            src={photo}
                            alt="Floral design studio"
                            className="w-full h-64 sm:h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Information;