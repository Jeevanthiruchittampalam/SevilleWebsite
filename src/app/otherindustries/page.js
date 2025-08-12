// src/app/otherindustries/page.js
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OtherIndustriesPage() {
  const industries = [
    'Renewable Energy & Infrastructure',
    'Financial Technology (FinTech)',
    'Logistics & Warehousing',
    'Green Construction Materials',
    'AI & Predictive Data Analytics',
    'Health & Wellness Tech',
    'Affordable Housing Innovation',
    'Sustainable Food Production',
    'Education Platforms',
    'Digital Property Marketplaces',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: large image with dark overlay, pulled under header */}
      <section className="relative -mt-16 w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/otherindustries1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Beyond Real Estate
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Exploring diverse industries with long-term potential and aligned values.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <main className="flex-grow px-6 py-16 max-w-6xl mx-auto space-y-12">
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Industries We&apos;re Interested In</h2>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            While real estate and development remain our core focus, Seville Investments is actively exploring
            strategic opportunities in adjacent and emerging sectors. Innovation often starts at the edge.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-left">
            {industries.map((item, idx) => (
              <li
                key={idx}
                className="rounded-xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-5 hover:ring-white/20 transition-colors flex items-start gap-3"
              >
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8 md:p-10 text-center">
          <h3 className="text-2xl font-semibold mb-3">Have a Partnership or Idea?</h3>
          <p className="text-zinc-300 mb-6">
            We collaborate with founders, researchers, and operators exploring the future of the built world.
          </p>
          <a
            href="mailto:palas@sevilleinvestments.ca"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Contact Our Investments Team
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
