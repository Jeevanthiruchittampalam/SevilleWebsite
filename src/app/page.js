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
  'Technology': '/images/Technology.jpg',
  'Management': '/images/Management.jpg',
  'Properties': '/images/Properties2.jpg',
  'Other Industries': '/images/OtherIndustries.jpg',
};

const sectors = Object.keys(sectorBackgrounds);

export default function Home() {
  const [activeSector, setActiveSector] = useState(sectors[0]);
  const [userSelected, setUserSelected] = useState(false);

  // Auto-cycle sectors every 6 seconds unless user has clicked
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
    <div className="flex flex-col min-h-screen font-sans text-black">
      <Header />

      <main
        className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${sectorBackgrounds[activeSector]})`,
        }}
      >
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to Seville Management Ltd.
        </h1>
        <p className="text-lg text-white max-w-xl drop-shadow-md mb-8">
          We manage and develop exceptional living spaces with care and expertise.
        </p>

        <SearchBar />
        <GroupWheel
          activeSector={activeSector}
          setActiveSector={handleSectorClick}
        />
      </main>

      <Footer />
    </div>
  );
}
