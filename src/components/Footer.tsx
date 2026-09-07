import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/dswipe.in",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/91XXXXXXXXXX",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.105 1.511 5.838L0 24l6.335-1.652A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.98 0-3.867-.528-5.52-1.528l-.396-.234-3.762.982.999-3.648-.258-.41A9.709 9.709 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-surface relative overflow-hidden">
      {/* Animated gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
      
      {/* subtle data stream in background */}
      <div className="absolute inset-0 data-lines opacity-10 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column — spans wider */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-1 mb-4 group cursor-default">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-text-primary transition-colors group-hover:neon-text group-hover:text-white">
                DSwipe
              </span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            </div>
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-sm leading-relaxed max-w-sm mb-6">
              Smart NFC digital business cards — tap once, share everything. 
              Built for professionals who move fast and network smarter.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-surface-alt border border-accent/20 rounded-sm text-xs text-text-muted font-[family-name:var(--font-body)] hover:border-accent/40 transition-colors">
              <span className="animate-float">🌴</span>
              <span>Crafted in Kerala, India</span>
            </div>
          </div>

          {/* Links column */}
          <div className="md:col-span-3">
            <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-text-muted mb-6 flex items-center gap-2">
              <span className="w-2 h-2 border border-text-muted flex-shrink-0" />
              Navigate
            </h3>
            <ul className="space-y-3 relative">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm font-[family-name:var(--font-body)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + contact column */}
          <div className="md:col-span-4">
            <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-text-muted mb-6 flex items-center gap-2">
              <span className="w-2 h-2 border border-text-muted flex-shrink-0" />
              Connect
            </h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-bg-surface-alt border border-border text-text-secondary hover:bg-accent hover:text-bg-primary hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(205,255,80,0.4)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@dswipe.in"
              className="text-text-secondary hover:text-accent transition-colors text-sm font-[family-name:var(--font-body)] block mb-2"
            >
              hello@dswipe.in
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent text-sm font-[family-name:var(--font-body)] font-semibold hover:text-accent-dim transition-colors group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative">
          <p className="text-text-muted text-xs font-[family-name:var(--font-body)] flex items-center gap-2">
            © {new Date().getFullYear()} DSwipe.
            <span className="inline-block w-1 h-1 bg-accent/50 animate-flicker" />
            System Online.
          </p>
          <p className="text-text-muted text-xs font-[family-name:var(--font-body)]">
            Smart cards for smart professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
