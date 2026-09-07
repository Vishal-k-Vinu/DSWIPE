"use client";

import { useState, useMemo } from "react";
import { blogPosts, categories, type Category } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const otherPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <div className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden">
      <ParticleField particleCount={40} color="205, 255, 80" speed={0.3} connected={true} connectionDistance={150} />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-text-primary mb-4 inline-block">
              Blog<span className="text-accent">.</span>
            </h1>
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-base md:text-lg max-w-lg">
              Ideas, insights, and updates from the DSwipe team — on NFC, 
              networking, and building a smarter professional presence.
            </p>
          </div>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal delay={100}>
          <div className="flex gap-2 overflow-x-auto pb-4 mb-12 -mx-6 px-6 md:mx-0 md:px-0 snap-x">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-[family-name:var(--font-body)] font-medium whitespace-nowrap transition-all duration-300 snap-start cursor-pointer relative overflow-hidden group border ${
                  activeCategory === cat
                    ? "bg-accent/10 text-accent border-accent shadow-[0_0_15px_rgba(205,255,80,0.3)]"
                    : "bg-bg-surface text-text-secondary border-border hover:border-accent/50 hover:text-text-primary"
                }`}
              >
                {/* Active scanline effect */}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent animate-pulse-glow" />
                )}
                {/* Hover glitch */}
                <span className="relative z-10 group-hover:glitch-hover inline-block">{cat}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured post */}
        {featuredPost && (
          <ScrollReveal className="mb-8 relative">
            <div className="absolute -inset-4 bg-accent/5 blur-xl rounded-full opacity-50 pointer-events-none" />
            <BlogCard post={featuredPost} variant="featured" />
          </ScrollReveal>
        )}

        {/* Post grid — varied sizes */}
        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {/* Background cyber grid */}
            <div className="absolute inset-0 hex-grid-bg opacity-10 pointer-events-none -z-10" />
            
            {otherPosts.map((post, i) => {
              // Vary card sizes for visual interest
              const variant = i === 0 ? "large" : i === otherPosts.length - 1 ? "small" : "medium";
              return (
                <ScrollReveal key={post.slug} delay={i * 80} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                  <BlogCard post={post} variant={variant} />
                </ScrollReveal>
              );
            })}
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 border border-border/50 bg-bg-surface relative overflow-hidden">
            <div className="absolute inset-0 data-lines opacity-20" />
            <p className="text-accent font-[family-name:var(--font-display)] text-xl mb-2 neon-text">
              NO DATA FOUND
            </p>
            <p className="text-text-muted font-[family-name:var(--font-body)] text-sm">
              Try selecting a different category stream.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
