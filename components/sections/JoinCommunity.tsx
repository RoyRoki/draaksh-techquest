"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const perks = [
  { icon: "◆", text: "Participate in TechQuest 2026" },
  { icon: "◈", text: "Early access to future events" },
  { icon: "◉", text: "Connect with coders across colleges" },
  { icon: "●", text: "Internship & opportunity updates" },
];

export default function JoinCommunity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden border-y border-[#5e2eea]/10"
      style={{ background: "#07070f" }}
    >
      {/* Subtle radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(94,46,234,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label block mb-5">For Students</span>
            <h2
              className="font-syne font-extrabold text-white leading-none mb-4"
              style={{
                fontSize: "clamp(32px, 4.5vw, 64px)",
                letterSpacing: "-0.025em",
              }}
            >
              Are you a{" "}
              <span className="text-[#5e2eea]">campus coder?</span>
            </h2>
            <p className="font-inter text-white/45 text-base leading-relaxed mb-8 max-w-md">
              Join the Draaksh WhatsApp community — get notified when
              registrations open, connect with coders from other colleges, and
              be part of something being built from the ground up.
            </p>

            {/* Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {perks.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#5e2eea] text-xs shrink-0">{p.icon}</span>
                  <span className="font-inter text-white/55 text-sm">{p.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
              href="https://chat.whatsapp.com/E62YIbh6e2bFkqBFbO26qE?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="Join"
              className="group inline-flex items-center gap-3 px-7 py-4 font-grotesk font-semibold text-sm tracking-wide text-white border border-[#5e2eea]/40 hover:border-[#5e2eea] hover:bg-[#5e2eea]/8 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                <path
                  d="M9 1C4.58 1 1 4.58 1 9c0 1.42.37 2.75 1.01 3.91L1 17l4.18-1.09A7.96 7.96 0 009 17c4.42 0 8-3.58 8-8s-3.58-8-8-8z"
                  stroke="#5e2eea"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 10.5c-.2-.1-1.2-.6-1.4-.67-.2-.07-.34-.1-.48.1-.14.2-.54.67-.66.81-.12.14-.24.16-.44.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.1-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.07-.14.03-.26-.02-.36-.05-.1-.48-1.16-.66-1.59-.17-.42-.35-.36-.48-.37H5.8c-.14 0-.37.05-.56.26-.2.2-.74.73-.74 1.78s.76 2.06.87 2.21c.1.14 1.5 2.29 3.63 3.21.51.22.9.35 1.21.45.51.16.97.14 1.34.08.41-.06 1.26-.52 1.44-1.02.18-.5.18-.93.13-1.02-.05-.1-.19-.14-.39-.24z"
                  fill="#5e2eea"
                />
              </svg>
              Join the Draaksh Community
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              >
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Mock community card */}
            <div className="glass-card p-8 relative overflow-hidden animate-pulse-glow">
              {/* Top bar */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-syne font-bold text-sm shrink-0"
                  style={{ background: "rgba(94,46,234,0.3)", border: "1px solid rgba(94,46,234,0.4)" }}
                >
                  D
                </div>
                <div>
                  <p className="font-grotesk font-semibold text-white text-sm">Draaksh Community</p>
                  <p className="font-mono text-[10px] text-white/30 tracking-wide">WhatsApp Group</p>
                </div>
                <span className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-green-400/70">Active</span>
                </span>
              </div>

              {/* Mock messages */}
              {[
                { name: "Arjun M.", msg: "Registered for TechQuest! Can't wait 🔥", time: "2m ago", side: "left" },
                { name: "Priya S.", msg: "What topics are covered in Round 1?", time: "5m ago", side: "left" },
                { name: "Admin", msg: "DSA, output prediction, logical reasoning + tech GK", time: "4m ago", side: "right" },
                { name: "Rohan K.", msg: "This is gonna be fire", time: "1m ago", side: "left" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.side === "left" ? -10 : 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                  className={`flex flex-col gap-0.5 mb-3 ${m.side === "right" ? "items-end" : "items-start"}`}
                >
                  <span className="font-mono text-[9px] text-white/25 px-1">{m.name}</span>
                  <div
                    className="px-3 py-2 max-w-[80%] rounded-sm"
                    style={{
                      background:
                        m.side === "right"
                          ? "rgba(94,46,234,0.2)"
                          : "rgba(255,255,255,0.04)",
                      border:
                        m.side === "right"
                          ? "1px solid rgba(94,46,234,0.3)"
                          : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="font-inter text-white/70 text-xs leading-relaxed">{m.msg}</p>
                  </div>
                  <span className="font-mono text-[9px] text-white/15 px-1">{m.time}</span>
                </motion.div>
              ))}

              {/* Bottom join nudge */}
              <div className="mt-4 pt-4 border-t border-white/5 text-center">
                <p className="font-inter text-white/25 text-xs">
                  +200 students joining this April
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
