'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Bg from '../images/otherindustries1.jpg';

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
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-black">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${Bg.src})` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-2">Beyond Real Estate</h1>
          <p className="text-lg italic">
            Exploring diverse industries with long-term potential and aligned values.
          </p>
        </div>
      </div>

      {/* Industries Section */}
      <main className="flex-grow px-6 py-16 max-w-5xl mx-auto">
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Industries We're Interested In</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            While real estate and development remain our core focus, Seville Management Ltd. is actively exploring
            strategic investments in adjacent and emerging industries. We believe innovation often comes from the edge.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-left">
            {industries.map((item, idx) => (
              <li
                key={idx}
                className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
