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
          backgroundImage: "url('/images/van1.jpg')",
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

      {/* Seville Difference Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">The Seville Difference</h2>

          {/* Image + Quote */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-20">
            <img
              src="/images/van2.jpg"
              alt="Narinder Chauhan"
              className="rounded-lg shadow-md max-w-md w-full"
            />
            <blockquote className="text-xl font-light text-gray-800 max-w-2xl italic">
              &ldquo;At Seville, we go beyond managing properties — we build lasting relationships. Our
              commitment to transparency, adaptability, and people-first service is what truly sets us
              apart.&rdquo;
              <div className="mt-4 text-right font-normal text-base not-italic">
                
              </div>
            </blockquote>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <img src="/images/icons/skyscrapers.png" alt="Professional Management" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Trusted Expertise</h3>
              <p className="text-gray-700 text-sm">
                We offer top-tier property management backed by decades of experience and a dedicated team.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <img src="/images/icons/room-service.png" alt="Service Quality" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Exceptional Service</h3>
              <p className="text-gray-700 text-sm">
                Our service standards exceed industry norms, ensuring clients and tenants feel truly supported.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <img src="/images/icons/employees.png" alt="Team Training" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">In-House Training</h3>
              <p className="text-gray-700 text-sm">
                Our property managers are trained internally to maintain consistency and reduce turnover.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <img src="/images/icons/ai.png" alt="AI and Systems" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Tech-Driven Innovation</h3>
              <p className="text-gray-700 text-sm">
                Our custom-built platforms and AI tools help deliver faster, smarter, and more transparent service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
