"use client";

import Link from "next/link";
import { useRef, useCallback, type MouseEvent } from "react";
import type { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
  variant?: "featured" | "large" | "medium" | "small";
}

const categoryColors: Record<string, string> = {
  "NFC Technology": "bg-accent/15 text-accent",
  "Business Tips": "bg-blue-500/15 text-blue-400",
  "Product Updates": "bg-amber-500/15 text-amber-400",
  "Digital Networking": "bg-purple-500/15 text-purple-400",
};

export default function BlogCard({ post, variant = "medium" }: BlogCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  }, []);

  if (variant === "featured") {
    return (
      <Link href={`/blog/${post.slug}`} className="block group">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="tilt-card grid grid-cols-1 lg:grid-cols-12 gap-0 bg-bg-surface border border-border overflow-hidden transition-all duration-500 hover:border-accent/40 relative corner-brackets"
        >
          {/* Holographic shimmer on hover */}
          <div className="absolute inset-0 holo-shimmer opacity-20 pointer-events-none" />

          {/* Image area */}
          <div className="lg:col-span-7 h-64 lg:h-auto bg-bg-surface-alt relative overflow-hidden group-hover:bg-bg-surface transition-colors duration-500">
            <div className="absolute inset-0 grid-pattern-animated opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-accent/20 rounded-full flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(205,255,80,0.3)] transition-all duration-500 relative">
                <div className="absolute inset-0 rounded-full bg-accent/5 group-hover:bg-accent/10 animate-pulse-glow" />
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" className="relative z-10 group-hover:scale-110 transition-transform">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" className="circuit-line" />
                  <path d="M8 12l3 3 5-5" />
                </svg>
              </div>
            </div>
            <div className="absolute top-4 left-4 z-10">
              <span className={`text-xs font-bold px-3 py-1 ${categoryColors[post.category] || "bg-accent/15 text-accent"} font-[family-name:var(--font-body)] border border-transparent group-hover:border-current transition-colors`}>
                {post.category}
              </span>
            </div>
          </div>

          {/* Content area */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center relative z-10">
            <span className="text-text-muted text-xs font-[family-name:var(--font-body)] uppercase tracking-wider mb-3 flex items-center gap-2 group-hover:text-accent transition-colors">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow hidden group-hover:block" />
              Featured
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-text-primary leading-tight mb-4 group-hover:text-accent group-hover:neon-text transition-all duration-300">
              {post.title}
            </h2>
            <p className="text-text-secondary text-sm font-[family-name:var(--font-body)] leading-relaxed mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-text-muted font-[family-name:var(--font-body)]">
              <span className="font-semibold text-text-secondary group-hover:text-text-primary transition-colors">{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`tilt-card bg-bg-surface border border-border overflow-hidden transition-all duration-500 hover:border-accent/40 h-full flex flex-col relative corner-brackets`}
      >
        <div className="absolute inset-0 holo-shimmer opacity-20 pointer-events-none" />

        {/* Image placeholder */}
        <div className={`bg-bg-surface-alt relative overflow-hidden group-hover:bg-bg-surface transition-colors duration-500 ${variant === "large" ? "h-56" : variant === "small" ? "h-36" : "h-44"}`}>
          <div className="absolute inset-0 grid-pattern-animated opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all duration-500">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="group-hover:scale-110 group-hover:animate-pulse-glow transition-transform">
              <rect x="3" y="3" width="18" height="18" rx="2" className="circuit-line" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <div className="absolute top-3 left-3 z-10">
            <span className={`text-xs font-bold px-2.5 py-0.5 ${categoryColors[post.category] || "bg-accent/15 text-accent"} font-[family-name:var(--font-body)] border border-transparent group-hover:border-current transition-colors`}>
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col relative z-10">
          <h3 className={`font-[family-name:var(--font-display)] font-bold text-text-primary leading-snug mb-3 group-hover:text-accent group-hover:neon-text transition-all duration-300 ${
            variant === "large" ? "text-xl" : "text-base"
          }`}>
            {post.title}
          </h3>
          <p className={`text-text-secondary font-[family-name:var(--font-body)] leading-relaxed mb-4 flex-1 ${
            variant === "small" ? "text-xs line-clamp-2" : "text-sm line-clamp-2"
          }`}>
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-text-muted font-[family-name:var(--font-body)] pt-3 border-t border-border group-hover:border-accent/30 transition-colors">
            <span className="font-semibold text-text-secondary group-hover:text-text-primary transition-colors">{post.author}</span>
            <div className="flex items-center gap-2">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
