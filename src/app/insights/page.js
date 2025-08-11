'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: pull under header + dark gradient */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[45vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/insights.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Insights &amp; Analytics</h1>
            <p className="mt-2 text-zinc-200 italic">
              Data collected at Seville Investments · Last updated August 5, 2025
            </p>
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="px-6 py-16 max-w-6xl mx-auto space-y-12">
        {/* Tenant Satisfaction */}
        <article className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h2 className="text-2xl font-semibold mb-2">Tenant Satisfaction Index</h2>
          <p className="text-zinc-300 mb-5">
            A monthly index measuring tenant happiness and service quality over time.
          </p>
          <img
            src="/images/insights/tenant_satisfaction_index.png"
            alt="Line chart of the tenant satisfaction index over recent months."
            className="w-full rounded-xl ring-1 ring-white/10"
          />
        </article>

        {/* Maintenance Requests */}
        <article className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h2 className="text-2xl font-semibold mb-2">Maintenance Requests</h2>
          <p className="text-zinc-300 mb-5">
            Monthly number of maintenance tasks received across our rental properties.
          </p>
          <img
            src="/images/insights/maintenance_requests.png"
            alt="Bar chart of monthly maintenance requests across properties."
            className="w-full rounded-xl ring-1 ring-white/10"
          />
        </article>

        {/* Maintenance Response Time */}
        <article className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h2 className="text-2xl font-semibold mb-2">Average Maintenance Response Time</h2>
          <p className="text-zinc-300 mb-5">
            Tracking how quickly maintenance tasks are resolved (in hours).
          </p>
          <img
            src="/images/insights/maintenance_response_time.png"
            alt="Line chart of average maintenance response times in hours."
            className="w-full rounded-xl ring-1 ring-white/10"
          />
        </article>
      </section>

      <Footer />
    </div>
  );
}
