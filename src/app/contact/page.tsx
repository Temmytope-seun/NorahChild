import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with NorahChild for partnerships, donations, volunteering, or general inquiries.",
  path: "/contact",
});

const details = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["12 Hope Crescent, Ikeja", "Lagos, Nigeria"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+234 800 000 0000", "+234 800 000 0001"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@norahchild.org", "partnerships@norahchild.org"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Monday – Friday: 9am – 5pm", "Saturday: 10am – 2pm"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd Love to Hear From You"
        description="Questions about our programs, partnership opportunities, or how to help? Reach out — we typically respond within 1-2 business days."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {details.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-200 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-stone-900">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-stone-600">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto h-72 max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex h-full w-full items-center justify-center rounded-3xl border border-stone-200 bg-stone-100 text-sm text-stone-500">
            Map placeholder — embed Google Maps location here
          </div>
        </div>
      </section>
    </>
  );
}
