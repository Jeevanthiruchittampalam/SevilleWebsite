'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-body text-black bg-gray-50">
      <Header />

      {/* Hero Section styled like PromotionsPage */}
      <div
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: "url('/images/orca1.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-40 p-10 rounded-lg max-w-2xl">
          <h1 className="text-5xl font-heading font-bold mb-3 tracking-tight">About Us</h1>
          <p className="text-lg italic font-light">Driven by integrity, powered by innovation.</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto text-center sm:text-left space-y-6">
        <p className="text-lg">
          <strong>Seville Investments</strong> is a proudly Canadian, medium-scale management company
          rooted in the heart of the Lower Mainland. Founded in <strong>1983</strong>, we have grown over
          the decades into a diversified organization focused on:
        </p>

        <ul className="list-disc list-inside text-left">
          <li>Property & Asset Management</li>
          <li>Construction & Development</li>
          <li>Apartment and Condo Rentals</li>
          <li>Private Loans & Investments</li>
          <li>Custom-built AI Tools for Data Analysis</li>
          <li>In-house Software & Systems Design</li>
        </ul>

        <p>
          We currently manage <strong>8 buildings</strong> across the Greater Vancouver Area, totaling
          over <strong>{8 * 8 * 8} units</strong>. With a strong foundation and experienced team, we are
          actively preparing for major expansion in both scale and service offerings.
        </p>

        <p>
          At Seville, we are committed to our clients. Integrity, reliability, and responsive service are
          the core values that guide our operations. We prioritize long-term relationships and pride
          ourselves on understanding the unique needs of each property and client.
        </p>

        <p>
          Our entrepreneurial mindset fuels constant innovation. By leveraging our own AI-driven tools and
          custom-built systems, we continue to push boundaries in how property management is approached in
          the 21st century.
        </p>

        <p>
          As we look to the future, our plans for growth are bold — but grounded in the same principles
          that brought us here: service, innovation, and integrity.
        </p>
      </main>

      <Footer />
    </div>
  );
}
