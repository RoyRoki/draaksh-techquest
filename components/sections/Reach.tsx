"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 200, suffix: "+", label: "Students Expected", sub: "Across multiple colleges" },
  { value: 5, suffix: "+", label: "Partner Colleges", sub: "North Bengal region" },
  { value: 3, suffix: "", label: "Battle Rounds", sub: "Qualifier → Semi → Finale" },
  { value: 10, prefix: "₹", suffix: "K+", label: "Prize Pool", sub: "Cash + goodies + certs" },
];

const audience = [
  { pct: "70%", label: "2nd & 3rd Year Students", desc: "Peak career exploration stage — ready for internships and products" },
  { pct: "85%", label: "CS / IT / ECE Branches", desc: "Core engineering students with direct interest in tech careers" },
  { pct: "60%", label: "Active Coders", desc: "Already writing code, building projects, looking for opportunities" },
  { pct: "90%", label: "Community Opt-in", desc: "Participants actively joining Draaksh — your long-term audience" },
];

export default function Reach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden" style={{ background: "#07070f" }}>
      {/* Big editorial number */}
      <div
        className="absolute top-8 right-6 font-syne font-extrabold text-white/[0.025] select-none pointer-events-none"
        style={{ fontSize: "clamp(120px, 20vw, 300px)", lineHeight: 1, letterSpacing: "-0.05em" }}
      >
        03
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Your Audience</span>
          <h2
            className="font-syne font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 68px)", letterSpacing: "-0.025em" }}
          >
            Real <span className="text-[#5e2eea]">Reach</span>
          </h2>
        </motion.div>

        {/* Big stat counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#5e2eea]/10 mb-20 border border-[#5e2eea]/10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-black p-8 lg:p-10 group hover:bg-[#07070f] transition-colors duration-300"
            >
              <div
                className="font-syne font-extrabold leading-none mb-3 group-hover:text-glow transition-all"
                style={{ fontSize: "clamp(44px, 6vw, 80px)", letterSpacing: "-0.03em", color: "#5e2eea" }}
              >
                <AnimatedCounter
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  duration={1600}
                />
              </div>
              <p className="font-grotesk font-semibold text-white text-base mb-1">{s.label}</p>
              <p className="font-inter text-white/30 text-sm">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Audience breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-6"
        >
          <p className="font-grotesk font-semibold text-white/60 text-sm tracking-wide mb-8">
            WHO SHOWS UP — Audience Breakdown
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audience.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              className="glass-card p-5 hover:border-[#5e2eea]/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-grotesk font-semibold text-white text-sm mb-1">{a.label}</p>
                  <p className="font-inter text-white/35 text-xs leading-relaxed">{a.desc}</p>
                </div>
                <span
                  className="font-syne font-extrabold text-2xl leading-none shrink-0"
                  style={{ color: "#5e2eea" }}
                >
                  {a.pct}
                </span>
              </div>
              {/* Progress bar */}
              <div className="mt-4 h-px bg-white/5 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: a.pct } : { width: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0 bg-[#5e2eea]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
