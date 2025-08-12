'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const DummyThumbnail = '/images/PropertiesC.jpg';

const properties = [
  {
    name: '3925 Kingsway',
    address: '3925 Kingsway, Burnaby, BC',
    description: 'Modern rental suites in a transit-friendly corridor near Metrotown and central Burnaby.',
    image: '/images/BuildingHeads/Kingsway.jpg'
  },
  {
    name: 'Belmont Place',
    address: '250 East 2nd St, North Vancouver, BC',
    description: 'Premium apartments with sweeping views of the city and easy access to Lonsdale Quay.',
  },
  {
    name: '1050 Bidwell',
    address: '1050 Bidwell St, Vancouver, BC V6G 2K1',
    description: 'Charming West End building located near English Bay with heritage-style character.',
    image: '/images/BuildingHeads/Bidwell.jpg'
  },
  {
    name: 'Centennial Manor',
    address: '312 East 1st St, North Vancouver, BC',
    description: 'Central North Van location with excellent community amenities and transit connectivity.',
    image: '/images/BuildingHeads/Centennial.jpg'
  },
  {
    name: 'Parkview Place',
    address: '328 3rd St East, North Vancouver, BC',
    description: 'Quiet building close to parks, schools, and community centers in the Lower Lonsdale area.',
  },
  {
    name: 'St Andrews Manor',
    address: '215 St Andrews Ave, North Vancouver, BC',
    description: 'Beautifully maintained building in a peaceful residential setting near Lonsdale Ave.',
  },
  {
    name: 'Townhouse – East 14th',
    address: '55 East 14th Ave, Vancouver, BC',
    description: 'Spacious townhouse-style rentals in the heart of Mount Pleasant with a private feel.',
  },
  {
    name: 'Westwood Apartments',
    address: '161 4th St West, North Vancouver, BC V7M 1H6',
    description: 'Well-located rental building offering bright suites and easy access to central amenities.',
  },
];

function getCity(address = '') {
  const parts = address.split(',').map(s => s.trim());
  // Grab the second chunk when possible (e.g., “Burnaby”, “Vancouver”, “North Vancouver”)
  return parts[1] || '';
}

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: bigger image + dark gradient */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[65vh]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/properties3.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/55 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-md ring-1 ring-white/10 rounded-2xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">Our Properties Portfolio</h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Premium residential assets across Metro Vancouver
            </p>
          </div>
        </div>
      </section>

      {/* PROPERTY LISTINGS */}
      <main className="flex-grow px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <div key={idx} className="p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/0">
              <div className="group rounded-2xl bg-zinc-900/90 ring-1 ring-white/10 p-6 shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:ring-white/20 transition">
                {/* Image (bigger, optimized) */}
                <div className="relative mb-4 overflow-hidden rounded-xl h-72 md:h-80">
                  <Image
                    src={prop.image || DummyThumbnail}
                    alt={prop.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    priority={idx < 3}
                  />
                </div>

                {/* City pill */}
                <div className="mb-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 inline-block" />
                    {getCity(prop.address) || 'Metro Vancouver'}
                  </span>
                </div>

                {/* Text */}
                <h2 className="text-xl font-semibold mb-1 text-white">{prop.name}</h2>
                <p className="text-zinc-300 mb-2">{prop.address}</p>
                <p className="text-zinc-200">{prop.description}</p>

                {/* Dark-themed CTA with thin white border */}
                <button
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-4 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  aria-label={`View details for ${prop.name}`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
