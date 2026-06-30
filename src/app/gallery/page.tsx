import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DonateBanner from "@/components/DonateBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "See moments from NorahChild's school fee support, excursions, games, and holiday celebrations.",
  path: "/gallery",
});

const categories = [
  { tone: "orange" as const, label: "Back-to-School Day" },
  { tone: "teal" as const, label: "Zoo Excursion" },
  { tone: "amber" as const, label: "Scholarship Award Ceremony" },
  { tone: "stone" as const, label: "Inter-School Games" },
  { tone: "orange" as const, label: "Waterfall Trip" },
  { tone: "teal" as const, label: "Children's Day Celebration" },
  { tone: "amber" as const, label: "Quiz Competition" },
  { tone: "stone" as const, label: "Christmas Party" },
  { tone: "orange" as const, label: "Classroom Visit" },
  { tone: "teal" as const, label: "Community Outreach" },
  { tone: "amber" as const, label: "Sports Day" },
  { tone: "stone" as const, label: "Easter Celebration" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of Joy & Hope"
        description="A glimpse into the classrooms, excursions, competitions, and celebrations we share with the children we serve."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((item, i) => (
              <div
                key={item.label + i}
                className="group overflow-hidden rounded-2xl"
              >
                <PhotoPlaceholder
                  label={item.label}
                  tone={item.tone}
                  width={500}
                  height={500}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-stone-500">
            Photos shown are placeholders — replace with real event photos
            once available.
          </p>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
