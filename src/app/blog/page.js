'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPage() {
  const posts = [
    {
      date: 'July 16, 2025',
      title: 'BC Housing Starts Surge 72% in June',
      content: [
        "British Columbia led the country in June housing starts with a massive 72% increase compared to May 2025, driven primarily by multi-family construction in Metro Vancouver and Greater Victoria. Nationally, Canada saw an 18% year-over-year increase, reflecting broader confidence in the real estate market.",
        "Industry experts attribute BC’s growth to lower interest rate expectations, easing material costs, and developers returning to paused projects. Many see this as a sign of recovery after multiple quarters of subdued activity."
      ]
    },
    {
      date: 'June 18, 2025',
      title: '3-Month Landlord Eviction Notice Rule Now Active',
      content: [
        "As of June 18, landlords in British Columbia can now issue 'landlord-use' eviction notices with only three months’ warning, down from the previous four-month requirement. This means if a landlord intends to use the property themselves or for close family, tenants now have one month less to vacate.",
        "While some landlords welcome the added flexibility, tenant advocates argue the shorter timeline creates hardship for renters in a market with limited vacancy and rising rents. The BC government has defended the move as part of broader tenancy reform meant to increase fairness and efficiency in disputes."
      ]
    },
    {
      date: 'April 8, 2025',
      title: 'BC Slashes Tenancy Dispute Wait Times by 70%',
      content: [
        "The BC government has implemented major upgrades to the Residential Tenancy Branch (RTB), cutting average dispute hearing wait times by about 70%. This includes faster scheduling for rent disputes, repair delays, and eviction reviews.",
        "Additionally, the RTB has begun publicly publishing monetary order rulings to promote transparency and guide landlords and tenants navigating similar issues. The changes are part of a broader provincial effort to modernize tenancy resolution services."
      ]
    },
    {
      date: 'April 30, 2025',
      title: 'Short-Term Rental Enforcement Delayed One Month',
      content: [
        "Short-term rental platforms like Airbnb and VRBO were granted a one-month grace period to verify listings under new BC regulations. Originally set to start May 1, enforcement was delayed until June 2, 2025, to give platforms and hosts more time to comply.",
        "The province says this extra time will help prevent accidental removals and improve cooperation with municipalities. The new rules require all listings to display a valid registration number issued by the host’s local government."
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: larger image (600px) with dark overlay */}
      <section className="relative -mt-16 w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/blog2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Seville Investments Blog
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              The latest on BC real estate, landlord policy &amp; market trends
            </p>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <main className="flex-grow px-6 py-16 max-w-6xl mx-auto space-y-8">
        {posts.map((post, idx) => (
          <article
            key={idx}
            className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:ring-white/20 transition"
          >
            <div className="mb-2 text-xs font-medium tracking-wide text-zinc-400">
              {post.date}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              {post.title}
            </h2>
            <div className="prose prose-invert max-w-none">
              {post.content.map((para, i) => (
                <p key={i} className="text-zinc-300 leading-relaxed mb-3">
                  {para}
                </p>
              ))}
            </div>
          </article>
        ))}
      </main>

      <Footer />
    </div>
  );
}
