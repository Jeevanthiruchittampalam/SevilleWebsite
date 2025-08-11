'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function DevelopmentsPage() {
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
    alert('Thank you for your inquiry. We will get back to you shortly.');
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: pull under header + dark gradient so header sits on black */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden min-h-[50vh]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/development.jpg')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Our Developments
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Future-focused projects for thriving communities
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-grow px-6 py-16 max-w-5xl mx-auto space-y-16">
        {/* Upcoming Projects */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Upcoming Projects</h2>
          <p className="text-lg text-zinc-300">
            There are currently no developments to display. Please check back soon.
          </p>
        </section>

        {/* Inquiry Form */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Development Inquiries</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-950/70 backdrop-blur-md rounded-2xl ring-1 ring-zinc-800 p-8 max-w-2xl mx-auto space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-zinc-300 mb-1">
                Contact Info (Email or Phone)
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                className="w-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="you@example.com or (604) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Tell us about your project or question…"
              />
            </div>

            {/* Dark-themed CTA with thin white border (matches your site buttons) */}
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
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
