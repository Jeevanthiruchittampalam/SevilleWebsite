'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

// Charts from images/insights folder
import RentChart from '../images/insights/rent_increase.png';
import SatisfactionChart from '../images/insights/tenant_satisfaction.png';
import MaintenanceChart from '../images/insights/maintenance_requests.png';
import EnergyChart from '../images/insights/energy_usage.png';
import InquiriesChart from '../images/insights/inquiries_by_channel.png';
import InsightsBg from '../images/insights.jpg';





export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[450px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${InsightsBg.src})` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Insights & Analytics</h1>
          <p className="text-lg italic">Real data powering real decisions at Seville Management Ltd.</p>
        </div>
      </div>

      {/* Charts Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto space-y-20">

        {/* Rent Increase */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Metro Vancouver Rent Increase Trends</h2>
          <p className="text-gray-700 mb-4">A 5-year look at annual average rent growth, reflecting pressure from high demand and low vacancy rates.</p>
          <Image src={RentChart} alt="Rent Increase" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Satisfaction */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tenant Satisfaction Index</h2>
          <p className="text-gray-700 mb-4">Our rolling tenant sentiment tracking shows stable satisfaction with improvements in 2025.</p>
          <Image src={SatisfactionChart} alt="Tenant Satisfaction" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Maintenance Requests */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Monthly Maintenance Requests (2025)</h2>
          <p className="text-gray-700 mb-4">Volume of maintenance tasks received across our 8 Vancouver properties. Notice the seasonal spikes.</p>
          <Image src={MaintenanceChart} alt="Maintenance Requests" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Energy Usage */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Energy Efficiency by Building</h2>
          <p className="text-gray-700 mb-4">We monitor energy consumption in kWh per m² yearly — part of our ongoing green retrofitting initiative.</p>
          <Image src={EnergyChart} alt="Energy Usage" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Inquiries by Channel */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">How Tenants Contact Us</h2>
          <p className="text-gray-700 mb-4">Tracking the most common channels through which we receive tenant inquiries over the last 6 months.</p>
          <Image src={InquiriesChart} alt="Inquiries" className="rounded-lg shadow-lg w-full" />
        </div>
      </section>

   

      

      <Footer />
    </div>
  );
}
