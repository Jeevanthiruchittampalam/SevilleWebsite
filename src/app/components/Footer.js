'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const footerLinks = [
    { label: 'About Us', href: '/aboutus' },
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
      icon: '/images/icons/profilew.png',
    },
    {
      title: 'About Seville',
      subtitle: 'Why Seville Investment Services',
      href: '/aboutus',
      icon: '/images/icons/buildingw.png',
    },
    {
      title: 'For Rent',
      subtitle: 'Explore Available Rentals',
      href: '/forrent',
      icon: '/images/icons/examw.png',
    },
  ];

  return (
    <footer className="mt-20 bg-black text-zinc-300">
      {/* Quick Links – dark glass cards with LARGE white icons */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white text-center mb-10">
            Seville Quick Links
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group rounded-2xl bg-zinc-900/70 backdrop-blur-md ring-1 ring-zinc-800 p-8 flex flex-col items-center gap-6 hover:ring-white/20 hover:bg-zinc-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                {/* BIG icon */}
                <span className="flex h-20 w-20 items-center justify-center">
                  <Image
                    src={link.icon}
                    alt=""
                    width={72}
                    height={72}
                    className="select-none opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </span>

                {/* Text */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white group-hover:text-white/90">
                    {link.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{link.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/images/purpleleaf.jpg"
            alt="Vancouver winter skyline"
            width={400}
            height={300}
            className="rounded-xl object-cover ring-1 ring-zinc-800"
          />
          <blockquote className="text-zinc-200 text-lg leading-relaxed max-w-2xl">
            &ldquo;Starting Seville was one of the best decisions I&rsquo;ve made professionally.
            The current team is supportive, the vision is bold, and the work is meaningful. It has come a long way since 1983, and I take pride
            in helping shape the future of property management through both innovation and
            tradition.&rdquo;
            <footer className="mt-4 text-sm text-zinc-400 font-medium">
              — Narinder Chauhan, Founder
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Final Footer */}
      <section className="text-sm py-10 px-6 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Contact */}
          <div className="text-left">
            <h4 className="text-white text-xl font-bold mb-2">Seville Investments</h4>
            <p className="text-zinc-400 leading-6">
              2233 W 35th Ave<br />
              Vancouver, BC V6M 1J4
            </p>
            <p className="mt-2 text-zinc-400">
              Phone:{' '}
              <a href="tel:+16048735753" className="hover:text-white transition">
                (604) 873-5753
              </a>
            </p>
            <p className="text-zinc-400">Province: British Columbia</p>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center sm:text-left pt-4 border-t border-zinc-800">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-zinc-500 mt-6">
            &copy; {new Date().getFullYear()} Seville Investments. All rights reserved.
          </div>
        </div>
      </section>
    </footer>
  );
}
