'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function PromotionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: keep original height (600px) + dark overlay for readability */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/promotions.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-10 text-center max-w-2xl">
            <h1 className="text-5xl font-semibold tracking-tight mb-2">
              Exclusive Promotions
            </h1>
            <p className="text-lg text-zinc-200 italic">
              Elegant living. Exceptional savings.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto">
        <section className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8 md:p-10 text-center shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h2 className="text-3xl font-semibold mb-4">Current Offers</h2>
          <p className="text-zinc-300 text-lg">
            Sorry, there are currently no promotions available at this time.
          </p>
          <p className="text-zinc-300 text-lg">
            Please check back soon for future offers and incentives.
          </p>

          {/* Optional helpful links on-theme */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/forrent"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-5 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors"
            >
              Browse Available Rentals
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-5 py-2 text-white/90 hover:text-white hover:border-white/40 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>

          <div className="mt-10 text-zinc-500 text-sm">
            Terms and conditions may apply to future promotions. Contact our office for more information when promotions are live.
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
