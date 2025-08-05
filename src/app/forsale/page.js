'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ForSalePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/forsale1.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 p-10 rounded-lg max-w-2xl">
          <h1 className="text-5xl font-bold mb-2 tracking-tight">Properties for Sale</h1>
          <p className="text-lg italic">Exceptional opportunities. Elegant living.</p>
        </div>
      </div>

      {/* No Listings Message */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-24">
        <div className="bg-white shadow-md rounded-xl border border-gray-200 p-10 max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Currently No Listings Available</h2>
          <p className="text-gray-600 text-md">
            Please check back soon for our upcoming listings or contact us directly at palas@sevilleinvestments.ca for more information.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
