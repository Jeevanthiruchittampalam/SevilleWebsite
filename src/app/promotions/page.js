'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PromoBg from '../images/promotions.png'; // Rename your generated image to promotions.jpg

export default function PromotionsPage() {
  const promos = [
    {
      title: '$300 Off Rent for 9 Months',
      description: 'Sign a new 12-month lease on select properties and receive $300 off rent for the first 9 months. Offer available through October 2025.',
    },
    {
      title: 'Zero Security Deposit Promo',
      description: 'For a limited time, qualified applicants can move in with no security deposit required on select units in our Vancouver and Burnaby buildings.',
    },
    {
      title: 'Refer a Friend – Earn $500',
      description: 'Refer a new tenant to Seville Management and receive a $500 rent credit when they sign a 1-year lease. Unlimited referrals allowed.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${PromoBg.src})` }}
      >
        <div className="bg-black bg-opacity-40 p-10 rounded-lg max-w-2xl">
          <h1 className="text-5xl font-bold mb-2 tracking-tight">Exclusive Promotions</h1>
          <p className="text-lg italic">Elegant living. Exceptional savings.</p>
        </div>
      </div>

      {/* Promotions List */}
      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto space-y-12">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 tracking-wide">
            Current Offers
          </h2>
          <p className="text-gray-600 text-lg">
            Our promotions reflect our commitment to both value and lifestyle. Whether you&apos;re looking for
            flexibility, incentives, or long-term benefits, we have options to suit every tenant&apos;s goals.
          </p>
        </section>

        <section className="space-y-10">
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{promo.title}</h3>
              <p className="text-gray-700 text-md">{promo.description}</p>
            </div>
          ))}
        </section>

        <div className="mt-16 text-center text-gray-500 text-sm">
          Terms and conditions apply. Promotions subject to change without notice. Please contact our office
          for full eligibility details.
        </div>
      </main>

      <Footer />
    </div>
  );
}
