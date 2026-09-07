"use client";

import { type ReactNode } from "react";

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
}

export default function GlowingBorder({
  children,
  className = "",
}: GlowingBorderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
