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
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/development.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Our Developments</h1>
          <p className="text-base italic">Future-focused projects for thriving communities</p>
        </div>
      </div>

      {/* Projects Section */}
      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Upcoming Projects</h2>
          <p className="text-lg text-gray-700">
            There are currently no developments to display. Please check back soon.
          </p>
        </section>

        {/* Inquiry Form */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Development Inquiries</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 max-w-2xl mx-auto space-y-6"
          >
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
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
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
