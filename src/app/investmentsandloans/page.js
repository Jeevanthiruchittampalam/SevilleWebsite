'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import Bg from '../images/investmentspage1.jpg';

const sectors = [
  { name: 'Residential Rentals', value: 35 },
  { name: 'Commercial Assets', value: 25 },
  { name: 'Development Projects', value: 20 },
  { name: 'Technology & AI Tools', value: 10 },
  { name: 'Other Industries', value: 10 },
];
const COLORS = ['#4f46e5','#6366f1','#818cf8','#a5b4fc','#c7d2fe'];

export default function InvestmentsAndLoansPage() {
  const [formData, setFormData] = useState({ name:'', contact:'', purpose:'', amount:'' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you! We will be in touch regarding your loan inquiry.');
    setFormData({ name:'', contact:'', purpose:'', amount:'' });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${Bg.src})` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Investments & Loans</h1>
          <p className="text-lg italic">Empowering growth through strategic capital deployment.</p>
        </div>
      </div>

      <main className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        {/* Sector Allocation */}
        <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
          <h2 className="text-3xl font-semibold mb-6">Our Investment Portfolio by Sector</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sectors} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                  {sectors.map((entry, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Investment Focus */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">What We Invest In</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Long-term residential rental assets in Metro Vancouver</li>
            <li>Commercial office, retail, and mixed-use properties</li>
            <li>Strategic development projects with sustainable design</li>
            <li>Innovation in real estate through AI & data analytics tools</li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Submit an inquiry via the form below</li>
            <li>Our team will evaluate your proposal and conduct due diligence</li>
            <li>We offer competitive loan terms and flexible funding solutions</li>
            <li>Post-funding, we monitor performance and support strategic growth</li>
          </ol>
        </section>

        {/* Inquiry Form */}
        <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
          <h2 className="text-3xl font-semibold mb-6 text-center">Loan & Investment Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            {['name','contact','purpose','amount'].map(field => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {field === 'amount' ? 'Desired Amount (CAD)' : field === 'purpose' ? 'Purpose of Investment/Loan' : field}
                </label>
                {field === 'purpose' ? (
                  <textarea
                    id={field} name={field} required value={formData[field]} onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                ) : (
                  <input
                    type="text"
                    id={field} name={field} required value={formData[field]} onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="block mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
