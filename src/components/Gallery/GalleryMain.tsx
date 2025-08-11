import { useState, useMemo, lazy, Suspense, useCallback } from "react";
import photosData from "../../data/photos.json";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

// Lazy load the heavy lightbox component
const Lightbox = lazy(() => import("yet-another-react-lightbox"));
// Plugins are not React components, so do not lazy load them with React.lazy

// Optimize photo data - add loading="lazy" and better sizing
const optimizePhotos = (photos: any[]) => {
    return photos.map(photo => ({
        ...photo,
        loading: "lazy" as const,
        // Add responsive sizes
        sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw",
        // Ensure proper aspect ratios to prevent layout shift
        style: { objectFit: 'cover' as const }
    }));
};

function GalleryMain() {
    const [index, setIndex] = useState(-1);
    const [lightboxPlugins, setLightboxPlugins] = useState<any[]>([]);

    // Memoize optimized photos to prevent recalculation
    const optimizedPhotos = useMemo(() =>
        optimizePhotos(photosData.photos),
        []
    );

    // Only load a subset initially for better performance
    const [visibleCount, setVisibleCount] = useState(20);
    const visiblePhotos = useMemo(() =>
        optimizedPhotos.slice(0, visibleCount),
        [optimizedPhotos, visibleCount]
    );

    // Lazy load more photos
    const loadMorePhotos = useCallback(() => {
        setVisibleCount(prev => Math.min(prev + 20, optimizedPhotos.length));
    }, [optimizedPhotos.length]);

    // Lazy load lightbox plugins only when needed
    const loadLightboxPlugins = useCallback(async () => {
        if (lightboxPlugins.length === 0) {
            const [fullscreen, slideshow, thumbnails, zoom] = await Promise.all([
                import("yet-another-react-lightbox/plugins/fullscreen"),
                import("yet-another-react-lightbox/plugins/slideshow"),
                import("yet-another-react-lightbox/plugins/thumbnails"),
                import("yet-another-react-lightbox/plugins/zoom")
            ]);

            // Import CSS dynamically
            await Promise.all([
                import("yet-another-react-lightbox/styles.css"),
                import("yet-another-react-lightbox/plugins/thumbnails.css")
            ]);

            setLightboxPlugins([
                fullscreen.default,
                slideshow.default,
                thumbnails.default,
                zoom.default
            ]);
        }
    }, [lightboxPlugins.length]);

    const handlePhotoClick = useCallback(async ({ index: clickedIndex }: { index: number }) => {
        await loadLightboxPlugins();
        setIndex(clickedIndex);
    }, [loadLightboxPlugins]);

    return (
        <>
            <section id="gallery" className="py-4 bg-yellow-50/70 drop-shadow-2xl">
                <div className="pt-13">
                    <div className="shadow-lg px-5 pb-4 mb-4">
                        <h2 className="text-5xl text-secondary font-bold my-4">
                            We collected our works in this beautiful gallery
                        </h2>
                    </div>
                    <div className="px-4">
                        <MasonryPhotoAlbum
                            photos={visiblePhotos}
                            onClick={handlePhotoClick}
                            // Optimize masonry performance
                            spacing={8}
                            columns={(containerWidth) => {
                                if (containerWidth < 400) return 1;
                                if (containerWidth < 800) return 2;
                                if (containerWidth < 1200) return 3;
                                return 4;
                            }}
                        />

                        {/* Load more button */}
                        {visibleCount < optimizedPhotos.length && (
                            <div className="text-center mt-8">
                                <button
                                    onClick={loadMorePhotos}
                                    className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
                                >
                                    Load More Photos ({optimizedPhotos.length - visibleCount} remaining)
                                </button>
                            </div>
                        )}

                        {/* Lazy load lightbox only when needed */}
                        {index >= 0 && (
                            <Suspense fallback={<div>Loading lightbox...</div>}>
                                <Lightbox
                                    slides={optimizedPhotos}
                                    open={index >= 0}
                                    index={index}
                                    close={() => setIndex(-1)}
                                    plugins={lightboxPlugins}
                                />
                            </Suspense>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default GalleryMain;