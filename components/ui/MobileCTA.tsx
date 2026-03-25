"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileCTA() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setShow(v > 400));
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-[400] lg:hidden p-4"
      style={{ background: "linear-gradient(to top, #000 60%, transparent)" }}
    >
      <a
        href="https://wa.me/919732548768?text=Hi%2C%20I%27m%20interested%20in%20sponsoring%20Draaksh%20TechQuest%202026"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 bg-[#5e2eea] text-white font-grotesk font-semibold text-sm tracking-wide glow-violet-sm"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1C4.58 1 1 4.58 1 9c0 1.42.37 2.75 1.01 3.91L1 17l4.18-1.09A7.96 7.96 0 009 17c4.42 0 8-3.58 8-8s-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.5 10.5c-.2-.1-1.2-.6-1.4-.67-.2-.07-.34-.1-.48.1-.14.2-.54.67-.66.81-.12.14-.24.16-.44.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.1-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.07-.14.03-.26-.02-.36-.05-.1-.48-1.16-.66-1.59-.17-.42-.35-.36-.48-.37H5.8c-.14 0-.37.05-.56.26-.2.2-.74.73-.74 1.78s.76 2.06.87 2.21c.1.14 1.5 2.29 3.63 3.21.51.22.9.35 1.21.45.51.16.97.14 1.34.08.41-.06 1.26-.52 1.44-1.02.18-.5.18-.93.13-1.02-.05-.1-.19-.14-.39-.24z" fill="currentColor"/>
        </svg>
        Become a Sponsor
      </a>
    </motion.div>
  );
}
