'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PressAndMediaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: large image with dark overlay, pulled under header */}
      <section className="relative -mt-16 w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/media.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">Press &amp; Media</h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              In the spotlight — stories shaping our community
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <main className="flex-grow px-6 py-16 max-w-6xl mx-auto space-y-12">
        {/* Article 3 */}
        <article className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <img
            src="/images/media/renovation2.jpg"
            alt="Repaired unit interiors"
            className="w-full h-72 object-cover rounded-lg mb-6 ring-1 ring-zinc-800"
          />
          <div className="text-xs font-medium tracking-wide text-zinc-400 mb-2">📅 August 2, 2025</div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Four Units Repaired at Kingsway — Demand Growing</h2>
          <p className="text-zinc-300 mb-3">
            In just under two weeks since the fire at 3925 Kingsway Avenue, Seville Investments has already completed
            renovations on four of the ten affected units. All repaired spaces have undergone comprehensive updates,
            including new flooring, cabinetry, and fire-resistant materials.
          </p>
          <p className="text-zinc-300">
            With relocation support still underway, competition for restored units has surged. Leasing inquiries have
            increased across multiple platforms, and Seville has received strong interest from both displaced tenants
            and new applicants.
          </p>
        </article>

        {/* Article 2 */}
        <article className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <img
            src="/images/media/renovation1.jpg"
            alt="Renovation announcement"
            className="w-full h-72 object-cover rounded-lg mb-6 ring-1 ring-zinc-800"
          />
          <div className="text-xs font-medium tracking-wide text-zinc-400 mb-2">📅 July 27, 2025</div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Seville Pledges Immediate Support for Kingsway Tenants</h2>
          <p className="text-zinc-300 mb-3">
            Following the July 22nd fire at 3925 Kingsway, Seville Investments has pledged to relocate affected
            tenants into temporary accommodations across other managed properties. The company has activated internal
            relocation teams and partnered with local contractors to expedite support.
          </p>
          <p className="text-zinc-300">
            Renovation and repair work has already begun on the damaged units, with a full structural review in process.
            Seville has committed to covering all moving costs for impacted tenants and will provide monthly rental
            credits during the repair period.
          </p>
        </article>

        {/* Article 1 */}
        <article className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <img
            src="/images/media/mediafire.jpg"
            alt="Fire damage at 3925 Kingsway"
            className="w-full h-72 object-cover rounded-lg mb-6 ring-1 ring-zinc-800"
          />
          <div className="text-xs font-medium tracking-wide text-zinc-400 mb-2">📅 July 23, 2025</div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Suspect Identified in 3925 Kingsway Fire Incident</h2>
          <p className="text-zinc-300 mb-3">
            On July 22nd, emergency crews responded to a significant fire at one of Seville Investments properties
            located at 3925 Kingsway Avenue. The fire, which began on the third floor, caused extensive damage to ten
            residential units before it was contained. Residents were safely evacuated and no injuries were reported.
          </p>
          <p className="text-zinc-300">
            Vancouver Police have now identified and charged a suspect in connection with the arson. The investigation
            remains ongoing, with further charges pending. The local community has rallied around the displaced
            residents, many of whom are long-term tenants of the building.
          </p>
          <p className="text-zinc-300 mt-3">
            Seville Investments expressed gratitude to emergency responders and reassured tenants that long-term
            restoration plans were already underway. The company has committed to both structural and amenity upgrades
            as part of the post-incident recovery.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
