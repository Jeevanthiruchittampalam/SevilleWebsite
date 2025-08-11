'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SevilleLogo from '../../../public/images/sevillelogo3.png';

const sectorItems = [
  { name: 'Properties', href: '/properties' },
  { name: 'Development', href: '/developments' },
  { name: 'Technology', href: '/technology' },
  { name: 'Asset Management', href: '/management' },
  { name: 'Investments and Loans', href: '/investmentsandloans' },
  { name: 'Other Industries', href: '/otherindustries' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close “Groups” when clicking outside (desktop & mobile)
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setGroupOpen(false);
      }
    };
    if (groupOpen) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [groupOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 h-16 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-800">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src={SevilleLogo}
              alt="Seville"
              width={120}
              height={120}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs tracking-wide uppercase text-zinc-300">
            <Link href="/" className="hover:text-white/90">Home</Link>
            <Link href="/forrent" className="hover:text-white/90">For Rent</Link>
            <Link href="/forsale" className="hover:text-white/90">For Sale</Link>
            <Link href="/map" className="hover:text-white/90">Map</Link>

            {/* Groups dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setGroupOpen(!groupOpen)}
                aria-expanded={groupOpen}
                className="flex items-center gap-1 hover:text-white/90"
              >
                Groups
                <svg className={`h-3 w-3 transition ${groupOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.207l3.71-3.977a.75.75 0 1 1 1.1 1.02l-4.25 4.56a.75.75 0 0 1-1.1 0l-4.25-4.56a.75.75 0 0 1 .02-1.06z" />
                </svg>
              </button>

              {groupOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-3 w-72 rounded-xl border border-zinc-800 bg-zinc-900/95 shadow-2xl p-2"
                >
                  <div className="grid grid-cols-1">
                    {sectorItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-[13px] text-zinc-200 hover:bg-zinc-800/70"
                        onClick={() => setGroupOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/team" className="hover:text-white/90">Team</Link>
            <Link href="/insights" className="hover:text-white/90">Insights</Link>

            {/* Forms pill (links to About Us for now) */}
            <Link
              href="/aboutus"
              className="group ml-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-3 py-1.5 font-medium text-[11px] text-emerald-300 hover:bg-emerald-500/10"
            >
              {/* green circular design */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping bg-emerald-400"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              </span>
              Forms
            </Link>

            {/* MySeville button */}
            <Link
              href="/myseville"
              className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-1.5 text-[11px] font-medium text-zinc-100 hover:bg-zinc-800"
            >
              MySeville Sign In
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-100 hover:bg-zinc-800"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-zinc-950 text-zinc-100 border-b border-zinc-800 px-4 py-3 space-y-2">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/forrent" className="block py-2">For Rent</Link>
          <Link href="/forsale" className="block py-2">For Sale</Link>
          <Link href="/map" className="block py-2">Map</Link>

          <button
            onClick={() => setGroupOpen(!groupOpen)}
            className="flex w-full items-center justify-between py-2"
          >
            <span>Groups</span>
            <span className="text-xs">{groupOpen ? '▲' : '▼'}</span>
          </button>
          {groupOpen && (
            <div className="pl-3">
              {sectorItems.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1.5 text-zinc-300">
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Forms pill */}
          <Link
            href="/aboutus"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-3 py-1.5 text-sm text-emerald-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping bg-emerald-400"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            </span>
            Forms
          </Link>

          <Link
            href="/myseville"
            className="block rounded-full border border-zinc-700 px-4 py-2 text-center"
          >
            MySeville Sign In
          </Link>
        </nav>
      )}
    </>
  );
}
