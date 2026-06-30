import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import DonateBanner from "@/components/DonateBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { posts } from "@/lib/posts";
import { pageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return pageMetadata({
      title: "Story Not Found",
      description: "This story could not be found.",
      path: `/blog/${slug}`,
    });
  }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: new Date(post.date).toISOString(),
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    image: `${siteConfig.url}/opengraph-image`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-stone-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300"
          >
            <ArrowLeft size={16} /> Back to News
          </Link>
          <div className="mt-5 flex items-center gap-3 text-xs text-stone-400">
            <span className="rounded-full bg-orange-500/15 px-2.5 py-1 font-semibold text-orange-400">
              {post.category}
            </span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl">
            <PhotoPlaceholder
              label={post.category}
              tone={post.tone}
              width={1000}
              height={550}
              className="w-full object-cover"
            />
          </div>
          <div className="prose-stone mt-10 space-y-5 text-stone-700">
            {post.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
