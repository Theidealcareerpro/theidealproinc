// src/components/BrandBar.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, MouseEvent as ReactMouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FolderGit2,
  Briefcase,
  Lightbulb,
  BookOpen,
  Award,
  TrendingUp,
  Laptop,
  Wand2,
  Mail,
  ExternalLink,
} from 'lucide-react';

type LucideIcon = (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;

type Item = {
  label: string;
  href: string;
  external?: boolean;
  icon: LucideIcon;
};

const BLUE = 'hsl(222 86% 52%)';

const ITEMS: Item[] = [
  { label: 'Ecosystem', href: '/ecosystem', icon: FolderGit2 },
  { label: 'theidealprogen', href: 'https://grokpro.vercel.app/', external: true, icon: Briefcase },
  { label: 'theidealprocoach', href: '/coach', icon: Lightbulb },
  { label: 'theidealprolearn', href: '/learn', icon: BookOpen },
  { label: 'theidealprokids', href: '/kids', icon: Award },
  { label: 'theidealprobiz', href: '/biz', icon: TrendingUp },
  { label: 'theidealprogov', href: '/gov', icon: Laptop },
  { label: 'Donate', href: '/donate', icon: Wand2 },
  { label: 'Contact', href: '/contact', icon: Mail },
];

/* Glass surface for the bar */
const glassSurface: React.CSSProperties = {
  background: 'linear-gradient(180deg, rgba(255,255,255,.86), rgba(255,255,255,.68))',
  WebkitBackdropFilter: 'blur(10px) saturate(140%)',
  backdropFilter: 'blur(10px) saturate(140%)',
  boxShadow:
    '0 22px 60px -36px rgba(16,24,40,.28), 0 16px 36px -24px rgba(16,24,40,.16), inset 0 1px 0 rgba(255,255,255,.38)',
};

/* Pill — interactive button */
function Pill({ item, active = false }: { item: Item; active?: boolean }) {
  const reduced = useReducedMotion();
  const aRef = useRef<HTMLAnchorElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  function onMove(e: ReactMouseEvent) {
    if (reduced) return;
    const el = aRef.current ?? linkRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const rx = (-py * 4).toFixed(2);
    const ry = (px * 4).toFixed(2);
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  function onLeave() {
    const el = aRef.current ?? linkRef.current;
    if (!el) return;
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }

  const Icon = item.icon;

  const base =
    'relative inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15 ' +
    'transition-[transform,box-shadow,border-color] will-change-transform';

  const styleCard: React.CSSProperties = {
    background: 'linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.76))',
    WebkitBackdropFilter: 'blur(8px) saturate(140%)',
    backdropFilter: 'blur(8px) saturate(140%)',
    border: '1px solid rgba(0,0,0,.08)',
    boxShadow:
      '0 14px 36px -26px rgba(16,24,40,.28), 0 10px 24px -20px rgba(16,24,40,.16), inset 0 1px 0 rgba(255,255,255,.38)',
    transformStyle: 'preserve-3d',
    transitionDuration: '140ms',
  };

  const activeRing = active ? { boxShadow: `${styleCard.boxShadow}, 0 0 0 2px rgb(37 99 235 / .12)` } : undefined;

  const IconChip = (
    <span
      className="relative inline-grid h-5.5 w-8 place-items-center rounded-md ring-1"
      style={{
        borderColor: 'rgba(0,0,0,.12)',
        background: 'linear-gradient(180deg, rgba(0,0,0,.03), rgba(0,0,0,.06))',
        boxShadow:
          'inset 0 10px 14px rgba(255,255,255,.20), inset 0 -8px 12px rgba(0,0,0,.10), 0 6px 14px -12px rgba(37,99,235,.28)',
        transform: 'translateZ(14px)',
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-md"
        style={{
          background: 'conic-gradient(from 210deg at 50% 50%, rgba(37,99,235,.35), rgba(37,99,235,0) 40%)',
          mixBlendMode: 'screen',
          opacity: 0.65,
        }}
      />
      <Icon className="h-3.5 w-3.5" style={{ color: BLUE }} strokeWidth={2.2} />
      {item.external && (
        <span className="absolute -right-1 -top-1 rounded-full bg-white p-[1px] shadow" title="Opens in new tab">
          <ExternalLink className="h-[9px] w-[9px]" style={{ color: BLUE }} strokeWidth={2} />
        </span>
      )}
    </span>
  );

  const content = (
    <>
      {IconChip}
      <span className="text-[hsl(var(--ink))] whitespace-nowrap">{item.label}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: 'radial-gradient(120px 90px at 20% 0%, rgba(37,99,235,.07), transparent 60%)',
          transform: 'translateZ(18px)',
        }}
      />
    </>
  );

  if (item.external) {
    return (
      <a
        ref={aRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        style={activeRing ? { ...styleCard, ...activeRing } : styleCard}
        aria-label={item.label + ' (opens in new tab)'}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      ref={linkRef}
      href={item.href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={base}
      style={activeRing ? { ...styleCard, ...activeRing } : styleCard}
      aria-label={item.label}
    >
      {content}
    </Link>
  );
}

export default function BrandBar() {
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(window.location.pathname || '');
  }, []);

  return (
    <div className="sticky top-16 z-40 w-full" style={glassSurface}>
      <div className="mx-auto max-w-7xl px-0">
        <nav aria-label="Brand quick navigation" className="relative h-12">
          <div className="-mx-4 px-4 flex items-center gap-1.5 h-12">
            {ITEMS.map((it, idx) => {
              const isActive = !!path && !it.external && it.href !== '/' && path.startsWith(it.href);
              return (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1], delay: idx * 0.015 }}
                  className="shrink-0"
                >
                  <Pill item={it} active={isActive} />
                </motion.div>
              );
            })}
          </div>
        </nav>
      </div>

      <div aria-hidden className="h-px w-full">
        <div
          className="h-[1px] w-full"
          style={{
            background:
              'linear-gradient(90deg, rgba(59,130,246,.35), rgba(99,102,241,.35), rgba(139,92,246,.35))',
          }}
        />
        <div
          className="h-4 w-full -translate-y-[6px]"
          style={{
            background: 'radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,.10), transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>
    </div>
  );
}
