'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CommunityPage() {
  const events = [
    {
      date: 'August 31, 2025',
      title: 'Seville Tenants Lottery Winners Announced',
      description: 'Monthly winners selected from our residential tenants and posted internally across all managed properties.'
    },
    {
      date: 'September 10, 2025',
      title: 'Tenant Rights Workshop',
      description: 'A seminar led by tenancy experts to help tenants and landlords navigate BC tenancy regulations.',
      time: '6:00 PM – 7:30 PM',
      email: 'geirly@sevilleinvestments.ca'
    },
    {
      date: 'September 22, 2025',
      title: 'Neighbourhood Clean-Up & Recycling Drive',
      description: 'Join fellow residents and staff for a community clean-up followed by refreshments and networking.',
      time: '10:00 AM – 12:00 PM',
      email: 'jeevan@sevilleinvestments.ca'
    },
    {
      date: 'September 30, 2025',
      title: 'Seville Tenants Lottery Winners Announced',
      description: 'Monthly winners selected from our residential tenants and posted internally across all managed properties.'
    },
    {
      date: 'October 3, 2025',
      title: 'Charity Gala: Housing Security Fundraiser',
      description: 'Annual gala benefiting affordable housing initiatives in the Lower Mainland.',
      time: '7:00 PM – 10:00 PM',
      email: 'geirly@sevilleinvestments.ca'
    },
    {
      date: 'October 15, 2025',
      title: 'Condo Owners Panel: Emerging Developments',
      description: 'Industry leaders discuss upcoming mixed-use and condo projects across Greater Vancouver.',
      time: '5:30 PM – 7:00 PM',
      email: 'jeevan@sevilleinvestments.ca'
    },
    {
      date: 'October 31, 2025',
      title: 'Seville Tenants Lottery Winners Announced',
      description: 'Monthly winners selected from our residential tenants and posted internally across all managed properties.'
    },
    {
      date: 'November 5, 2025',
      title: 'Smart Building Technologies Showcase',
      description: 'Live demo of our AI tools and sustainable facilities enhancements for tenants and partners.',
      time: '2:00 PM – 4:00 PM',
      email: 'geirly@sevilleinvestments.ca'
    },
    {
      date: 'November 17, 2025',
      title: 'Tenant Feedback Forum',
      description: 'Open Q&A with management to discuss service delivery and future amenities.',
      time: '6:00 PM – 7:00 PM',
      email: 'jeevan@sevilleinvestments.ca'
    },
    {
      date: 'November 30, 2025',
      title: 'Seville Tenants Lottery Winners Announced',
      description: 'Monthly winners selected from our residential tenants and posted internally across all managed properties.'
    },
    {
      date: 'December 1, 2025',
      title: 'Holiday Drive: Clothing & Food Bank Donation',
      description: 'We’re collecting winter essentials and canned goods to support local shelters.',
      time: 'All Day Drop-off',
      email: 'geirly@sevilleinvestments.ca'
    },
    {
      date: 'December 12, 2025',
      title: 'Community Networking Night',
      description: 'An evening for residents, investors, and staff to meet and connect.',
      time: '6:30 PM – 9:00 PM',
      email: 'jeevan@sevilleinvestments.ca'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/community.jpg')" }} // ✅ updated
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Community Engagement</h1>
          <p className="text-base italic">Building connections across Greater Vancouver</p>
        </div>
      </div>

      {/* Events Listing */}
      <main className="flex-grow px-6 py-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((evt, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <div className="text-gray-500 text-sm mb-2">{evt.date}</div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">{evt.title}</h2>
            <p className="text-gray-700 mb-3">{evt.description}</p>
            {evt.time && (
              <p className="text-sm text-gray-600 mb-1">
                <strong>Time:</strong> {evt.time}
              </p>
            )}
            {evt.email && (
              <p className="text-sm text-gray-600">
                <strong>Contact:</strong>{' '}
                <a href={`mailto:${evt.email}`} className="text-blue-600 hover:underline">
                  {evt.email}
                </a>
              </p>
            )}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
