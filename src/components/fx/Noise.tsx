'use client';

import * as React from 'react';

/** Subtle grain overlay for depth */
export default function Noise({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay ${className}`}
      style={{
        backgroundImage:
          'url("data:image/svg+xml;utf8, \
<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\' viewBox=\'0 0 140 140\'>\
<filter id=\'n\'>\
<feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
<feColorMatrix type=\'saturate\' values=\'0\'/>\
<feComponentTransfer><feFuncA type=\'discrete\' tableValues=\'0 0 .08 0\'/></feComponentTransfer>\
</filter>\
<rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/>\
</svg>")',
      }}
    />
  );
}
