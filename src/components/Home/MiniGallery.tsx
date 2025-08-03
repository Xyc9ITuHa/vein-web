import { useState, useEffect } from "react";
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

type Photo = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

function MiniGallery() {
    const [miniGallery, setMiniGallery] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(-1);

    // Function to generate random gallery
    const generateGallery = async () => {
        const galleryPhotos = [];

        try {
            setLoading(true);
            const data = photosData;
            const availablePhotos = [...data.photos];
            for (let i = 0; i < Math.min(10, availablePhotos.length); i++) {
                const randomIndex = Math.floor(Math.random() * availablePhotos.length);
                const selectedPhoto = availablePhotos.splice(randomIndex, 1)[0];
                galleryPhotos.push(selectedPhoto);
            }

            setMiniGallery(galleryPhotos);

        } catch (error) {
            console.error("Error generating gallery:", error);
            setMiniGallery([]);
        } finally {
            setLoading(false);
        }
    };

    // Load gallery when component mounts
    useEffect(() => {
        generateGallery();
    }, []);

    if (loading) {
        return (
            <section className="py-4 px-2 bg-yellow-50/70 drop-shadow-2xl">
                <div className="flex justify-center items-center h-32">
                    <p className="text-lg">Loading gallery preview...</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="py-4 px-2 bg-yellow-50/70 drop-shadow-2xl">
                <h2 className="font-helvetica font-bold text-5xl my-2">
                    Look at our work <br />
                    Or better visit our{" "}
                    <a className="font-extrabold text-dark-bg underline decoration-wavy hover:cursor-pointer">
                        Gallery
                    </a>
                </h2>
                <div className="pt-3">
                    {miniGallery.length > 0 ? (
                        <>
                            <MasonryPhotoAlbum
                                photos={miniGallery}
                                onClick={({ index }) => setIndex(index)}
                            />
                            <Lightbox
                                slides={miniGallery}
                                open={index >= 0}
                                index={index}
                                close={() => setIndex(-1)}
                                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                            />
                        </>
                    ) : (
                        <p>No photos available</p>
                    )}
                </div>

                <button
                    onClick={generateGallery}
                    className="mt-4 px-2 py-2 bg-dark-bg text-white rounded-full hover:bg-opacity-80"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                </button>
            </section>
        </>
    );
}

export default MiniGallery;