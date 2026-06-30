import type { Metadata } from "next";
import { GraduationCap, Trophy, Trees, PartyPopper, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import DonateBanner from "@/components/DonateBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Our Programs",
  description:
    "Explore NorahChild's programs: school fees & scholarships, games & competitions, excursions, and holiday celebrations.",
  path: "/programs",
});

const programs = [
  {
    icon: GraduationCap,
    title: "School Fees & Scholarships",
    tone: "orange" as const,
    description:
      "Education is the surest way out of poverty. We identify children who are at risk of dropping out due to unpaid school fees and step in directly — paying tuition, providing uniforms and books, and awarding scholarships to outstanding students so they can complete their education without interruption.",
    points: [
      "Termly and annual school fee sponsorships",
      "Merit and need-based scholarships",
      "School supplies, uniforms, and learning materials",
      "Mentorship and academic check-ins",
    ],
  },
  {
    icon: Trophy,
    title: "Games & Competitions",
    tone: "teal" as const,
    description:
      "Childhood should include play. We organize inter-school games, quizzes, sports tournaments, and friendly competitions that give children a healthy outlet to build confidence, leadership, and teamwork — while having fun with their peers.",
    points: [
      "Football, athletics, and indoor games",
      "Spelling bees and quiz competitions",
      "Prizes and recognition for participants",
      "Safe, supervised play environments",
    ],
  },
  {
    icon: Trees,
    title: "Excursions & Outings",
    tone: "amber" as const,
    description:
      "For many of the children we serve, a trip beyond their neighborhood is a once-in-a-lifetime experience. We organize excursions to zoos, waterfalls, parks, and cultural sites — giving children a chance to explore, learn, and simply enjoy being kids.",
    points: [
      "Zoo and wildlife park visits",
      "Waterfall and nature trips",
      "Educational and cultural site tours",
      "Transportation, meals, and supervision included",
    ],
  },
  {
    icon: PartyPopper,
    title: "Holiday Celebrations",
    tone: "stone" as const,
    description:
      "Public holidays and festive seasons can be especially hard for children without family support. We host celebrations for Christmas, Children's Day, Easter, Eid, and other public holidays — complete with gifts, food, music, and games — so every child feels seen and celebrated.",
    points: [
      "Christmas and Children's Day parties",
      "Gift packages and festive meals",
      "Music, dance, and entertainment",
      "Community-wide celebration events",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="How We Support Children Every Day"
        description="From classrooms to playgrounds to family-style celebrations, our programs cover every part of a child's wellbeing."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <program.icon size={26} />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-stone-900 sm:text-3xl">
                  {program.title}
                </h2>
                <p className="mt-4 leading-relaxed text-stone-600">
                  {program.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-stone-700">
                      <Check size={18} className="mt-0.5 shrink-0 text-orange-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-3xl">
                <PhotoPlaceholder
                  label={program.title}
                  tone={program.tone}
                  width={800}
                  height={620}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
