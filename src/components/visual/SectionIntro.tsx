// src/components/visual/SectionIntro.tsx
'use client';
import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function useInViewport<T extends Element>(margin = '-12% 0px') {
  const ref = React.useRef<T>(null);
  const [inView, set] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => set(e.isIntersecting), { rootMargin: margin, threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, [margin]);
  return [ref, inView] as const;
}

const parent = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
const child  = { hidden: { opacity: 0, y: 8 },  show: { opacity: 1, y: 0 } };

export function SectionIntro({ children, className='' }: { children: React.ReactNode; className?: string }) {
  const prefers = useReducedMotion();
  const [ref, inView] = useInViewport<HTMLDivElement>();
  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={parent}
      transition={{ duration: prefers ? 0 : 0.6, ease: [0.22,1,0.36,1], when: 'beforeChildren', staggerChildren: prefers ? 0 : 0.05 }}
    >
      {children}
    </motion.section>
  );
}

export function RevealItem({ children, delay=0 }: { children: React.ReactNode; delay?: number }) {
  const prefers = useReducedMotion();
  return (
    <motion.div variants={child} transition={{ duration: prefers ? 0 : 0.45, ease: [0.22,1,0.36,1], delay }}>
      {children}
    </motion.div>
  );
}
