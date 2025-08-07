'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const footerLinks = [
    { label: 'About Us', href: '/aboutus' },
    // { label: 'Commercial', href: '/commercial' },
    { label: 'Community', href: '/community' },
    { label: 'Promotions', href: '/promotions' },
    { label: 'Rental Process', href: '/rentalprocess' },
    { label: 'Press / Media', href: '/pressandmedia' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  const quickLinks = [
    {
      title: 'mySeville Portal',
      subtitle: 'Login to your account',
      href: '/myseville',
      icon: '/images/icons/profile.png',
    },
    {
      title: 'About Seville',
      subtitle: 'Why Seville Investment Services',
      href: '/aboutus',
      icon: '/images/icons/building.png',
    },
    {
      title: 'For Rent',
      subtitle: 'Explore Available Rentals',
      href: '/forrent',
      icon: '/images/icons/exam.png',
    },
  ];

  return (
    <footer className="mt-20">

      {/* Seville Quick Links */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white text-center mb-10">
            Seville Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm">{link.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/bcwinter1.jpg"
            alt="Narinder Chauhan"
            width={400}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
          <blockquote className="text-gray-800 text-lg leading-relaxed max-w-2xl">
            &ldquo;Starting Seville was one of the best decisions I&rsquo;ve made professionally.
            The current team is supportive, the vision is bold, and the work is meaningful. It has come a long way since 1983, and I take pride
            in helping shape the future of property management through both innovation and
            tradition.&rdquo;
            <footer className="mt-4 text-sm text-gray-600 font-medium">
              — Narinder Chauhan, Founder
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Final Footer Section */}
      <section className="bg-gray-900 text-gray-300 text-sm py-10 px-6">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Contact Info */}
          <div className="text-left">
            <h4 className="text-white text-xl font-bold mb-2">Seville Investments</h4>
            <p className="text-gray-400 leading-6">
              2233 W 35th Ave<br />
              Vancouver, BC V6M 1J4
            </p>
            <p className="mt-2 text-gray-400">
              Phone: <a href="tel:+16048735753" className="hover:underline">(604) 873-5753</a>
            </p>
            <p className="text-gray-400">Province: British Columbia</p>
          </div>

          {/* Footer Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center sm:text-left pt-4 border-t border-gray-700">
            {footerLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="hover:underline text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-500 mt-6">
            &copy; {new Date().getFullYear()} Seville Investments. All rights reserved.
          </div>
        </div>
      </section>
    </footer>
  );
}
