'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CommunityPage() {
  const events = [
    {
      date: 'August 31, 2025',
      title: 'Seville Tenants Lottery Winners Announced',
      description:
        'Monthly winners selected from our residential tenants and posted internally across all managed properties.',
    },
    {
      date: 'September 10, 2025',
      title: 'Tenant Rights Workshop',
      description:
        'A seminar led by tenancy experts to help tenants and landlords navigate BC tenancy regulations.',
      time: '6:00 PM – 7:30 PM',
      email: 'geirly@sevilleinvestments.ca',
    },
    {
      date: 'September 22, 2025',
      title: 'Neighbourhood Clean-Up & Recycling Drive',
      description:
        'Join fellow residents and staff for a community clean-up followed by refreshments and networking.',
      time: '10:00 AM – 12:00 PM',
      email: 'jeevan@sevilleinvestments.ca',
    },
    {
      date: 'September 30, 2025',
      title: 'Seville Tenants Lottery Winners Announced',
      description:
        'Monthly winners selected from our residential tenants and posted internally across all managed properties.',
    },
    {
      date: 'October 3, 2025',
      title: 'Charity Gala: Housing Security Fundraiser',
      description:
        'Annual gala benefiting affordable housing initiatives in the Lower Mainland.',
      time: '7:00 PM – 10:00 PM',
      email: 'geirly@sevilleinvestments.ca',
    },
    {
      date: 'October 15, 2025',
      title: 'Condo Owners Panel: Emerging Developments',
      description:
        'Industry leaders discuss upcoming mixed-use and condo projects across Greater Vancouver.',
      time: '5:30 PM – 7:00 PM',
      email: 'jeevan@sevilleinvestments.ca',
    },
    {
      date: 'October 31, 2025',
      title: 'Seville Tenants Lottery Winners Announced',
      description:
        'Monthly winners selected from our residential tenants and posted internally across all managed properties.',
    },
    {
      date: 'November 5, 2025',
      title: 'Smart Building Technologies Showcase',
      description:
        'Live demo of our AI tools and sustainable facilities enhancements for tenants and partners.',
      time: '2:00 PM – 4:00 PM',
      email: 'geirly@sevilleinvestments.ca',
    },
    {
      date: 'November 17, 2025',
      title: 'Tenant Feedback Forum',
      description:
        'Open Q&A with management to discuss service delivery and future amenities.',
      time: '6:00 PM – 7:00 PM',
      email: 'jeevan@sevilleinvestments.ca',
    },
    {
      date: 'November 30, 2025',
      title: 'Seville Tenants Lottery Winners Announced',
      description:
        'Monthly winners selected from our residential tenants and posted internally across all managed properties.',
    },
    {
      date: 'December 1, 2025',
      title: 'Holiday Drive: Clothing & Food Bank Donation',
      description:
        'We’re collecting winter essentials and canned goods to support local shelters.',
      time: 'All Day Drop-off',
      email: 'geirly@sevilleinvestments.ca',
    },
    {
      date: 'December 12, 2025',
      title: 'Community Networking Night',
      description:
        'An evening for residents, investors, and staff to meet and connect.',
      time: '6:30 PM – 9:00 PM',
      email: 'jeevan@sevilleinvestments.ca',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: larger image (600px) with dark overlay */}
      <section className="relative -mt-16 w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/community.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Community Engagement
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Building connections across Greater Vancouver
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <main className="flex-grow px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((evt, idx) => (
            <article
              key={idx}
              className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 md:p-7 shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:ring-white/20 transition"
            >
              <div className="text-xs font-medium tracking-wide text-zinc-400 mb-1">
                {evt.date}
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {evt.title}
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-3">{evt.description}</p>

              {evt.time && (
                <p className="text-sm text-zinc-400 mb-1">
                  <span className="text-zinc-500">Time:</span> {evt.time}
                </p>
              )}

              {evt.email && (
                <p className="text-sm text-zinc-400">
                  <span className="text-zinc-500">Contact:</span>{' '}
                  <a
                    href={`mailto:${evt.email}`}
                    className="underline text-yellow-400 hover:text-yellow-300"
                  >
                    {evt.email}
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
