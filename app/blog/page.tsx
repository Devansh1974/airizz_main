import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
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

  // If fs read yields empty array, fallback to local static stub for compiler safety
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
    <div className="bg-black text-white py-16 md:py-24 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">Insights & Guides</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">The AIRIZZ Journal</h1>
          </FadeUp>
        </div>

        {/* Blog Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-3xl glass-interactive flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan bg-brand-cyan/5 px-2.5 py-0.5 rounded border border-brand-cyan/15">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-zinc-500 font-medium">
                    <Clock className="h-3.5 w-3.5 text-zinc-600" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <User className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-zinc-300 block">{post.author}</span>
                    <span className="text-[8px] text-zinc-500 block uppercase font-mono tracking-wider">{post.authorRole}</span>
                  </div>
                </div>

                <ArrowRight className="h-4 w-4 text-zinc-500 group-hover:text-white transition-all group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
