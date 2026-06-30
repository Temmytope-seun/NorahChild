import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import DonateBanner from "@/components/DonateBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { posts } from "@/lib/posts";

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
  return {
    title: post ? `${post.title} | NorahChild` : "Story | NorahChild",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
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
