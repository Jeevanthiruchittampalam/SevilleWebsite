'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PromotionsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/promotions.png')" }}
      >
        <div className="bg-black bg-opacity-40 p-10 rounded-lg max-w-2xl">
          <h1 className="text-5xl font-bold mb-2 tracking-tight">Exclusive Promotions</h1>
          <p className="text-lg italic">Elegant living. Exceptional savings.</p>
        </div>
      </div>

      {/* No Promotions Available */}
      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto text-center space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 tracking-wide">
            Current Offers
          </h2>
          <p className="text-gray-600 text-lg">
            There are currently no promotions available at this time.
          </p>
          <p className="text-gray-600 text-lg">
            Please check back soon for future offers and incentives.
          </p>
        </section>

        <div className="pt-16 text-center text-gray-500 text-sm">
          Terms and conditions may apply to future promotions. Contact our office for more information when promotions are live.
        </div>
      </main>

      <Footer />
    </div>
  );
}
