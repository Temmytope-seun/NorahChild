import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import DonateBanner from "@/components/DonateBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Our Team | NorahChild",
  description:
    "Meet the founder, board, and staff behind NorahChild's work supporting children across Nigeria and Africa.",
};

const leadership = [
  {
    name: "Norah Adeyemi",
    role: "Founder & Executive Director",
    bio: "Founded NorahChild after years of grassroots work supporting displaced families, driven by a passion for keeping children in school.",
  },
];

const board = [
  {
    name: "Chidinma Okafor",
    role: "Board Chair",
    bio: "Education policy advocate with over 15 years of nonprofit governance experience.",
  },
  {
    name: "Emeka Nwosu",
    role: "Treasurer",
    bio: "Finance professional ensuring transparency and accountability across all donations.",
  },
  {
    name: "Aisha Bello",
    role: "Board Member",
    bio: "Child welfare specialist focused on programs for internally displaced communities.",
  },
];

const staff = [
  {
    name: "Tunde Williams",
    role: "Programs Manager",
    bio: "Coordinates school fee sponsorships, excursions, and on-the-ground partnerships.",
  },
  {
    name: "Grace Ibe",
    role: "Community Outreach Lead",
    bio: "Connects NorahChild with families, schools, and local leaders across communities.",
  },
  {
    name: "Samuel Eze",
    role: "Volunteer Coordinator",
    bio: "Manages volunteers and organizes games, competitions, and celebration events.",
  },
];

function TeamGrid({
  people,
}: {
  people: { name: string; role: string; bio: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <div key={person.name} className="text-center">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
            <PhotoPlaceholder
              label={person.name}
              tone="orange"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-5 font-display text-lg font-semibold text-stone-900">
            {person.name}
          </h3>
          <p className="text-sm font-medium text-orange-600">{person.role}</p>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-stone-600">
            {person.bio}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The People Behind NorahChild"
        description="A small but dedicated team of leaders, board members, and staff working every day to support children in need."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Founder & Director" center />
          <div className="mt-14">
            <TeamGrid people={leadership} />
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Governance" title="Board of Trustees" center />
          <div className="mt-14">
            <TeamGrid people={board} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Staff" title="Program Team" center />
          <div className="mt-14">
            <TeamGrid people={staff} />
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
