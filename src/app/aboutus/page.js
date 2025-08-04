'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import OrcaImage from '../images/orca1.jpg';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black">
      <Header />

      {/* Hero Section with Background Image */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${OrcaImage.src})`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-sm mt-2 italic">Driven by integrity, powered by innovation.</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto text-center sm:text-left">
        <p className="text-lg mb-6">
          <strong>Seville Management Ltd.</strong> is a proudly Canadian, medium-scale management company
          rooted in the heart of the Lower Mainland. Founded in <strong>1983</strong>, we have grown over
          the decades into a diversified organization focused on:
        </p>

        <ul className="list-disc list-inside mb-6 text-left">
          <li>Property & Asset Management</li>
          <li>Construction & Development</li>
          <li>Apartment and Condo Rentals</li>
          <li>Private Loans & Investments</li>
          <li>Custom-built AI Tools for Data Analysis</li>
          <li>In-house Software & Systems Design</li>
        </ul>

        <p className="mb-6">
          We currently manage <strong>8 buildings</strong> across the Greater Vancouver Area, totaling
          over <strong>{8 * 8 * 8} units</strong>. With a strong foundation and experienced team, we are
          actively preparing for major expansion in both scale and service offerings.
        </p>

        <p className="mb-6">
          At Seville, we are committed to our clients. Integrity, reliability, and responsive service are
          the core values that guide our operations. We prioritize long-term relationships and pride
          ourselves on understanding the unique needs of each property and client.
        </p>

        <p className="mb-6">
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
