import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Trophy,
  Trees,
  PartyPopper,
  ArrowRight,
  Quote,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import DonateBanner from "@/components/DonateBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { heroPhotos } from "@/lib/photos";

const stats = [
  { label: "Children Supported", value: "1,200+" },
  { label: "Scholarships Awarded", value: "350+" },
  { label: "Communities Reached", value: "40+" },
  { label: "Excursions Organized", value: "60+" },
];

const programs = [
  {
    icon: GraduationCap,
    title: "School Fees & Scholarships",
    description:
      "We pay school fees and award scholarships to orphans and children from low-income homes so no child is forced out of the classroom.",
  },
  {
    icon: Trophy,
    title: "Games & Competitions",
    description:
      "We organize games, quizzes, and competitions that build confidence, teamwork, and healthy rivalry among children.",
  },
  {
    icon: Trees,
    title: "Excursions & Outings",
    description:
      "From zoo visits to waterfall trips, we give children memorable experiences beyond their daily struggles.",
  },
  {
    icon: PartyPopper,
    title: "Holiday Celebrations",
    description:
      "We celebrate public holidays with children through parties, gifts, and activities that bring joy and a sense of belonging.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-900">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(249,115,22,0.35),_transparent_55%)]"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-orange-500/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
              Hope for Every Child
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Giving Every Child a Chance to{" "}
              <span className="text-orange-500">Learn, Play & Belong</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
              NorahChild supports orphans, internally displaced children, and
              children of poor families across Nigeria and Africa — through
              school fees, scholarships, excursions, and the simple joy of
              being a child.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
              >
                Donate Now
              </Link>
              <Link
                href="/programs"
                className="flex items-center gap-2 rounded-full border-2 border-stone-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-orange-500"
              >
                Our Programs <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid aspect-square grid-cols-2 grid-rows-2 gap-3 rounded-3xl border-4 border-stone-800 p-2 shadow-2xl sm:gap-4">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={heroPhotos.smilingChild.src}
                  alt={heroPhotos.smilingChild.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={heroPhotos.classroom.src}
                  alt={heroPhotos.classroom.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={heroPhotos.scholarshipRecipients.src}
                  alt={heroPhotos.scholarshipRecipients.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={heroPhotos.outreach.src}
                  alt={heroPhotos.outreach.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
              <p className="font-display text-2xl font-bold text-orange-600">
                1,200+
              </p>
              <p className="text-sm text-stone-600">Children supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-orange-600 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-stone-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl">
            <PhotoPlaceholder
              label="Children at School"
              tone="teal"
              width={800}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Mission"
              title="Reducing Out-of-School Children, One Life at a Time"
              description="NorahChild exists to reduce the number of out-of-school children and make the world a better, kinder place for kids. We work with orphans, internally displaced children, and children from poor families across Nigeria and other parts of Africa — meeting their educational, emotional, and social needs."
            />
            <ul className="mt-6 space-y-3 text-stone-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Paying school fees for vulnerable children
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Awarding scholarships to keep children in school
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                Creating joyful childhood experiences and memories
              </li>
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
            >
              Learn more about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Programs"
            description="From the classroom to the playground, we walk with children through every stage of growing up."
            center
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-2xl border border-stone-200 bg-white p-7 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <program.icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-stone-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Explore All Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Quote className="mx-auto text-orange-300" size={40} />
          <p className="mt-6 font-display text-2xl font-medium leading-relaxed text-stone-800 sm:text-3xl">
            &ldquo;NorahChild paid my school fees and took us to the zoo for
            the first time in my life. They didn&apos;t just help me stay in
            school — they reminded me what it feels like to be a child.&rdquo;
          </p>
          <div className="mt-6">
            <p className="font-semibold text-stone-900">Adaeze, Age 12</p>
            <p className="text-sm text-stone-500">NorahChild Scholar, Lagos</p>
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
