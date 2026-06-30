import type { Metadata } from "next";
import { HandHeart, Megaphone, Briefcase, Landmark } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import VolunteerForm from "@/components/VolunteerForm";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Get Involved",
  description:
    "Volunteer, partner, or fundraise with NorahChild to support orphans, internally displaced children, and children from low-income families.",
  path: "/volunteer",
});

const ways = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description:
      "Join us at excursions, games days, and holiday events, or offer your time as a tutor or mentor to a child.",
  },
  {
    icon: Briefcase,
    title: "Corporate Partnership",
    description:
      "Align your company's CSR goals with our mission through sponsorships, employee volunteering, or matched giving.",
  },
  {
    icon: Landmark,
    title: "Government Collaboration",
    description:
      "Partner with us on education and child welfare initiatives, grants, or community outreach programs.",
  },
  {
    icon: Megaphone,
    title: "Fundraise & Advocate",
    description:
      "Start a fundraiser, spread the word on social media, or organize a giving campaign in your community.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="There Are Many Ways to Make a Difference"
        description="Whether you have time, skills, resources, or influence — there's a place for you in NorahChild's mission."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How You Can Help"
            title="Ways to Get Involved"
            center
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ways.map((way) => (
              <div
                key={way.title}
                className="rounded-2xl border border-stone-200 p-7 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <way.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-stone-900">
                  {way.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {way.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl order-2 lg:order-1">
            <PhotoPlaceholder
              label="Volunteers with Children"
              tone="teal"
              width={800}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
