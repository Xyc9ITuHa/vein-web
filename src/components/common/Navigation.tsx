

function Navigation() {
    return (
        <nav className="fixed top-0 w-full bg-dark-bg/90 backdrop-blur-sm border-b border-border z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div>
                        <div className="inline w-1">
                            <img src="../../images/logo-colors.svg" alt="" />
                        </div>
                        <h1 className="font-dune text-3xl self-center tracking-wide text-accent">
                            VEIN
                        </h1>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="block text-white ">
                            <button className="hover:bg-dark-bg/20 hover:outline-white outline-white/0 outline-1 p-1.5 px-2.5 transition-all duration-200 font-helvetica font-medium">
                                Home
                            </button>
                        </a>
                        <a href="#home" className="block text-white ">
                            <button className="hover:bg-dark-bg/20 hover:outline-2 outline-white p-1.5 px-2.5 transition-all duration-200 font-helvetica font-medium">
                                About us
                            </button>
                        </a>
                        <a href="#home" className="block text-white ">
                            <button className="hover:bg-dark-bg/20 hover:outline-2 outline-white p-1.5 px-2.5 transition-all duration-200 font-helvetica font-medium">
                                Gallery
                            </button>
                        </a>
                        <a href="#home" className="block text-white ">
                            <button className="hover:bg-dark-bg/20 hover:outline-2 outline-white p-1.5 px-2.5 transition-all duration-200 font-helvetica font-medium">
                                Contacts
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
