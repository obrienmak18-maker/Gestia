import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, Clock } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { getBlogPostBySlug, getBlogPosts } from '@/services/blog';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { formatDate } from '@/lib/utils';

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Article introuvable' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.publishedAt, title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <header className="border-b border-slate-200 bg-gradient-to-b from-brand-50/80 to-white">
        <div className="mx-auto max-w-3xl px-5 pb-12 pt-10 sm:px-8 md:pb-16 md:pt-14">
          <Link
            href="/blog"
            className="animate-fade-up inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Retour au blog
          </Link>
          <p className="animate-fade-up mt-8 text-sm font-semibold uppercase tracking-wider text-brand [animation-delay:100ms]">
            {post.category}
          </p>
          <h1 className="animate-fade-up mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 [animation-delay:150ms] md:text-5xl">
            {post.title}
          </h1>
          <div className="animate-fade-up mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 [animation-delay:200ms]">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden />
              {post.readTime} de lecture
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-20">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="aspect-[16/9] w-full rounded-3xl object-cover shadow-xl shadow-brand/10"
        />
        <p className="mt-10 text-lg font-medium leading-relaxed text-slate-700">{post.excerpt}</p>

        <div className="mt-10 space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading}>
              {section.heading && (
                <h2 className="text-2xl font-bold leading-snug tracking-tight text-slate-900">{section.heading}</h2>
              )}
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-brand-900 p-8 text-white md:p-10">
          <h2 className="text-2xl font-bold leading-snug">Besoin d'un logiciel pour appliquer ces conseils ?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Nos experts vous orientent vers la solution adaptée à votre activité et vous accompagnent jusqu'à l'installation.
          </p>
          <WhatsAppButton href={buildWhatsAppUrl()} className="mt-6 w-full sm:w-auto" />
        </div>
      </div>
    </article>
  );
}
