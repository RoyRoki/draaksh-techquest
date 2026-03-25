"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({ to, duration = 1800, suffix = "", prefix = "", className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const interval = 16;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Overshoot spring easing
      const eased = progress < 1
        ? 1 - Math.pow(1 - progress, 4)
        : 1;
      setValue(Math.round(eased * to));

      if (step >= steps) {
        clearInterval(timer);
        setValue(to);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  );
}
