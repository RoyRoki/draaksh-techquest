"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    id: "bronze",
    name: "Bronze",
    price: "₹2,000",
    tagline: "Get Started",
    color: "#CD7F32",
    glow: "rgba(205,127,50,0.15)",
    border: "rgba(205,127,50,0.25)",
    badge: null,
    benefits: [
      "Logo on event poster",
      "1 social media mention",
      "Mention in closing ceremony",
      "Certificate of sponsorship",
      "Post-event shoutout",
    ],
    notIncluded: [
      "Speaking slot",
      "Email blast mention",
      "Student database access",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    price: "₹5,000",
    tagline: "Get Noticed",
    color: "#C0C0C0",
    glow: "rgba(192,192,192,0.1)",
    border: "rgba(192,192,192,0.25)",
    badge: "POPULAR",
    benefits: [
      "Larger logo placement",
      "3 social media mentions",
      "Email blast mention",
      "2-minute speaking slot",
      "Certificate of sponsorship",
      "Post-event appreciation post",
    ],
    notIncluded: [
      "Student database access",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: "₹10,000",
    tagline: "Power the Event",
    color: "#F5C518",
    glow: "rgba(245,197,24,0.18)",
    border: "rgba(245,197,24,0.4)",
    badge: "BEST VALUE",
    benefits: [
      '"Powered By" title credit',
      "Logo on ALL event materials",
      "Speaking opportunity",
      "5+ social media mentions",
      "Email blast mention",
      "Highlight reel tag",
      "Opt-in student database access",
      "Priority future partnership",
      "Certificate of sponsorship",
    ],
    notIncluded: [],
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" stroke={color} strokeOpacity="0.3" strokeWidth="1" />
      <path d="M4 7l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <path d="M5 5l4 4M9 5l-4 4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function SponsorPackages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="packages" ref={ref} className="relative py-32 px-6 overflow-hidden bg-black radial-gold">
      {/* Big editorial number */}
      <div
        className="absolute top-8 left-6 font-syne font-extrabold text-white/[0.025] select-none pointer-events-none"
        style={{ fontSize: "clamp(120px, 20vw, 300px)", lineHeight: 1, letterSpacing: "-0.05em" }}
      >
        04
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="section-label block mb-4">Sponsorship Tiers</span>
          <h2
            className="font-syne font-extrabold text-white leading-none mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 68px)", letterSpacing: "-0.025em" }}
          >
            Choose Your <span style={{ color: "#F5C518" }}>Impact</span>
          </h2>
          <p className="font-inter text-white/40 text-base max-w-xl mx-auto">
            Every tier puts your brand in front of 200+ college students at the peak of their tech journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const isGold = tier.id === "gold";
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  marginTop: isGold ? 0 : i === 0 ? "24px" : "12px",
                  border: `1px solid ${tier.border}`,
                  boxShadow: isGold
                    ? `0 0 60px ${tier.glow}, 0 0 120px ${tier.glow}`
                    : `0 0 20px ${tier.glow}`,
                }}
                className={`relative flex flex-col p-7 rounded-sm transition-all duration-400 group hover:-translate-y-2 ${
                  isGold ? "bg-[#0a0900]" : "bg-[#07070f]"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 font-mono text-[9px] tracking-widest"
                    style={{
                      background: tier.color,
                      color: isGold ? "#000" : "#fff",
                    }}
                  >
                    {tier.badge}
                  </div>
                )}

                {/* Gold glow pulse */}
                {isGold && (
                  <div
                    className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"
                    style={{ boxShadow: `0 0 60px ${tier.glow} inset` }}
                  />
                )}

                {/* Tier name */}
                <div className="mb-6">
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase mb-3 block"
                    style={{ color: tier.color, opacity: 0.7 }}
                  >
                    {tier.name} Tier
                  </span>
                  <div
                    className="font-syne font-extrabold leading-none mb-2"
                    style={{
                      fontSize: "clamp(40px, 5vw, 56px)",
                      color: tier.color,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {tier.price}
                  </div>
                  <p className="font-inter text-white/40 text-sm">{tier.tagline}</p>
                </div>

                {/* Divider */}
                <div className="h-px mb-6" style={{ background: `${tier.color}20` }} />

                {/* Benefits */}
                <div className="flex flex-col gap-3 flex-1 mb-6">
                  {tier.benefits.map((b, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckIcon color={tier.color} />
                      <span className="font-inter text-white/70 text-sm">{b}</span>
                    </div>
                  ))}
                  {tier.notIncluded.map((b, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CrossIcon />
                      <span className="font-inter text-white/25 text-sm line-through">{b}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/919732548768?text=Hi%2C%20I%27m%20interested%20in%20the%20${tier.name}%20sponsorship%20for%20Draaksh%20TechQuest%202026`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="Claim"
                  className="group/btn relative block text-center px-6 py-3.5 font-grotesk font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300"
                  style={{
                    border: `1px solid ${tier.border}`,
                    color: tier.color,
                  }}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    style={{ background: `${tier.color}15` }}
                  />
                  <span className="relative z-10">Claim {tier.name} →</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Custom package note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-10 font-inter text-white/25 text-sm"
        >
          Need a custom package?{" "}
          <a
            href="https://wa.me/919732548768"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5e2eea]/60 hover:text-[#5e2eea] transition-colors underline"
          >
            Let&apos;s talk
          </a>
        </motion.p>

        {/* Community Partner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 relative overflow-hidden"
          style={{
            border: "1px solid rgba(94,46,234,0.2)",
            background: "linear-gradient(135deg, rgba(94,46,234,0.04) 0%, rgba(10,10,20,0.8) 60%, rgba(94,46,234,0.04) 100%)",
          }}
        >
          {/* Top label strip */}
          <div
            className="px-8 py-3 flex items-center gap-3 border-b border-[#5e2eea]/10"
            style={{ background: "rgba(94,46,234,0.06)" }}
          >
            <span className="font-mono text-[10px] tracking-widest text-[#5e2eea]/70 uppercase">
              Community Partner
            </span>
            <span className="h-px flex-1 bg-[#5e2eea]/10" />
            <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase">
              Non-Monetary · Cross-Promotion
            </span>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left — description */}
            <div className="lg:col-span-2">
              <h3 className="font-syne font-bold text-white text-xl mb-3 leading-tight">
                Partner with us.{" "}
                <span className="text-[#5e2eea]">Grow together.</span>
              </h3>
              <p className="font-inter text-white/50 text-base leading-relaxed">
                As a Community Partner, you&apos;ll get brand visibility across our posters
                and social media, direct reach to college students, shoutouts during the
                event, and an opportunity to grow your community through cross-promotion.
              </p>

              {/* Perks row */}
              <div className="flex flex-wrap gap-3 mt-5">
                {[
                  "Poster visibility",
                  "Social media features",
                  "Live event shoutout",
                  "Cross-promotion",
                  "Student audience reach",
                ].map((perk, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 font-inter text-xs text-white/50 px-3 py-1.5 rounded-sm"
                    style={{ border: "1px solid rgba(94,46,234,0.18)", background: "rgba(94,46,234,0.05)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#5e2eea] shrink-0" />
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col gap-3 lg:items-end">
              <p className="font-inter text-white/30 text-xs leading-relaxed lg:text-right">
                Ideal for student clubs, tech communities, dev groups, and local orgs.
              </p>
              <a
                href="https://wa.me/919732548768?text=Hi%2C%20I%27m%20interested%20in%20becoming%20a%20Community%20Partner%20for%20Draaksh%20TechQuest%202026"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="Partner"
                className="group inline-flex items-center gap-3 px-6 py-3.5 font-grotesk font-semibold text-sm tracking-wide text-[#5e2eea] border border-[#5e2eea]/30 hover:border-[#5e2eea]/70 hover:bg-[#5e2eea]/08 transition-all duration-300"
              >
                Become a Community Partner
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
