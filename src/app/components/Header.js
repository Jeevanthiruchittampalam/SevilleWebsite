'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SevilleLogo from '../../../public/images/SevilleLogo1.png';

const sectorItems = [
  { name: 'Investments and Loans', href: '/investmentsandloans' },
  { name: 'Development', href: '/developments' },
  { name: 'Technology', href: '/technology' },
  { name: 'Management', href: '/management' },
  { name: 'Properties', href: '/properties' },
  { name: 'Other Industries', href: '/otherindustries' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50 h-24">
        <div className="flex items-center h-full">
          <Link href="/">
            <Image
              src={SevilleLogo}
              alt="Seville Logo"
              layout="intrinsic"
              className="h-full w-auto cursor-pointer"
              width={120}
              height={120}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/forrent" className="hover:underline">For Rent</Link>
          <Link href="/forsale" className="hover:underline">For Sale</Link>

          {/* Dropdown (Click only) */}
          <div className="relative">
            <button
              onClick={() => setGroupOpen(!groupOpen)}
              className="flex items-center gap-1 hover:underline"
            >
              Groups <span className="text-xs">{groupOpen ? '▲' : '▼'}</span>
            </button>
            {groupOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded p-2 w-60 max-h-64 overflow-y-auto z-10">
                {sectorItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/team" className="hover:underline">Team</Link>
          <Link href="/insights" className="hover:underline">Insights and Research</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md px-4 py-2 text-sm text-black">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/forrent" className="block py-2">For Rent</Link>
          <Link href="/forsale" className="block py-2">For Sale</Link>
          <div>
            <button
              onClick={() => setGroupOpen(!groupOpen)}
              className="flex items-center justify-between w-full py-2"
            >
              <span>Groups</span>
              <span className="text-xs">{groupOpen ? '▲' : '▼'}</span>
            </button>
            {groupOpen && (
              <div className="pl-4">
                {sectorItems.map((item, idx) => (
                  <Link key={idx} href={item.href} className="block py-1 hover:underline">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/team" className="block py-2">Team</Link>
          <Link href="/insights" className="block py-2">Insights and Research</Link>
        </nav>
      )}
    </>
  );
}
