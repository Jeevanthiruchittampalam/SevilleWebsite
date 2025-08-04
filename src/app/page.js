// --- page.js ---

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import GroupWheel from './components/GroupWheel';

// Backgrounds mapped to sector names
import InvestmentsImg from './images/Plant2.jpg';
import DevelopmentImg from './images/DevelopmentC.jpg';
import TechnologyImg from './images/Technology.jpg';
import ManagementImg from './images/Management.jpg';
import PropertiesImg from './images/Properties2.jpg';
import OtherIndustriesImg from './images/OtherIndustries.jpg';

const sectorBackgrounds = {
  'Investments and Loans': InvestmentsImg,
  'Development': DevelopmentImg,
  'Technology': TechnologyImg,
  'Management': ManagementImg,
  'Properties': PropertiesImg,
  'Other Industries': OtherIndustriesImg,
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
      {/* Header Component */}
      <Header />

      {/* Main Content Section */}
      <main
        className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${sectorBackgrounds[activeSector].src})` }}
      >
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to Seville Management Ltd.
        </h1>
        <p className="text-lg text-white max-w-xl drop-shadow-md mb-8">
          We manage and develop exceptional living spaces with care and expertise.
        </p>

        {/* Search & Group Wheel */}
        <SearchBar />
        <GroupWheel
          activeSector={activeSector}
          setActiveSector={handleSectorClick}
        />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}