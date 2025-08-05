'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function TeamPage() {
  const team = [
    {
      name: 'Kulwant Chauhan',
      title: 'Chief Executive Officer',
      email: 'kulwant@sevilleinvestments.ca',
      bio: 'Kulwant was born in Vancouver and studied accounting at Simon Fraser University. He has been with Seville for over 20 years, leading operations, growth strategy, and new developments. His leadership combines deep financial insight with a commitment to service.',
    },
    {
      name: 'Palas Kabir',
      title: 'Financial Manager',
      email: 'palas@sevilleinvestments.ca',
    },
    {
      name: 'Gierly Magrata',
      title: 'Building Manager',
      email: 'gierly@sevilleinvestments.ca',
    },
    {
      name: 'Analyn Espiritu',
      title: 'Property Manager',
      email: 'analyn@sevilleinvestments.ca',
    },
    {
      name: 'Marie Bautista',
      title: 'Property Manager',
      email: 'marie@sevilleinvestments.ca',
    },
    {
      name: 'Nadine Vermeulen',
      title: 'Accountant',
      email: 'nadine@sevilleinvestments.ca',
    },
    {
      name: 'Jeevan Thiruchittampalam',
      title: 'Developer',
      email: 'jeevan@sevilleinvestments.ca',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-black">
      <Header />

      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-lg text-gray-600 mb-12">
          Meet the professionals behind Seville Management Ltd.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-left hover:shadow-md transition-shadow"
            >
              <Image
                src="/images/Properties2.jpg" // ✅ from /public
                alt={member.name}
                className="rounded-full mb-4 mx-auto"
                width={120}
                height={120}
              />
              <h2 className="text-xl font-semibold text-center mb-1">{member.name}</h2>
              <p className="text-sm text-gray-700 text-center mb-2">{member.title}</p>
              <p className="text-sm text-gray-600 mb-4">{member.bio || ''}</p>
              <p className="text-sm text-blue-700 text-center">
                <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
