import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useIntersection } from './useIntersection';

const throttle = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
): T => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastExecTime = 0;

    return ((...args: Parameters<T>) => {
        const currentTime = Date.now();

        if (currentTime - lastExecTime > delay) {
            func(...args);
            lastExecTime = currentTime;
        } else {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    }) as T;
};

interface Position {
    x: number;
    y: number;
}

interface Rotation {
    rotateX: number;
    rotateY: number;
}

interface Use3DCursorReturn {
    elementRef: React.RefObject<HTMLDivElement | null>;
    position: Position;
    rotation: Rotation;
    isTracking: boolean;
}


const use3DCursor = (sensitivity: number = 20): Use3DCursorReturn => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [rotation, setRotation] = useState<Rotation>({ rotateX: 0, rotateY: 0 });
    const [isTracking, setIsTracking] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback(
        throttle((e: MouseEvent) => {
            if (!elementRef.current) return;

            const rect = elementRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const x = e.clientX - centerX;
            const y = e.clientY - centerY;

            // Convert to percentage of container size with bounds checking
            const rotateY = Math.max(-45, Math.min(45, (x / rect.width) * sensitivity));
            const rotateX = Math.max(-45, Math.min(45, -(y / rect.height) * sensitivity));

            setPosition({ x, y });
            setRotation({ rotateX, rotateY });
        }, 16), // ~60fps
        [sensitivity]
    );

    const handleMouseEnter = useCallback(() => {
        setIsTracking(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsTracking(false);
        setRotation({ rotateX: 0, rotateY: 0 });
        setPosition({ x: 0, y: 0 });
    }, []);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

    return { elementRef, position, rotation, isTracking };
};

interface Div3DProps {
    children: React.ReactNode;
    className?: string;
    sensitivity?: number;
    disabled?: boolean;
    perspective?: number;
    transitionDuration?: number;
}

// 3D Card Component
const Div3D = ({
    children,
    className = '',
    sensitivity = 15,
    disabled = false,
    perspective = 1000,
    transitionDuration = 300
}: Div3DProps) => {
    const { elementRef, rotation, isTracking } = use3DCursor(sensitivity);
    const isVisible = useIntersection(elementRef, '100px');
    const shouldApply3D = !disabled && isVisible;
    const baseClasses = `relative transform-gpu ${className}`;
    const transitionClasses = shouldApply3D
        ? `transition-transform duration-${transitionDuration} ease-out`
        : '';
    const transform = shouldApply3D
        ? `perspective(${perspective}px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`
        : 'none';
    return (
        <div
            ref={elementRef}
            className={`${baseClasses} ${transitionClasses}`.trim()}
            style={{
                transform,
                transformStyle: shouldApply3D ? 'preserve-3d' : 'flat',
                willChange: isTracking ? 'transform' : 'auto'
            }}
            data-3d-active={shouldApply3D}
        >
            {children}
        </div>
    );
};

export default Div3D;

