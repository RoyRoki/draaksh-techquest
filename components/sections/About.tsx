"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden" style={{ background: "#07070f" }}>
      {/* Big editorial number */}
      <div
        className="absolute top-8 right-6 font-syne font-extrabold text-white/[0.03] select-none pointer-events-none"
        style={{ fontSize: "clamp(120px, 20vw, 300px)", lineHeight: 1, letterSpacing: "-0.05em" }}
      >
        01
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label block mb-6">What is TechQuest?</span>
            <h2
              className="font-syne font-extrabold text-white mb-6 leading-none"
              style={{ fontSize: "clamp(36px, 5vw, 68px)", letterSpacing: "-0.025em" }}
            >
              Siliguri&apos;s biggest{" "}
              <span className="text-[#5e2eea]">college tech quiz</span>
            </h2>

            <div className="w-12 h-px bg-[#5e2eea] mb-8" />

            <p className="font-inter text-white/50 text-lg leading-relaxed mb-6">
              Draaksh TechQuest 2026 is a fully online quiz competition built for college students
              who live and breathe technology. Three competitive rounds. One live finale. Real prizes.
            </p>
            <p className="font-inter text-white/35 text-base leading-relaxed">
              Organized by Draaksh — a growing tech community of students, developers, and builders
              from across North Bengal. Our mission: create the ecosystem that the next generation
              of coders actually needs.
            </p>
          </motion.div>

          {/* Right — key facts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 mt-4 lg:mt-16"
          >
            {[
              {
                num: "01",
                title: "Fully Online",
                desc: "Participate from anywhere. No travel needed. Maximum reach.",
              },
              {
                num: "02",
                title: "Real Students",
                desc: "1st–4th year college students genuinely interested in tech and coding.",
              },
              {
                num: "03",
                title: "Community First",
                desc: "Every participant joins the Draaksh network — your brand's long-term audience.",
              },
              {
                num: "04",
                title: "Zero Risk",
                desc: "Prize pool confirmed only after sponsorship. No exposure without support.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.6 }}
                className="group flex gap-5 p-5 glass-card hover:border-[#5e2eea]/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="font-mono text-xs text-[#5e2eea]/60 mt-0.5 shrink-0">{item.num}</span>
                <div>
                  <p className="font-grotesk font-semibold text-white text-sm mb-1">{item.title}</p>
                  <p className="font-inter text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
