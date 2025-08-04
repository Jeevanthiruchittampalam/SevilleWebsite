'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import DevelopmentBg from '../images/development.jpg';
import { useState } from 'react';

export default function DevelopmentsPage() {
  const projects = [
    {
      name: 'Seville Gardens – Richmond',
      description:
        'A luxury mid-rise residential development featuring 120 condo units with rooftop gardens, smart home integrations, and LEED Gold certification. Launching Q2 2026.',
      status: 'Planning Phase',
    },
    {
      name: 'Eastgate Tech Campus – Burnaby',
      description:
        'A mixed-use complex integrating commercial offices, innovation labs, and retail spaces. Focused on attracting green tech startups. Completion expected in early 2027.',
      status: 'Under Municipal Review',
    },
    {
      name: 'The Point at Hastings – Vancouver',
      description:
        'An urban infill redevelopment featuring rental apartments, coworking spaces, and ground-floor cafes. Designed to activate and revitalize the Hastings corridor.',
      status: 'Pre-Construction',
    },
  ];

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
    // Simulate submission
    alert('Thank you for your inquiry. We will get back to you shortly.');
    setFormData({ name: '', contact: '', message: '' });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${DevelopmentBg.src})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Our Developments</h1>
          <p className="text-base italic">Future-focused projects for thriving communities</p>
        </div>
      </div>

      {/* Projects Section */}
      <main className="flex-grow px-6 py-12 max-w-5xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Upcoming Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{proj.name}</h3>
                <p className="text-gray-700 mb-3">{proj.description}</p>
                <p className="text-sm text-gray-600">
                  <strong>Status:</strong> {proj.status}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Inquiry Form Section */}
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
