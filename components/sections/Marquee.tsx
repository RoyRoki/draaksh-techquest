"use client";

const items1 = [
  "ROUND 01", "ROUND 02", "LIVE FINALE", "200+ STUDENTS",
  "₹10K+ PRIZES", "APRIL 2026", "5+ COLLEGES", "TECH QUIZ",
  "ROUND 01", "ROUND 02", "LIVE FINALE", "200+ STUDENTS",
  "₹10K+ PRIZES", "APRIL 2026", "5+ COLLEGES", "TECH QUIZ",
];

const items2 = [
  "DSA", "PROGRAMMING", "LOGICAL REASONING", "RAPID FIRE",
  "CAMPUS CODERS", "COMPETE", "GROW", "CONNECT",
  "DSA", "PROGRAMMING", "LOGICAL REASONING", "RAPID FIRE",
  "CAMPUS CODERS", "COMPETE", "GROW", "CONNECT",
];

const Sep = () => (
  <span className="mx-6 text-[#5e2eea] text-lg select-none">◆</span>
);

export default function Marquee() {
  return (
    <div className="py-6 border-y border-[#5e2eea]/15 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Row 1 — forward */}
      <div className="overflow-hidden mb-3">
        <div className="marquee-track">
          {items1.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-syne font-bold text-xs tracking-[0.2em] text-white/40 uppercase whitespace-nowrap">
                {item}
              </span>
              <Sep />
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="overflow-hidden">
        <div className="marquee-track-reverse">
          {items2.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-grotesk text-xs tracking-[0.15em] text-[#5e2eea]/60 uppercase whitespace-nowrap">
                {item}
              </span>
              <Sep />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
