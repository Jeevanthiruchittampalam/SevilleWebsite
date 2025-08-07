'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function TeamPage() {
  const Administration = [
    {
      name: 'Kulwant Chauhan',
      title: 'Chief Executive Officer',
      email: 'kulwant@sevilleinvestments.ca',
      bio: 'Kulwant was born in Vancouver and studied accounting at Simon Fraser University. He has been with Seville for over 20 years, leading operations, growth strategy, and new developments. His leadership combines deep financial insight with a commitment to service.',
    },
    {
      name: 'Palas Kabir',
      title: 'Financial Controller',
      email: 'palas@sevilleinvestments.ca',
      image: '/images/teammembers/palas.jpeg',
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
      bio: 'Jeevan is a full-stack developer with a passion for real estate innovation. He specializes in building scalable tools that streamline operations and enhance user experience. His work blends creativity with precision to support Seville’s digital growth.',
      image: '/images/teammembers/jeevan.jpeg',
    },
  ];

  const maintenance = [
    {
      name: 'MacArthur Tulali',
      title: 'Property Maintenance',
      email: ' ',
    },
    {
      name: 'Ashwin Steinson',
      title: 'Property Maintenance & Operations',
      email: ' ',
    },
    {
      name: 'Nikhil Thiruchittampalam',
      title: 'Property Maintenance & Operations',
      email: ' ',
    },
    {
      name: 'Eddie Jeng',
      title: 'Property Maintenance',
      email: ' ',
    },
    {
      name: 'Punam Mainali',
      title: 'Property Manager',
      email: ' ',
    },
  ];

  const renderTeamSection = (title, teamArray) => (
    <section className="bg-gray-50 py-20 px-6 text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-12">
          {title === 'Administration'
            ? ' '
            : ' '}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamArray.map((member, index) => (
            <div
              key={index}
              className="bg-white text-black border border-gray-200 rounded-xl shadow-sm p-6 text-left hover:shadow-md transition-shadow"
            >
              <Image
                src={member.image || '/images/dummyheadshot.png'}
                alt={member.name}
                className="rounded-full mb-4 mx-auto"
                width={120}
                height={120}
              />
              <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
              <p className="text-sm text-gray-700 text-center mb-2">{member.title}</p>
              {member.bio && (
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              )}
              {member.email && (
                <p className="text-sm text-blue-700 text-center">
                  <a href={`mailto:${member.email}`} className="hover:underline">
                    {member.email}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="flex flex-col min-h-screen font-sans text-black">
      <Header />

      {renderTeamSection('Administration', Administration)}
      {renderTeamSection('Maintenance', maintenance)}

      <Footer />
    </div>
  );
}
