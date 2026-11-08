import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/services/productsService";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { getWhatsAppContactUrl } from "@/data/siteConfig";
import { ArticleJsonLd } from "@/components/common/JsonLd";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé | Copo Solutions",
    };
  }

  return {
    title: `${post.title} | Copo Solutions Maroc`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export const revalidate = 300;

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const whatsappUrl = getWhatsAppContactUrl(
    `Bonjour Copo Solutions, j'ai lu votre article "${post.title}" et je souhaite obtenir un conseil pour mon entreprise.`
  );

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <ArticleJsonLd post={post} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-copo-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour aux articles du blog</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="rounded-3xl bg-white p-6 sm:p-12 shadow-card border border-slate-200/90">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-6">
            <span className="font-bold text-copo-700 bg-copo-50 px-3 py-1 rounded-full border border-copo-200">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {post.readTime}
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {post.title}
          </h1>

          {/* Author Byline */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copo-800 text-white font-bold text-sm">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                {post.author.name}
              </div>
              <div className="text-xs text-slate-500">{post.author.role}</div>
            </div>
          </div>

          {/* Excerpt Lead */}
          <div className="mt-8 rounded-2xl bg-copo-50/60 p-5 border border-copo-100 text-sm sm:text-base text-copo-900 font-medium leading-relaxed italic">
            {post.excerpt}
          </div>

          {/* Main Article Content */}
          <div className="mt-8 prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-6">
            {post.content.split("\n\n").map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }

              if (trimmed.startsWith("- ")) {
                const items = trimmed
                  .split("\n")
                  .map((li) => li.replace("- ", "").trim());
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-600">
                    {items.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-slate-400" />
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* In-Article Conversion Banner */}
          <div className="mt-12 rounded-2xl bg-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                Besoin d&apos;aide pour vos logiciels au Maroc ?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Commandez votre pack ou demandez conseil à nos ingénieurs en direct sur WhatsApp.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 text-xs sm:text-sm shadow-orange transition-colors"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              <span>Contacter sur WhatsApp</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
