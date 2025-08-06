'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import GroupWheel from './components/GroupWheel';

// Backgrounds mapped to sector names (use public image paths)
const sectorBackgrounds = {
  'Investments and Loans': '/images/Plant2.jpg',
  'Development': '/images/DevelopmentC.jpg',
  'Technology': '/images/tech2.jpg',
  'Asset Management': '/images/Management.jpg',
  'Properties': '/images/Properties2.jpg',
  'Other Industries': '/images/OtherIndustries.jpg',
};

const sectors = Object.keys(sectorBackgrounds);

export default function Home() {
  const [activeSector, setActiveSector] = useState(sectors[0]);
  const [userSelected, setUserSelected] = useState(false);

  // Preload images once on mount
  useEffect(() => {
    Object.values(sectorBackgrounds).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-cycle sectors every 6 seconds unless user has selected manually
  useEffect(() => {
    if (userSelected) return;

    const interval = setInterval(() => {
      setActiveSector((prev) => {
        const currentIndex = sectors.indexOf(prev);
        return sectors[(currentIndex + 1) % sectors.length];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [userSelected]);

  const handleSectorClick = (sector) => {
    setActiveSector(sector);
    setUserSelected(true);
  };

  return (
    <div className="flex flex-col min-h-screen font-body text-black bg-neutral-900">
      <Header />

      <main className="flex-grow relative w-full overflow-hidden">
        {/* Background Images Layer */}
        <div className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out">
          {Object.entries(sectorBackgrounds).map(([sector, url]) => (
            <img
              key={sector}
              src={url}
              alt={sector}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                activeSector === sector ? 'opacity-100' : 'opacity-0'
              }`}
              loading="eager"
              fetchpriority="high"
            />
          ))}
          {/* Fallback Placeholder Background */}
          <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
          {/* Optional: additional overlay for contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16">
          <h1 className="text-4xl font-heading text-white mb-4 drop-shadow-lg">
            Welcome to Seville Investments
          </h1>
          <p className="text-lg font-body text-white max-w-xl drop-shadow-md mb-8">
            We manage premium rentals, grow assets, and deliver modern real estate solutions.
          </p>

          <SearchBar />
          <GroupWheel
            activeSector={activeSector}
            setActiveSector={handleSectorClick}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
