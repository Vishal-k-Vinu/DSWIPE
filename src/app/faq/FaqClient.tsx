"use client";

import { useState, useCallback } from "react";
import { faqData } from "@/data/faqData";
import FaqAccordion from "@/components/FaqAccordion";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import ParticleField from "@/components/ParticleField";
import GlowingBorder from "@/components/GlowingBorder";

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].id);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = useCallback((key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }, []);

  // Global question counter
  let questionNumber = 0;

  return (
    <div className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 data-lines opacity-10 pointer-events-none" />
      <ParticleField particleCount={30} color="205, 255, 80" speed={0.2} connected={false} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-text-primary mb-4 inline-block">
              Questions<span className="text-accent">?</span>
            </h1>
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-base md:text-lg max-w-lg">
              Everything you need to know about DSwipe, NFC technology, and 
              how our smart cards work. Can&apos;t find your answer? Hit us up on WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: Category navigation */}
          <ScrollReveal direction="left" className="lg:col-span-4">
            {/* Desktop: sticky sidebar */}
            <div className="hidden lg:block sticky top-28">
              <h2 className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />
                Categories
              </h2>
              <nav className="space-y-2 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border" />
                {faqData.map((category) => {
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        document.getElementById(`faq-${category.id}`)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-300 cursor-pointer relative group`}
                    >
                      {/* Active indicator line */}
                      <span className={`absolute left-0 top-0 bottom-0 w-[2px] bg-accent transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                      
                      {/* Hover highlight */}
                      <span className={`absolute inset-0 bg-accent/5 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
                      
                      <span className={`relative font-[family-name:var(--font-body)] text-sm font-medium transition-colors ${isActive ? "text-accent" : "text-text-secondary group-hover:text-text-primary"}`}>
                        {category.name}
                      </span>
                      <span className={`relative text-xs ml-auto font-[family-name:var(--font-accent)] transition-colors ${isActive ? "text-accent" : "text-text-muted"}`}>
                        [{category.items.length}]
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* WhatsApp CTA */}
              <div className="mt-10">
                <GlowingBorder>
                  <div className="p-6 bg-bg-surface relative corner-brackets">
                    <p className="text-text-secondary font-[family-name:var(--font-body)] text-sm mb-4 leading-relaxed">
                      System anomaly? We&apos;re happy to help personally.
                    </p>
                    <MagneticButton href="https://wa.me/91XXXXXXXXXX" size="sm" variant="outlined">
                      Ask on WhatsApp
                    </MagneticButton>
                  </div>
                </GlowingBorder>
              </div>
            </div>

            {/* Mobile: horizontal scrolling pills */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-3 -mx-6 px-6 snap-x relative">
              {faqData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    document.getElementById(`faq-${category.id}`)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={`px-4 py-2 text-sm font-[family-name:var(--font-body)] font-medium whitespace-nowrap transition-all duration-300 snap-start cursor-pointer border ${
                    activeCategory === category.id
                      ? "bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(205,255,80,0.2)]"
                      : "bg-bg-surface text-text-secondary border-border"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: FAQ items grouped by category */}
          <div className="lg:col-span-8">
            {faqData.map((category) => (
              <div
                key={category.id}
                id={`faq-${category.id}`}
                className="mb-12 last:mb-0 scroll-mt-28"
              >
                <ScrollReveal>
                  <h2 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-accent shadow-[0_0_8px_rgba(205,255,80,0.8)]" />
                    {category.name}
                  </h2>
                </ScrollReveal>

                <div className="border-t border-border">
                  {category.items.map((item) => {
                    questionNumber++;
                    const key = `${category.id}-${questionNumber}`;
                    return (
                      <ScrollReveal key={key} delay={50}>
                        <FaqAccordion
                          number={questionNumber}
                          question={item.question}
                          answer={item.answer}
                          isOpen={openItems.has(key)}
                          onToggle={() => toggleItem(key)}
                        />
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="lg:hidden mt-12">
              <GlowingBorder>
                <div className="p-6 bg-bg-surface text-center corner-brackets">
                  <p className="text-text-secondary font-[family-name:var(--font-body)] text-sm mb-4">
                    Still have questions?
                  </p>
                  <MagneticButton href="https://wa.me/91XXXXXXXXXX" size="sm" variant="outlined">
                    Ask on WhatsApp
                  </MagneticButton>
                </div>
              </GlowingBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
