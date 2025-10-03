'use client';

import * as React from 'react';
import VideoModal from '@/components/VideoModal';

const vids = [
  { id: 'dQw4w9WgXcQ', title: 'ProGen Overview' },
  { id: 'xF2A7d1d1k8', title: 'Mentorship in Practice' },
  { id: 'Wch3gJG2GJ4', title: 'SME Digitization' },
];

export default function FeaturedVideos() {
  const [open, setOpen] = React.useState(false);
  const [vid, setVid] = React.useState<string | null>(null);

  return (
    <>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {vids.map(v => (
          <button
            key={v.id}
            className="card group flex flex-col items-start p-4 text-left transition-colors hover:border-black"
            onClick={() => { setVid(v.id); setOpen(true); }}
          >
            <div
              className="aspect-video w-full rounded-md bg-[hsl(var(--muted))]
                         ring-1 ring-inset ring-[hsl(var(--ink-dim))/10%] group-hover:opacity-90"
            />
            <div className="mt-2 text-sm font-semibold">{v.title}</div>
            <div className="text-xs text-[hsl(var(--ink-dim))]">Watch video</div>
          </button>
        ))}
      </div>

      {vid ? (
        <VideoModal open={open} onClose={() => setOpen(false)} videoId={vid} title="Featured" />
      ) : null}
    </>
  );
}
