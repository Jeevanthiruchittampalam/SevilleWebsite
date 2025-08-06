'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

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

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/properties3.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Our Properties Portfolio</h1>
          <p className="text-lg italic">Premium residential assets across Metro Vancouver</p>
        </div>
      </div>

      {/* Property Listings */}
      <main className="flex-grow px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((prop, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
          >
            {/* Property Image */}
            <div className="mb-4">
              <img
                src={prop.image || DummyThumbnail}
                alt={prop.name}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">{prop.name}</h2>
            <p className="text-gray-600 mb-1">{prop.address}</p>
            <p className="text-gray-700 flex-grow">{prop.description}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors">
              View Details
            </button>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
