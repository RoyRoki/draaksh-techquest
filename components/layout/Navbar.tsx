"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${
        scrolled ? "py-3 bg-black/80 backdrop-blur-md border-b border-[#5e2eea]/10" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" data-cursor-label="Home">
          <div className="relative w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity">
            <Image src="/draaksh-logo.png" alt="Draaksh" fill className="object-contain" />
          </div>
          <span className="font-syne font-bold text-sm tracking-tight text-white/80 group-hover:text-white transition-colors">
            DRAAKSH
          </span>
        </a>

        {/* CTA */}
        <a
          href="https://wa.me/919732548768?text=Hi%2C%20I%27m%20interested%20in%20sponsoring%20Draaksh%20TechQuest%202026"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-label="Talk"
          className="group relative px-5 py-2 text-xs font-grotesk font-semibold tracking-widest uppercase text-white border border-[#5e2eea]/50 hover:border-[#5e2eea] transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 bg-[#5e2eea] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          <span className="relative z-10">Become a Sponsor</span>
        </a>
      </div>
    </motion.nav>
  );
}
