'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function RentalProcessPage() {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

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
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: large image with dark overlay, pulled under header */}
      <section className="relative -mt-16 w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/rentalprocess2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">Rental Process</h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              We&apos;re here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto space-y-12">
        {/* Intro */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-3">Getting Started</h2>
          <p className="text-zinc-300 text-lg">
            Whether you&apos;re searching for your next home or a new lease, we&apos;ve made the process seamless.
          </p>

          <ul className="mt-6 space-y-3 text-left text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            <li>
              • View our available units on the{' '}
              <Link href="/forrent" className="underline text-yellow-400 hover:text-yellow-300">
                For Rent
              </Link>{' '}
              page.
            </li>
            <li>
              • Go back to{' '}
              <Link href="/" className="underline text-yellow-400 hover:text-yellow-300">
                Home
              </Link>{' '}
              and use our interactive search tool to explore.
            </li>
          </ul>

          <p className="text-zinc-400 text-base mt-6">
            Prefer a personal touch? Submit your info below and a leasing manager will be in touch.
          </p>
        </section>

        {/* Form (glassy card) */}
        <section className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h3 className="text-2xl font-semibold text-center mb-6">Join the Waitlist</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Your full name"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-zinc-300 mb-1">
                Contact Info (Email or Phone)
              </label>
              <input
                id="contact"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                className="w-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="you@example.com or (604) 123-4567"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                Optional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Tell us what you’re looking for…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Submit
            </button>
          </form>

          <div className="text-sm text-center text-zinc-400 mt-6">
            Leasing Manager: <strong className="text-white">Gierly Magrata</strong> —{' '}
            <a href="mailto:geirly@sevilleinvestments.ca" className="underline text-yellow-400 hover:text-yellow-300">
              geirly@sevilleinvestments.ca
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
