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



function MiniGallery() {
    const photos = photosData.photos
    const [index, setIndex] = useState(-1);

    return (
        <>
            <section className="py-4 px-2 bg-yellow-50/70 drop-shadow-2xl">
                <h2 className="font-helvetica font-bold text-5xl my-2">Look at our work <br /> Or better visit our <a className="font-extrabold text-dark-bg underline decoration-wavy hover:cursor-pointer">Gallery</a></h2>
                <div className="pt-3">
                    <MasonryPhotoAlbum photos={photos} onClick={({ index }) => setIndex(index)} />

                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                </div>
            </section>
        </>
    );
}

export default MiniGallery;