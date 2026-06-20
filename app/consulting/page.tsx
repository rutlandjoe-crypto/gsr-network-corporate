import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GSR Network Consulting",
  description:
    "Consulting for publishers, media companies, small businesses, and organizations modernizing digital publishing and audience strategy.",
};

const services = [
  "Media Infrastructure Consulting",
  "Newsletter Strategy",
  "Website and Publishing Workflow Strategy",
  "Mobile App / Audience Platform Guidance",
  "AI-Era Journalism and Content Operations Strategy",
];

const pricing = [
  { name: "Strategy Session", price: "$1,500" },
  { name: "Consulting Engagements", price: "$5,000+" },
  { name: "Custom Media Transformation Projects", price: "$10,000+" },
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-16">
        <nav className="mb-12 flex items-center justify-between border-b border-neutral-800 pb-6">
          <Link
            href="/"
            className="text-sm font-black uppercase tracking-[0.25em] text-red-400 transition hover:text-red-300"
          >
            GSR Network
          </Link>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Consulting
          </span>
        </nav>

        <section className="max-w-5xl py-8 sm:py-14">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            Strategy for modern media
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            GSR Network Consulting
          </h1>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-neutral-300 sm:text-xl sm:leading-9">
            Helping publishers, media companies, small businesses, and
            organizations modernize digital publishing, newsletters, mobile
            strategy, audience growth, and editorial workflows in the AI era.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:globalsportsio@yahoo.com?subject=GSR%20Network%20Consulting"
              className="inline-flex rounded-full bg-red-500 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-red-500/20 transition hover:bg-red-400"
            >
              Start a GSR Network Consulting conversation
            </a>
            <a
              href="/gsr-network-consulting-overview.pdf"
              download
              className="inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-red-300 transition hover:border-red-400 hover:bg-red-500/20"
            >
              Download GSR Network Consulting Overview
            </a>
          </div>
        </section>

        <section className="grid gap-6 py-8 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">
              Human-first
            </p>
            <h2 className="mt-4 text-3xl font-black">
              Better systems. Human judgment.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-300">
              AI may assist with systems, structure, and operations, but
              writing and editing remain human-led. The work supports human
              expertise and editorial responsibility rather than replacing it.
            </p>
          </div>

          <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">
              Founder
            </p>
            <h2 className="mt-4 text-3xl font-black">
              Built from newsroom experience.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-300">
              Founded by veteran journalist Joe Rutland, builder of GSR
              Network. Each engagement brings an editorial perspective to the
              technology, platforms, and workflows behind modern publishing.
            </p>
          </div>
        </section>

        <section className="py-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Practical guidance for publishing and growth
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => (
              <div
                key={service}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-red-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-black leading-7">{service}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Clear starting points
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricing.map((option) => (
              <div
                key={option.name}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-7 shadow-2xl"
              >
                <h3 className="text-lg font-bold text-neutral-200">
                  {option.name}
                </h3>
                <p className="mt-5 text-3xl font-black text-white">
                  {option.price}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-10 rounded-3xl border border-red-500/30 bg-red-500/10 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">
            Start a conversation
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
            Bring a publishing challenge, workflow problem, or growth goal.
          </h2>
          <a
            href="mailto:globalsportsio@yahoo.com?subject=GSR%20Network%20Consulting"
            className="mt-7 inline-flex rounded-full bg-red-500 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-red-400"
          >
            Start a GSR Network Consulting conversation
          </a>
          <p className="mt-5 text-sm text-neutral-400">
            Email: globalsportsio@yahoo.com
          </p>
        </section>

        <footer className="mt-12 border-t border-neutral-800 pt-6 text-sm font-semibold text-neutral-400">
          GSR Network Consulting is part of the GSR Network family.
        </footer>
      </section>
    </main>
  );
}
