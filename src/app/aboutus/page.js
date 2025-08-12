'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: fixed 600px with dark overlay */}
      <section className="relative -mt-16 w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/van1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">About Us</h1>
            <p className="text-base md:text-lg text-zinc-200">
              Driven by integrity, powered by innovation.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT (glassy card for readability) */}
      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto">
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
      </main>

      {/* THE SEVILLE DIFFERENCE */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">The Seville Difference</h2>

          {/* Image + Quote */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-20">
            <img
              src="/images/van2.jpg"
              alt="Vancouver"
              className="rounded-xl ring-1 ring-zinc-800 object-cover max-w-md w-full"
            />
            <blockquote className="text-xl font-light text-zinc-200 max-w-2xl italic">
              &ldquo;At Seville, we go beyond managing properties — we build lasting relationships. Our
              commitment to transparency, adaptability, and people-first service is what truly sets us
              apart.&rdquo;
              <div className="mt-4 text-right text-sm not-italic text-zinc-400">
                — Seville Investments
              </div>
            </blockquote>
          </div>

          {/* Features Grid (white cards matching Quick Links) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
              <img src="/images/icons/skyscrapers.png" alt="Trusted Expertise" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Trusted Expertise</h3>
              <p className="text-gray-700 text-sm">
                Top-tier property management backed by decades of experience and a dedicated team.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
              <img src="/images/icons/room-service.png" alt="Exceptional Service" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Exceptional Service</h3>
              <p className="text-gray-700 text-sm">
                Our standards exceed industry norms so clients and tenants feel truly supported.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
              <img src="/images/icons/employees.png" alt="In-House Training" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">In-House Training</h3>
              <p className="text-gray-700 text-sm">
                Managers are trained internally to maintain consistency and reduce turnover.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
              <img src="/images/icons/ai.png" alt="Tech-Driven Innovation" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Tech-Driven Innovation</h3>
              <p className="text-gray-700 text-sm">
                Custom platforms and AI tools deliver faster, smarter, more transparent service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
