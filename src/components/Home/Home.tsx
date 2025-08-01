import Navigation from "../common/Navigation";
import Hero from "./Hero";
import ParalaxLeafs from "./ParalaxLeafs";

function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <ParalaxLeafs />
            <div className="h-700"></div>
        </>
    );
}

export default Home;