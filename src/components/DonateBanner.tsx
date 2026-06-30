import Link from "next/link";

export default function DonateBanner() {
  return (
    <section className="bg-orange-500">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Every Naira Helps a Child Stay in School
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-orange-50">
          Whether you&apos;re an individual, a company, or a government
          agency, your support funds school fees, scholarships, excursions
          and brighter futures for children across Nigeria and Africa.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/donate"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-orange-600 shadow-sm transition-transform hover:scale-105"
          >
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="rounded-full border-2 border-white px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-orange-600"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
