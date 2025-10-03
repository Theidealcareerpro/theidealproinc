// src/components/visual/TiltCard.tsx
'use client';

import * as React from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // 8–20 looks good
};

export default function TiltCard({ children, className = '', intensity = 12 }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  // normalized mouse position (-0.5 .. 0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // map mouse to rotation
  const rx = useTransform(my, [-0.5, 0.5], [intensity, -intensity]);
  const ry = useTransform(mx, [-0.5, 0.5], [-intensity, intensity]);

  // map mouse to glow center (in %)
  const cx = useTransform(mx, (v) => 50 + v * 50);
  const cy = useTransform(my, (v) => 50 + v * 50);

  // compose the background with motion template
  const glow = useMotionTemplate`radial-gradient(400px 200px at ${cx}% ${cy}%, rgba(59,130,246,.18), transparent 60%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px);
    my.set(py);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, backgroundImage: glow, willChange: 'transform, background-image' }}
      className={`relative rounded-2xl border bg-white/90 shadow-card ring-1 ring-black/5 transition ${className}`}
    >
      {/* sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(115deg,rgba(255,255,255,.0) 40%,rgba(255,255,255,.28) 60%,rgba(255,255,255,.0) 70%)] opacity-0 transition-opacity duration-500 hover:opacity-100"
      />
      {children}
    </motion.div>
  );
}
