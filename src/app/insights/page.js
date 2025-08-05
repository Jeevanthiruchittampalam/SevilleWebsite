'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[450px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/insights.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Insights & Analytics</h1>
          <p className="text-lg italic">Real data powering real decisions at Seville Investments</p>
        </div>
      </div>

      {/* Charts Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto space-y-20">

        {/* Tenant Satisfaction */}
        <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
          <h2 className="text-2xl font-semibold mb-2">Tenant Satisfaction Index</h2>
          <p className="text-gray-700 mb-4">A monthly index measuring tenant happiness and service quality over time.</p>
          <img
            src="/images/insights/tenant_satisfaction_index.png"
            alt="Tenant Satisfaction Index"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Maintenance Requests */}
        <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
          <h2 className="text-2xl font-semibold mb-2">Maintenance Requests</h2>
          <p className="text-gray-700 mb-4">Monthly number of maintenance tasks received across our rental properties.</p>
          <img
            src="/images/insights/maintenance_requests.png"
            alt="Maintenance Requests"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Maintenance Response Time */}
        <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
          <h2 className="text-2xl font-semibold mb-2">Average Maintenance Response Time</h2>
          <p className="text-gray-700 mb-4">Tracking how quickly maintenance tasks are resolved (in hours).</p>
          <img
            src="/images/insights/maintenance_response_time.png"
            alt="Maintenance Response Time"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

       
        
      </section>

      <Footer />
    </div>
  );
}
