'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogBg from '../images/blog.jpg';

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
        "While some landlords welcomeeee the added flexibility, tenant advocates argue the shorter timeline creates hardship for renters in a market with limited vacancy and rising rents. The BC government has defended the move as part of broader tenancy reform meant to increase fairness and efficiency in disputes."
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
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${BlogBg.src})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold">Seville Management Blog</h1>
          <p className="text-sm mt-2 italic">The latest on BC real estate, landlord policy & market trends</p>
        </div>
      </div>

      {/* Blog Content */}
      <main className="flex-grow px-4 py-12 max-w-5xl mx-auto space-y-10">
        {posts.map((post, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <div className="mb-2 text-sm text-gray-500">{post.date}</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{post.title}</h2>
            {post.content.map((para, i) => (
              <p key={i} className="text-gray-700 mb-3 leading-relaxed">{para}</p>
            ))}
          </article>
        ))}
      </main>

      <Footer />
    </div>
  );
}
