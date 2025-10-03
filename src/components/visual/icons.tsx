// src/components/visual/icons.tsx
// One place for all inline SVG icons (brand pictograms + system/benefit icons)

/* ---------------- Brand pictograms ---------------- */

export const IconCV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <rect x="4" y="3" width="16" height="18" rx="2" className="fill-white/70 stroke-black/10" strokeWidth="1.5"/>
    <rect x="7" y="7" width="10" height="2" rx="1" className="fill-black/70"/>
    <rect x="7" y="11" width="10" height="2" rx="1" className="fill-black/50"/>
    <rect x="7" y="15" width="6" height="2" rx="1" className="fill-black/30"/>
  </svg>
);

export const IconPortfolio = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <rect x="3" y="7" width="18" height="12" rx="2" className="fill-white/70 stroke-black/10" strokeWidth="1.5"/>
    <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" className="stroke-black/40" strokeWidth="1.5"/>
    <rect x="6.5" y="10" width="5" height="3.5" rx="0.7" className="fill-black/15"/>
    <rect x="12.5" y="10" width="5" height="3.5" rx="0.7" className="fill-black/10"/>
    <rect x="6.5" y="14.5" width="11" height="2" rx="0.7" className="fill-black/15"/>
  </svg>
);

export const IconMentor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <circle cx="8" cy="8" r="3" className="fill-white/70 stroke-black/10" strokeWidth="1.5"/>
    <path d="M2.5 19c.8-3 3.1-5 5.5-5s4.7 2 5.5 5" className="stroke-black/25" strokeWidth="1.5"/>
    <circle cx="17" cy="9" r="2.4" className="fill-white/70 stroke-black/10" strokeWidth="1.5"/>
    <path d="M13.5 19c.5-1.7 1.8-3 3.5-3s3 1.3 3.5 3" className="stroke-black/25" strokeWidth="1.5"/>
  </svg>
);

export const IconLearn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <path d="M3 7.5 12 4l9 3.5-9 3.5L3 7.5Z" className="fill-white/70 stroke-black/10" strokeWidth="1.5"/>
    <path d="M7 10.5v5.5c0 0 2.5 2.5 5 2.5s5-2.5 5-2.5v-5.5" className="stroke-black/25" strokeWidth="1.5"/>
  </svg>
);

export const IconKids = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <circle cx="8" cy="9" r="3" className="fill-white/70 stroke-black/10" strokeWidth="1.5"/>
    <rect x="4.5" y="13" width="7" height="6.5" rx="1.3" className="fill-black/10"/>
    <path d="M12 6c2-2 6-1.5 7 1.2" className="stroke-black/30" strokeWidth="1.5"/>
    <circle cx="16.5" cy="12" r="2.2" className="fill-white/70 stroke-black/10" strokeWidth="1.5"/>
  </svg>
);

export const IconBiz = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <rect x="3" y="4" width="18" height="14" rx="2" className="fill-white/70 stroke-black/10" strokeWidth="1.5"/>
    <path d="M6 14l3-3 2 2 4-4 3 3" className="stroke-black/45" strokeWidth="1.7" fill="none"/>
    <rect x="6" y="18.5" width="12" height="1.8" rx="0.9" className="fill-black/15"/>
  </svg>
);

export const IconGov = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <path d="M4 10h16l-8-5-8 5Z" className="fill-white/70 stroke-black/10" strokeWidth="1.5"/>
    <rect x="6" y="10" width="12" height="8" className="fill-black/05"/>
    <rect x="9" y="12" width="2" height="6" className="fill-black/20"/>
    <rect x="13" y="12" width="2" height="6" className="fill-black/20"/>
  </svg>
);

/* ---------------- System / benefit icons ---------------- */

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function Base({ children, size = 20, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l1.8 3.8L18 8.5l-3.6 1.8L12 14l-1.8-3.7L6 8.5l4.2-1.7L12 3z" />
      <path d="M4 16l.9 1.9L7 19l-1.8.9L4 22l-.9-2.1L1 19l2.1-1.1L4 16z" />
      <path d="M19 15l.9 2L22 18l-2.1 1-.9 2-1-2-2-1 2-1 1-2z" />
    </Base>
  );
}

export function Shield(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l8 3v6c0 5-3.3 7.7-8 9-4.7-1.3-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </Base>
  );
}

export function Globe(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </Base>
  );
}

export function Lightning(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </Base>
  );
}

export function Layers(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </Base>
  );
}

export function Gauge(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M21 12a9 9 0 10-18 0" />
      <path d="M12 12l5-5" />
      <path d="M7 17h10" />
    </Base>
  );
}

export function Puzzle(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M10 3a2 2 0 104 0h3a2 2 0 012 2v3a2 2 0 10 0 4v3a2 2 0 01-2 2h-3a2 2 0 10-4 0H7a2 2 0 01-2-2v-3a2 2 0 100-4V5a2 2 0 012-2h3z" />
    </Base>
  );
}
