'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

const listings = [
  {
    id: 1,
    title: '1 Bedroom at 3925 Kingsway, Burnaby, BC',
    quantity: 2,
    city: 'Burnaby',
    bedrooms: 1,
    price: 1775,
    info: '$1,775 / 1br - 650ft² - 1 bedroom Condo Unit (Metrotown Area)',
    description: `Available September 1, 2025...`,
    images: ['1.jpg', '2.jpg', '3.jpg'],
    folder: 'KW_1B',
    email: 'gierly@sevilleinvestments.ca',
  },
  {
    id: 2,
    title: '2 Bedroom at 3925 Kingsway, Burnaby, BC',
    quantity: 8,
    city: 'Burnaby',
    bedrooms: 2,
    price: 2100,
    info: '$2,100 / 2br - 850ft² - 2 bedroom Condo Unit (Metrotown Area)',
    description: `Available September 1, 2025...`,
    images: ['1.jpg', '2.jpg', '3.jpg'],
    folder: 'KW_2B',
    email: 'gierly@sevilleinvestments.ca',
  },
];

export default function ForRentPageInner() {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';
  const bedrooms = searchParams.get('bedrooms') || '';
  const price = parseInt(searchParams.get('price')) || 4000;

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  const filteredListings = listings.filter((listing) => {
    return (
      (!city || listing.city === city) &&
      (!bedrooms || String(listing.bedrooms) === bedrooms) &&
      listing.price <= price
    );
  });

  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/forrentbg.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 p-10 rounded-lg max-w-2xl">
          <h1 className="text-5xl font-bold mb-2">Available Rentals</h1>
          <p className="text-lg italic">One step closer to finding your new home</p>
        </div>
      </div>

      {/* Listings */}
      <main className="flex-grow px-4 py-12 max-w-5xl mx-auto space-y-16">
        {filteredListings.length === 0 && (
          <p className="text-center text-gray-600 text-lg">No listings match your filters.</p>
        )}
        {filteredListings.map((listing) => (
          <section
            key={listing.id}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-900">{listing.title}</h2>
            <p className="text-sm text-gray-700 mb-4">
              Quantity:{' '}
              <span className="inline-block px-2 py-0.5 bg-blue-500 text-white rounded text-xs font-semibold">
                {listing.quantity}
              </span>{' '}
              units available
            </p>

            <p className="text-xl font-semibold text-black mb-4">{listing.info}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {listing.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={`/images/${listing.folder}/${img}`}
                  alt={`${listing.folder} image ${idx + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto object-cover"
                />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
              {listing.description}
            </p>

            <button
              onClick={togglePopup}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
            >
              Apply Here
            </button>
          </section>
        ))}
      </main>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold mb-4">How To Apply</h3>
            <p className="mb-3 text-gray-700">Step 1: Download the application form</p>
            <a
              href="/3925Kingsway_ApplicationTenancy.pdf"
              download
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium"
            >
              Download PDF
            </a>
            <p className="mt-3 text-gray-700">
              Step 2: Email it to <a href="mailto:gierly@sevilleinvestments.ca" className="underline text-blue-500">gierly@sevilleinvestments.ca</a>
            </p>
            <button
              onClick={togglePopup}
              className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
