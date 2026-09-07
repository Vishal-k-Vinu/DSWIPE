"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  // Text refs
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !cardRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 3,
        pin: true,
      },
      defaults: { ease: "none" }
    });

    // Initial state
    gsap.set(cardRef.current, { scale: 0.8, rotationY: -25, rotationX: 10, y: 100, opacity: 0 });
    gsap.set(highlightRef.current, { opacity: 0, x: -100 });
    gsap.set([text1Ref.current, text2Ref.current, text3Ref.current], { opacity: 0, y: 50 });

    // Animation Sequence
    tl.to(cardRef.current, { opacity: 1, y: 0, duration: 1 })
      .to(text1Ref.current, { opacity: 1, y: 0, duration: 1 }, "<")
      .to(cardRef.current, { scale: 1.2, rotationY: 0, rotationX: 0, duration: 2 })
      .to(highlightRef.current, { opacity: 0.5, x: 200, duration: 2 }, "<")
      .to(text1Ref.current, { opacity: 0, y: -50, duration: 1 }, "-=1")

      .to(text2Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(cardRef.current, { rotationY: 25, rotationX: -10, scale: 1.4, duration: 2 })
      .to(text2Ref.current, { opacity: 0, y: -50, duration: 1 }, "-=1")

      .to(text3Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(cardRef.current, { rotationY: -10, rotationX: 5, scale: 1.6, duration: 2 })

      .to(text3Ref.current, { opacity: 0, y: -50, duration: 1 })
      .to(cardRef.current, { scale: 2.5, opacity: 0, duration: 1.5 }, "<");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full bg-bg-primary overflow-hidden relative flex items-center justify-center">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* The 3D Space */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        style={{ perspective: "1200px" }}
      >
        {/* The Card */}
        <div
          ref={cardRef}
          className="w-64 md:w-80 h-96 md:h-[420px] rounded-2xl bg-gradient-to-br from-bg-surface to-[#050505] border border-border/40 shadow-[0_0_50px_rgba(205,255,80,0.15)] flex flex-col justify-between p-6 md:p-8 relative overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Card Design inside */}
          <div className="absolute top-0 right-0 p-6 opacity-80">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)">
              <path d="M4 8a12 12 0 0116 0M8 14a6 6 0 018 0M12 20v.01" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="mt-auto">
            <div className="w-14 h-10 bg-gradient-to-br from-border to-border/30 rounded-md mb-6 shadow-inner"></div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-text-primary tracking-tighter">DSwipe Pro</h3>
            <p className="text-xs text-text-muted mt-1 font-[family-name:var(--font-body)] tracking-widest uppercase">Smart Card</p>
          </div>

          {/* Glare effect */}
          <div
            ref={highlightRef}
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent w-[200%] h-[200%] -top-[50%] -left-[50%] transform rotate-45"
          ></div>
        </div>
      </div>

      {/* Texts */}
      <div className="max-w-[1400px] mx-auto px-6 w-full h-full relative z-20 flex flex-col justify-center pointer-events-none">
        <div ref={text1Ref} className="absolute left-6 md:left-24 max-w-sm md:max-w-md">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tighter text-text-primary mb-4 leading-tight">
            Tap to connect.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-text-secondary text-base md:text-lg">
            No apps. No QR codes. Just hold your DSwipe card near any modern smartphone.
          </p>
        </div>

        <div ref={text2Ref} className="absolute right-6 md:right-24 max-w-sm md:max-w-md text-right">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tighter text-text-primary mb-4 leading-tight">
            Update anytime.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-text-secondary text-base md:text-lg">
            Changed your title or number? Update your profile instantly via the dashboard. No reprints necessary.
          </p>
        </div>

        <div ref={text3Ref} className="absolute left-6 md:left-24 max-w-sm md:max-w-md">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tighter text-accent mb-4 leading-tight">
            Eco-friendly.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-text-secondary text-base md:text-lg">
            One premium card replacing hundreds of paper ones. Better for you, better for the planet.
          </p>
        </div>
      </div>
    </div>
  );
}
