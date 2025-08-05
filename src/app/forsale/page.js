'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPage() {
  const posts = [
    {
      date: 'July 16, 2025',
      title: 'BC Housing Starts Surge 72% in June',
      content: [
        
      ]
    },
    {
      date: 'June 18, 2025',
      title: '3-Month Landlord Eviction Notice Rule Now Active',
      content: [
        
      ]
    },
    {
      date: 'April 8, 2025',
      title: 'BC Slashes Tenancy Dispute Wait Times by 70%',
      content: [

      ]
    },
    {
      date: 'April 30, 2025',
      title: 'Short-Term Rental Enforcement Delayed One Month',
      content: [
        
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/bcwinter1.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold">SALE UNDER CONSTRUCTION</h1>
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
