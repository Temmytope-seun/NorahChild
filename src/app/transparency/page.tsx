import type { Metadata } from "next";
import {
  FileBadge2,
  FileText,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import DonateBanner from "@/components/DonateBanner";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Transparency & Accountability",
  description:
    "NorahChild's registration details, annual reports, financial summaries, and partner organizations.",
  path: "/transparency",
});

const registration = [
  { label: "Registered Name", value: "NorahChild Foundation" },
  { label: "Registration Type", value: "Incorporated Trustees" },
  { label: "Registration Number", value: "IT/128473" },
  {
    label: "Registering Body",
    value: "Corporate Affairs Commission (CAC), Nigeria",
  },
  { label: "Date Registered", value: "14 March 2021" },
  {
    label: "Tax Status",
    value: "Exempt under the Companies Income Tax Act",
  },
  {
    label: "Registered Address",
    value: "12 Hope Crescent, Ikeja, Lagos, Nigeria",
  },
];

const allocation = [
  { label: "Programs & Direct Child Support", value: 78 },
  { label: "Administrative & Operations", value: 12 },
  { label: "Fundraising & Outreach", value: 10 },
];

const financials = [
  {
    year: "FY 2025",
    income: "₦48,600,000",
    programExpenses: "₦37,900,000",
    adminExpenses: "₦5,800,000",
    fundraisingExpenses: "₦4,900,000",
  },
  {
    year: "FY 2024",
    income: "₦35,200,000",
    programExpenses: "₦27,100,000",
    adminExpenses: "₦4,300,000",
    fundraisingExpenses: "₦3,600,000",
  },
];

const reports = [
  {
    year: "2025",
    title: "2025 Annual Report",
    highlights:
      "120 school fee sponsorships, 35 new scholarships, 2 excursions, and 3 holiday celebrations across Lagos, Ogun, and Benue states.",
  },
  {
    year: "2024",
    title: "2024 Annual Report",
    highlights:
      "90 school fee sponsorships, 28 new scholarships, and the launch of our inter-school games program.",
  },
  {
    year: "2023",
    title: "2023 Annual Report",
    highlights:
      "NorahChild's first full year of operations, reaching 8 communities and sponsoring 40 children.",
  },
];

const partners = [
  {
    category: "Education",
    name: "Brightpath Schools Initiative",
    description:
      "Partner schools that enroll NorahChild-sponsored children and report on academic progress.",
  },
  {
    category: "Education",
    name: "Lagos Community Learning Trust",
    description:
      "Provides free learning materials and tutoring support for sponsored children.",
  },
  {
    category: "Corporate",
    name: "Meridian Bank Foundation",
    description:
      "Corporate sponsor supporting our school fees and scholarships program through annual CSR grants.",
  },
  {
    category: "Corporate",
    name: "AtlasCorp CSR Program",
    description:
      "Funds excursions and holiday celebrations for children across our partner communities.",
  },
  {
    category: "Government",
    name: "State Ministry of Education",
    description:
      "Collaborates with us on identifying out-of-school children and verifying school enrollment.",
  },
  {
    category: "Government",
    name: "Local Government Education Authority",
    description:
      "Supports community outreach and referrals of children in need within local wards.",
  },
  {
    category: "NGO Partner",
    name: "West Africa Child Relief Network",
    description:
      "Regional network we collaborate with to reach internally displaced children in border communities.",
  },
  {
    category: "NGO Partner",
    name: "Hope Bridge International",
    description:
      "International development partner co-funding scholarship expansion into new states.",
  },
];

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title="Openness Is How We Earn Your Trust"
        description="As a nonprofit supported by individuals, corporate partners, and government agencies, we're committed to being open about who we are, how we're funded, and how every donation is used."
      />

      {/* Registration */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <FileBadge2 size={22} />
              </div>
              <SectionHeading
                eyebrow="Registration"
                title="Our Legal Status"
                description="NorahChild is a registered nonprofit operating in Nigeria. Our registration details are available for verification by donors, partners, and regulators."
              />
              <a
                href="mailto:hello@norahchild.org?subject=Verify%20NorahChild%20Registration"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                <Mail size={16} /> Request verification documents
              </a>
            </div>

            <dl className="divide-y divide-stone-200 rounded-3xl border border-stone-200 bg-stone-50 px-6">
              {registration.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <dt className="text-sm text-stone-500">{item.label}</dt>
                  <dd className="text-sm font-semibold text-stone-900 sm:text-right">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Financial summary */}
      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Financial Summary"
            title="How Your Donations Are Used"
            description="We aim to put as much of every donation as possible directly toward children's education, wellbeing, and programs."
            center
          />

          <div className="mx-auto mt-14 max-w-2xl space-y-6">
            {allocation.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm font-medium text-stone-700">
                  <span>{item.label}</span>
                  <span className="font-display font-bold text-orange-600">
                    {item.value}%
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-stone-200">
                  <div
                    className="h-full rounded-full bg-orange-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl overflow-x-auto rounded-3xl border border-stone-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-xs uppercase tracking-wide text-stone-500">
                  <th className="px-6 py-4 font-semibold">Fiscal Year</th>
                  <th className="px-6 py-4 font-semibold">Total Income</th>
                  <th className="px-6 py-4 font-semibold">Program Expenses</th>
                  <th className="px-6 py-4 font-semibold">Admin Expenses</th>
                  <th className="px-6 py-4 font-semibold">
                    Fundraising Expenses
                  </th>
                </tr>
              </thead>
              <tbody>
                {financials.map((row) => (
                  <tr
                    key={row.year}
                    className="border-b border-stone-100 last:border-0"
                  >
                    <td className="px-6 py-4 font-semibold text-stone-900">
                      {row.year}
                    </td>
                    <td className="px-6 py-4 text-stone-600">{row.income}</td>
                    <td className="px-6 py-4 text-stone-600">
                      {row.programExpenses}
                    </td>
                    <td className="px-6 py-4 text-stone-600">
                      {row.adminExpenses}
                    </td>
                    <td className="px-6 py-4 text-stone-600">
                      {row.fundraisingExpenses}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-stone-500">
            Figures are unaudited summaries pending publication of our first
            independently audited financial statement. Detailed, audited
            reports will replace these figures as they become available.
          </p>
        </div>
      </section>

      {/* Annual reports */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Annual Reports"
            title="Our Yearly Impact Reports"
            description="Each year we publish a summary of our programs, reach, and finances. Full reports are available on request."
            center
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-5">
            {reports.map((report) => (
              <div
                key={report.year}
                className="flex flex-col gap-4 rounded-2xl border border-stone-200 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-stone-900">
                      {report.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">
                      {report.highlights}
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:hello@norahchild.org?subject=Request%20${report.year}%20Annual%20Report`}
                  className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
                >
                  Request Report
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Partners"
            title="Organizations We Work With"
            description="NorahChild collaborates with schools, corporate sponsors, government agencies, and fellow nonprofits to reach more children."
            center
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <span className="inline-block rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
                  {partner.category}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-stone-900">
                  {partner.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust note */}
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <CheckCircle2 size={22} />
          </div>
          <p className="text-stone-600">
            Have a question about our finances, governance, or partnerships?
            We&apos;re happy to talk.
          </p>
          <a
            href="mailto:hello@norahchild.org"
            className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
          >
            <Mail size={16} /> hello@norahchild.org
          </a>
          <p className="flex items-center gap-2 text-sm text-stone-500">
            <MapPin size={14} /> 12 Hope Crescent, Ikeja, Lagos, Nigeria
          </p>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
