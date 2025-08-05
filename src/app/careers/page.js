'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CareersPage() {
  const jobs = [
    {
      title: 'Data Engineer',
      location: 'Remote or Vancouver HQ',
      date: 'Posted August 3, 2025',
      description:
        'Join our growing tech team to build AI-driven property tools. You’ll manage data pipelines, optimize infrastructure, and collaborate with our development team to drive insights into operations.',
    },
    {
      title: 'Building Manager – Burnaby',
      location: 'Burnaby, BC',
      date: 'Posted August 2, 2025',
      description:
        'Oversee tenant relations, maintenance coordination, and safety protocols across a multi-family residential complex. Strong communication and organizational skills required.',
    },
    {
      title: 'Maintenance Worker – Vancouver',
      location: 'Vancouver, BC',
      date: 'Posted August 1, 2025',
      description:
        'Perform daily maintenance and repair tasks across Seville properties. Plumbing, electrical, and general handywork experience preferred. Tools and van provided.',
    },
    {
      title: 'Maintenance Worker – Richmond',
      location: 'Richmond, BC',
      date: 'Posted July 31, 2025',
      description:
        'Join our site team in Richmond. Handle service calls, unit turnover prep, and emergency repairs. Must be comfortable with tenant interaction and flexible hours.',
    },
    {
      title: 'Accountant',
      location: 'Vancouver, BC (Hybrid)',
      date: 'Posted July 30, 2025',
      description:
        'Handle monthly reporting, payroll, and budget reconciliation for Seville’s residential portfolio. CPA designation preferred. Real estate or property experience a plus.',
    },
    {
      title: 'Maintenance Worker – North Vancouver',
      location: 'North Vancouver, BC',
      date: 'Posted July 29, 2025',
      description:
        'Support North Shore operations with routine and preventative maintenance. Join a reliable team focused on high standards and tenant satisfaction.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/careers.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Careers at Seville</h1>
          <p className="text-base italic">Build your future with us.</p>
        </div>
      </div>

      {/* Message */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          Work with Purpose. Grow with Seville.
        </h2>
        <p className="text-gray-700 text-lg">
          Here at Seville Investments, we combine real estate tradition with innovation. Whether you&apos;re
          maintaining our buildings, supporting tenants, or developing new tools, you&apos;ll be part of a team that values
          integrity, collaboration, and long-term growth.
        </p>
      </section>

      {/* Job Postings */}
      <section className="px-6 pb-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{job.location}</p>
              <p className="text-sm text-gray-500 mb-4 italic">{job.date}</p>
              <p className="text-gray-700 mb-6">{job.description}</p>
            </div>
            <button className="self-start bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
