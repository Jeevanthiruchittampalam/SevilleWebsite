'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

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
      title: 'Maintenance Worker – Burnaby',
      location: 'Burnaby, BC',
      date: 'Posted July 31, 2025',
      description:
        'Join our site team in Burnaby. Handle service calls, unit turnover prep, and emergency repairs. Must be comfortable with tenant interaction and flexible hours.',
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

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const subject = selectedJob ? encodeURIComponent(`Application: ${selectedJob.title}`) : '';
  const body = encodeURIComponent(
    `Hello Seville Team,

Please find my resume and cover letter attached.

Position: ${selectedJob?.title || ''}

Thanks,
`
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: fixed 600px with dark overlay */}
      <section className="relative -mt-16 w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/careers.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Careers at Seville
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Build your future with us.
            </p>
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <div className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h2 className="text-3xl font-semibold mb-3">Work with Purpose. Grow with Seville.</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            At Seville Investments, we combine real estate tradition with innovation. Whether you’re
            maintaining our buildings, supporting tenants, or developing new tools, you’ll be part of a team
            that values integrity, collaboration, and long-term growth.
          </p>
        </div>
      </section>

      {/* JOB POSTINGS */}
      <section className="px-6 pb-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job, idx) => (
          <article
            key={idx}
            className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 md:p-7 shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:ring-white/20 transition flex flex-col"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-zinc-400 mb-1">{job.location}</p>
              <p className="text-xs text-zinc-500 mb-4 italic">{job.date}</p>
              <p className="text-zinc-300">{job.description}</p>
            </div>

            <button
              onClick={() => openModal(job)}
              className="mt-6 self-start inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-5 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Apply Now
            </button>
          </article>
        ))}
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-zinc-950 ring-1 ring-zinc-800 p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-2">Apply via Email</h2>
            <p className="text-zinc-400 mb-5">
              Send your resume and cover letter for{' '}
              <span className="text-white font-medium">
                {selectedJob?.title}
              </span>
              .
            </p>
            <a
              href={`mailto:jeevan@sevilleinvestments.ca?subject=${subject}&body=${body}`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-5 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors"
            >
              Open Email Client
            </a>

            <button
              onClick={closeModal}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-white/90 hover:border-white/40"
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
