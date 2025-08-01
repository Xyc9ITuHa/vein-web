import { useEffect, useRef } from 'react';

interface ParallaxDivProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

const ParallaxDiv = ({ children, speed = 1, className = "" }: ParallaxDivProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const element = elementRef.current;

            if (element) {
                // Fixed calculation: higher speed = faster movement
                const rate = scrolled * (speed - 1);
                // Apply transform directly for better performance
                element.style.transform = `translateY(${rate}px)`;
            }
        };

        // Throttle scroll events for better performance
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

    return (
        <div
            ref={elementRef}
            className={`relative ${className}`}
            style={{
                willChange: 'transform', // Optimize for animations
            }}
        >
            {children}
        </div>
    );
};

export default ParallaxDiv;