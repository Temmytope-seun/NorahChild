"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl border border-stone-200 bg-white p-9 text-center shadow-sm">
        <h3 className="font-display text-xl font-bold text-stone-900">
          Message Sent!
        </h3>
        <p className="mt-2 text-stone-600">
          Thanks for reaching out — our team will respond within 1-2 business
          days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9"
    >
      <h3 className="font-display text-xl font-bold text-stone-900">
        Send Us a Message
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-stone-500">
            Full Name
          </span>
          <input
            required
            type="text"
            className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-stone-500">
            Email Address
          </span>
          <input
            required
            type="email"
            className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-wide text-stone-500">
            Subject
          </span>
          <input
            required
            type="text"
            className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium uppercase tracking-wide text-stone-500">
            Message
          </span>
          <textarea
            required
            rows={5}
            className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-orange-500 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:w-auto sm:px-10"
      >
        Send Message
      </button>
    </form>
  );
}
