'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ManagementPage() {
  const assetTypes = [
    'Multi‑Family Residential',
    'Commercial Offices & Retail',
    'Mixed‑Use Developments',
    'Student Housing',
    'Short‑Term Rentals',
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
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-black">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/YELLOWUNUSED.jpg')" }}

      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-2">Property & Asset Management</h1>
          <p className="text-lg italic">
            Rely on Seville’s expertise to grow value, enhance tenant satisfaction, and drive operational efficiency.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="px-6 py-16 max-w-5xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Why Hire Seville?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 mt-4">
          {benefits.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Asset Types */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-md px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Assets We Manage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {assetTypes.map((asset, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 p-4 text-center hover:bg-gray-100 transition"
            >
              <h3 className="text-xl font-medium text-gray-800">{asset}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Process Overview */}
      <section className="px-6 py-16 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Management Approach</h2>
        <p className="text-gray-700 leading-relaxed">
          At Seville Investments, we deliver bespoke asset management that combines technology, transparency,
          and tenant-first service. From leasing to financial reporting, maintenance to strategic planning—we cover
          every aspect with excellence.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We tailor our services to each property, offering dynamic lease pricing, preventative maintenance scheduling,
          ESG compliance, and detailed reporting. Our AI tools help us forecast vacancies, predict maintenance needs,
          and drive long-term value for owners.
        </p>
      </section>

      {/* Contact / Next Steps */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-md px-6 py-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Want to Learn More?</h2>
        <p className="text-gray-700 mb-6">
          Contact our management team to request a proposal or setup a consultation.
        </p>
        <a
          href="mailto:gierly@sevilleinvestments.ca"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Email Gierly Magrata
        </a>
      </section>

      <Footer />
    </div>
  );
}
