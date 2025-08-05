'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';


export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero Section with Taller Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/contactus.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
          <h1 className="text-5xl font-bold mb-2"></h1>
          <p className="text-base italic">We’re here to help. Let’s connect.</p>
        </div>
      </div>

      {/* Main Contact Info */}
      <main className="flex-grow px-6 py-12 max-w-3xl mx-auto space-y-8 text-center sm:text-left">
        <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Office Information</h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong><br />
            2233 W 35th Ave<br />
            Vancouver, BC V6M 1J4
          </p>

          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> (604) 873-5753
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Province:</strong> British Columbia
          </p>

          <h3 className="text-xl font-semibold mb-3">Email Contacts</h3>
          <p className="text-gray-700 mb-2">
            <strong>Rental:</strong>{' '}
            <a href="mailto:geirly@sevilleinvestments.ca" className="text-blue-600 hover:underline">
              geirly@sevilleinvestments.ca
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Technical:</strong>{' '}
            <a href="mailto:jeevan@sevilleinvestments.ca" className="text-blue-600 hover:underline">
              jeevan@sevilleinvestments.ca
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Financial:</strong>{' '}
            <a href="mailto:palas@sevilleinvestments.ca" className="text-blue-600 hover:underline">
              palas@sevilleinvestments.ca
            </a>
          </p>
        </div>

        <div className="text-gray-600 text-sm text-center mt-10">
          Whether you&apos;re a current tenant, prospective client, or vendor — we’re ready to support you.
        </div>
      </main>

      <Footer />
    </div>
  );
}
