import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { getAllBlogPosts } from "@/lib/content";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

export const metadata = generateSeoMetadata({
  title: "AI & Automation Blog | AIRIZZ",
  description: "Read technical insights, workflow playbooks, and guides on implementing business AI from the engineering team at AIRIZZ.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  // Fallback to local static stub for compiler safety
  const fallbackPosts = [
    {
      slug: "ai-automation-indian-smbs",
      title: "AI Automation for Indian SMBs: Where to Actually Start",
      date: "2026-05-15",
      description: "Most Indian SMBs know they should be doing something with AI. Very few know where to begin. Here's a practical, no-jargon starting point.",
      category: "AI Strategy",
      author: "AIRIZZ Team",
      authorRole: "AIRIZZ Systems Team",
      readTime: "6 min read"
    }
  ];

  const activePosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <div className="bg-bg text-text py-16 md:py-24 min-h-[80vh] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Insights & Guides</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text mt-3 font-sans">The AIRIZZ Journal</h1>
          </FadeUp>
        </div>

        {/* Blog Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-[12px] bg-surface border border-border flex flex-col justify-between hover:border-border-2 transition-colors shadow-none font-sans"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-2.5 py-0.5 rounded-[6px] border border-border-2">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-text-3 font-mono uppercase tracking-wider">
                    <Clock className="h-3.5 w-3.5 text-text-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-[17px] font-semibold text-text mb-3 group-hover:text-accent transition-colors leading-snug font-sans">
                  {post.title}
                </h3>

                <p className="text-text-2 text-xs leading-relaxed mb-6 font-sans">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-surface-2 border border-border text-text-3 flex items-center justify-center">
                    <User className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-text-2 block font-sans">{post.author}</span>
                    <span className="text-[8px] text-text-3 block uppercase font-mono tracking-wider">{post.authorRole}</span>
                  </div>
                </div>

                <ArrowRight className="h-3.5 w-3.5 text-text-3 group-hover:text-text transition-all group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
