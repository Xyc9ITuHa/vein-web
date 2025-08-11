import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import './InfiniteScroll.css';

interface InfiniteScrollItem {
  content: ReactNode;
}

interface InfiniteScrollProps {
  width?: string;
  maxHeight?: string;
  negativeMargin?: string;
  items?: InfiniteScrollItem[];
  itemMinHeight?: number;
  isTilted?: boolean;
  tiltDirection?: 'left' | 'right';
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: 'down' | 'up';
  pauseOnHover?: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  width = '30rem',
  maxHeight = '100%',
  negativeMargin = '-0.5em',
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = 'left',
  autoplay = false,
  autoplaySpeed = 2,
  autoplayDirection = 'down',
  pauseOnHover = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const getTiltTransform = (): string => {
    if (!isTilted) return 'none';
    return tiltDirection === 'left'
      ? 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)'
      : 'rotateX(20deg) rotateZ(20deg) skewX(-20deg)';
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    // Clean up previous animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemHeight = firstItem.offsetHeight;
    const itemStyle = getComputedStyle(firstItem);
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight = totalItemHeight * items.length;

    // Set initial positions
    divItems.forEach((child, i) => {
      gsap.set(child, { y: i * totalItemHeight });
    });

    if (autoplay) {
      // Create a single timeline animation instead of RAF loop
      const timeline = gsap.timeline({ repeat: -1, ease: "none" });

      // Calculate duration based on speed (lower speed = longer duration)
      const duration = totalHeight / (autoplaySpeed * 60); // 60px per speed unit per second

      divItems.forEach((child) => {
        // Animate each item continuously
        const direction = autoplayDirection === 'down' ? totalHeight : -totalHeight;

        timeline.fromTo(child,
          { y: direction * -1 },
          {
            y: direction,
            duration: duration,
            ease: "none",
            modifiers: {
              y: gsap.utils.unitize(gsap.utils.wrap(-totalHeight, totalHeight))
            }
          }, 0
        );
      });

      animationRef.current = timeline;

      // Handle pause on hover
      if (pauseOnHover) {
        const pauseAnimation = () => timeline.pause();
        const resumeAnimation = () => timeline.play();

        container.addEventListener('mouseenter', pauseAnimation);
        container.addEventListener('mouseleave', resumeAnimation);

        return () => {
          timeline.kill();
          container.removeEventListener('mouseenter', pauseAnimation);
          container.removeEventListener('mouseleave', resumeAnimation);
        };
      }

      return () => {
        timeline.kill();
      };
    }

  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          .infinite-scroll-wrapper {
            max-height: ${maxHeight};
            overflow: hidden;
            position: relative;
          }
  
          .infinite-scroll-container {
            width: ${width};
            will-change: transform;
          }
  
          .infinite-scroll-item {
            height: ${itemMinHeight}px;
            margin-top: ${negativeMargin};
            will-change: transform;
          }
        `}
      </style>
      <div className="infinite-scroll-wrapper" ref={wrapperRef}>
        <div
          className="infinite-scroll-container"
          ref={containerRef}
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((item, i) => (
            <div className="infinite-scroll-item" key={i}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;