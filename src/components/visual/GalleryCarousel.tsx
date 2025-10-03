// Lightweight carousel (no deps) with keyboard + swipe support
'use client';

import Image from 'next/image';
import * as React from 'react';

export type Slide = { src: string; alt: string; w: number; h: number };

export default function GalleryCarousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = React.useState(0);
  const n = slides.length;

  function prev() { setI((p) => (p - 1 + n) % n); }
  function next() { setI((p) => (p + 1) % n); }

  // swipe handlers
  React.useEffect(() => {
    let startX = 0;
    const el = document.getElementById('carousel');
    if (!el) return;
    const onDown = (e: TouchEvent) => (startX = e.touches[0].clientX);
    const onMove = (e: TouchEvent) => {
      const dx = e.touches[0].clientX - startX;
      if (Math.abs(dx) > 50) {
        dx > 0 ? prev() : next();
        startX = e.touches[0].clientX + (dx > 0 ? 1000 : -1000); // avoid repeated triggers
      }
    };
    el.addEventListener('touchstart', onDown, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onDown);
      el.removeEventListener('touchmove', onMove);
    };
  }, [n]);

  return (
    <div className="relative">
      <div
        id="carousel"
        className="relative h-[340px] overflow-hidden rounded-xl border bg-white"
        tabIndex={0}
        aria-roledescription="carousel"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prev();
          if (e.key === 'ArrowRight') next();
        }}
      >
        <div
          className="flex h-full w-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {slides.map((s, idx) => (
            <div key={idx} className="relative h-[340px] w-full shrink-0">
              <Image
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="btn btn-ghost absolute left-2 top-1/2 -translate-y-1/2"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="btn btn-ghost absolute right-2 top-1/2 -translate-y-1/2"
      >
        ›
      </button>

      {/* dots */}
      <div className="mt-2 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full ${idx === i ? 'bg-black' : 'bg-[hsl(var(--ink-dim))]'}`}
          />
        ))}
      </div>
    </div>
  );
}
