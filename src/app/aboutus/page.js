'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* Scroll-reveal helper (Apple/Meta-style fade+lift) */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShow(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShow(true), delay);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform
      ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      ${className}`}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO — large, moody, with spotlight gradients */}
      <section className="relative -mt-16 w-full h-[640px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/van1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/10" />
        {/* subtle spotlight wash */}
        <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(700px_700px_at_15%_20%,rgba(250,204,21,0.12),transparent_40%),radial-gradient(900px_900px_at_85%_80%,rgba(255,255,255,0.09),transparent_45%)]" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <Reveal>
            <div className="bg-black/40 backdrop-blur-md ring-1 ring-white/10 rounded-2xl p-8 md:p-10 text-center max-w-2xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
                About Us
              </h1>
              <p className="text-base md:text-lg text-zinc-200">
                Driven by integrity, powered by innovation.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15">Est. 1983</span>
                <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15">8 Buildings • 500+ Units</span>
                <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15">Technology-Driven Operations</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE SEVILLE DIFFERENCE (moved above company info) */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              The Seville Difference
            </h2>
          </Reveal>

          {/* Image + Quote */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-16">
            <Reveal className="w-full max-w-md" delay={50}>
              <img
                src="/images/rainbowcubes.jpg"
                alt="Vancouver"
                className="rounded-xl ring-1 ring-zinc-800 object-cover w-full shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
              />
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="text-xl font-light text-zinc-200 max-w-2xl italic">
                &ldquo;At Seville, we go beyond managing properties — we build lasting relationships.
                Our commitment to transparency, adaptability, and people-first service is what truly
                sets us apart.&rdquo;
                <div className="mt-4 text-right text-sm not-italic text-zinc-400">
                 
                </div>
              </blockquote>
            </Reveal>
          </div>

          {/* Features Grid — white cards to pop on dark */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '/images/icons/skyscrapers.png',
                title: 'Trusted Expertise',
                text: 'Top-tier property management backed by decades of experience and a dedicated team.',
                delay: 0,
              },
              {
                icon: '/images/icons/room-service.png',
                title: 'Exceptional Service',
                text: 'Our standards exceed industry norms so clients and tenants feel truly supported.',
                delay: 60,
              },
              {
                icon: '/images/icons/employees.png',
                title: 'In-House Training',
                text: 'Managers are trained internally to maintain consistency and reduce turnover.',
                delay: 120,
              },
              {
                icon: '/images/icons/ai.png',
                title: 'Tech-Driven Innovation',
                text: 'Custom platforms and AI tools deliver faster, smarter, more transparent service.',
                delay: 180,
              },
            ].map((card) => (
              <Reveal key={card.title} delay={card.delay}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm ring-1 ring-zinc-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <img src={card.icon} alt={card.title} className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-700 text-sm">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI PRICING PROMISE — monitor icon enlarged */}
      <section className="px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900/85 to-zinc-950/85 backdrop-blur-md ring-1 ring-zinc-800 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                AI-Powered Pricing, People-First Outcomes
              </h3>
              <p className="text-zinc-300 leading-relaxed max-w-3xl">
                We use advanced AI to model demand, seasonality, and retention—then deliberately price select
                rentals slightly below market value to reduce vacancy, accelerate leasing, and strengthen
                long-term tenant satisfaction. The result: fewer gaps, better service, and a healthier portfolio.
              </p>

              {/* Icon row (bigger icon) */}
              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/images/icons/monitorw.png"
                  alt="AI Monitoring"
                  className="w-24 h-24 md:w-28 md:h-28"
                />
                <div className="text-zinc-300 text-sm leading-relaxed">
                  Real-time telemetry guides pricing decisions — transparently and responsibly.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPANY INFORMATION (original content, moved below) */}
      <main className="flex-grow px-6 pb-20 max-w-4xl mx-auto">
        <Reveal>
          <section className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8 md:p-10 space-y-6 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-white">Seville Investments</strong> is a proudly Canadian, medium-scale
              management company rooted in the heart of the Lower Mainland. Founded in <strong>1983</strong>,
              we have grown over the decades into a diversified organization focused on:
            </p>

            <ul className="list-disc list-inside text-zinc-300 leading-relaxed marker:text-zinc-500">
              <li>Property &amp; Asset Management</li>
              <li>Construction &amp; Development</li>
              <li>Apartment and Condo Rentals</li>
              <li>Private Loans &amp; Investments</li>
              <li>Custom-built AI Tools for Data Analysis</li>
              <li>In-house Software &amp; Systems Design</li>
            </ul>

            <p className="text-zinc-300 leading-relaxed">
              We currently manage <strong>8 buildings</strong> across the Greater Vancouver Area, totaling
              over <strong>{8 * 8 * 8} units</strong>. With a strong foundation and experienced team, we are
              actively preparing for major expansion in both scale and service offerings.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              At Seville, we are committed to our clients. Integrity, reliability, and responsive service are
              the core values that guide our operations. We prioritize long-term relationships and pride
              ourselves on understanding the unique needs of each property and client.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              Our entrepreneurial mindset fuels constant innovation. By leveraging our own AI-driven tools and
              custom-built systems, we continue to push boundaries in how property management is approached in
              the 21st century.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              As we look to the future, our plans for growth are bold — but grounded in the same principles
              that brought us here: service, innovation, and integrity.
            </p>
          </section>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
