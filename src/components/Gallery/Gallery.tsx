import Footer from "../common/Footer.tsx";
import Navigation from "../common/Navigation.tsx";
import Contact from "../Home/Contact.tsx";
import GalleryMain from "./GalleryMain.tsx";

function Gallery() {
    return (<>
        <header>
            <Navigation />
        </header>
        <main>
            <GalleryMain />
            <Contact />
        </main>
        <Footer />
    </>);
}

export default Gallery;