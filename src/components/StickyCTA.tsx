'use client';

import { useEffect, useState } from 'react';

export default function StickyCTA({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-40 transition-all ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <div className="container-app">
        <div className="pointer-events-auto mx-auto max-w-2xl rounded-2xl border bg-white p-3 shadow-lg backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm font-medium">Need help or want to support our work?</div>
            <div className="flex items-center gap-2">
              {secondaryHref && secondaryLabel ? (
                <a href={secondaryHref} className="btn btn-outline">{secondaryLabel}</a>
              ) : null}
              <a href={primaryHref} className="btn btn-primary">{primaryLabel}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
