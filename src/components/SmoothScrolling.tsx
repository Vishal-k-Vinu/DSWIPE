"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Lenis for luxurious, dampened smooth scrolling
    const lenis = new Lenis({
      duration: 1.5, // Higher = slower, smoother scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.65, // Reduces native mouse wheel sensitivity by 35%
    });

    // Synchronize Lenis scrolling with GSAP ScrollTrigger to prevent jitter during pinned animations
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = gsap.ticker;
    ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
