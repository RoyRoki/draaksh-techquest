"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const words = ["Power", "the", "Next", "Gen", "of", "Coders."];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-40 px-6 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(94,46,234,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Big headline */}
        <div className="overflow-hidden mb-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  delay: 0.1 + i * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-syne font-extrabold text-white leading-none inline-block"
                style={{
                  fontSize: "clamp(40px, 7vw, 96px)",
                  letterSpacing: "-0.03em",
                  color: i === 3 ? "#5e2eea" : "#fff",
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-inter text-white/40 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Join Draaksh TechQuest 2026 as a sponsor. Put your brand where the next generation
          of developers is paying attention.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="https://wa.me/919732548768?text=Hi%2C%20I%27m%20interested%20in%20sponsoring%20Draaksh%20TechQuest%202026"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="Go"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#5e2eea] text-white font-grotesk font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:glow-violet w-full sm:w-auto justify-center"
          >
            <span className="absolute inset-0 bg-[#7b4fff] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            <span className="relative z-10 flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1C4.58 1 1 4.58 1 9c0 1.42.37 2.75 1.01 3.91L1 17l4.18-1.09A7.96 7.96 0 009 17c4.42 0 8-3.58 8-8s-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 10.5c-.2-.1-1.2-.6-1.4-.67-.2-.07-.34-.1-.48.1-.14.2-.54.67-.66.81-.12.14-.24.16-.44.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.1-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.07-.14.03-.26-.02-.36-.05-.1-.48-1.16-.66-1.59-.17-.42-.35-.36-.48-.37H5.8c-.14 0-.37.05-.56.26-.2.2-.74.73-.74 1.78s.76 2.06.87 2.21c.1.14 1.5 2.29 3.63 3.21.51.22.9.35 1.21.45.51.16.97.14 1.34.08.41-.06 1.26-.52 1.44-1.02.18-.5.18-.93.13-1.02-.05-.1-.19-.14-.39-.24z" fill="currentColor"/>
              </svg>
              WhatsApp Us
            </span>
          </a>

          <a
            href="mailto:draaksh.official.25@gmail.com?subject=Sponsorship%20Inquiry%20-%20Draaksh%20TechQuest%202026"
            data-cursor-label="Email"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/60 font-grotesk text-sm tracking-wide hover:border-[#5e2eea]/50 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Send Email
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Contact info inline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <span className="font-mono text-[10px] text-white/20 tracking-widest">REACH OUT DIRECTLY</span>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <a href="https://wa.me/919732548768" className="font-inter text-white/30 text-sm hover:text-[#5e2eea] transition-colors">
            +91 97325 48768
          </a>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <a href="mailto:draaksh.official.25@gmail.com" className="font-inter text-white/30 text-sm hover:text-[#5e2eea] transition-colors">
            draaksh.official.25@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
