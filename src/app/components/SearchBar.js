'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();

  const cities = ['Vancouver', 'Victoria', 'Burnaby', 'Surrey', 'North Vancouver', 'Toronto', 'London'];
  const bedrooms = ['Studio', '1', '2', '3'];

  const [selectedCity, setSelectedCity] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [price, setPrice] = useState(1500);

  const toggleBedroom = (bedroom) => {
    setSelectedBedroom(selectedBedroom === bedroom ? null : bedroom);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (selectedCity) params.append('city', selectedCity);
    if (selectedBedroom) params.append('bedrooms', selectedBedroom === 'Studio' ? 'S' : selectedBedroom);
    params.append('price', price);
    router.push(`/forrent?${params.toString()}`);
  };

  return (
    <div className="mt-10 bg-white rounded shadow-lg w-full max-w-5xl px-6 py-4 flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
      
      {/* City Dropdown */}
      <div className="relative border-r pr-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 font-semibold text-black"
        >
          {selectedCity || 'Select a City'}
          <span className="text-xs">▼</span>
        </button>
        {dropdownOpen && (
          <ul className="absolute bg-white shadow-md mt-2 rounded z-10 w-40">
            {cities.map((city, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedCity(city);
                  setDropdownOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bedrooms */}
      <div className="flex items-center gap-2 border-r pr-4 flex-wrap">
        <span className="text-xs font-bold text-gray-500 whitespace-nowrap">BEDROOMS</span>
        {bedrooms.map((b, i) => (
          <button
            key={i}
            onClick={() => toggleBedroom(b)}
            className={`px-2 py-1 text-sm rounded ${
              selectedBedroom === b
                ? 'bg-yellow-400 text-black font-semibold'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      {/* Price Range */}
      <div className="flex flex-col items-center border-r pr-4 w-full md:w-auto">
        <span className="text-xs font-bold text-gray-500">PRICE RANGE</span>
        <span className="text-black text-sm font-semibold">${price}</span>
        <input
          type="range"
          min="500"
          max="4000"
          step="50"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-40 accent-yellow-400"
        />
      </div>

      {/* Search Button */}
      <div className="w-full md:w-auto">
        <button
          onClick={handleSearch}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded w-full md:w-auto whitespace-nowrap"
        >
          Find an Apartment
        </button>
      </div>
    </div>
  );
}
