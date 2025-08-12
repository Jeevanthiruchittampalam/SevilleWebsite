'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useMemo } from 'react';

export default function TechnologyPage() {
  const investments = useMemo(
    () => [
      'Predictive Maintenance Software',
      'Dynamic Lease Pricing Tools',
      'Tenant Sentiment Analysis Models',
      'Energy Usage & Efficiency Monitoring',
      'Virtual Tour & Occupancy Projection Tools',
    ],
    []
  );

  const innovations = useMemo(
    () => [
      'In-house AI-powered rent forecast engine',
      'Custom dashboard integrating maintenance, leasing, and financial metrics',
      'Cloud-based mobile inspection app for building staff',
    ],
    []
  );

  const research = useMemo(
    () => [
      'Blockchain-based tenant ID verification',
      'Smart building automation (IoT & sensors)',
      'Carbon offset tracking linked to consumption data',
      'Augmented reality property previews and onboarding tools',
    ],
    []
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: larger image, layered techy overlays, on-theme */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[70vh]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/technologypage1.jpg')" }}
        />
        {/* Dark gradient to keep header/hero readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/55 to-black/15" />
        {/* Subtle grid/scan overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-md ring-1 ring-white/10 rounded-2xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-3">
              Technology &amp; Innovation
            </h1>
            <p className="text-base md:text-lg text-zinc-200">
              Driving smarter property management through data, AI, and forward-thinking solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        {/* Focus Areas */}
        <section>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-3xl font-semibold">What We Invest In</h2>
            <span className="hidden md:inline-block text-xs tracking-widest text-zinc-400 uppercase">
              Core Focus
            </span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {investments.map((item) => (
              <li key={item}>
                <div className="relative rounded-2xl ring-1 ring-zinc-800 bg-zinc-950/70 backdrop-blur-md p-5 hover:ring-white/20 transition">
                  <div className="absolute -top-1.5 -left-1.5 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,.6)]" />
                  <h3 className="text-lg font-medium">{item}</h3>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Built By Seville */}
        <section>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-3xl font-semibold">Our Innovations</h2>
            <span className="hidden md:inline-block text-xs tracking-widest text-zinc-400 uppercase">
              In-House
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {innovations.map((item) => (
              <div
                key={item}
                className="rounded-2xl ring-1 ring-zinc-800 bg-zinc-950/70 backdrop-blur-md p-5 hover:ring-white/20 transition group"
              >
                <div className="mb-2 inline-flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 inline-block" />
                  <span className="uppercase tracking-wider text-xs text-zinc-400">Seville</span>
                </div>
                <p className="leading-relaxed text-zinc-200 group-hover:text-white transition">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* R&D / Exploring Next */}
        <section>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-3xl font-semibold">What We&apos;re Exploring Next</h2>
            <span className="hidden md:inline-block text-xs tracking-widest text-zinc-400 uppercase">
              R&amp;D
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {research.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-200 hover:border-white/30 hover:bg-zinc-800 transition"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* CTA: gradient border frame + glassy inner card */}
        <section className="px-1 py-1 rounded-3xl bg-gradient-to-r from-yellow-400/60 via-white/20 to-yellow-400/60">
          <div className="rounded-3xl bg-zinc-950/80 backdrop-blur-md ring-1 ring-zinc-800 p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Want to Collaborate or Learn More?</h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              If you’re a tech startup, vendor, or institution interested in our platforms or research initiatives,
              please get in touch.
            </p>
            <a
              href="mailto:jeevan@sevilleinvestments.ca"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Contact Jeevan Thiruchittampalam
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
