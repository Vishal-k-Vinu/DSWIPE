"use client";

import { useId } from "react";

interface FaqAccordionProps {
  number: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordion({
  number,
  question,
  answer,
  isOpen,
  onToggle,
}: FaqAccordionProps) {
  const panelId = useId();
  const triggerId = useId();

  return (
    <div className={`border-b border-border relative transition-colors duration-300 group/accordion ${isOpen ? "border-accent/50 bg-accent/[0.02]" : "hover:border-accent/30"}`}>
      {/* Animated scanline on open */}
      <div className={`absolute top-0 left-0 bottom-0 w-[2px] bg-accent transition-all duration-300 ${isOpen ? "opacity-100 shadow-[0_0_10px_rgba(205,255,80,0.8)]" : "opacity-0"}`} />
      
      <button
        id={triggerId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-start gap-5 py-6 px-4 md:px-6 text-left cursor-pointer group relative overflow-hidden"
      >
        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

        {/* Serif number with glitch on hover */}
        <span className={`font-[family-name:var(--font-accent)] text-2xl md:text-3xl font-light leading-none mt-0.5 transition-colors duration-300 min-w-[2.5rem] relative ${
          isOpen ? "text-accent neon-text" : "text-text-muted group-hover:text-text-secondary group-hover:glitch-hover"
        }`}>
          {String(number).padStart(2, "0")}
        </span>

        {/* Question text */}
        <span className={`font-[family-name:var(--font-display)] text-base md:text-lg font-semibold flex-1 transition-colors duration-300 leading-snug ${
          isOpen ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
        }`}>
          {question}
        </span>

        {/* Custom + / × icon */}
        <span className="relative w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span
            className={`absolute w-4 h-[2px] transition-all duration-300 ${
              isOpen ? "bg-accent rotate-0 shadow-[0_0_8px_rgba(205,255,80,0.8)]" : "bg-text-muted group-hover:bg-text-secondary rotate-0"
            }`}
          />
          <span
            className={`absolute w-4 h-[2px] transition-all duration-300 ${
              isOpen ? "bg-accent rotate-0 opacity-0" : "bg-text-muted group-hover:bg-text-secondary rotate-90"
            }`}
          />
        </span>
      </button>

      {/* Expandable answer */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="pl-[4.5rem] pb-6 pr-6 md:pr-10">
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-sm md:text-base leading-relaxed relative">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
