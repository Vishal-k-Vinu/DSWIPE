"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-bg-primary/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
          }`}
      >
        {/* Accent glow line at top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/services" className="flex items-center gap-1 group">
            <span className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold tracking-tight text-text-primary neon-text-animated">
              DSwipe
            </span>
            <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 animate-pulse-glow" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`underline-draw font-[family-name:var(--font-body)] text-sm tracking-wide uppercase transition-colors duration-300 relative ${isActive
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                    }`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent animate-pulse-glow" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary flex flex-col items-start justify-center px-10 transition-all duration-500 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Scanline effect in mobile menu */}
        {isOpen && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 data-lines opacity-30" />
          </div>
        )}

        <div className="flex flex-col gap-8 relative">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight transition-all duration-500 ${pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                  ? "text-accent neon-text"
                  : "text-text-primary"
                }`}
              style={{
                transitionDelay: isOpen ? `${i * 80}ms` : "0ms",
                transform: isOpen ? "translateX(0)" : "translateX(-30px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div
          className="mt-12 flex gap-6 transition-all duration-500 relative"
          style={{
            transitionDelay: isOpen ? "400ms" : "0ms",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors text-sm font-[family-name:var(--font-body)]"
          >
            WhatsApp
          </a>
          <a
            href="mailto:hello@dswipe.in"
            className="text-text-secondary hover:text-accent transition-colors text-sm font-[family-name:var(--font-body)]"
          >
            hello@dswipe.in
          </a>
        </div>
      </div>
    </>
  );
}
