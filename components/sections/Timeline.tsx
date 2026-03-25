"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const weeks = [
  {
    week: "Week 01",
    label: "Planning & Outreach",
    days: [
      { day: "Day 1–2", task: "Finalize event details, design posters, create sponsor pitch" },
      { day: "Day 3–5", task: "Approach 20+ potential sponsors, confirm at least 2" },
      { day: "Day 6–7", task: "Build question bank, finalize quiz format" },
    ],
  },
  {
    week: "Week 02",
    label: "Promotion & Hype",
    days: [
      { day: "Day 1", task: "Official launch poster goes live" },
      { day: "Day 2–3", task: "Tech teaser reel + early bird announcement" },
      { day: "Day 4–5", task: "Sponsor reveal + campus ambassador push" },
      { day: "Day 6–7", task: "Challenge post + countdown reminder" },
    ],
  },
  {
    week: "Week 03",
    label: "Event Execution",
    days: [
      { day: "Day 1", task: "Final reminder to all participants" },
      { day: "Day 2–3", task: "Round 1 (Elimination) → Results announced" },
      { day: "Day 4–5", task: "Round 2 (Advanced) → Finalists announced" },
      { day: "Day 6", task: "Live Grand Finale — winner crowned" },
      { day: "Day 7", task: "Winner posts, certificates, feedback form" },
    ],
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden" style={{ background: "#07070f" }}>
      {/* Big editorial number */}
      <div
        className="absolute top-8 right-6 font-syne font-extrabold text-white/[0.025] select-none pointer-events-none"
        style={{ fontSize: "clamp(120px, 20vw, 300px)", lineHeight: 1, letterSpacing: "-0.05em" }}
      >
        05
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">3-Week Battle Plan</span>
          <h2
            className="font-syne font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 68px)", letterSpacing: "-0.025em" }}
          >
            We&apos;re <span className="text-[#5e2eea]">Organized</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[28px] top-8 bottom-8 w-px hidden lg:block overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full bg-gradient-to-b from-[#5e2eea] via-[#7b4fff] to-transparent"
            />
          </div>

          <div className="flex flex-col gap-8">
            {weeks.map((week, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-10"
              >
                {/* Week dot + number */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center font-mono text-xs font-bold text-[#5e2eea] border border-[#5e2eea]/30 relative z-10"
                    style={{ background: "#000", letterSpacing: "0.05em" }}
                  >
                    {`W${i + 1}`}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-baseline gap-4 mb-5">
                    <h3 className="font-syne font-bold text-white text-xl">{week.week}</h3>
                    <span className="font-mono text-[10px] text-[#5e2eea]/60 tracking-widest uppercase">{week.label}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {week.days.map((d, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 15 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.2 + j * 0.07, duration: 0.5 }}
                        className="glass-card p-4 hover:border-[#5e2eea]/35 transition-all duration-300"
                      >
                        <span className="font-mono text-[10px] text-[#5e2eea]/60 tracking-wider block mb-2">{d.day}</span>
                        <p className="font-inter text-white/55 text-xs leading-relaxed">{d.task}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
