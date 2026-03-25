"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CircuitBackground from "@/components/ui/CircuitBackground";

const titleCharsLine1 = "DRAAKSH".split("");
const titleCharsLine2 = "TECHQUEST".split("");

const statPills = [
  { label: "Students", value: "200+", icon: "◆" },
  { label: "Colleges", value: "5+", icon: "◈" },
  { label: "Prize Pool", value: "₹10K+", icon: "◉" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-surface-1 radial-violet">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Circuit network animation */}
      <CircuitBackground />

      {/* Violet radial glow blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(94,46,234,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Event badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="relative w-6 h-6">
            <Image src="/draaksh-logo.png" alt="Draaksh" fill className="object-contain" />
          </div>
          <span className="section-label">Draaksh Presents</span>
          <span className="w-8 h-px bg-[#5e2eea]/40" />
          <span className="font-mono text-[10px] text-white/30 tracking-widest">APRIL 2026</span>
        </motion.div>

        {/* Main title — DRAAKSH */}
        <div className="overflow-hidden mb-2">
          <div className="flex flex-wrap">
            {titleCharsLine1.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-syne font-extrabold text-white leading-none"
                style={{ fontSize: "clamp(38px, 10vw, 160px)", letterSpacing: "-0.03em" }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Main title — TECHQUEST */}
        <div className="overflow-hidden mb-8">
          <div className="flex flex-wrap">
            {titleCharsLine2.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35 + i * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-syne font-extrabold leading-none"
                style={{
                  fontSize: "clamp(38px, 10vw, 160px)",
                  letterSpacing: "-0.03em",
                  color: "#5e2eea",
                  WebkitTextStroke: "1px rgba(94,46,234,0.3)",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Year + Tagline row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8 mb-12"
        >
          <span
            className="font-syne font-extrabold text-white/10 leading-none"
            style={{ fontSize: "clamp(48px, 7vw, 100px)", letterSpacing: "-0.03em" }}
          >
            2026
          </span>
          <div className="flex flex-col gap-1 pb-2">
            <p
              className="font-grotesk text-white/60"
              style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}
            >
              Where Campus Coders Compete.
            </p>
            <p className="font-inter text-white/30 text-sm">
              Siliguri&apos;s premier college tech quiz — 3 rounds, live finale, real prizes.
            </p>
          </div>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {statPills.map((pill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
              className="glass-card flex items-center gap-3 px-4 py-2.5 rounded-sm"
            >
              <span className="text-[#5e2eea] text-xs">{pill.icon}</span>
              <span className="font-syne font-bold text-white text-lg leading-none">{pill.value}</span>
              <span className="font-inter text-white/40 text-xs">{pill.label}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
            className="glass-card flex items-center gap-3 px-4 py-2.5 rounded-sm"
          >
            <span className="text-[#5e2eea] text-xs">●</span>
            <span className="font-syne font-bold text-white text-lg leading-none">LIVE</span>
            <span className="font-inter text-white/40 text-xs">Grand Finale</span>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-wrap gap-4"
        >
          {/* Primary */}
          <a
            href="https://wa.me/919732548768?text=Hi%2C%20I%27m%20interested%20in%20sponsoring%20Draaksh%20TechQuest%202026"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="Go"
            className="group relative inline-flex items-center gap-3 px-7 py-4 bg-[#5e2eea] text-white font-grotesk font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:glow-violet"
          >
            <span className="absolute inset-0 bg-[#7b4fff] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 flex items-center gap-3">
              Become a Sponsor
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          {/* Secondary */}
          <a
            href="#packages"
            data-cursor-label="View"
            className="group inline-flex items-center gap-3 px-7 py-4 border border-white/10 text-white/60 font-grotesk text-sm tracking-wide hover:border-[#5e2eea]/50 hover:text-white transition-all duration-300"
          >
            View Sponsor Packages
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all">
              <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — pinned bottom-right, never overlaps CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 right-8 flex-col items-center gap-2 hidden sm:flex"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#5e2eea]/60 to-transparent animate-float" />
        <span
          className="font-mono text-[9px] text-white/20 tracking-widest uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
