import { memo } from 'react';

const textItems = [
  "VIDEO EDITING", "•",
  "MOTION GRAPHICS", "•",
  "CINEMATOGRAPHY", "•",
  "COLOR GRADING", "•",
  "BRAND IDENTITY", "•",
  "CREATIVE DIRECTION", "•"
];

function Marquee() {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-white/5 py-4 mt-12 md:mt-0 relative z-20 border-y border-white/5 render-optimized">
      <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>
      
      <div
        className="inline-flex gap-8 md:gap-12 w-max items-center animate-marquee will-change-transform"
      >
        {/* Double array to ensure seamless loop */}
        {[...textItems, ...textItems, ...textItems, ...textItems].map((item, idx) => (
          <span 
            key={idx} 
            className={`font-sans tracking-[0.2em] uppercase text-xs sm:text-sm ${item === '•' ? 'text-emerald-500' : 'text-white/40'}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default memo(Marquee);
