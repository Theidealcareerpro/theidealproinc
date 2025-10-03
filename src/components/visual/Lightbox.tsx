'use client';
import Image from 'next/image';
import * as React from 'react';

export default function Lightbox({
  thumb,
  full,
  alt,
  w,
  h,
}: { thumb: string; full: string; alt: string; w: number; h: number }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button className="group block" onClick={() => setOpen(true)} aria-label="Open image">
        <Image
          src={thumb}
          alt={alt}
          width={w}
          height={h}
          className="rounded-lg border object-cover transition group-hover:brightness-95"
        />
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <Image
            src={full}
            alt={alt}
            width={w * 1.5}
            height={h * 1.5}
            className="max-h-[85vh] w-auto rounded-xl border object-contain"
          />
        </div>
      )}
    </>
  );
}
