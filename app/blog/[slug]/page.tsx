import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/content";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";
import CTAButton from "@/components/shared/CTAButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return generateSeoMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  if (posts.length === 0) {
    return [{ slug: "ai-automation-indian-smbs" }];
  }
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function parseMarkdown(text: string) {
  return text.split("\n").map((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={index} className="text-lg font-bold text-white mt-8 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={index} className="text-xl font-bold text-white mt-10 mb-4 border-b border-white/5 pb-2">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={index} className="text-2xl font-bold text-white mt-12 mb-6">
          {trimmed.replace("# ", "")}
        </h1>
      );
    }
    if (trimmed.startsWith("- ")) {
      return (
        <li key={index} className="text-xs text-zinc-400 ml-4 list-disc mb-2 leading-relaxed">
          {trimmed.substring(2)}
        </li>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      return (
        <li key={index} className="text-xs text-zinc-400 ml-4 list-decimal mb-2 leading-relaxed">
          {trimmed.replace(/^\d+\.\s/, "")}
        </li>
      );
    }
    if (trimmed === "") {
      return <div key={index} className="h-2" />;
    }
    return (
      <p key={index} className="text-xs text-zinc-400 leading-relaxed mb-4">
        {trimmed}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-black text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Link */}
        <FadeUp delay={0.1} className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Journal</span>
          </Link>
        </FadeUp>

        {/* Double-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <FadeUp delay={0.2}>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan bg-brand-cyan/5 px-2.5 py-0.5 rounded border border-brand-cyan/15 inline-block mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {post.title}
              </h1>
            </FadeUp>

            <FadeUp delay={0.3} className="flex flex-wrap items-center gap-6 text-xs text-zinc-500 font-medium pb-8 border-b border-white/5 mb-8">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-zinc-600" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-zinc-600" />
                {post.readTime}
              </span>
            </FadeUp>

            <FadeUp delay={0.4} className="prose prose-invert max-w-none">
              {parseMarkdown(post.content)}
            </FadeUp>
          </article>

          {/* Sticky Author Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <FadeUp delay={0.3} className="p-6 rounded-3xl bg-zinc-950/40 border border-white/5 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple p-[1px] mb-4">
                <div className="h-full w-full rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 font-bold text-sm">
                  {post.author?.split(" ").map((n: string) => n[0]).join("")}
                </div>
              </div>

              <h4 className="text-sm font-bold text-white">{post.author}</h4>
              <span className="text-[10px] text-zinc-500 block uppercase font-mono tracking-wider mt-1">
                {post.authorRole}
              </span>

              <p className="text-zinc-500 text-[10.5px] mt-4 leading-relaxed">
                The AIRIZZ engineering team leads systems design and prompt engineering audits for traditional trade lines and enterprises.
              </p>

              <CTAButton href="/contact" variant="outline" size="sm" className="w-full mt-6">
                Consult With Author
              </CTAButton>
            </FadeUp>
          </aside>
        </div>
      </div>
    </div>
  );
}
