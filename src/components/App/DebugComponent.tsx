import { useEffect } from 'react';

export const DebugComponent = () => {
    useEffect(() => {
        // Monitor long tasks
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.duration > 50) { // Tasks longer than 50ms
                        console.warn('Long task detected:', {
                            name: entry.name,
                            duration: entry.duration,
                            startTime: entry.startTime
                        });
                    }
                });
            });

            observer.observe({ entryTypes: ['longtask'] });

            return () => observer.disconnect();
        }

        // Monitor frame drops
        let lastTime = performance.now();
        let frameCount = 0;

        const checkFrameRate = () => {
            const currentTime = performance.now();
            frameCount++;

            if (currentTime - lastTime >= 1000) {
                const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                if (fps < 30) {
                    console.warn('Low FPS detected:', fps);
                }
                frameCount = 0;
                lastTime = currentTime;
            }

            requestAnimationFrame(checkFrameRate);
        };

        requestAnimationFrame(checkFrameRate);
    }, []);

    return null;
};