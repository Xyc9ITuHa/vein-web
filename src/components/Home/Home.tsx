import { lazy, Suspense } from "react";
import Navigation from "../common/Navigation";
import Hero from "./Hero";

const Information = lazy(() => import("./Information"));
const MiniGallery = lazy(() => import("./MiniGallery"));
const Feedback = lazy(() => import("./Feedback"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("../common/Footer"));

const SectionLoader = ({ height = "h-64" }: { height?: string }) => (
    <div className={`${height} bg-gray-100 animate-pulse rounded-lg mx-4 my-8`}>
        <div className="flex items-center justify-center h-full">
            <div className="text-gray-400">Loading...</div>
        </div>
    </div>
);

function Home() {
    return (
        <>
            <header>
                <Navigation />
                <Hero />
            </header>

            <main>
                <Suspense fallback={<SectionLoader />}>
                    <Information />
                </Suspense>

                <Suspense fallback={<SectionLoader />}>
                    <MiniGallery />
                </Suspense>

                <Suspense fallback={<SectionLoader />}>
                    <Feedback />
                </Suspense>

                <Suspense fallback={<SectionLoader />}>
                    <Contact />
                </Suspense>
            </main>

            <footer>
                <Suspense fallback={<SectionLoader height="h-32" />}>
                    <Footer />
                </Suspense>
            </footer>
        </>
    );
}

export default Home;