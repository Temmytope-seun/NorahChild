import type { Metadata } from "next";
import { HeartHandshake, Eye, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import DonateBanner from "@/components/DonateBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "About Us | NorahChild",
  description:
    "Learn about NorahChild's story, mission, and the children we serve across Nigeria and Africa.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "We treat every child with dignity, warmth, and genuine care, regardless of their circumstance.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We are transparent and accountable with every donation entrusted to us by our partners.",
  },
  {
    icon: Eye,
    title: "Inclusion",
    description:
      "We reach children across ethnic, religious, and regional lines — no child is turned away.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We work alongside families, schools, and local leaders to create lasting change.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NorahChild"
        title="A Future for Every Child, No Matter Where They Start"
        description="We believe a child's circumstances at birth should never determine their access to education, joy, and opportunity."
      />

      {/* Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Why NorahChild Exists"
            />
            <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
              <p>
                NorahChild was founded out of a simple but urgent concern:
                too many children in Nigeria and across Africa are growing up
                without access to school, stability, or simple childhood joy
                — because they are orphans, have been displaced from their
                homes, or were born into families who cannot afford even
                basic school fees.
              </p>
              <p>
                What started as small, personal efforts to pay a handful of
                children&apos;s school fees has grown into an organization
                that supports communities through scholarships, school fee
                sponsorships, excursions, games, and holiday celebrations —
                all designed to remind these children that they matter.
              </p>
              <p>
                Today, NorahChild partners with schools, communities,
                volunteers, corporate sponsors, and government bodies to
                reach even more children and reduce the number of
                out-of-school children, one family at a time.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <PhotoPlaceholder
              label="NorahChild Founding Story"
              tone="amber"
              width={800}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-9 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-stone-900">
              Our Mission
            </h3>
            <p className="mt-4 leading-relaxed text-stone-600">
              To reduce the number of out-of-school children by providing
              school fees, scholarships, and holistic support to orphans,
              internally displaced children, and children from low-income
              families across Nigeria and Africa.
            </p>
          </div>
          <div className="rounded-3xl bg-stone-900 p-9 shadow-sm">
            <h3 className="font-display text-2xl font-bold text-white">
              Our Vision
            </h3>
            <p className="mt-4 leading-relaxed text-stone-300">
              A world where every child — regardless of background or
              circumstance — has access to education, opportunity, and the
              chance to simply be a child.
            </p>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Serve"
            title="The Children at the Heart of Our Work"
            center
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "Orphans",
                description:
                  "Children who have lost one or both parents and need consistent support to stay in school and thrive.",
              },
              {
                title: "Internally Displaced Children",
                description:
                  "Children uprooted from their homes by conflict or crisis, often left without access to stable schooling.",
              },
              {
                title: "Children of Low-Income Families",
                description:
                  "Children whose families cannot afford school fees, uniforms, or learning materials.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200 p-7"
              >
                <h3 className="font-display text-lg font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Our Core Values"
            center
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <value.icon size={26} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-stone-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
