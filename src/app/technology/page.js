'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TechBg from '../images/technologypage1.jpg';

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
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${TechBg.src})` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Technology & Innovation</h1>
          <p className="text-lg italic">
            Driving smarter property management through data, AI, and forward-thinking solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">What We Invest In</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {investments.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Innovations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {innovations.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">What We're Exploring Next</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {research.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Want to Collaborate or Learn More?</h3>
          <p className="text-gray-700 mb-6">
            If you’re a tech startup, vendor, or institution interested in our platforms or research initiatives, please get in touch.
          </p>
          <a
            href="mailto:jeevan@sevilleinvestments.ca"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
          >
            Contact Jeevan Thiruchittampalam
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
