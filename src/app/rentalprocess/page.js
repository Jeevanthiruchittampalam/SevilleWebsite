'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { useState } from 'react';
import Link from 'next/link';

export default function RentalProcessPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest. A leasing manager will contact you shortly.');
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/rentalprocess2.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Rental Process</h1>
          <p className="text-base italic">we&apos; here to guide you every step of the way.</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto space-y-16">
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Getting Started</h2>
          <p className="text-gray-700 text-lg">
            Whether you&apos; searching for your next home or a commercial lease, we’ve made the process seamless.
          </p>

          <ul className="mt-6 space-y-4 text-left text-gray-800">
            <li>
              • View our available units on the{' '}
              <Link href="/aboutus" className="text-blue-600 hover:underline">
                For Rent
              </Link>{' '}
              page.
            </li>
            <li>
              • Go back to{' '}
              <Link href="/aboutus" className="text-blue-600 hover:underline">
                Home
              </Link>{' '}
              and use our interactive search tool to explore.
            </li>
            <li>
              • Visit the{' '}
              <Link href="/aboutus" className="text-blue-600 hover:underline">
                Commercial
              </Link>{' '}
              page to explore available buildings and spaces.
            </li>
          </ul>

          <p className="text-gray-700 text-base mt-6">
            Or, if you prefer a personal touch, submit your information below and a leasing manager will be in touch to
            help match you with upcoming availabilities.
          </p>
        </section>

        {/* Inquiry Form */}
        <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 space-y-6">
          <h3 className="text-2xl font-semibold text-center">Join the Waitlist</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Info (Email or Phone)
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Optional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
            >
              Submit
            </button>
          </form>

          <div className="text-sm text-center text-gray-500 mt-6">
            Leasing Manager: <strong>Gierly Magrata</strong> —{' '}
            <a href="mailto:geirly@sevilleinvestments.ca" className="text-blue-600 hover:underline">
              geirly@sevilleinvestments.ca
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
