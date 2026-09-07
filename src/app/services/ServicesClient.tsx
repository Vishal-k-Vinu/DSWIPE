"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionDivider from "@/components/SectionDivider";
import MagneticButton from "@/components/MagneticButton";
import ParticleField from "@/components/ParticleField";
import GlowingBorder from "@/components/GlowingBorder";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ScrollShowcase from "@/components/ScrollShowcase";

/* ===== How it works steps ===== */
const steps = [
  {
    num: "01",
    title: "Tap",
    desc: "Hold your DSwipe card near any NFC-enabled smartphone. No app needed — it just works.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <rect x="12" y="4" width="24" height="40" rx="4" className="circuit-line" />
        <circle cx="24" cy="36" r="2" fill="var(--accent)" className="animate-pulse-glow" />
        <path d="M20 18c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M16 16c0-4.4 3.6-8 8-8s8 3.6 8 8" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Share",
    desc: "Your full digital profile — name, links, portfolio, socials — opens instantly in their browser.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <circle cx="16" cy="24" r="4" className="animate-pulse-glow" />
        <circle cx="36" cy="12" r="4" className="animate-pulse-glow" />
        <circle cx="36" cy="36" r="4" className="animate-pulse-glow" />
        <path d="M20 22l12-8M20 26l12 8" className="circuit-line" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Connect",
    desc: "They save your contact, follow your socials, visit your site — all from a single tap.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M16 28c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z" className="circuit-line" />
        <circle cx="16" cy="20" r="5" />
        <path d="M32 28c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z" opacity="0.5" />
        <circle cx="32" cy="20" r="5" opacity="0.5" />
      </svg>
    ),
  },
];

/* ===== Bento features ===== */
const features = [
  {
    title: "NFC Instant Sharing",
    desc: "One tap transfers your full professional profile. No app downloads, no QR scanning, no typing. Under 3 seconds.",
    span: "lg:col-span-2 lg:row-span-2",
    accent: false,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 16a8 8 0 0116 0" className="circuit-line" />
        <path d="M12 16a4 4 0 018 0" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" className="animate-pulse-glow" />
        <path d="M16 18v8" />
      </svg>
    ),
  },
  {
    title: "Waterproof & Premium",
    desc: "Matte or gloss PVC finish. Survives rain, spills, and daily wallet wear.",
    span: "lg:col-span-1",
    accent: false,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4c0 0-10 10-10 18a10 10 0 0020 0c0-8-10-18-10-18z" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly",
    desc: "One card replaces hundreds of paper reprints. Better for the planet.",
    span: "lg:col-span-1",
    accent: false,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 28s2-14 20-18c0 0-8 8-8 18" className="circuit-line" />
        <path d="M12 28c0-6 3-10 6-13" />
      </svg>
    ),
  },
  {
    title: "Real-Time Updates",
    desc: "New number? New title? Update once in your dashboard — reflected everywhere instantly.",
    span: "lg:col-span-1",
    accent: false,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16a12 12 0 0121.2-7.6" className="circuit-line" />
        <path d="M28 16a12 12 0 01-21.2 7.6" className="circuit-line" />
        <path d="M25.2 4v4.4h-4.4" />
        <path d="M6.8 28v-4.4h4.4" />
      </svg>
    ),
  },
  {
    title: "Cross-Device Compatible",
    desc: "iPhone 7+ and most Android phones from 2018 onwards. QR fallback for everything else.",
    span: "lg:col-span-1",
    accent: false,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="12" height="20" rx="2" />
        <rect x="20" y="8" width="8" height="16" rx="1" />
        <circle cx="10" cy="22" r="1" fill="currentColor" className="animate-pulse-glow" />
      </svg>
    ),
  },
  {
    title: "No App Required",
    desc: "Works natively on every modern smartphone. Your profile is a web page — open in any browser.",
    span: "lg:col-span-2",
    accent: false,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" className="circuit-line" />
        <path d="M10 16l4 4 8-8" />
      </svg>
    ),
  },
];

/* ===== Use cases ===== */
const useCases = [
  {
    title: "Professionals",
    desc: "Make every handshake count. Share your credentials before the coffee gets cold.",
  },
  {
    title: "Entrepreneurs",
    desc: "Your startup moves fast — your business card should too. Always pitch-ready.",
  },
  {
    title: "Sales Teams",
    desc: "Equip your team with branded cards. Track taps, measure reach, close deals.",
  },
  {
    title: "Freelancers",
    desc: "Portfolio, testimonials, booking link — all in one tap. You ARE the brand.",
  },
  {
    title: "Event Organizers",
    desc: "Network at scale. One card handles every introduction at every event.",
  },
];

export default function ServicesClient() {
  return (
    <div>
      {/* ===== Section Header with Particles ===== */}
      <section className="relative py-20 md:py-32 px-6 md:px-10 overflow-hidden">
        <ParticleField particleCount={60} color="205, 255, 80" />

        <div className="relative max-w-[1400px] mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold font-[family-name:var(--font-body)] tracking-widest uppercase mb-6 animate-pulse-glow">
                Next-Gen Networking
              </div>
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-tight text-text-primary">
                Never Miss a
                <br />
                <span className="text-accent neon-text-animated">Connection</span> Again
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200} className="lg:col-span-5">
              <p className="text-text-secondary font-[family-name:var(--font-body)] text-base md:text-lg leading-relaxed max-w-md">
                <strong className="text-text-primary font-semibold">DSwipe – Kerala’s Smart NFC Business Card Brand.</strong> Share your
                entire professional identity with a single tap. No app. No
                paper. No limits.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollShowcase />

      <SectionDivider to="var(--bg-surface)" accent />

      {/* ===== How It Works ===== */}
      <section className="bg-bg-surface py-20 md:py-28 px-6 md:px-10 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 grid-pattern-animated opacity-30" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.2em] text-accent mb-16 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent" />
              How It Works
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} isLast={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider to="var(--bg-primary)" flip accent />

      {/* ===== Bento Grid Features ===== */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                Built for the way
                <br />
                you <span className="text-accent neon-text">actually</span> network
              </h2>
              <p className="text-text-muted font-[family-name:var(--font-body)] text-sm max-w-xs">
                Every feature designed around real-world professional interactions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 80} className={feature.span}>
                <GlowingBorder
                  className={`h-full border border-border transition-all duration-500 hover:border-accent hover:shadow-[0_0_20px_rgba(205,255,80,0.15)] cursor-default ${feature.accent
                    ? "bg-accent/5 holo-shimmer"
                    : "bg-bg-surface"
                    }`}
                >
                  <div className="h-full p-6 md:p-8 relative overflow-hidden group">
                    <div className={`mb-4 transition-colors duration-300 ${feature.accent ? "text-accent" : "text-text-muted group-hover:text-accent"
                      }`}>
                      {feature.icon}
                    </div>
                    <h3 className={`font-[family-name:var(--font-display)] font-bold mb-2 transition-colors duration-300 ${feature.accent ? "text-xl md:text-2xl text-text-primary neon-text" : "text-base text-text-primary group-hover:text-accent"
                      }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-text-secondary font-[family-name:var(--font-body)] leading-relaxed ${feature.accent ? "text-sm md:text-base" : "text-sm"
                      }`}>
                      {feature.desc}
                    </p>
                  </div>
                </GlowingBorder>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider accent />

      {/* ===== Use Cases ===== */}
      <section className="bg-bg-surface py-20 md:py-28 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 hex-grid-bg opacity-30" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 inline-block">
              Who&apos;s it for?
            </h2>
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-base mb-16 max-w-lg">
              Anyone who networks, meets people, or hands out cards. So — everyone who means business.
            </p>
          </ScrollReveal>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.title} delay={i * 100} className="min-w-[260px] md:min-w-0 snap-start">
                <UseCaseCard title={uc.title} desc={uc.desc} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider to="var(--bg-primary)" flip />

      {/* ===== Stats Section ===== */}
      <section className="py-20 md:py-32 px-6 md:px-10 relative overflow-hidden bg-bg-primary">
        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* Top Row: Header & Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-start">
            <ScrollReveal direction="left">
              <span className="block text-sm font-bold font-[family-name:var(--font-body)] text-text-primary mb-4">
                Smart NFC Solutions
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,4vw,4rem)] font-bold leading-[1.1] text-accent">
                Transform Connections<br />Into Opportunities
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100} className="lg:pt-8">
              <p className="text-text-secondary font-[family-name:var(--font-body)] text-base md:text-lg leading-relaxed mb-8">
                DSwipe helps professionals and businesses share contact details, social links, portfolios, and payment info instantly with a single tap. No apps, no paper cards — just smarter networking for the modern generation.
              </p>
              <div className="flex items-center gap-6">
                <a href="#how-it-works" className="px-6 py-2.5 border border-border hover:border-accent rounded-md text-sm font-medium text-text-primary transition-colors bg-transparent">
                  Get started
                </a>
                <a href="#features" className="flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom Row: Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <ScrollReveal delay={0}>
              <div className="pl-6 md:pl-8 border-l-[2px] border-border hover:border-accent transition-colors duration-300">
                <div className="font-[family-name:var(--font-display)] text-6xl md:text-7xl font-bold text-accent mb-3 tracking-tight">
                  <AnimatedCounter end={500} suffix="+" duration={2000} />
                </div>
                <div className="text-accent font-[family-name:var(--font-body)] text-sm md:text-base font-medium">
                  Professionals Connected
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="pl-6 md:pl-8 border-l-[2px] border-border hover:border-accent transition-colors duration-300">
                <div className="font-[family-name:var(--font-display)] text-6xl md:text-7xl font-bold text-accent mb-3 tracking-tight">
                  <AnimatedCounter end={750} suffix="+" duration={2000} />
                </div>
                <div className="text-accent font-[family-name:var(--font-body)] text-sm md:text-base font-medium">
                  Smart NFC Cards Activated
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="pl-6 md:pl-8 border-l-[2px] border-border hover:border-accent transition-colors duration-300">
                <div className="font-[family-name:var(--font-display)] text-6xl md:text-7xl font-bold text-accent mb-3 tracking-tight">
                  <AnimatedCounter end={32} suffix="M+" duration={2000} />
                </div>
                <div className="text-accent font-[family-name:var(--font-body)] text-sm md:text-base font-medium">
                  Smart Networking Taps
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ===== Partners & Features Section ===== */}
      <section className="relative w-full z-10 border-y border-border/20 mt-8">
        {/* Top White Banner */}
        <div className="bg-white py-12 md:py-16 px-6 md:px-10 w-full">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[#0F172A] whitespace-nowrap">
              Meet our partners
            </h3>

            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-8 md:gap-16 opacity-70">
              {/* Microsoft */}
              <div className="flex items-center gap-2 transition-opacity hover:opacity-80 cursor-default">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.4 11.4H0V0h11.4v11.4z" fill="#F25022" />
                  <path d="M24 11.4H12.6V0H24v11.4z" fill="#7FBA00" />
                  <path d="M11.4 24H0V12.6h11.4V24z" fill="#00A4EF" />
                  <path d="M24 24H12.6V12.6H24V24z" fill="#FFB900" />
                </svg>
                <span className="font-bold text-xl tracking-tight text-[#0F172A]">Microsoft</span>
              </div>

              {/* Dropbox */}
              <div className="flex items-center gap-2 transition-opacity hover:opacity-80 cursor-default">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#0061FF">
                  <path d="M7.06 1.71l-7 4.53 4.7 3.84 7.23-5.23-4.93-3.14zm9.88 0l-4.94 3.14 7.24 5.23 4.7-3.84-7-4.53zM.06 13.92l7 4.53 4.88-3.32-7.18-5.05-4.7 3.84zm13.82.01l4.88 3.31 7-4.53-4.7-3.84-7.18 5.06zm-6.82 5.09l4.94 3.32 4.94-3.32-4.94-3.3-4.94 3.3z" />
                </svg>
                <span className="font-bold text-xl tracking-tight text-[#0F172A]">Dropbox</span>
              </div>

              {/* Evernote */}
              <div className="flex items-center gap-2 transition-opacity hover:opacity-80 cursor-default">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#00A82D">
                  <path d="M21.2 5.2c-1.8-1.5-4-2.2-6.5-2.2-2.1 0-4.6.5-7.3 1.5-1.4.5-2.1.8-2.3.9l-.1.1v.2l2.3 8.3v.1h.1l.1-.1s1.3-1.4 3.8-1.4c1.1 0 2.2.2 3.1.5l-1 3.5h-2.1c-.2 0-.3.1-.4.2l-.3 1.1c0 .2.1.3.2.3h2l-1.3 4.7c0 .1.1.2.2.2h1.6c.1 0 .2-.1.2-.2l1.2-4.7h2.2c.2 0 .3-.1.4-.2l.3-1.1c0-.2-.1-.3-.2-.3h-2l.9-3.2c1.9-.3 3.8-.1 5.4.6 2 .9 2.7 2.3 2.7 2.3s.1 0 .1-.1c0-.1 0-.1.1-.2v-.1l.5-4.3c.3-2.6-1.5-4.8-4.2-5v-.1zM9.5 9c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                </svg>
                <span className="font-bold text-xl tracking-tight text-[#0F172A]">Evernote</span>
              </div>

              {/* Razorpay */}
              <div className="flex items-center gap-1 transition-opacity hover:opacity-80 cursor-default">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#3385FF">
                  <path d="M22.43 2.73H11.08L6.85 17.51h4.86l2.37-8.31h6.63c1.69 0 3.01-1.32 3.01-3.01V3.14c0-.23-.19-.41-.41-.41zM7.22 19.34l-1.78 1.93-1.63-5.74-2.24 7.84H6.3l.92-4.03z" />
                </svg>
                <span className="font-bold text-xl italic tracking-tighter text-[#02042B]">Razorpay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dark Banner */}
        <div className="bg-[#0B0F19] border-t border-border py-8 px-6 md:px-10 w-full relative z-20">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-display)] text-sm md:text-base font-bold text-text-primary leading-tight">
                Update Details<br />Anytime
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3-6 6" />
                  <path d="m21 14-4.5-4.5a1.5 1.5 0 1 0-3 3l4.5 4.5a1.5 1.5 0 1 0 3-3Z" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-display)] text-sm md:text-base font-bold text-text-primary leading-tight">
                Premium First<br />Impression
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-text-primary flex items-center justify-center text-text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12s2.5-3.5 7-3.5 7 3.5 7 3.5" />
                  <path d="M8.5 15.5s1.5-1.5 3.5-1.5 3.5 1.5 3.5 1.5" />
                  <circle cx="12" cy="19" r="1" fill="currentColor" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-display)] text-sm md:text-base font-bold text-text-primary leading-tight">
                Instant One Tap<br />Sharing
              </span>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="12" r="7" />
                  <path d="M2 12h14" />
                  <path d="M9 5a15 15 0 0 0 0 14" />
                  <path d="M9 5a15 15 0 0 1 0 14" />
                  <path d="M21 21A5 5 0 0 0 21 11h-5v5a5 5 0 0 0 5 5z" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-display)] text-sm md:text-base font-bold text-text-primary leading-tight">
                Eco-Friendly &<br />Paperless
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA Block ===== */}
      <section className="py-20 md:py-28 px-6 md:px-10 relative">
        <ParticleField particleCount={30} color="205, 255, 80" speed={0.5} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="glow-border bg-bg-surface p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden corner-brackets">
              {/* Holographic background elements */}
              <div className="absolute inset-0 holo-shimmer opacity-30" />
              <div className="absolute -right-32 -top-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />

              <div className="relative">
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-3">
                  Ready to go digital?
                </h2>
                <p className="text-text-secondary font-[family-name:var(--font-body)] text-base max-w-md">
                  Get your DSwipe card and start networking smarter.
                  Message us on WhatsApp for a quick consultation.
                </p>
              </div>
              <div className="relative flex-shrink-0">
                <MagneticButton href="https://wa.me/91XXXXXXXXXX" size="lg">
                  Get Your Card →
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

/* ===== Sub-components ===== */

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div ref={ref} className="relative group">
      <div
        className={`p-8 md:p-10 border-b md:border-b-0 md:border-r border-border relative overflow-hidden ${isLast ? "md:border-r-0" : ""
          } ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

        <div className="relative z-10">
          <span className="font-[family-name:var(--font-accent)] text-5xl md:text-6xl font-light text-text-muted group-hover:text-accent transition-colors duration-500 block mb-6">
            {step.num}
          </span>
          <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
            {step.icon}
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text-primary mb-3 group-hover:neon-text transition-all duration-300">
            {step.title}
          </h3>
          <p className="text-text-secondary font-[family-name:var(--font-body)] text-sm leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
      {/* Connecting arrow (desktop) */}
      {!isLast && (
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 bg-bg-surface border border-accent/30 rounded-full items-center justify-center animate-pulse-glow text-accent group-hover:bg-accent group-hover:text-bg-primary transition-all duration-500">
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 7h12M8 2l5 5-5 5" className="circuit-line" />
          </svg>
        </div>
      )}
    </div>
  );
}

function UseCaseCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  return (
    <div className="group bg-bg-surface border border-border p-6 transition-all duration-500 hover:border-accent hover:shadow-[0_0_20px_rgba(205,255,80,0.15)] cursor-default h-full relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="relative z-10 font-[family-name:var(--font-accent)] text-3xl font-light text-text-muted group-hover:text-accent transition-colors duration-300 block mb-4">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="relative z-10 font-[family-name:var(--font-display)] text-lg font-bold text-text-primary mb-2 group-hover:text-accent group-hover:neon-text transition-all duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-text-secondary font-[family-name:var(--font-body)] text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
