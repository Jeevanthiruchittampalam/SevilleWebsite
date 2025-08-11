'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

// ---------- Data ----------
const leadership = [
  {
    name: 'Kulwant Chauhan',
    title: 'Chief Executive Officer',
    email: 'kulwant@sevilleinvestments.ca',
    bio: 'Born in Vancouver and trained in accounting at SFU, Kulwant has led Seville for 20+ years with a focus on disciplined growth and service.',
    // image intentionally omitted so the dummy headshot is used
  },
];

const accounting = [
  {
    name: 'Palas Kabir',
    title: 'Financial Controller',
    email: 'palas@sevilleinvestments.ca',
    image: '/images/teammembers/palas.jpeg',
  },
];

const propertyManagers = [
  {
    name: 'Gierly Magrata',
    title: 'Head of Property Management',
    email: 'gierly@sevilleinvestments.ca',
    badges: ['Accounting Assistant / Bookkeeper'],
  },
  { name: 'Analyn Espiritu', title: 'Property Manager', email: 'analyn@sevilleinvestments.ca' },
  { name: 'Marie Bautista', title: 'Property Manager', email: 'marie@sevilleinvestments.ca' },
  { name: 'Punam Mainali', title: 'Property Manager', email: '' },
  { name: 'Makunda Mainali', title: 'Property Manager', email: '' },
];

const adminAndRM = [
  { name: 'Nadine Vermeulen', title: 'Administrative Assistant', email: 'nadine@sevilleinvestments.ca' },
  { name: 'MacArthur Tulali', title: 'Repairs & Maintenance', email: '' },
  { name: 'Ashwin Steinson', title: 'Repairs & Maintenance & Operations', email: '' },
  { name: 'Nikhil Thiruchittampalam', title: 'Repairs & Maintenance & Operations', email: '' },
  { name: 'Eddie Jeng', title: 'Repairs & Maintenance', email: '' },
];

const technology = [
  {
    name: 'Jeevan Thiruchittampalam',
    title: 'Developer',
    email: 'jeevan@sevilleinvestments.ca',
    image: '/images/teammembers/jeevan.jpeg',
    bio: 'Full-stack developer focused on tools that streamline operations and improve tenant experience.',
  },
];

// ---------- Card ----------
function PersonCard({ member }) {
  return (
    <div className="group rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 text-left shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:ring-white/20 transition">
      <div className="flex items-center gap-4">
        <Image
          src={member.image || '/images/dummyheadshot.png'}
          alt={member.name}
          width={84}
          height={84}
          className="h-20 w-20 rounded-full object-cover ring-1 ring-white/20"
        />
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white truncate">{member.name}</h3>
          {/* Titles are uniformly styled (no special color for anyone, incl. Gierly) */}
          <p className="text-sm text-zinc-300">{member.title}</p>

          {member.badges && (
            <div className="mt-2 flex flex-wrap gap-2">
              {member.badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-full border border-white/30 bg-transparent px-2.5 py-0.5 text-[11px] font-medium text-white/80"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {member.bio && <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{member.bio}</p>}

      {member.email && member.email.trim() !== '' && (
        <div className="mt-4">
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center rounded-full border border-white/40 bg-zinc-900/70 px-3 py-1.5 text-sm text-white hover:bg-zinc-800 hover:border-white/60 transition-colors"
          >
            {member.email}
          </a>
        </div>
      )}
    </div>
  );
}

function Section({ title, description, people }) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
          {description && <p className="mt-2 text-zinc-400">{description}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((m) => (
            <PersonCard key={`${title}-${m.name}`} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Page ----------
export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[40vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/van2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Our Team</h1>
            <p className="mt-2 text-zinc-200">
              A disciplined, service-driven group spanning operations, accounting, technology, and R&amp;M.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <Section title="Leadership" people={leadership} />
        <Section title="Accounting" people={accounting} />
        <Section
          title="Property Management"
          description="Hands-on managers focused on responsiveness, tenant retention, and building performance."
          people={propertyManagers}
        />
        <Section
          title="Admin & Repairs & Maintenance"
          description="Administrative support and the team that keeps buildings running smoothly."
          people={adminAndRM}
        />
        <Section title="Technology & Digital" people={technology} />
      </main>

      <Footer />
    </div>
  );
}
