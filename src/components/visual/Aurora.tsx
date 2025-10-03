// src/components/visual/Aurora.tsx
// Server component: animated gradient mesh backdrop (no JS on client)

export default function Aurora({
  className = '',
  opacity = 0.6,
}: { className?: string; opacity?: number }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -top-24 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-[50%]
                   blur-3xl opacity-70 animate-[aurora_22s_linear_infinite]"
        style={{
          background:
            'radial-gradient(40% 40% at 50% 50%, rgba(59,130,246,.45), transparent 60%)',
          opacity,
        }}
      />
      <div
        className="absolute -bottom-32 right-1/3 h-[38rem] w-[38rem] translate-x-1/4
                   rounded-[50%] blur-3xl opacity-70 animate-[aurora_24s_linear_infinite_reverse]"
        style={{
          background:
            'radial-gradient(40% 40% at 50% 50%, rgba(99,102,241,.40), transparent 60%)',
          opacity,
        }}
      />
      <div
        className="absolute top-1/3 left-[-10%] h-[30rem] w-[30rem]
                   rounded-[50%] blur-3xl opacity-70 animate-[aurora_28s_linear_infinite]"
        style={{
          background:
            'radial-gradient(40% 40% at 50% 50%, rgba(16,185,129,.35), transparent 60%)',
          opacity,
        }}
      />
      {/* subtle grain */}
      <div
        className="absolute inset-0 opacity-[.035] mix-blend-multiply"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'> <feTurbulence type=\'fractalNoise\' baseFrequency=\'.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'.7\'/></svg>")',
        }}
      />
      <style>{`
        @keyframes aurora {
          0% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(2%, -2%, 0) rotate(180deg); }
          100% { transform: translate3d(0,0,0) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
