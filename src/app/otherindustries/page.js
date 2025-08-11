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

      {/* HERO: pull under header + dark gradient so header sits on black */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/otherindustries1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
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
      <main className="flex-grow px-6 py-16 max-w-6xl mx-auto">
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Industries We&apos;re Interested In</h2>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            While real estate and development remain our core focus, Seville Investments is actively exploring
            strategic investments in adjacent and emerging industries. We believe innovation often comes from the edge.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-left">
            {industries.map((item, idx) => (
              <li
                key={idx}
                className="rounded-xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-5 hover:ring-white/20 transition-colors"
              >
                <span className="block text-white">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
