"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import GlowingBorder from "@/components/GlowingBorder";

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const categoryColors: Record<string, string> = {
  "NFC Technology": "bg-accent/15 text-accent border border-accent/30",
  "Business Tips": "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  "Product Updates": "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  "Digital Networking": "bg-purple-500/15 text-purple-400 border border-purple-500/30",
};

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  return (
    <div className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden">
      {/* Background elements */}
      <ParticleField particleCount={25} color="205, 255, 80" speed={0.15} connected={false} />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Back link */}
        <ScrollReveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors font-[family-name:var(--font-body)] text-sm mb-12 group"
          >
            <span className="w-6 h-[1px] bg-text-muted group-hover:bg-accent transition-colors relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-text-muted group-hover:bg-accent rotate-45 transition-colors" />
            </span>
            Return to Stream
          </Link>
        </ScrollReveal>

        {/* Post header */}
        <header className="max-w-3xl mb-16 relative">
          {/* subtle scanline on header */}
          <div className="absolute inset-0 scanline-overlay opacity-50" />

          <ScrollReveal>
            <span className={`inline-block text-xs font-bold px-3 py-1 mb-6 ${categoryColors[post.category] || "bg-accent/15 text-accent"} font-[family-name:var(--font-body)] shadow-[0_0_10px_rgba(205,255,80,0.15)]`}>
              {post.category}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-text-primary mb-8 neon-text">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap items-center gap-4 text-sm font-[family-name:var(--font-body)]">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bg-surface-alt border border-accent/40 flex items-center justify-center text-accent font-[family-name:var(--font-display)] font-bold text-sm shadow-[0_0_10px_rgba(205,255,80,0.2)]">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-text-primary font-medium group-hover:text-accent transition-colors cursor-default">{post.author}</p>
                  <p className="text-text-muted text-xs">{post.authorRole}</p>
                </div>
              </div>
              <span className="text-accent/40">/</span>
              <span className="text-text-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent/50 animate-pulse-glow" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </span>
              <span className="text-accent/40">/</span>
              <span className="text-text-muted font-mono text-xs opacity-70 border border-text-muted/30 px-1.5 py-0.5">EST. {post.readTime}</span>
            </div>
          </ScrollReveal>
        </header>

        {/* Featured image placeholder */}
        <ScrollReveal className="mb-16">
          <GlowingBorder>
            <div className="max-w-3xl h-64 md:h-80 bg-bg-surface relative overflow-hidden group corner-brackets">
              <div className="absolute inset-0 grid-pattern-animated opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="0.75" className="animate-pulse-glow">
                  <rect x="3" y="3" width="18" height="18" rx="2" className="circuit-line" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              {/* Scanline */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent/40 animate-[scanline_3s_linear_infinite] shadow-[0_0_10px_rgba(205,255,80,0.5)]" />
            </div>
          </GlowingBorder>
        </ScrollReveal>

        {/* Article content */}
        <ScrollReveal>
          <article className="prose-dswipe max-w-3xl relative">
            {/* Subtle glow behind content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[100px] pointer-events-none -z-10" />
            {renderMarkdown(post.content)}
          </article>
        </ScrollReveal>

        {/* Share / tags */}
        <ScrollReveal>
          <div className="max-w-3xl mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
            {/* Decorative data stream over border */}
            <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-accent to-transparent shadow-[0_0_8px_rgba(205,255,80,0.8)]" />

            <div className="flex items-center gap-3">
              <span className="text-text-muted text-sm font-[family-name:var(--font-body)] uppercase tracking-widest text-xs">Transmit:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://dswipe.in/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-bg-surface-alt border border-border text-text-muted hover:border-accent hover:text-accent transition-all hover:shadow-[0_0_15px_rgba(205,255,80,0.3)] hover:-translate-y-1"
                aria-label="Share on Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://dswipe.in/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-bg-surface-alt border border-border text-text-muted hover:border-accent hover:text-accent transition-all hover:shadow-[0_0_15px_rgba(205,255,80,0.3)] hover:-translate-y-1"
                aria-label="Share on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
            <span className={`text-xs font-bold px-3 py-1 ${categoryColors[post.category] || "bg-accent/15 text-accent border border-accent/30"} font-[family-name:var(--font-body)] shadow-[0_0_10px_rgba(205,255,80,0.1)]`}>
              {post.category}
            </span>
          </div>
        </ScrollReveal>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 md:mt-28 relative">
            <div className="absolute inset-0 hex-grid-bg opacity-10 pointer-events-none -z-10" />
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text-primary mb-10 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent animate-pulse-glow" />
                Related Streams
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp, i) => (
                <ScrollReveal key={rp.slug} delay={i * 100}>
                  <BlogCard post={rp} variant="medium" />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

/** Simple markdown-to-JSX renderer for our blog content format */
function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let inList = false;
  let listItems: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let key = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) {
        elements.push(<p key={key++}>{formatInlineMarkdown(text)}</p>);
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++}>
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent mt-1.5 opacity-60">▹</span>
              <span>{formatInlineMarkdown(item)}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(1);
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border">
            <thead>
              <tr className="bg-bg-surface-alt border-b border-accent/20">
                {header.map((cell, i) => (
                  <th key={i} className="px-4 py-3 text-left text-text-primary font-semibold">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className="border-b border-border hover:bg-accent/5 transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-text-secondary">
                      {formatInlineMarkdown(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // Table row
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushParagraph();
      flushList();
      // Skip separator rows
      if (/^\|[\s-:|]+\|$/.test(trimmed)) continue;
      inTable = true;
      const cells = trimmed.split("|").filter((c) => c.trim() !== "");
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Heading
    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      elements.push(
        <h3 key={key++} className="flex items-center gap-2">
          <span className="text-accent font-mono text-xs opacity-50">###</span>
          {formatInlineMarkdown(trimmed.slice(4))}
        </h3>
      );
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      elements.push(
        <h2 key={key++} className="flex items-center gap-2 relative">
          <span className="absolute -left-6 text-accent font-mono text-sm opacity-50 hidden md:block">##</span>
          {formatInlineMarkdown(trimmed.slice(3))}
        </h2>
      );
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      elements.push(
        <blockquote key={key++} className="relative bg-bg-surface-alt/50 p-6 border-l-2 border-accent">
          <div className="absolute top-0 right-0 w-8 h-8 opacity-20 data-lines pointer-events-none" />
          <p className="relative z-10 m-0">{formatInlineMarkdown(trimmed.slice(2))}</p>
        </blockquote>
      );
      continue;
    }

    // List item
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      flushParagraph();
      inList = true;
      listItems.push(trimmed.slice(2));
      continue;
    }

    // Numbered list
    if (/^\d+[\.\)]\s/.test(trimmed)) {
      flushParagraph();
      inList = true;
      listItems.push(trimmed.replace(/^\d+[\.\)]\s/, ""));
      continue;
    }

    // If we were in a list and hit a non-list line
    if (inList && trimmed !== "") {
      flushList();
    }

    // Empty line = paragraph break
    if (trimmed === "") {
      flushParagraph();
      flushList();
      continue;
    }

    // Regular text
    currentParagraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushTable();

  return elements;
}

/** Format inline markdown: **bold**, *italic*, [links](url) */
function formatInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let partKey = 0;

  while (remaining.length > 0) {
    // Bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    if (boldMatch && boldMatch.index !== undefined) {
      if (boldMatch.index > 0) {
        parts.push(remaining.slice(0, boldMatch.index));
      }
      parts.push(<strong key={partKey++} className="text-text-primary neon-text">{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
      continue;
    }

    // Link
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);
    if (linkMatch && linkMatch.index !== undefined) {
      if (linkMatch.index > 0) {
        parts.push(remaining.slice(0, linkMatch.index));
      }
      parts.push(
        <a key={partKey++} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="relative underline-draw text-accent hover:text-accent-dim transition-colors inline-flex items-center gap-1 group">
          {linkMatch[1]}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all">
            <path d="M2 8L8 2M8 2H3M8 2V7" />
          </svg>
        </a>
      );
      remaining = remaining.slice(linkMatch.index + linkMatch[0].length);
      continue;
    }

    // No more matches
    parts.push(remaining);
    break;
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}
