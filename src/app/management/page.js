'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ManagementPage() {
  const assetTypes = [
    'Multi-Family Residential',
    'Commercial Offices & Retail',
    'Mixed-Use Developments',
    'Student Housing',
    'Short-Term Rentals',
    'Industrial & Warehousing',
  ];

  const benefits = [
    'Proven track record managing 8 buildings in Greater Vancouver (over 500 units).',
    'Technology-first approach including AI-driven analytics and predictive maintenance.',
    'Dedicated tenant relations team focused on responsiveness and retention.',
    'Transparent financial reporting and cost control.',
    'Rapid turnaround on vacancies, repairs, and turnover.',
    'Sustainability practices with energy-efficient upgrades and ESG alignment.',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: pull under header + dark gradient so header sits on black */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/YELLOWUNUSED.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Property & Asset Management
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Rely on Seville’s expertise to grow value, enhance tenant satisfaction, and drive operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-16 max-w-5xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-semibold">Why Hire Seville?</h2>
        <ul className="list-disc list-inside text-zinc-300 leading-relaxed space-y-3 marker:text-zinc-500 text-left md:text-center md:mx-auto md:max-w-3xl">
          {benefits.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* ASSET TYPES (dark cards) */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Assets We Manage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {assetTypes.map((asset, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-zinc-950/70 ring-1 ring-zinc-800 p-5 text-center text-white hover:ring-white/20 transition"
            >
              <h3 className="text-lg font-medium">{asset}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS OVERVIEW */}
      <section className="px-6 pb-16 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center">Our Management Approach</h2>
        <p className="text-zinc-300 leading-relaxed">
          At Seville Investments, we deliver bespoke asset management that combines technology, transparency,
          and tenant-first service. From leasing to financial reporting, maintenance to strategic planning—we cover
          every aspect with excellence.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          We tailor our services to each property, offering dynamic lease pricing, preventative maintenance scheduling,
          ESG compliance, and detailed reporting. Our AI tools help us forecast vacancies, predict maintenance needs,
          and drive long-term value for owners.
        </p>
      </section>

      {/* CONTACT / NEXT STEPS (dark glassy card + thin white border button) */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="rounded-2xl bg-zinc-950/70 ring-1 ring-zinc-800 p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Want to Learn More?</h2>
          <p className="text-zinc-300 mb-6">
            Contact our management team to request a proposal or set up a consultation.
          </p>
          <a
            href="mailto:gierly@sevilleinvestments.ca"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Email Us Here
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
