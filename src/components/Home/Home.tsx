import Navigation from "../common/Navigation";
import Hero from "./Hero";
import Information from "./Information";
import MiniGallery from "./MiniGallery";

function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <Information />
            <MiniGallery />
            <div className="h-700"></div>
        </>
    );
}

export default Home;