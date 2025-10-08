import React, { useEffect, useRef, useState } from 'react';

/*
  ImageSlider
  - Lightweight, touch-friendly slider for mobile/tablet.
  - Props:
    - images: string[]
    - index: number (controlled optional)
    - onChange: (nextIndex:number) => void
*/
export default function ImageSlider({ images = [], index, onChange }) {
  const [current, setCurrent] = useState(index ?? 0);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof index === 'number') setCurrent(index);
  }, [index]);

  const goTo = (i) => {
    const next = (i + images.length) % images.length;
    if (typeof index !== 'number') setCurrent(next);
    onChange?.(next);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    deltaXRef.current = 0;
  };

  const onTouchMove = (e) => {
    deltaXRef.current = e.touches[0].clientX - startXRef.current;
  };

  const onTouchEnd = () => {
    const threshold = (containerRef.current?.offsetWidth || 300) * 0.15;
    if (deltaXRef.current > threshold) prev();
    else if (deltaXRef.current < -threshold) next();
    deltaXRef.current = 0;
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full select-none" ref={containerRef}
         onTouchStart={onTouchStart}
         onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}>
      <div className="overflow-hidden rounded-md border bg-white">
        <div className="relative w-full h-80 sm:h-96">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${i === current ? 'opacity-100' : 'opacity-0'}`}
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button aria-label="Previous" onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-9 h-9 flex items-center justify-center active:scale-95">
            ‹
          </button>
          <button aria-label="Next" onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-9 h-9 flex items-center justify-center active:scale-95">
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all ${i === current ? 'w-5 bg-white' : 'w-2.5 bg-white/60'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
