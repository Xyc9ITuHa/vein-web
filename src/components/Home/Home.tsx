import Navigation from "../common/Navigation";
import Feedback from "./Feedback";
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
            <Feedback />
            <div className="h-700"></div>
        </>
    );
}

export default Home;