'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();

  const cities = ['Vancouver', 'Victoria', 'Burnaby', 'Surrey', 'North Vancouver', 'Toronto', 'London'];
  // Removed "3"
  const bedrooms = ['Studio', '1', '2'];

  const [selectedCity, setSelectedCity] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [price, setPrice] = useState(1500);

  const dropdownRef = useRef(null);

  // close city dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [dropdownOpen]);

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (selectedCity) query.set('city', selectedCity);
    if (selectedBedroom) query.set('bedrooms', selectedBedroom);
    if (price) query.set('price', String(price));
    router.push(`/forrent?${query.toString()}`);
  };

  const toggleBedroom = (bedroom) => {
    setSelectedBedroom(selectedBedroom === bedroom ? null : bedroom);
  };

  return (
    <div className="mt-10 w-full max-w-5xl">
      <div className="bg-zinc-900/70 backdrop-blur-md rounded-2xl ring-1 ring-zinc-800 px-5 py-4 md:px-6 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap text-zinc-100">
        {/* City Dropdown */}
        <div className="relative md:border-r md:pr-4 md:mr-2 border-zinc-800" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 font-medium hover:text-white transition"
          >
            {selectedCity || 'Select a City'}
            <span className={`text-xs transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {dropdownOpen && (
            <ul className="absolute z-10 mt-2 w-48 rounded-xl bg-zinc-900/95 ring-1 ring-zinc-800 shadow-2xl overflow-hidden">
              {cities.map((city) => (
                <li
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer text-sm hover:bg-zinc-800/70"
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bedrooms */}
        <div className="flex items-center gap-3 md:border-r md:pr-4 border-zinc-800">
          <span className="text-[11px] font-semibold tracking-wide text-zinc-400">BEDROOMS</span>
          {bedrooms.map((b) => (
            <button
              key={b}
              onClick={() => toggleBedroom(b)}
              className={`px-2.5 py-1 text-sm rounded-full transition ${
                selectedBedroom === b
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Price Range */}
        <div className="flex flex-col items-center gap-1 md:border-r md:pr-4 border-zinc-800 w-full md:w-auto">
          <span className="text-[11px] font-semibold tracking-wide text-zinc-400">PRICE RANGE</span>
          <span className="text-sm font-semibold text-white">${price}</span>
          <input
            type="range"
            min="500"
            max="4000"
            step="50"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-40 accent-yellow-400"
          />
        </div>

        {/* Search Button */}
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full whitespace-nowrap ring-1 ring-yellow-300/50"
          onClick={handleSearch}
        >
          Find an Apartment
        </button>
      </div>
    </div>
  );
}
