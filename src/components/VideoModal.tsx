'use client';

import * as React from 'react';

export default function VideoModal({
  videoId,
  open,
  onClose,
  title,
}: { videoId: string; open: boolean; onClose: () => void; title?: string }) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Video player'}
      onClick={onClose}
    >
      <div
        className="w-[min(92vw,1000px)] overflow-hidden rounded-xl border bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-white">
          <div className="text-sm">{title || 'Now playing'}</div>
          <button onClick={onClose} className="rounded-md border border-white/20 px-2 py-1 text-xs hover:bg-white/10">
            Close
          </button>
        </div>
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title || 'YouTube video'}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
