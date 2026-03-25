"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rounds = [
  {
    num: "R-01",
    title: "Online Elimination",
    tag: "QUALIFIER",
    questions: "25–30 MCQs",
    time: "20–25 min",
    outcome: "Top 20 qualify",
    topics: ["Programming Fundamentals", "Output Prediction", "Logical Reasoning", "Basic DSA", "Tech Awareness"],
    color: "#5e2eea",
    offset: "0",
  },
  {
    num: "R-02",
    title: "Advanced Round",
    tag: "SEMI-FINAL",
    questions: "15 Med-Hard Qs",
    time: "20 min",
    outcome: "Top 5 qualify",
    topics: ["Advanced DSA", "Complex Logic", "CS Fundamentals", "Problem Solving", "Tech Deep Dive"],
    color: "#7b4fff",
    offset: "40px",
  },
  {
    num: "R-03",
    title: "Live Grand Finale",
    tag: "FINALE",
    questions: "Rapid Fire",
    time: "Live",
    outcome: "Winner crowned",
    topics: ["Real-time scoring", "Live audience", "Tie-breaker rounds", "Winner announcement", "Certificate ceremony"],
    color: "#a78bfa",
    offset: "80px",
  },
];

export default function Arena() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Big editorial number */}
      <div
        className="absolute top-8 left-6 font-syne font-extrabold text-white/[0.025] select-none pointer-events-none"
        style={{ fontSize: "clamp(120px, 20vw, 300px)", lineHeight: 1, letterSpacing: "-0.05em" }}
      >
        02
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Competition Structure</span>
          <h2
            className="font-syne font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 68px)", letterSpacing: "-0.025em" }}
          >
            The <span className="text-[#5e2eea]">Arena</span>
          </h2>
        </motion.div>

        {/* Round cards — diagonal stagger */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute left-[calc(33%-1px)] top-20 bottom-20 w-px hidden lg:block"
            style={{ background: "linear-gradient(to bottom, transparent, #5e2eea33, #7b4fff33, transparent)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
            {rounds.map((round, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginTop: i > 0 ? `${i * 32}px` : 0 }}
                className="group relative glass-card p-6 hover:border-[#5e2eea]/50 transition-all duration-400 hover:-translate-y-2"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-sm"
                  style={{ boxShadow: `0 0 40px ${round.color}18 inset` }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-mono text-3xl font-bold leading-none"
                    style={{ color: round.color, opacity: 0.8 }}
                  >
                    {round.num}
                  </span>
                  <span
                    className="font-mono text-[9px] tracking-widest px-2 py-1 border rounded-sm"
                    style={{ color: round.color, borderColor: `${round.color}40` }}
                  >
                    {round.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-white text-xl mb-4 leading-tight">
                  {round.title}
                </h3>

                {/* Stats row */}
                <div className="flex gap-4 mb-5 pb-5 border-b border-white/5">
                  <div>
                    <p className="font-mono text-[10px] text-white/30 tracking-wider mb-1">QUESTIONS</p>
                    <p className="font-grotesk font-semibold text-white/80 text-sm">{round.questions}</p>
                  </div>
                  <div className="w-px bg-white/5" />
                  <div>
                    <p className="font-mono text-[10px] text-white/30 tracking-wider mb-1">DURATION</p>
                    <p className="font-grotesk font-semibold text-white/80 text-sm">{round.time}</p>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-col gap-2 mb-5">
                  {round.topics.map((t, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: round.color }} />
                      <span className="font-inter text-white/40 text-xs">{t}</span>
                    </div>
                  ))}
                </div>

                {/* Outcome */}
                <div
                  className="px-3 py-2 rounded-sm text-center"
                  style={{ background: `${round.color}12`, border: `1px solid ${round.color}25` }}
                >
                  <span className="font-grotesk font-semibold text-xs" style={{ color: round.color }}>
                    → {round.outcome}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
