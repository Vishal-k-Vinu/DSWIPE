"use client";

import { useRef, useState, useCallback, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outlined";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "filled",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  loading = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4.5 text-lg",
  };

  const variantClasses = {
    filled: `bg-accent text-bg-primary font-bold hover:bg-accent-dim hover:shadow-[0_0_20px_rgba(205,255,80,0.4)]`,
    outlined: `bg-transparent text-accent border-2 border-accent font-bold hover:bg-accent hover:text-bg-primary hover:shadow-[0_0_20px_rgba(205,255,80,0.4)]`,
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    font-[family-name:var(--font-display)]
    tracking-tight rounded-none cursor-pointer
    transition-all duration-300
    disabled:opacity-40 disabled:cursor-not-allowed
    overflow-hidden group
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  const content = (
    <>
      {/* Glitch sweep effect on hover */}
      <span className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-45deg] group-hover:animate-[glitchSlice_0.6s_ease-in-out_forwards]" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? <LoadingSpinner /> : children}
      </span>
      {/* Corner bracket accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-0 group-hover:opacity-100 transition-opacity" />
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
}

function LoadingSpinner() {
  return (
    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
