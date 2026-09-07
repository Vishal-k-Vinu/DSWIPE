"use client";

import { type ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold });

  const directionClass = {
    up: "",
    left: "from-left",
    right: "from-right",
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? "reveal-visible" : "reveal-hidden"} ${directionClass[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
