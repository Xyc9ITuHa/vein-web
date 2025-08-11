import { useState, useEffect, lazy, Suspense, useCallback, useMemo } from "react";
import photosData from "../../data/photos.json";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

// Lazy load ALL lightbox components and plugins
const Lightbox = lazy(() => import("yet-another-react-lightbox"));

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
    const [lightboxPlugins, setLightboxPlugins] = useState<any[]>([]);
    const [lightboxReady, setLightboxReady] = useState(false);

    // Memoize available photos to prevent recreation
    const availablePhotos = useMemo(() => photosData.photos, []);

    // Function to generate random gallery - optimized
    const generateGallery = useCallback(async () => {
        try {
            setLoading(true);
            const shuffled = [...availablePhotos].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, Math.min(10, shuffled.length));
            setMiniGallery(selected);
        } catch (error) {
            console.error("Error generating gallery:", error);
            setMiniGallery([]);
        } finally {
            setLoading(false);
        }
    }, [availablePhotos]);

    // Load gallery when component mounts
    useEffect(() => {
        generateGallery();
    }, [generateGallery]);

    // Lazy load lightbox plugins only when first image is clicked
    const loadLightboxPlugins = useCallback(async () => {
        if (lightboxPlugins.length === 0 && !lightboxReady) {
            setLightboxReady(true);

            try {
                // Load plugins and CSS dynamically
                const [
                    { default: Fullscreen },
                    { default: Slideshow },
                    { default: Thumbnails },
                    { default: Zoom }
                ] = await Promise.all([
                    import("yet-another-react-lightbox/plugins/fullscreen"),
                    import("yet-another-react-lightbox/plugins/slideshow"),
                    import("yet-another-react-lightbox/plugins/thumbnails"),
                    import("yet-another-react-lightbox/plugins/zoom")
                ]);

                // Load CSS dynamically
                await Promise.all([
                    import("yet-another-react-lightbox/styles.css"),
                    import("yet-another-react-lightbox/plugins/thumbnails.css")
                ]);

                setLightboxPlugins([Fullscreen, Slideshow, Thumbnails, Zoom]);
            } catch (error) {
                console.error("Error loading lightbox plugins:", error);
                setLightboxPlugins([]);
            }
        }
    }, [lightboxPlugins.length, lightboxReady]);

    // Handle photo click with lazy plugin loading
    const handlePhotoClick = useCallback(async ({ index: clickedIndex }: { index: number }) => {
        await loadLightboxPlugins();
        setIndex(clickedIndex);
    }, [loadLightboxPlugins]);

    // Optimized photos with lazy loading attributes
    const optimizedPhotos = useMemo(() =>
        miniGallery.map(photo => ({
            ...photo,
            loading: "lazy" as const,
            sizes: "(max-width: 768px) 50vw, 33vw"
        })), [miniGallery]
    );

    if (loading) {
        return (
            <section className="py-4 px-2 bg-yellow-50/70 drop-shadow-2xl">
                <div className="flex justify-center items-center h-32">
                    <div className="animate-pulse">
                        <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
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
                        <em>Gallery</em>
                    </a>
                </h2>
                <div className="pt-3">
                    {optimizedPhotos.length > 0 ? (
                        <>
                            <MasonryPhotoAlbum
                                photos={optimizedPhotos}
                                onClick={handlePhotoClick}
                                spacing={4}
                                columns={(containerWidth) => {
                                    if (containerWidth < 400) return 1;
                                    if (containerWidth < 800) return 2;
                                    return 3;
                                }}
                            />

                            {/* Only render lightbox when opened and plugins are loaded */}
                            {index >= 0 && (
                                <Suspense fallback={
                                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                                        <div className="text-white">Loading lightbox...</div>
                                    </div>
                                }>
                                    <Lightbox
                                        slides={optimizedPhotos}
                                        open={index >= 0}
                                        index={index}
                                        close={() => setIndex(-1)}
                                        plugins={lightboxPlugins}
                                        // Optimize lightbox performance
                                        animation={{ fade: 250 }}
                                        carousel={{ finite: true }}
                                    />
                                </Suspense>
                            )}
                        </>
                    ) : (
                        <p>No photos available</p>
                    )}
                </div>

                <button
                    onClick={generateGallery}
                    className="mt-4 px-2 py-2 bg-dark-bg text-white rounded-full hover:bg-opacity-80 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:bg-amber-950 transition-all duration-300 ease-in-out"
                    aria-label="Refresh Gallery"
                    disabled={loading}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-6 ${loading ? 'animate-spin' : ''}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
            </section>
        </>
    );
}

export default MiniGallery;