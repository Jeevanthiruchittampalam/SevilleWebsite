'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

const DummyThumbnail = '/images/PropertiesC.jpg';

const properties = [
  {
    name: 'Orca Place',
    address: '2233 W 35th Ave, Vancouver, BC',
    description: 'Luxury rentals with rooftop amenities and ocean views in Vancouver’s vibrant west side.',
  },
  {
    name: 'Seville Court',
    address: '1642 Commercial Dr, Vancouver, BC',
    description: 'Modern mid-rise with retail on the ground floor and excellent transit access.',
  },
  {
    name: 'Mainview Towers',
    address: '3721 Main St, Vancouver, BC',
    description: 'Contemporary rental suites with coworking lounge and fitness center.',
  },
  {
    name: 'Eastgate Residences',
    address: '2020 Kingsway, Burnaby, BC',
    description: 'Mixed-use building adjacent to transit hub in Burnaby’s growing tech corridor.',
  },
  {
    name: 'Bayview Apartments',
    address: '1500 Bay St, North Vancouver, BC',
    description: 'Garden-style units with mountain views and sustainable landscape design.',
  },
  {
    name: 'Hastings Lofts',
    address: '4320 Hastings St, Vancouver, BC',
    description: 'Industrial-chic loft apartments in a revitalized retail neighborhood.',
  },
  {
    name: 'Riverview Terrace',
    address: '8801 Glover Rd, Richmond, BC',
    description: 'Quiet suburban property with landscaped courtyard and secure parking.',
  },
  {
    name: 'Granville Crossing',
    address: '450 Granville St, Vancouver, BC',
    description: 'Downtown high-rise with tech-enhanced leasing and tenant portal.',
  },
  {
    name: 'Sunset Commons',
    address: '3250 Marine Dr, West Vancouver, BC',
    description: 'Coastal rentals with spacious interiors and communal garden areas.',
  },
  {
    name: 'Lakeside Manor',
    address: '1200 Howe St, Vancouver, BC',
    description: 'Elegantly designed rental suites with waterfront proximity and biking trails.',
  },
];

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/bcwinter1.jpg')" }}
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
                src={DummyThumbnail}
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
