// Auto-scrolling strip of thumbnails
export default function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="animate-marquee flex gap-4 [animation-duration:28s] hover:[animation-play-state:paused]">
        {children}{children /* duplicate for seamless loop */}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { animation-name: marquee; animation-timing-function: linear; animation-iteration-count: infinite; }
      `}</style>
    </div>
  );
}
