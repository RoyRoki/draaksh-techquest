"use client";

import { useState } from "react";
import Loader from "@/components/ui/Loader";
import MobileCTA from "@/components/ui/MobileCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Arena from "@/components/sections/Arena";
import Reach from "@/components/sections/Reach";
import SponsorPackages from "@/components/sections/SponsorPackages";
import Timeline from "@/components/sections/Timeline";
import Organizer from "@/components/sections/Organizer";
import JoinCommunity from "@/components/sections/JoinCommunity";
import CTA from "@/components/sections/CTA";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Navbar />
            <main>
              <Hero />
              <Marquee />
              <About />
              <Arena />
              <Reach />
              <SponsorPackages />
              <Timeline />
              <Organizer />
              <JoinCommunity />
              <CTA />
            </main>
            <Footer />
            <MobileCTA />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
