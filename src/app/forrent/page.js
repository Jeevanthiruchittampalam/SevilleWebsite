'use client';
export const dynamic = 'force-dynamic';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
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

/* ---------- Filtered Listings ---------- */
function FilteredListings() {
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
    <>
      {/* Filters (lighter grey, glassy) */}
      <div className="bg-zinc-800/70 backdrop-blur-md rounded-2xl ring-1 ring-zinc-600 p-6 mx-auto mt-8 max-w-5xl flex flex-col md:flex-row gap-6 justify-between items-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        {/* City */}
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-xs font-semibold tracking-wide text-zinc-200 mb-1">CITY</label>
          <select
            className="bg-zinc-800 text-white border border-zinc-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
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
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-xs font-semibold tracking-wide text-zinc-200 mb-1">BEDROOMS</label>
          <select
            className="bg-zinc-800 text-white border border-zinc-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
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
        <div className="flex flex-col items-center w-full md:w-auto">
          <label className="text-xs font-semibold tracking-wide text-zinc-200 mb-1">MAX PRICE</label>
          <span className="text-sm font-semibold text-white/90 mb-1">${priceLimit}</span>
          <input
            type="range"
            min="500"
            max="4000"
            step="50"
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            className="w-40 accent-yellow-400"
          />
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-5xl mx-auto px-4 mt-4 text-sm text-zinc-400">
        {filteredListings.length} match{filteredListings.length === 1 ? '' : 'es'}
      </div>

      {/* Listings (lighter grey cards) */}
      <main className="flex-grow px-4 py-12 max-w-5xl mx-auto space-y-16">
        {filteredListings.length === 0 && (
          <p className="text-center text-zinc-400 text-lg mt-10">
            No listings found with those filters.
          </p>
        )}

        {filteredListings.map((listing) => (
          <section
            key={listing.id}
            className="bg-zinc-800/70 backdrop-blur-md rounded-2xl ring-1 ring-zinc-600 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:ring-white/20 transition"
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">{listing.title}</h2>

            <p className="text-sm text-zinc-300 mb-4">
              Quantity:{' '}
              <span className="inline-block px-2 py-0.5 bg-yellow-400 text-black rounded text-xs font-semibold align-middle">
                {listing.quantity}
              </span>{' '}
              units available
            </p>

            <p className="text-lg md:text-xl font-semibold text-white mb-5">{listing.info}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {listing.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={`/images/${listing.folder}/${img}`}
                  alt={`${listing.folder} image ${idx + 1}`}
                  width={640}
                  height={480}
                  className="rounded-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading={idx > 2 ? 'lazy' : 'eager'}
                />
              ))}
            </div>

            <p className="text-zinc-200 leading-relaxed mb-6 whitespace-pre-line">
              {listing.description}
            </p>

            <button
              onClick={togglePopup}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Apply Here
            </button>
          </section>
        ))}
      </main>

      {/* Apply Modal (dark) */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-zinc-950 ring-1 ring-zinc-800 p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">How To Apply</h3>
            <p className="mb-3 text-zinc-300">Step 1: Download the application form</p>
            <a
              href="/3925Kingsway_ApplicationTenancy.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-5 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors"
            >
              Download PDF
            </a>
            <p className="mt-4 text-zinc-300">
              Step 2: Email it to{' '}
              <a href="mailto:gierly@sevilleinvestments.ca" className="underline text-yellow-400 hover:text-yellow-300">
                gierly@sevilleinvestments.ca
              </a>
            </p>
            <button
              onClick={togglePopup}
              className="mt-5 inline-flex items-center justify-center rounded-full border border-white/30 bg-zinc-900/70 px-4 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Page ---------- */
export default function ForRentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: taller to match other pages */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/forrentbg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Available Rentals
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              One step closer to finding your new home
            </p>
          </div>
        </div>
      </section>

      {/* Listings (suspense for URL params) */}
      <Suspense fallback={<div className="text-center py-10 text-zinc-500">Loading listings...</div>}>
        <FilteredListings />
      </Suspense>

      <Footer />
    </div>
  );
}
