"use client";

import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 1000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.1,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // easeOutQuart for smooth deceleration
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
