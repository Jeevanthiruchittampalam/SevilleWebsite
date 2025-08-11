'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const sectors = [
  { name: 'Residential Rentals', value: 35 },
  { name: 'Commercial Assets', value: 25 },
  { name: 'Development Projects', value: 20 },
  { name: 'Technology & AI Tools', value: 10 },
  { name: 'Other Industries', value: 10 },
];

// Vibrant on dark
const COLORS = ['#FACC15', '#C084FC', '#34D399', '#38BDF8', '#FB923C'];

export default function InvestmentsAndLoansPage() {
  const [formData, setFormData] = useState({ name: '', contact: '', purpose: '', amount: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will be in touch regarding your loan inquiry.');
    setFormData({ name: '', contact: '', purpose: '', amount: '' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: pull under header + dark gradient so header sits on black */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/investmentspage1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">Investments &amp; Loans</h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Empowering growth through strategic capital deployment.
            </p>
          </div>
        </div>
      </section>

      <main className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        {/* Sector Allocation (dark card) */}
        <section className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8">
          <h2 className="text-3xl font-semibold mb-6">Our Investment Portfolio by Sector %</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sectors}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  labelLine={false}
                >
                  {sectors.map((entry, idx) => (
                    <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} stroke="#0b0b0b" />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ color: '#e5e7eb' }} />
                <Tooltip
                  contentStyle={{ background: '#111827', border: '1px solid #27272a', color: '#e5e7eb' }}
                  itemStyle={{ color: '#e5e7eb' }}
                  labelStyle={{ color: '#9ca3af' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Investment Focus */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">What We Invest In</h2>
          <ul className="list-disc list-inside text-zinc-300 leading-relaxed space-y-2 marker:text-zinc-500">
            <li>Long-term residential rental assets in Metro Vancouver</li>
            <li>Commercial office, retail, and mixed-use properties</li>
            <li>Strategic development projects with sustainable design</li>
            <li>Innovation in real estate through AI &amp; data analytics tools</li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">How It Works</h2>
          <ol className="list-decimal list-inside text-zinc-300 leading-relaxed space-y-2 marker:text-zinc-500">
            <li>Submit an inquiry via the form below</li>
            <li>Our team will evaluate your proposal and conduct due diligence</li>
            <li>We offer competitive loan terms and flexible funding solutions</li>
            <li>Post-funding, we monitor performance and support strategic growth</li>
          </ol>
        </section>

        {/* Inquiry Form (dark glassy card + thin white border button) */}
        <section className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Loan &amp; Investment Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            {['name', 'contact', 'purpose', 'amount'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-zinc-300 mb-1 capitalize">
                  {field === 'amount'
                    ? 'Desired Amount (CAD)'
                    : field === 'purpose'
                    ? 'Purpose of Investment/Loan'
                    : field}
                </label>
                {field === 'purpose' ? (
                  <textarea
                    id={field}
                    name={field}
                    rows={4}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                    placeholder="Tell us about the project, use-of-funds, and timeline…"
                  />
                ) : (
                  <input
                    type="text"
                    id={field}
                    name={field}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                    placeholder={field === 'amount' ? 'e.g., 250,000' : field === 'contact' ? 'you@example.com or (604) 123-4567' : 'Your full name'}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="block mx-auto inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
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
