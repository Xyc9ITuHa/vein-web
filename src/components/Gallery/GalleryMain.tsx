import { useState } from "react";
import photosData from "../../data/photos.json";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


function GalleryMain() {
    const [index, setIndex] = useState(-1);

    const Gallery = photosData.photos;

    return (
        <>
            <section id="gallery" className="py-4 bg-yellow-50/70 drop-shadow-2xl">

                <div className="pt-13">
                    <div className="shadow-lg px-5 pb-4 mb-4">
                        <h2 className="text-5xl text-secondary font-bold my-4">We collected our works in this beautiful gallery</h2>
                    </div>
                    <div className="px-4">
                        <MasonryPhotoAlbum
                            photos={Gallery}
                            onClick={({ index }) => setIndex(index)}
                        />
                        <Lightbox
                            slides={Gallery}
                            open={index >= 0}
                            index={index}
                            close={() => setIndex(-1)}
                            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default GalleryMain;