"use client";

import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import GlowingBorder from "@/components/GlowingBorder";

const contactInfo = [
  {
    label: "Email",
    value: "hello@dswipe.in",
    href: "mailto:hello@dswipe.in",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="4" width="20" height="16" rx="2" className="circuit-line" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+91 XXXXXXXXXX",
    href: "https://wa.me/91XXXXXXXXXX",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" className="circuit-line" />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/dswipe.in",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/dswipe",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/91XXXXXXXXXX",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.105 1.511 5.838L0 24l6.335-1.652A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.98 0-3.867-.528-5.52-1.528l-.396-.234-3.762.982.999-3.648-.258-.41A9.709 9.709 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
      </svg>
    ),
  },
];

export default function ContactClient() {
  return (
    <div className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden">
      <ParticleField particleCount={40} color="205, 255, 80" speed={0.4} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-text-primary mb-4 inline-block">
              Let&apos;s talk<span className="text-accent">.</span>
            </h1>
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-base md:text-lg max-w-lg">
              Have a question, want a custom quote, or ready to order? 
              Reach out — we typically respond within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Form side */}
          <ScrollReveal direction="left" className="lg:col-span-7 lg:pr-16">
            <ContactForm />
          </ScrollReveal>

          {/* Info side */}
          <ScrollReveal direction="right" delay={200} className="lg:col-span-5">
            <GlowingBorder className="h-full lg:-ml-8 lg:mt-8">
              <div className="bg-bg-surface p-8 md:p-10 relative overflow-hidden h-full corner-brackets">
                {/* Grid background */}
                <div className="absolute inset-0 grid-pattern-animated opacity-40" />
                <div className="absolute inset-0 holo-shimmer opacity-20" />
                
                <div className="relative z-10">
                  {/* Brand */}
                  <div className="mb-10">
                    <div className="flex items-center gap-1 mb-3 group">
                      <span className="font-[family-name:var(--font-display)] text-xl font-bold text-text-primary group-hover:neon-text transition-colors">
                        DSwipe
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
                    </div>
                    <p className="text-text-secondary font-[family-name:var(--font-body)] text-sm leading-relaxed">
                      Smart NFC digital business cards crafted for professionals 
                      who network with intent.
                    </p>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-6 mb-10">
                    {contactInfo.map((info) => (
                      <a
                         key={info.label}
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-10 h-10 flex items-center justify-center bg-bg-surface-alt text-text-muted group-hover:bg-accent group-hover:text-bg-primary transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(205,255,80,0.4)]">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-text-muted text-xs font-[family-name:var(--font-body)] uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            {info.label}
                          </p>
                          <p className="text-text-primary text-sm font-[family-name:var(--font-body)] group-hover:text-accent transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social links */}
                  <div>
                    <p className="text-text-muted text-xs font-[family-name:var(--font-body)] uppercase tracking-wider mb-4">
                      Follow us
                    </p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-11 h-11 flex items-center justify-center bg-bg-surface-alt border border-border text-text-muted hover:bg-accent hover:text-bg-primary hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(205,255,80,0.4)]"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Location badge */}
                  <div className="mt-10 pt-8 border-t border-border">
                    <div className="inline-flex items-center gap-2 text-text-muted text-xs font-[family-name:var(--font-body)] bg-bg-surface-alt px-3 py-1.5 border border-border">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                      Based in Kerala, India 🌴
                    </div>
                  </div>
                </div>
              </div>
            </GlowingBorder>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
