"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  scaleEffect?: boolean;
  pin?: boolean;
  duration?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  as?: React.ElementType;
}

/**
 * High-performance, Apple-style scroll reveal component.
 * Uses IntersectionObserver via GSAP ScrollTrigger to trigger animations.
 */
export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
  scaleEffect = false,
  pin = false,
  duration = 0.8,
  delay = 0,
  direction = "up",
  as: Component = "div",
}: ScrollRevealProps) {
  const containerRef = useRef<any>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Use matchMedia to respect OS-level prefers-reduced-motion settings
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Determine what elements to animate
      let targetElements: HTMLElement[] = [containerRef.current];

      if (stagger) {
        // If staggering, target the direct children
        const childrenNodes = Array.from(containerRef.current.children) as HTMLElement[];
        if (childrenNodes.length > 0) {
          targetElements = childrenNodes;
        }
      }

      // Determine initial slide positions
      let initialY = 0;
      let initialX = 0;
      
      if (!pin) {
        if (direction === "up") initialY = 50;
        else if (direction === "down") initialY = -50;
        else if (direction === "left") initialX = -50;
        else if (direction === "right") initialX = 50;
      }

      // 1. Initial State: fully GPU accelerated (opacity + transform)
      gsap.set(targetElements, {
        opacity: 0,
        y: initialY,
        x: initialX,
        scale: scaleEffect ? 1.05 : 1
      });

      if (pin) {
        // 2a. Pinned Mode: Feature Carousel Style
        // Animates based on scroll progress rather than a one-off trigger
        if (stagger) {
          // We set them to absolute so they stack like a carousel if needed, or leave flow to caller
          // But normally for a scroll scrub, we start them slightly offset
          gsap.set(targetElements, { y: 50 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=2000", // Adjust this based on how long you want the pin to last
            pin: true,
            scrub: 1, // Smooth scrubbing
          }
        });

        if (stagger && targetElements.length > 0) {
          targetElements.forEach((el, index) => {
            // Sequential fade/slide in as you scroll
            tl.to(el, { opacity: 1, y: 0, x: 0, scale: 1, duration: 1 }, index * 0.5);
          });
        } else {
          tl.to(targetElements, { opacity: 1, y: 0, x: 0, scale: 1, duration: 1 });
        }
      } else {
        // 2b. Standard Reveal Mode
        // Triggers once when 15-20% visible near viewport bottom
        ScrollTrigger.batch(targetElements, {
          start: "top 85%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              duration: duration,
              delay: delay / 1000, // Convert ms to seconds for GSAP
              ease: "power2.out", // Apple's signature smooth ease-out
              stagger: stagger ? 0.12 : 0, // 120ms stagger between child elements
            });
          }
        });
      }
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      // Fallback: strictly opacity fades, no transforms (y/scale)
      let targetElements: HTMLElement[] = [containerRef.current];
      if (stagger) {
        const childrenNodes = Array.from(containerRef.current.children) as HTMLElement[];
        if (childrenNodes.length > 0) targetElements = childrenNodes;
      }

      gsap.set(targetElements, { opacity: 0 });

      if (pin) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=2000",
            pin: true,
            scrub: 1,
          }
        });

        if (stagger) {
          targetElements.forEach((el, i) => tl.to(el, { opacity: 1, duration: 1 }, i * 0.5));
        } else {
          tl.to(targetElements, { opacity: 1, duration: 1 });
        }
      } else {
        ScrollTrigger.batch(targetElements, {
          start: "top 85%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              duration: duration,
              delay: delay / 1000,
              ease: "power2.out",
              stagger: stagger ? 0.12 : 0,
            });
          }
        });
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
}

/**
 * Optional hook for manual scroll reveal control on custom refs.
 * @param options configuration options for the reveal
 */
export function useScrollReveal(options = { start: "top 85%", stagger: 0.12, duration: 0.8, y: 50 }) {
  const ref = useRef<any>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const elements = Array.from(ref.current.children) as HTMLElement[];
      gsap.set(elements, { opacity: 0, y: options.y });

      ScrollTrigger.batch(elements, {
        start: options.start,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: options.duration,
            ease: "power2.out",
            stagger: options.stagger
          });
        }
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const elements = Array.from(ref.current.children) as HTMLElement[];
      gsap.set(elements, { opacity: 0 });
      ScrollTrigger.batch(elements, {
        start: options.start,
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            duration: options.duration,
            ease: "power2.out",
            stagger: options.stagger
          });
        }
      });
    });
  }, { scope: ref });

  return ref;
}
