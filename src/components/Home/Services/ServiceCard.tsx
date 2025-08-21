interface ServiceCardProps {
    recomendation?: boolean;
    isVein?: boolean;
    name: string;
    price: string;
    servicesList: string[];
}

function ServiceCard(
    {
        recomendation = false,
        isVein = false,
        name = "Service Name",
        price = "0",
        servicesList = []
    }: ServiceCardProps
) {
    return (
        <>
            <div className="items-center relative group h-full w-full sm:w-80 md:w-96 lg:w-96 xl:w-96">
                <div className="absolute z-10 group-hover:-translate-y-1.5 transition-all duration-250">
                    {recomendation ?
                        (!isVein ?
                            <span className="relative inline-block before:absolute before:-inset-1 before:-inset-x-3 before:block before:rounded-2xl before:bg-amber-900 group-hover:before:bg-orange-800 transition-colors duration-300"><span className="relative text-white">Popular</span></span>
                            : <span className="relative inline-block before:absolute before:-inset-1 before:-inset-x-3 before:block before:rounded-2xl before:bg-lime-900 group-hover:before:bg-lime-800 transition-colors duration-300"><span className="relative text-white">Vein recommends</span></span>)
                        : null}
                </div>
                <div className="flex flex-col w-full sm:w-90 h-full items-center justify-between px-4 pt-4 pb-4 bg-white shadow-lg rounded-lg mt-4 mb-2 mx-2 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                    {/* Fixed height name container - 3 lines max */}
                    <div className="h-24 flex items-center justify-center mb-2">
                        <p className="text-3xl font-black text-center text-orange-950 group-hover:text-amber-900 transition-colors duration-300 line-clamp-3">
                            {name}
                        </p>
                    </div>

                    {/* Fixed height price */}
                    <div className="h-12 flex items-center justify-center mb-4">
                        <p className="text-4xl font-extrabold text-lime-900 group-hover:text-green-700 transition-colors duration-300">
                            {price}
                        </p>
                    </div>

                    {/* Flexible services list that takes remaining space */}
                    <div className="w-full border-t-1 border-gray-300 group-hover:border-gray-400 transition-colors duration-300 flex-1 flex flex-col">
                        <ul style={{ listStyleType: 'disc', padding: 14, margin: 0 }} className="flex-1">
                            {servicesList.map((service, index) => (
                                <li key={index} className="text-lg text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300 mb-2">
                                    <p>{service}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceCard;