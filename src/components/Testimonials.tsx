// src/components/Testimonials.tsx
'use client';
import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type T = { quote: string; name: string; role: string; initial: string };
export default function Testimonials({ items }: { items: T[] }) {
  const prefers = useReducedMotion();
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (prefers || paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 4800);
    return () => clearInterval(id);
  }, [prefers, paused, items.length]);

  const go = (d: -1|1) => setI((v) => (v + d + items.length) % items.length);
  const cur = items[i];

  return (
    <motion.div
      className="card p-6 sm:p-8"
      role="region" aria-label="Testimonials"
      onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}
      onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)}
      initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.35 }}
      transition={{ duration:.55, ease:[0.22,1,0.36,1] }}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">
          <span className="text-lg font-bold">{cur.initial}</span>
        </div>
      </div>
      <motion.blockquote key={cur.name} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:.45}} className="mt-2 text-lg">
        “{cur.quote}”
      </motion.blockquote>
      <div className="mt-3 text-sm text-[hsl(var(--ink-dim))]">
        <span className="font-semibold text-[hsl(var(--ink))]">{cur.name}</span> • {cur.role}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1.5" role="tablist" aria-label="Slide indicators">
          {items.map((_, idx)=>(
            <button key={idx} role="tab" aria-selected={i===idx} aria-label={`Show testimonial ${idx+1}`}
              onClick={()=>setI(idx)} className={`h-1.5 w-6 rounded-full transition ${i===idx?'bg-[hsl(var(--secondary))]':'bg-[hsl(var(--border))]'}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm" onClick={()=>go(-1)} aria-label="Previous">←</button>
          <button className="btn btn-ghost btn-sm" onClick={()=>go(1)} aria-label="Next">→</button>
        </div>
      </div>
    </motion.div>
  );
}
