'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TechnologyPage() {
  const investments = [
    'Predictive Maintenance Software',
    'Dynamic Lease Pricing Tools',
    'Tenant Sentiment Analysis Models',
    'Energy Usage & Efficiency Monitoring',
    'Virtual Tour & Occupancy Projection Tools',
  ];

  const innovations = [
    'In-house AI-powered rent forecast engine',
    'Custom dashboard integrating maintenance, leasing, and financial metrics',
    'Cloud-based mobile inspection app for building staff',
  ];

  const research = [
    'Blockchain-based tenant ID verification',
    'Smart building automation (IoT & sensors)',
    'Carbon offset tracking linked to consumption data',
    'Augmented reality property previews and onboarding tools',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: pull under header + dark gradient so header sits on black */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/technologypage1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-2">
              Technology & Innovation
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Driving smarter property management through data, AI, and forward-thinking solutions.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl font-semibold mb-4">What We Invest In</h2>
          <ul className="list-disc list-inside text-zinc-300 leading-relaxed space-y-2 marker:text-zinc-500">
            {investments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Innovations</h2>
          <ul className="list-disc list-inside text-zinc-300 leading-relaxed space-y-2 marker:text-zinc-500">
            {innovations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">What We&apos;re Exploring Next</h2>
          <ul className="list-disc list-inside text-zinc-300 leading-relaxed space-y-2 marker:text-zinc-500">
            {research.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Contact / CTA card (dark, glassy, thin white border on button) */}
        <section className="bg-zinc-950/70 backdrop-blur-md rounded-2xl ring-1 ring-zinc-800 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Want to Collaborate or Learn More?</h3>
          <p className="text-zinc-300 mb-6">
            If you’re a tech startup, vendor, or institution interested in our platforms or research initiatives,
            please get in touch.
          </p>
          <a
            href="mailto:jeevan@sevilleinvestments.ca"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Contact Jeevan Thiruchittampalam
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
