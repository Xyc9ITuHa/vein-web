import { useEffect, useRef } from 'react';
import { useIntersection } from './useIntersection';

interface ParallaxDivProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

const ParallaxDiv = ({ children, speed = 1, className = "" }: ParallaxDivProps) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersection(elementRef, '100px');


    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const element = elementRef.current;

            if (element) {
                const rate = scrolled * (speed - 1);
                element.style.transform = `translateY(${rate}px)`;
            }
        };

        let ticking = false;
        const optimizedScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', optimizedScroll, { passive: true });
        return () => window.removeEventListener('scroll', optimizedScroll);
    }, [speed]);

    if (!isVisible) {
        return <div
            ref={elementRef}
            className={`relative ${className}`}>
            {children}
        </div>;
    } else {
        return (
            <div
                ref={elementRef}
                className={`relative ${className}`}
                style={{
                    willChange: 'transform',
                }}
            >
                {children}
            </div>
        );
    }
};

export default ParallaxDiv;