'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const projects = [
  {
    title: '855 Kingsway',
    status: 'Current',
    address: '855 Kingsway, Vancouver, BC V5V 3C2',
    description:
      'Seville is in the process of building a 6-storey, mixed-use, multi-family building in Vancouver that will provide modern, sustainable, purposeful rental units. This property will be a Seville-owned asset managed by our Property Management division.',
    image: '/images/BuildingHeads/855Kingsway.jpg',
  },
  {
    title: '3795 Commercial Avenue',
    status: 'Current',
    address: '3795 Commercial Avenue, Vancouver, BC, Canada V5N 4G1',
    description: 'Seville has partnered with QUBE Building Systems (',
    descriptionTail:
      ') who are innovators in building technology. We are in the process of building a mixed-use, multi-family building that will provide well-designed rental units showcasing QUBE’s building technology.',
    image: '/images/BuildingHeads/QUBE.jpg',
    linkText: 'www.qubebuildings.com',
    linkHref: 'https://www.qubebuildings.com',
  },
  {
    title: '3925 Kingsway',
    status: 'Current',
    address: '3925 Kingsway, Burnaby, BC',
    description:
      'Modern rental suites in a transit-friendly corridor near Metrotown and central Burnaby.',
    image: '/images/BuildingHeads/Kingsway.jpg',
  },
  {
    title: '1864–1870 West 12th',
    status: 'Previous',
    address: '1864–1870 West 12th Avenue, Vancouver, BC, V6J 2E8',
    description:
      'Seville purchased this uninhabitable property and transformed it into 6 comfortable strata residential units. Seville acquired, developed, and sold the property within 18 months for a positive return.',
    image: '/images/BuildingHeads/1864-1870.jpg',
  },
  {
    title: '2249 West 35th Avenue',
    status: 'Previous',
    address: '2249 West 35th Avenue, Vancouver, BC, V6M 1J4',
    description:
      'Seville built a stunning 5,100 sq ft Kerrisdale smart home featuring custom millwork, on-site finished oak hardwood floors, Miele/Wolf/Sub-Zero appliances, a Control4 smart home system, and a sport court.',
    image: '/images/BuildingHeads/2249W35.jpg',
  },
];

const statusOrder = ['Current', 'Previous'];

function StatusBadge({ status }) {
  const base =
    'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium';
  const dot = <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />;

  if (status === 'Current') {
    return (
      <span className={`${base} border-yellow-300/40 text-yellow-300 bg-yellow-400/10`}>
        {dot} Current
      </span>
    );
  }
  return (
    <span className={`${base} border-zinc-500/40 text-zinc-300 bg-transparent`}>
      {dot} Previous
    </span>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="group rounded-2xl bg-zinc-900/80 backdrop-blur-md ring-1 ring-zinc-700 hover:ring-white/20 transition shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden">
      {/* Image — enlarged */}
      <div className="relative w-full h-72 md:h-80 lg:h-96">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          priority={p.status === 'Current'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
        <div className="absolute left-4 bottom-4 flex items-center gap-2">
          <StatusBadge status={p.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{p.title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{p.address}</p>

        <p className="mt-4 text-zinc-200 leading-relaxed">
          {p.description}
          {p.linkHref && (
            <>
              <a
                href={p.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-yellow-400 hover:text-yellow-300"
              >
                {p.linkText}
              </a>
              {p.descriptionTail}
            </>
          )}
        </p>
      </div>
    </article>
  );
}

export default function DevelopmentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO — larger like others */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[65vh]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/development.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">Our Developments</h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Future-focused projects for thriving communities
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <main className="flex-grow px-6 py-16 max-w-6xl mx-auto space-y-14">
        {statusOrder.map((status) => {
          const items = projects.filter((p) => p.status === status);
          if (!items.length) return null;
          return (
            <section key={status}>
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl md:text-3xl font-semibold">{status}</h2>
                <div className="opacity-80">
                  <StatusBadge status={status} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((p) => (
                  <ProjectCard key={p.title} p={p} />
                ))}
              </div>
            </section>
          );
        })}

        {/* EMAIL CTA */}
        <section className="mt-6">
          <div className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-3">Have a Development Inquiry?</h3>
            <p className="text-zinc-300 mb-6">
              For proposals, partnerships, or questions about our projects, please email our Financial Controller.
            </p>
            <a
              href={`mailto:palas@sevilleinvestments.ca?subject=Development%20Inquiry%20-%20Seville%20Investments&body=Hello%20Palas,%0D%0A%0D%0AMy%20name%20is%20[Your%20Name].%20I%E2%80%99m%20reaching%20out%20regarding%20[project/partnership/details].%0D%0A%0D%0AYou%20can%20reach%20me%20at%20[phone/email].%0D%0A%0D%0AThank%20you!%0D%0A`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Email palas@sevilleinvestments.ca
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
