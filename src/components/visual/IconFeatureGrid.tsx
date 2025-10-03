import Reveal from '@/components/visual/Reveal';
import { Sparkles, Shield, Globe, Lightning, Layers, Gauge, Puzzle } from './Icon';

type Item = { title: string; desc: string; icon: React.ReactNode };

const items: Item[] = [
  { title: 'AI-crafted outputs', desc: 'Beautiful, ATS-smart CVs and portfolios.', icon: <Sparkles /> },
  { title: 'Privacy by default', desc: 'Lightweight, minimal data footprints.', icon: <Shield /> },
  { title: 'Global first', desc: 'Low-bandwidth and multilingual-friendly UIs.', icon: <Globe /> },
  { title: 'Fast delivery', desc: 'Ship value in days, not months.', icon: <Lightning /> },
  { title: 'Modular brands', desc: 'Start small, expand across “theideal”.', icon: <Layers /> },
  { title: 'Outcome metrics', desc: 'Real signals: conversions and offers.', icon: <Gauge /> },
  { title: 'Seamless fit', desc: 'Plays nicely with your stack.', icon: <Puzzle /> },
];

export default function IconFeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={60 + i * 40}>
          <article className="card group flex items-start gap-3 p-5">
            <div className="inline-grid h-9 w-9 place-items-center rounded-md bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
              {it.icon}
            </div>
            <div>
              <div className="font-semibold">{it.title}</div>
              <p className="mt-1 text-sm text-[hsl(var(--ink-dim))]">{it.desc}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
