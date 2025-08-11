'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const sectors = [
  { name: 'Properties', href: '/properties' },
  { name: 'Development', href: '/developments' },
  { name: 'Technology', href: '/technology' },
  { name: 'Asset Management', href: '/management' },
  { name: 'Investments and Loans', href: '/investmentsandloans' },
  { name: 'Other Industries', href: '/otherindustries' },
];

export default function GroupWheel({ activeSector, setActiveSector }) {
  const [circleDiameter, setCircleDiameter] = useState(360);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 400) setCircleDiameter(240);
      else if (width < 640) setCircleDiameter(280);
      else setCircleDiameter(360);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const radius = circleDiameter / 2;
  const labelRadius = radius + 28;
  const dotRadius = radius - 1;

  const currentSector = sectors.find((s) => s.name === activeSector);

  return (
    <div
      className="relative w-full mx-auto mt-20 text-white"
      style={{ height: `${circleDiameter + 100}px`, maxWidth: `${circleDiameter + 80}px` }}
    >
      {/* Main Circle */}
      <div
        className="absolute top-1/2 left-1/2 rounded-full border border-zinc-700/80 shadow-[0_0_80px_rgba(255,255,255,0.05)]"
        style={{
          width: `${circleDiameter}px`,
          height: `${circleDiameter}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Center Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-3">
        {currentSector ? (
          <>
            <div className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-100">
              {currentSector.name}
            </div>
            <Link
              href={currentSector.href}
              className="inline-flex items-center rounded-full border border-zinc-600/80 px-4 py-1.5 text-xs sm:text-sm text-zinc-100 hover:bg-zinc-800 transition-colors"
            >
              Learn More
            </Link>
          </>
        ) : (
          <div className="text-white text-lg sm:text-xl font-semibold tracking-wide">SECTORS</div>
        )}
      </div>

      {/* Dots + Labels */}
      {sectors.map((sector, i) => {
        const angleDeg = (360 / sectors.length) * i - 90;
        const angleRad = (angleDeg * Math.PI) / 180;

        const dotX = dotRadius * Math.cos(angleRad);
        const dotY = dotRadius * Math.sin(angleRad);
        const labelX = labelRadius * Math.cos(angleRad);
        const labelY = labelRadius * Math.sin(angleRad);

        const isActive = activeSector === sector.name;

        return (
          <div key={sector.name}>
            {/* Dot */}
            <button
              aria-label={`Select ${sector.name}`}
              onClick={() => setActiveSector(sector.name)}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ top: `calc(50% + ${dotY}px)`, left: `calc(50% + ${dotX}px)` }}
            >
              <span
                className={[
                  'block rounded-full transition-all duration-300',
                  isActive
                    ? // active: yellow with soft glow
                      'w-6 h-6 bg-yellow-400 ring-2 ring-yellow-300/60 shadow-[0_0_24px_rgba(250,204,21,0.45)]'
                    : // inactive: subtle neutral with hover to yellow
                      'w-3.5 h-3.5 bg-zinc-200/90 hover:bg-yellow-300',
                ].join(' ')}
              />
            </button>

            {/* Label */}
            <div
              onClick={() => setActiveSector(sector.name)}
              className={[
                'absolute text-center whitespace-nowrap cursor-pointer transition-colors duration-200',
                isActive ? 'text-white font-semibold' : 'text-zinc-300 hover:text-white',
                'text-[10px] sm:text-sm',
              ].join(' ')}
              style={{
                top: `calc(50% + ${labelY}px)`,
                left: `calc(50% + ${labelX}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {sector.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
