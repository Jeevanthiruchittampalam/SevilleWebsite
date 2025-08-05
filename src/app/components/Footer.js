'use client';

import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { label: 'About Us', href: '/aboutus' },
    { label: 'Commercial', href: '/commercial' },
    { label: 'Community', href: '/community' },
    { label: 'Promotions', href: '/promotions' },
    { label: 'Rental Process', href: '/rentalprocess' },
    { label: 'Press / Media', href: '/pressandmedia' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    
  ];

  return (
    <footer className="bg-gray-200 border-t text-sm text-black py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center sm:text-left">
        {footerLinks.map((item, idx) => (
          <Link key={idx} href={item.href} className="hover:underline">
            {item.label}
          </Link>
        ))}
      </div>
      <div className="text-center mt-6 text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Seville Investments All rights reserved.
      </div>
    </footer>
  );
}
