import { useEffect, useRef, useState, useCallback } from 'react';

interface ParallaxDivProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
    rootMargin?: string;
}

const ParallaxDiv = ({
    children,
    speed = 1,
    className = "",
    rootMargin = "100px"
}: ParallaxDivProps) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const rafId = useRef<number | undefined>(undefined);

    // Optimized scroll handler using RAF and caching
    const handleScroll = useCallback(() => {
        if (!elementRef.current || !isVisible) return;

        const scrolled = window.pageYOffset;
        const rate = scrolled * (speed - 1);
        elementRef.current.style.transform = `translateY(${rate}px)`;
    }, [speed, isVisible]);

    // Throttled scroll handler
    const throttledScroll = useCallback(() => {
        if (rafId.current) return;

        rafId.current = requestAnimationFrame(() => {
            handleScroll();
            rafId.current = undefined;
        });
    }, [handleScroll]);

    // Intersection Observer setup
    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold: 0
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [rootMargin]);

    // Scroll listener setup - only when visible
    useEffect(() => {
        if (!isVisible) return;

        window.addEventListener('scroll', throttledScroll, { passive: true });

        // Initial transform calculation
        throttledScroll();

        return () => {
            window.removeEventListener('scroll', throttledScroll);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [isVisible, throttledScroll]);

    return (
        <div
            ref={elementRef}
            className={`relative ${className}`}
            style={isVisible ? { willChange: 'transform' } : undefined}
        >
            {children}
        </div>
    );
};

export default ParallaxDiv;