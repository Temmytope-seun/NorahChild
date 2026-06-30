import type { Metadata } from "next";
import { GraduationCap, Gift, Building2, Package } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import DonateOptions from "@/components/DonateOptions";

export const metadata: Metadata = {
  title: "Donate | NorahChild",
  description:
    "Support NorahChild's work with orphans, internally displaced children, and children of low-income families through one-time or monthly donations, corporate sponsorships, or in-kind gifts.",
};

const ways = [
  {
    icon: GraduationCap,
    title: "Sponsor a Child",
    description:
      "Cover a child's school fees, uniforms, and learning materials for a term or full year.",
  },
  {
    icon: Gift,
    title: "Give a One-Time Gift",
    description:
      "Make a single donation of any size to support our scholarships, excursions, and programs.",
  },
  {
    icon: Building2,
    title: "Corporate & Government Partnership",
    description:
      "Partner with us at scale through CSR programs, grants, or government welfare initiatives.",
  },
  {
    icon: Package,
    title: "In-Kind Donations",
    description:
      "Donate school supplies, books, food items, or sponsor an excursion or holiday event directly.",
  },
];

const faqs = [
  {
    q: "Is my donation tax-deductible?",
    a: "NorahChild is a registered non-profit organization in Nigeria. Please contact us for documentation that may support tax relief in your jurisdiction.",
  },
  {
    q: "How is my donation used?",
    a: "Donations directly fund school fees, scholarships, excursions, games, holiday celebrations, and the administrative costs needed to run these programs responsibly.",
  },
  {
    q: "Can I sponsor a specific child?",
    a: "Yes. Reach out to our team and we'll connect you with a child or family whose education you can directly support.",
  },
  {
    q: "Do you accept international donations?",
    a: "Yes, we welcome donations from individuals, organizations, and government bodies both within Nigeria and internationally.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Your Gift Keeps a Child in School"
        description="NorahChild is open to donations from individuals, the general public, corporate partners, and government agencies. Every contribution moves us closer to a world with fewer out-of-school children."
      />

      {/* Ways to give */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ways to Give"
            title="Choose How You'd Like to Help"
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

      {/* Donation panel */}
      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DonateOptions />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common Questions" center />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-stone-200 p-6"
              >
                <h3 className="font-display font-semibold text-stone-900">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
