'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ForSalePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: pull under header + dark gradient so header sits on black */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/forsale1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Properties for Sale
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Exceptional opportunities. Elegant living.
            </p>
          </div>
        </div>
      </section>

      {/* NO LISTINGS MESSAGE */}
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-10 text-center shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Currently No Listings Available
          </h2>
          <p className="text-zinc-300 mb-6">
            Please check back soon for upcoming listings, or contact us directly for more information.
          </p>
          <a
            href="mailto:gierly@sevilleinvestments.ca"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Email gierly@sevilleinvestments.ca
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
