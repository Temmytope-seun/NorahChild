"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const amounts = [5000, 10000, 25000, 50000, 100000];

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center justify-between rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
      <div>
        <p className="text-xs uppercase tracking-wide text-stone-500">
          {label}
        </p>
        <p className="font-medium text-stone-900">{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-900"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={16} className="text-orange-600" /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function DonateOptions() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(10000);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      {/* Amount selector */}
      <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9">
        <h3 className="font-display text-xl font-bold text-stone-900">
          Make a Donation
        </h3>
        <p className="mt-1 text-sm text-stone-500">
          Choose how often and how much you&apos;d like to give.
        </p>

        <div className="mt-6 flex rounded-full bg-stone-100 p-1">
          {(["once", "monthly"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                frequency === f
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-stone-600"
              }`}
            >
              {f === "once" ? "Give Once" : "Give Monthly"}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {amounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setAmount(value)}
              className={`rounded-xl border py-3 text-sm font-semibold transition-colors ${
                amount === value
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-stone-200 text-stone-700 hover:border-orange-300"
              }`}
            >
              ₦{value.toLocaleString()}
            </button>
          ))}
        </div>

        <label className="mt-4 block">
          <span className="text-xs font-medium uppercase tracking-wide text-stone-500">
            Or enter a custom amount (₦)
          </span>
          <input
            type="number"
            min={100}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none"
          />
        </label>

        {!submitted ? (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="mt-6 w-full rounded-full bg-orange-500 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Continue with ₦{amount.toLocaleString()} {frequency === "monthly" ? "/ month" : ""}
          </button>
        ) : (
          <div className="mt-6 rounded-xl bg-orange-50 p-4 text-sm text-orange-800">
            Thank you! Online payment isn&apos;t connected yet — please use
            the bank transfer details below, or reach us at{" "}
            <a href="mailto:hello@norahchild.org" className="font-semibold underline">
              hello@norahchild.org
            </a>{" "}
            to complete your ₦{amount.toLocaleString()}
            {frequency === "monthly" ? " monthly" : ""} donation.
          </div>
        )}
      </div>

      {/* Bank details */}
      <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9">
        <h3 className="font-display text-xl font-bold text-stone-900">
          Direct Bank Transfer
        </h3>
        <p className="mt-1 text-sm text-stone-500">
          Prefer to send a direct transfer? Use the account details below.
        </p>
        <div className="mt-6 space-y-3">
          <CopyField label="Account Name" value="NorahChild Foundation" />
          <CopyField label="Account Number" value="0123456789" />
          <CopyField label="Bank" value="First Bank of Nigeria" />
        </div>

        <div className="mt-8">
          <h4 className="font-display text-base font-semibold text-stone-900">
            Government & Corporate Partnerships
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            We welcome partnerships with government agencies, NGOs, and
            corporate organizations looking to fund education and child
            welfare initiatives at scale. Contact our partnerships team to
            discuss tailored sponsorship programs.
          </p>
          <a
            href="mailto:partnerships@norahchild.org"
            className="mt-4 inline-block rounded-full border-2 border-stone-900 px-6 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
          >
            partnerships@norahchild.org
          </a>
        </div>
      </div>
    </div>
  );
}
