'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const listings = [
  {
    id: 1,
    title: '1 Bedroom at 3925 Kingsway, Burnaby, BC',
    quantity: 2,
    city: 'Burnaby',
    bedrooms: 1,
    price: 1775,
    info: '$1,775 / 1br - 650ft² - 1 bedroom Condo Unit (Metrotown Area)',
    description: `Available September 1, 2025, one year lease. This location is a few minutes to Downtown Vancouver. Very walkable, bikeable, and has good transit. Close to major shopping centers, recreation, Burnaby's Central Park, cinema, and schools.
Rent $2000/month, with $225/month incentive for 12-month lease. 1/2 month rent damage deposit. Hot water included. Tenant pays hydro, cable/internet. No smoking or BBQs. Rental insurance required.`,
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'],
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
    description: `Large bright 2-bedroom units on the 3rd floor. Available September 1, 2025, one year lease. Near Downtown Vancouver. Very walkable, bikeable, and great transit. Close to shopping, parks, cinema, and schools.
Rent $2300/month with $200/month incentive for 12-month lease. 1/2 month rent damage deposit. Hot water included. Tenant pays hydro, cable/internet. No smoking or BBQs. Rental insurance required.`,
    images: ['1.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '2.jpg', 'front.jpg'],
    folder: 'KW_2B',
    email: 'gierly@sevilleinvestments.ca',
  },
];

const cities = ['Vancouver', 'Victoria', 'Burnaby', 'Surrey', 'North Vancouver', 'Toronto', 'London'];
const bedroomOptions = ['S', '1', '2'];

export default function BlogPage() {
  const searchParams = useSearchParams();

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBedroom, setSelectedBedroom] = useState('');
  const [priceLimit, setPriceLimit] = useState(4000);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cityParam = searchParams.get('city');
    const bedroomParam = searchParams.get('bedrooms');
    const priceParam = searchParams.get('price');

    if (cityParam) setSelectedCity(cityParam);
    if (bedroomParam) setSelectedBedroom(bedroomParam);
    if (priceParam) setPriceLimit(parseInt(priceParam));
  }, [searchParams]);

  const togglePopup = () => setShowPopup(!showPopup);

  const filteredListings = listings.filter((listing) => {
    return (
      (!selectedCity || listing.city === selectedCity) &&
      (!selectedBedroom || String(listing.bedrooms) === selectedBedroom) &&
      listing.price <= priceLimit
    );
  });

  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/forrentbg.jpg')" }}
      >
        <div className="bg-black bg-opacity-40 p-10 rounded-lg max-w-2xl">
          <h1 className="text-5xl font-bold mb-2 tracking-tight">Available Rentals</h1>
          <p className="text-lg italic">One step closer to finding your new home</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md rounded-lg p-6 mx-auto mt-8 max-w-5xl flex flex-col md:flex-row gap-6 justify-between items-center">
        {/* City */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">City</label>
          <select
            className="border border-gray-300 rounded px-4 py-2"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">All</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Bedrooms</label>
          <select
            className="border border-gray-300 rounded px-4 py-2"
            value={selectedBedroom}
            onChange={(e) => setSelectedBedroom(e.target.value)}
          >
            <option value="">All</option>
            {bedroomOptions.map((b) => (
              <option key={b} value={b}>{b === 'S' ? 'Studio' : `${b} Bedroom`}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium mb-1">Max Price</label>
          <span className="text-sm font-semibold text-gray-700 mb-1">${priceLimit}</span>
          <input
            type="range"
            min="500"
            max="4000"
            step="50"
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            className="w-40 accent-blue-500"
          />
        </div>
      </div>

      {/* Listings */}
      <main className="flex-grow px-4 py-12 max-w-5xl mx-auto space-y-16">
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

            {/* Info Header */}
            <p className="text-xl font-semibold text-black mb-4">{listing.info}</p>

            {/* Images */}
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

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">{listing.description}</p>

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
              Step 2: Email it to{' '}
              <a href="mailto:gierly@sevilleinvestments.ca" className="underline text-blue-500">
                gierly@sevilleinvestments.ca
              </a>
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
