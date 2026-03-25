"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const values = [
  { label: "Community First", desc: "Every event is built to grow the local tech ecosystem, not just run a quiz." },
  { label: "Student-Led", desc: "Organized by people who understand the student experience from the inside." },
  { label: "Long-Term Vision", desc: "TechQuest is Year 1 of an annual tradition. Your brand grows with us." },
];

export default function Organizer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Big editorial number */}
      <div
        className="absolute top-8 left-6 font-syne font-extrabold text-white/[0.025] select-none pointer-events-none"
        style={{ fontSize: "clamp(120px, 20vw, 300px)", lineHeight: 1, letterSpacing: "-0.05em" }}
      >
        06
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label block mb-6">About Draaksh</span>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12">
                <Image src="/draaksh-logo.png" alt="Draaksh" fill className="object-contain" />
              </div>
              <h2
                className="font-syne font-extrabold text-white leading-none"
                style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.025em" }}
              >
                Who We Are
              </h2>
            </div>

            <p className="font-inter text-white/50 text-lg leading-relaxed mb-6">
              Draaksh is a growing developer community based in Siliguri, built by students who believe
              North Bengal deserves a real tech ecosystem — not just big-city leftovers.
            </p>
            <p className="font-inter text-white/35 text-base leading-relaxed mb-10">
              We run events, build projects, and connect talent with opportunity. TechQuest is our
              flagship event — the first of many. Every sponsor who joins us at Year 1 becomes part
              of the origin story.
            </p>

            {/* Vision pills */}
            <div className="flex flex-wrap gap-3">
              {["Year 1: Build Credibility", "Year 2: 1000+ Students", "Year 3: National Scale"].map((v, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] tracking-wider px-3 py-2 border border-[#5e2eea]/20 text-[#5e2eea]/60"
                >
                  {v}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 mt-4 lg:mt-16"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                className="glass-card p-6 hover:border-[#5e2eea]/40 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="w-8 h-8 shrink-0 flex items-center justify-center text-[#5e2eea] font-mono text-sm border border-[#5e2eea]/20 rounded-sm"
                    style={{ background: "rgba(94,46,234,0.05)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="font-grotesk font-semibold text-white text-sm mb-2">{v.label}</p>
                    <p className="font-inter text-white/40 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact direct */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="glass-card p-6 border-[#5e2eea]/25"
            >
              <p className="font-mono text-[10px] text-white/30 tracking-widest mb-4">CONTACT THE ORGANIZER</p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:draaksh.official.25@gmail.com"
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group/link"
                >
                  <span className="text-[#5e2eea] text-sm">@</span>
                  <span className="font-inter text-sm group-hover/link:text-[#5e2eea] transition-colors">
                    draaksh.official.25@gmail.com
                  </span>
                </a>
                <a
                  href="https://wa.me/919732548768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group/link"
                >
                  <span className="text-[#5e2eea] text-sm">↗</span>
                  <span className="font-inter text-sm group-hover/link:text-[#5e2eea] transition-colors">
                    +91 97325 48768
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
