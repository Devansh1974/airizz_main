import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
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

function renderInlineMarkdown(text: string) {
  // Regex to split on bold text **...** and links [...](...)
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const matches = text.split(regex);
  
  return matches.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-text">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("[") && part.includes("](")) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [, linkText, url] = match;
        const isInternal = url.startsWith("/") || url.includes("airizz.co");
        const href = url.replace(/https?:\/\/(www\.)?airizz\.co/, "");
        const finalHref = href === "" ? "/" : href;
        if (isInternal) {
          return (
            <Link key={i} href={finalHref} className="text-accent hover:underline font-semibold">
              {linkText}
            </Link>
          );
        } else {
          return (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
              {linkText}
            </a>
          );
        }
      }
    }
    return part;
  });
}

function parseMarkdown(text: string) {
  return text.split("\n").map((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={index} className="text-[17px] font-semibold text-text mt-8 mb-3 font-sans">
          {renderInlineMarkdown(trimmed.replace("### ", ""))}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={index} className="text-lg font-semibold text-text mt-10 mb-4 border-b border-border pb-2 font-sans">
          {renderInlineMarkdown(trimmed.replace("## ", ""))}
        </h2>
      );
    }
    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={index} className="text-[22px] font-semibold text-text mt-12 mb-6 font-sans">
          {renderInlineMarkdown(trimmed.replace("# ", ""))}
        </h1>
      );
    }
    if (trimmed.startsWith("- ")) {
      return (
        <li key={index} className="text-xs text-text-2 ml-4 list-disc mb-2 leading-relaxed font-sans">
          {renderInlineMarkdown(trimmed.substring(2))}
        </li>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      return (
        <li key={index} className="text-xs text-text-2 ml-4 list-decimal mb-2 leading-relaxed font-sans">
          {renderInlineMarkdown(trimmed.replace(/^\d+\.\s/, ""))}
        </li>
      );
    }
    if (trimmed === "") {
      return <div key={index} className="h-2" />;
    }
    return (
      <p key={index} className="text-xs text-text-2 leading-relaxed mb-4 font-sans">
        {renderInlineMarkdown(trimmed)}
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

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description || post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author || "AIRIZZ Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIRIZZ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://airizz.co/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://airizz.co/blog/${slug}`
    }
  };

  return (
    <div className="bg-bg text-text py-16 md:py-24 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Link */}
        <FadeUp delay={0.1} className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Journal</span>
          </Link>
        </FadeUp>

        {/* Double-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <FadeUp delay={0.2}>
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-2.5 py-0.5 rounded-[6px] border border-border-2 inline-block mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text mb-6 leading-tight font-sans">
                {post.title}
              </h1>
            </FadeUp>

            <FadeUp delay={0.3} className="flex flex-wrap items-center gap-6 text-[11px] font-mono font-medium text-text-3 pb-8 border-b border-border mb-8 uppercase">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-text-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-text-3" />
                {post.readTime}
              </span>
            </FadeUp>

            <FadeUp delay={0.4} className="prose prose-invert max-w-none">
              {parseMarkdown(post.content)}
            </FadeUp>
          </article>

          {/* Sticky Author Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-20">
            <FadeUp delay={0.3} className="p-6 rounded-[12px] bg-surface border border-border flex flex-col items-center text-center shadow-none">
              <div className="h-16 w-16 rounded-full bg-surface-2 border border-border-2 flex items-center justify-center text-accent font-sans font-bold text-sm mb-4">
                {post.author?.split(" ").map((n: string) => n[0]).join("")}
              </div>

              <h4 className="text-sm font-semibold text-text font-sans">{post.author}</h4>
              <span className="text-[10px] text-text-3 block uppercase font-mono tracking-wider mt-1.5">
                {post.authorRole}
              </span>

              <p className="text-text-2 text-xs mt-4 leading-relaxed font-sans">
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
