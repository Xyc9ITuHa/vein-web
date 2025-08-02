import { useRef, useEffect, useState } from 'react';
import type { RefObject } from 'react';

interface UseIsInViewportOptions {
  threshold?: number;
  rootMargin?: string;
}

function useIsInViewport<T extends Element = HTMLElement>(
  options: UseIsInViewportOptions = {}
): [RefObject<T | null>, boolean] {
  const elementRef = useRef<T>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isInViewport];
}

export default useIsInViewport;
