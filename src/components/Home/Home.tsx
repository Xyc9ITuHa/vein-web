import Navigation from "../common/Navigation";
import Feedback from "./Feedback";
import Hero from "./Hero";
import Information from "./Information";
import MiniGallery from "./MiniGallery";
import Footer from "../common/Footer";

function Home() {
    return (
        <>
            <header>
                <Navigation />
                <Hero />
            </header>
            <main>
                <Information />
                <MiniGallery />
                <Feedback />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Home;