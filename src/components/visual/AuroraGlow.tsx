// src/components/visual/AuroraGlow.tsx
export default function AuroraGlow({ hue = 208, className = '' }: { hue?: number; className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 blur-3xl ${className}`}
      style={{
        background: `radial-gradient(800px 360px at 50% 0%, hsl(${hue} 90% 55% / .22), transparent 60%),
                     conic-gradient(from 180deg at 50% -20%, hsl(${hue + 30} 92% 62% / .14), transparent 25% 75%, hsl(${hue - 20} 82% 60% / .14))`,
        maskImage: 'linear-gradient(to bottom, black, rgba(0,0,0,.25) 70%, transparent)',
      }}
    />
  );
}

