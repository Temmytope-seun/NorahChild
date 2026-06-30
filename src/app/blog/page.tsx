import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import DonateBanner from "@/components/DonateBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News & Stories | NorahChild",
  description:
    "Read the latest news, stories, and updates from NorahChild's work with children across Nigeria and Africa.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Stories"
        title="Updates From the Field"
        description="Stories of impact, milestones, and moments from our work with children across Nigeria and Africa."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-3xl border border-stone-200 transition-shadow hover:shadow-lg"
              >
                <PhotoPlaceholder
                  label={post.category}
                  tone={post.tone}
                  width={800}
                  height={450}
                  className="aspect-video w-full object-cover"
                />
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span className="rounded-full bg-orange-100 px-2.5 py-1 font-semibold text-orange-700">
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
                  <h2 className="mt-3 font-display text-xl font-semibold text-stone-900 group-hover:text-orange-600">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
