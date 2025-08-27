'use client';

import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import GroupWheel from './components/GroupWheel';

// Rotating image backgrounds by sector (used for the lower panel)
const sectorBackgrounds = {
  Properties: '/images/PropertiesBlack.jpg',
  Development: '/images/DevelopmentBlack.jpg',
  Technology: '/images/tech4.jpg',
  'Asset Management': '/images/Management.jpg',
  'Investments and Loans': '/images/Plant2.jpg',
  'Other Industries': '/images/OtherIndustries3.jpg',
};

const sectors = Object.keys(sectorBackgrounds);

// Video rotation order (hero)
const videoOrder = [
  '/videos/PR1.mp4','/videos/PR2.mp4','/videos/PR3.mp4',
  '/videos/DEV1.mp4','/videos/DEV2.mp4','/videos/DEV3.mp4',
  '/videos/T1.mp4','/videos/T2.mp4','/videos/T3.mp4',
  '/videos/AM1.mp4','/videos/AM2.mp4','/videos/AM3.mp4',
  '/videos/IAL1.mp4','/videos/IAL2.mp4','/videos/IAL3.mp4',
  '/videos/OI1.mp4','/videos/OI2.mp4','/videos/OI3.mp4',
];

export default function Home() {
  const [activeSector, setActiveSector] = useState(sectors[0]);
  const [userSelected, setUserSelected] = useState(false);

  // Indexes for the playlist
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  // Which video element is currently visible (front buffer): 'A' or 'B'
  const [front, setFront] = useState('A');

  // Refs to the two video elements
  const vidARef = useRef(null);
  const vidBRef = useRef(null);

  // Whether we've already primed the next video for the current cycle
  const primedRef = useRef(false);

  // Ref for the explore section (search + wheel)
  const exploreRef = useRef(null);

  // Preload sector images so the lower panel swaps instantly
  useEffect(() => {
    Object.values(sectorBackgrounds).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Preload videos lightly (hinting)
  useEffect(() => {
    videoOrder.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = src;
      document.head.appendChild(link);
    });
    return () => {
      document
        .querySelectorAll('link[rel="preload"][as="video"]')
        .forEach((l) => l.remove());
    };
  }, []);

  // Auto-cycle sectors every 6s unless user clicked (drives lower panel + wheel)
  useEffect(() => {
    if (userSelected) return;
    const interval = setInterval(() => {
      setActiveSector((prev) => {
        const idx = sectors.indexOf(prev);
        return sectors[(idx + 1) % sectors.length];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [userSelected]);

  const handleSectorClick = (sector) => {
    setActiveSector(sector);
    setUserSelected(true); // stop auto-rotate once user interacts
  };

  // Initialize the first video on mount
  useEffect(() => {
    const frontRef = front === 'A' ? vidARef.current : vidBRef.current;
    if (!frontRef) return;

    // Set src and play the very first time
    frontRef.src = videoOrder[currentIndex];
    const p = frontRef.play();
    if (p?.catch) p.catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // Helper to compute the subsequent index
  const nextOf = (i) => (i + 1) % videoOrder.length;

  // Timeupdate listener: prime & crossfade before the current ends
  useEffect(() => {
    const frontRef = front === 'A' ? vidARef.current : vidBRef.current;
    const backRef  = front === 'A' ? vidBRef.current : vidARef.current;

    if (!frontRef || !backRef) return;

    primedRef.current = false;

    const onTimeUpdate = () => {
      if (!frontRef.duration || Number.isNaN(frontRef.duration)) return;
      const remaining = frontRef.duration - frontRef.currentTime;

      // Prime the back buffer ~0.5s before the end
      if (!primedRef.current && remaining <= 0.5) {
        primedRef.current = true;

        // Prepare nextIndex and back buffer source
        const realNextIndex = nextIndex; // stable read
        // Set the source only if it's different
        if (backRef.src !== window.location.origin + videoOrder[realNextIndex]) {
          backRef.src = videoOrder[realNextIndex];
        }
        backRef.currentTime = 0;

        // Start playing the back buffer (hidden) so frames are ready
        const p = backRef.play();
        if (p?.catch) p.catch(() => {});

        // Crossfade shortly after we know the back buffer has started
        // Using a tiny timeout to ensure ready-to-render state
        setTimeout(() => {
          // Fade front out and back in via CSS classes (controlled by state)
          setFront((prev) => (prev === 'A' ? 'B' : 'A'));

          // Advance indices for the following cycle
          setCurrentIndex((ci) => nextIndex);
          setNextIndex((ni) => nextOf(ni));
        }, 80);
      }
    };

    // Also handle cases where 'ended' might fire unexpectedly
    const onEnded = () => {
      // As a fallback, do the same swap if not already primed
      if (!primedRef.current) {
        primedRef.current = true;

        const backRef2  = front === 'A' ? vidBRef.current : vidARef.current;
        if (backRef2) {
          const realNextIndex = nextIndex;
          if (backRef2.src !== window.location.origin + videoOrder[realNextIndex]) {
            backRef2.src = videoOrder[realNextIndex];
          }
          backRef2.currentTime = 0;
          const p = backRef2.play();
          if (p?.catch) p.catch(() => {});
        }

        setFront((prev) => (prev === 'A' ? 'B' : 'A'));
        setCurrentIndex((ci) => nextIndex);
        setNextIndex((ni) => nextOf(ni));
      }
    };

    frontRef.addEventListener('timeupdate', onTimeUpdate);
    frontRef.addEventListener('ended', onEnded);

    return () => {
      frontRef.removeEventListener('timeupdate', onTimeUpdate);
      frontRef.removeEventListener('ended', onEnded);
    };
  }, [front, nextIndex]);

  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      <Header />

      {/* HERO: video + intro text + scroll arrow */}
      {/* offset content for fixed header (64px) + iOS safe area */}
      <main className="relative pt-[calc(64px+env(safe-area-inset-top))] md:pt-[calc(64px+env(safe-area-inset-top))] pb-16 min-h-screen w-full flex flex-col items-center overflow-hidden">
        {/* Background videos (double-buffered) */}
        <div className="absolute inset-0 z-0">
          {/* Video A */}
          <video
            ref={vidARef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ease-linear ${
              front === 'A' ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            playsInline
            preload="auto"
            disableRemotePlayback
            aria-hidden={front !== 'A'}
          />
          {/* Video B */}
          <video
            ref={vidBRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ease-linear ${
              front === 'B' ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            playsInline
            preload="auto"
            disableRemotePlayback
            aria-hidden={front !== 'B'}
          />
        </div>

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/45 to-black/0 pointer-events-none" />

        {/* Intro content */}
        <section className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center mt-12 md:mt-16">
          <h1 className="font-semibold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
            Welcome to Seville Investments
          </h1>
          <p className="mt-4 md:mt-6 text-white/90 text-base md:text-lg leading-relaxed">
            We manage premium rentals, grow assets, and deliver modern real estate solutions.
          </p>
        </section>

        {/* Scroll to Explore arrow */}
        <button
          onClick={() => exploreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/90 hover:text-white transition"
          aria-label="Scroll to Explore"
        >
          <span className="inline-flex p-3 rounded-full ring-1 ring-white/40 bg-white/10 backdrop-blur-sm animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          <span className="text-xs md:text-sm">Scroll to Explore</span>
        </button>
      </main>

      {/* PANEL: Search + Wheel on rotating IMAGE background, synced to activeSector */}
      <section
        ref={exploreRef}
        className="relative w-full py-12 md:py-16 bg-center bg-cover transition-all duration-700"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.55) 25%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.70) 100%), url(${sectorBackgrounds[activeSector]})`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
          <SearchBar />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-10 md:mt-14">
          <GroupWheel
            activeSector={activeSector}
            setActiveSector={handleSectorClick}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
