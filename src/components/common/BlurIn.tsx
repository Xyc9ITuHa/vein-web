import { useEffect, useState, useRef } from 'react';

function useIntersectionObserver(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [intersectionRatio, setIntersectionRatio] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
            setIntersectionRatio(entry.intersectionRatio);
        }, {
            threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1],
            rootMargin: '0px',
            ...options
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return { elementRef, isIntersecting, intersectionRatio };
}

interface BlurInProps {
    children: React.ReactNode;
    className?: string;
    blurAmount?: number;
    scaleAmount?: [number, number];
}

const BlurIn = ({
    children,
    className = '',
    blurAmount = 5,
    scaleAmount = [0.8, 1.0]

}: BlurInProps) => {
    const { elementRef, intersectionRatio } = useIntersectionObserver();

    const [minScale, maxScale] = scaleAmount;
    const scale = minScale + (intersectionRatio * (maxScale - minScale));
    const blur = (1 - intersectionRatio) * blurAmount;

    return (
        <div
            ref={elementRef}
            className={className}
            style={{
                transform: `scale(${scale})`,
                filter: `blur(${blur}px)`,
            }}
        >
            {children}
        </div>
    );
}
export default BlurIn;