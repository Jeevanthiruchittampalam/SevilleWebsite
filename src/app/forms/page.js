'use client';

import { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CATEGORIES = [
  'Leasing & Applications',
  'Tenant Forms',
  'Maintenance & Repairs',
  'Policy & Compliance',
  'Financial & Payments',
  'Owner Resources',
  'Technology & Portals',
];

const RESOURCES = [
  {
    id: 'rental-app',
    title: 'Residential Rental Application',
    category: 'Leasing & Applications',
    description: 'Complete this application to be considered for upcoming vacancies.',
    href: '/forms/Rental_Application.pdf',
    type: 'PDF',
    size: '220 KB',
    updated: 'Aug 2025',
    featured: true,
  },
  {
    id: 'pad',
    title: 'Pre-Authorized Debit (PAD) Form',
    category: 'Financial & Payments',
    description: 'Authorize automatic monthly rent withdrawals from your bank account.',
    href: '/forms/Pre-Authorized_Debit_PAD.pdf',
    type: 'PDF',
    size: '140 KB',
    updated: 'Aug 2025',
    featured: true,
  },
  {
    id: 'tenant-update',
    title: 'Tenant Information Update',
    category: 'Tenant Forms',
    description: 'Update contact details, emergency contacts, and household info.',
    href: '/forms/Tenant_Info_Update.pdf',
    type: 'PDF',
    size: '120 KB',
    updated: 'Aug 2025',
  },
  {
    id: 'move-checklist',
    title: 'Move-In / Move-Out Checklist',
    category: 'Tenant Forms',
    description: 'Room-by-room checklist used during move-in and move-out inspections.',
    href: '/forms/Move_In_Out_Checklist.pdf',
    type: 'PDF',
    size: '180 KB',
    updated: 'Jul 2025',
  },
  {
    id: 'maint-request',
    title: 'Maintenance Request Form',
    category: 'Maintenance & Repairs',
    description: 'Request non-urgent maintenance. For emergencies, call the office.',
    href: '/forms/Maintenance_Request_Form.pdf',
    type: 'PDF',
    size: '110 KB',
    updated: 'Jul 2025',
  },
  {
    id: 'notice-vacate',
    title: 'Notice to Vacate',
    category: 'Tenant Forms',
    description: 'Provide your formal notice to end tenancy in accordance with RTB rules.',
    href: '/forms/Notice_to_Vacate.pdf',
    type: 'PDF',
    size: '95 KB',
    updated: 'Jun 2025',
  },
  {
    id: 'pet-addendum',
    title: 'Pet Addendum',
    category: 'Policy & Compliance',
    description: 'Rules and conditions for keeping pets in your unit.',
    href: '/forms/Pet_Addendum.pdf',
    type: 'PDF',
    size: '85 KB',
    updated: 'Jun 2025',
  },
  {
    id: 'smoke-addendum',
    title: 'Smoking / Cannabis Addendum',
    category: 'Policy & Compliance',
    description: 'Building policy regarding smoking and cannabis on the premises.',
    href: '/forms/Smoking_Addendum.pdf',
    type: 'PDF',
    size: '80 KB',
    updated: 'May 2025',
  },
  {
    id: 'owner-onboarding',
    title: 'Owner Onboarding Packet',
    category: 'Owner Resources',
    description: 'Services overview, reporting cadence, and onboarding checklist.',
    href: '/forms/Owner_Onboarding_Packet.pdf',
    type: 'PDF',
    size: '320 KB',
    updated: 'Aug 2025',
  },
  {
    id: 'direct-deposit',
    title: 'Direct Deposit Authorization (Vendors)',
    category: 'Financial & Payments',
    description: 'Set up ACH/EFT for vendor payments.',
    href: '/forms/Direct_Deposit_Authorization.pdf',
    type: 'PDF',
    size: '90 KB',
    updated: 'Apr 2025',
  },
  {
    id: 'portal-guide',
    title: 'mySeville Portal Guide',
    category: 'Technology & Portals',
    description: 'How to log in, submit tickets, and view statements online.',
    href: '/forms/mySeville_Portal_Guide.pdf',
    type: 'PDF',
    size: '150 KB',
    updated: 'Aug 2025',
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/30 bg-zinc-900/70 px-2.5 py-0.5 text-[11px] text-white">
      {children}
    </span>
  );
}

function TypePill({ type }) {
  const color =
    type === 'PDF'
      ? 'text-yellow-300 border-yellow-300/40 bg-yellow-400/10'
      : 'text-zinc-300 border-white/30 bg-zinc-900/70';
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${color}`}>
      {type}
    </span>
  );
}

export default function FormsResourcesPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter((r) => {
      const inCat = category === 'All' || r.category === category;
      const inText =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q);
      return inCat && inText;
    });
  }, [query, category]);

  const featured = RESOURCES.filter((r) => r.featured);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO (tall) */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-14 w-full overflow-hidden min-h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/formsresources.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">Forms &amp; Resources</h1>
            <p className="text-base md:text-lg text-zinc-200">
              Download applications, policy docs, and helpful guides.
            </p>
          </div>
        </div>
      </section>

      <main className="px-6 py-16 max-w-6xl mx-auto space-y-14">
        {/* Featured quick downloads */}
        {featured.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((r) => (
                <a
                  key={r.id}
                  href={r.href}
                  download
                  className="group rounded-2xl bg-zinc-900/80 backdrop-blur-md ring-1 ring-zinc-700 hover:ring-white/20 transition shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6 flex items-center justify-between"
                >
                  <div className="pr-4">
                    <div className="mb-1">
                      <TypePill type={r.type} />
                    </div>
                    <h3 className="text-xl font-semibold">{r.title}</h3>
                    <p className="text-zinc-300 text-sm mt-1">{r.description}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-zinc-400">
                      <Badge>{r.category}</Badge>
                      <span>{r.updated}</span>
                      <span>•</span>
                      <span>{r.size}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-4 py-2 text-sm group-hover:bg-zinc-800 group-hover:border-white/60 transition">
                      Download
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Filters */}
        <section className="rounded-2xl bg-zinc-900/70 backdrop-blur-md ring-1 ring-zinc-700 p-5">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            {/* Search */}
            <div className="flex items-center gap-3 w-full md:max-w-md">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search forms, guides, policies…"
                className="w-full rounded-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('All')}
                className={`rounded-full px-3 py-1 text-sm border transition ${
                  category === 'All'
                    ? 'bg-yellow-400 text-black border-yellow-300'
                    : 'bg-zinc-900/70 text-white border-white/30 hover:border-white/60'
                }`}
              >
                All
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-3 py-1 text-sm border transition ${
                    category === c
                      ? 'bg-yellow-400 text-black border-yellow-300'
                      : 'bg-zinc-900/70 text-white border-white/30 hover:border-white/60'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 text-xs text-zinc-400">
            {filtered.length} item{filtered.length === 1 ? '' : 's'} found
          </div>
        </section>

        {/* Resource grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <div
                key={r.id}
                className="rounded-2xl bg-zinc-900/80 backdrop-blur-md ring-1 ring-zinc-700 hover:ring-white/20 transition shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-1">
                      <TypePill type={r.type} />
                    </div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className="text-zinc-300 text-sm mt-1">{r.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 text-xs text-zinc-400">
                  <Badge>{r.category}</Badge>
                  <span>{r.updated}</span>
                  <span>•</span>
                  <span>{r.size}</span>
                </div>

                <div className="mt-5 flex gap-2">
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-4 py-2 text-sm hover:bg-zinc-800 hover:border-white/60 transition"
                  >
                    View
                  </a>
                  <a
                    href={r.href}
                    download
                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-4 py-2 text-sm hover:bg-zinc-800 hover:border-white/60 transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Help / How to submit */}
        <section className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8">
          <h3 className="text-2xl font-semibold mb-3">Need Help?</h3>
          <p className="text-zinc-300">
            Can’t find the form you’re looking for? Email{' '}
            <a className="underline text-yellow-400 hover:text-yellow-300" href="mailto:gierly@sevilleinvestments.ca">
              gierly@sevilleinvestments.ca
            </a>{' '}
            for rental forms or{' '}
            <a className="underline text-yellow-400 hover:text-yellow-300" href="mailto:palas@sevilleinvestments.ca">
              palas@sevilleinvestments.ca
            </a>{' '}
            for financial documents.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zinc-300">
            <div className="rounded-xl ring-1 ring-zinc-800 p-4 bg-zinc-900/60">
              <h4 className="font-medium mb-1 text-white">1) Fill & Sign</h4>
              <p>Complete the form digitally or print and sign. Ensure all required fields are filled.</p>
            </div>
            <div className="rounded-xl ring-1 ring-zinc-800 p-4 bg-zinc-900/60">
              <h4 className="font-medium mb-1 text-white">2) Attach ID (if needed)</h4>
              <p>Include government ID, income verification, or supporting docs where requested.</p>
            </div>
            <div className="rounded-xl ring-1 ring-zinc-800 p-4 bg-zinc-900/60">
              <h4 className="font-medium mb-1 text-white">3) Submit</h4>
              <p>
                Email the PDF to the appropriate contact above, or upload via the{' '}
                <a className="underline text-yellow-400 hover:text-yellow-300" href="/myseville">
                  mySeville Portal
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
