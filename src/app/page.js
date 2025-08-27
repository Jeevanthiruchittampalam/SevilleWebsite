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

// ===== helpers for truly seamless swap =====
const HAVE_ENOUGH_DATA = 4;
const OVERLAP_SECONDS = 0.25; // play next video slightly before the current ends

function waitForCanPlay(el) {
  return new Promise((resolve) => {
    if (!el) return resolve();
    if (el.readyState >= HAVE_ENOUGH_DATA) return resolve();
    const on = () => {
      el.removeEventListener('canplaythrough', on);
      el.removeEventListener('canplay', on);
      resolve();
    };
    el.addEventListener('canplaythrough', on, { once: true });
    el.addEventListener('canplay', on, { once: true });
  });
}

function waitForFirstFrame(el) {
  return new Promise((resolve) => {
    if (!el) return resolve();
    // If it's already playing and advanced, resolve
    if (!el.paused && el.currentTime > 0) return resolve();

    // Prefer a decoded-frame signal
    if ('requestVideoFrameCallback' in el) {
      el.requestVideoFrameCallback(() => resolve());
      return;
    }
    // Fallback: 'playing'
    const onPlaying = () => {
      el.removeEventListener('playing', onPlaying);
      resolve();
    };
    el.addEventListener('playing', onPlaying, { once: true });
  });
}

export default function Home() {
  const [activeSector, setActiveSector] = useState(sectors[0]);
  const [userSelected, setUserSelected] = useState(false);

  // Playlist pointers
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  // Which element is front-most: 'A' or 'B'
  const [front, setFront] = useState('A');

  const vidARef = useRef(null);
  const vidBRef = useRef(null);
  const exploreRef = useRef(null);

  const primedRef = useRef(false);
  const swapScheduledRef = useRef(false);
  const rafIdRef = useRef(null);

  const nextOf = (i) => (i + 1) % videoOrder.length;

  // Preload sector images
  useEffect(() => {
    Object.values(sectorBackgrounds).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Hint-preload video files
  useEffect(() => {
    videoOrder.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = src;
      document.head.appendChild(link);
    });
    return () => {
      document.querySelectorAll('link[rel="preload"][as="video"]').forEach((l) => l.remove());
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
    setUserSelected(true);
  };

  // Initialize first video
  useEffect(() => {
    const frontRef = front === 'A' ? vidARef.current : vidBRef.current;
    if (!frontRef) return;
    frontRef.src = videoOrder[currentIndex];
    frontRef.currentTime = 0;
    frontRef.play()?.catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // once

  // Seamless cross-fade scheduler using rAF to monitor remaining time precisely
  useEffect(() => {
    const frontRef = front === 'A' ? vidARef.current : vidBRef.current;
    const backRef  = front === 'A' ? vidBRef.current : vidARef.current;
    if (!frontRef || !backRef) return;

    primedRef.current = false;
    swapScheduledRef.current = false;

    const tick = async () => {
      // Schedule next frame check
      rafIdRef.current = requestAnimationFrame(tick);

      // Need duration to compute remaining time
      if (!frontRef.duration || isNaN(frontRef.duration)) return;

      const remaining = frontRef.duration - frontRef.currentTime;

      // Prime the next video slightly before end (load + first frame ready)
      if (!primedRef.current && remaining <= Math.max(0.8, OVERLAP_SECONDS + 0.4)) {
        primedRef.current = true;

        // Prepare source and load
        if (backRef.src !== (new URL(videoOrder[nextIndex], window.location.href)).href) {
          backRef.src = videoOrder[nextIndex];
        }
        backRef.preload = 'auto';
        backRef.load();

        // Ensure it's decodable & ready
        await waitForCanPlay(backRef);

        // Start hidden playback from 0 so a frame is ready
        backRef.currentTime = 0;
        backRef.play()?.catch(() => {});

        // Ensure we've got the first decoded frame before swap
        await waitForFirstFrame(backRef);
      }

      // With a frame decoded, schedule the overlap swap very near the end
      if (primedRef.current && !swapScheduledRef.current && remaining <= OVERLAP_SECONDS) {
        swapScheduledRef.current = true;

        // Cross-fade: show back, then advance indices
        setFront((prev) => (prev === 'A' ? 'B' : 'A'));

        // Immediately queue up next playlist pointers for the following cycle
        setCurrentIndex(nextIndex);
        setNextIndex((ni) => nextOf(ni));
      }

      // Fallback: if something goes wrong and we actually end, force swap
      if (remaining <= 0.02 && !swapScheduledRef.current) {
        swapScheduledRef.current = true;
        // If backRef somehow isn't ready, try to start it now
        if (backRef.paused) {
          backRef.play()?.catch(() => {});
        }
        setFront((prev) => (prev === 'A' ? 'B' : 'A'));
        setCurrentIndex(nextIndex);
        setNextIndex((ni) => nextOf(ni));
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [front, nextIndex]);

  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      <Header />

      {/* HERO: video + intro text + scroll arrow */}
      {/* offset content for fixed header (64px) + iOS safe area */}
      <main className="relative pt-[calc(64px+env(safe-area-inset-top))] md:pt-[calc(64px+env(safe-area-inset-top))] pb-16 min-h-screen w-full flex flex-col items-center overflow-hidden">
        {/* Double-buffered background videos */}
        <div className="absolute inset-0 z-0">
          {/* Video A */}
          <video
            ref={vidARef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ease-linear ${
              front === 'A' ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controls={false}
            aria-hidden={front !== 'A'}
            crossOrigin="anonymous"
          />
          {/* Video B */}
          <video
            ref={vidBRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ease-linear ${
              front === 'B' ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controls={false}
            aria-hidden={front !== 'B'}
            crossOrigin="anonymous"
          />
        </div>

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/45 to-black/0 pointer-events-none" />

        {/* Intro content (added top margin as requested previously) */}
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
