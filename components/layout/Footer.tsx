"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#5e2eea]/10 py-10 px-6" style={{ background: "#000" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + name */}
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 opacity-60">
            <Image src="/draaksh-logo.png" alt="Draaksh" fill className="object-contain" />
          </div>
          <div>
            <span className="font-syne font-bold text-white/50 text-xs tracking-widest uppercase">Draaksh</span>
            <span className="font-mono text-[10px] text-white/20 ml-2">TechQuest 2026</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-inter text-white/20 text-xs text-center">
          Where Campus Coders Compete.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:draaksh.official.25@gmail.com"
            className="font-mono text-[10px] text-white/25 hover:text-[#5e2eea] transition-colors tracking-wider"
          >
            EMAIL
          </a>
          <span className="text-white/10">·</span>
          <a
            href="https://wa.me/919732548768"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-white/25 hover:text-[#5e2eea] transition-colors tracking-wider"
          >
            WHATSAPP
          </a>
          <span className="text-white/10">·</span>
          <a
            href="#packages"
            className="font-mono text-[10px] text-white/25 hover:text-[#5e2eea] transition-colors tracking-wider"
          >
            PACKAGES
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.03] flex justify-center">
        <p className="font-mono text-[9px] text-white/15 tracking-widest text-center">
          © 2026 DRAAKSH · ALL RIGHTS RESERVED · SILIGURI, WEST BENGAL
        </p>
      </div>
    </footer>
  );
}
