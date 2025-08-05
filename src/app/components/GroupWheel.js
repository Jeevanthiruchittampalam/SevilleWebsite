'use client';

import React, { useEffect, useState } from 'react';

const sectors = [
  'Investments and Loans',
  'Development',
  'Technology',
  'Management',
  'Properties',
  'Other Industries',
];

export default function GroupWheel({ activeSector, setActiveSector }) {
  const [circleDiameter, setCircleDiameter] = useState(360);

  // Dynamically adjust circle size based on window width
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setCircleDiameter(240);
      } else if (width < 640) {
        setCircleDiameter(280);
      } else {
        setCircleDiameter(360);
      }
    };

    updateSize(); // set on mount
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const radius = circleDiameter / 2;
  const labelRadius = radius + 28;
  const dotRadius = radius - 1;

  return (
    <div
      className="relative w-full mx-auto mt-20"
      style={{ height: `${circleDiameter + 80}px`, maxWidth: `${circleDiameter + 80}px` }}
    >
      {/* Main Circle */}
      <div
        className="absolute top-1/2 left-1/2 border border-white rounded-full"
        style={{
          width: `${circleDiameter}px`,
          height: `${circleDiameter}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base sm:text-lg font-bold tracking-widest text-center">
        SECTORS
      </div>

      {sectors.map((sector, i) => {
        const angleDeg = (360 / sectors.length) * i - 90;
        const angleRad = (angleDeg * Math.PI) / 180;
        const dotX = dotRadius * Math.cos(angleRad);
        const dotY = dotRadius * Math.sin(angleRad);
        const labelX = labelRadius * Math.cos(angleRad);
        const labelY = labelRadius * Math.sin(angleRad);
        const isActive = activeSector === sector;

        return (
          <div key={sector}>
            {/* Dot */}
            <div
              className="absolute transition-all duration-300 cursor-pointer"
              style={{
                top: `calc(50% + ${dotY}px)`,
                left: `calc(50% + ${dotX}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
              onClick={() => setActiveSector(sector)}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  isActive ? 'w-6 h-6 bg-blue-500' : 'w-3.5 h-3.5 bg-white'
                }`}
              />
            </div>

            {/* Label */}
            <div
              className="absolute text-center text-[10px] sm:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              style={{
                top: `calc(50% + ${labelY}px)`,
                left: `calc(50% + ${labelX}px)`,
                transform: 'translate(-50%, -50%)',
                color: isActive ? '#3B82F6' : '#FFFFFF',
                fontWeight: isActive ? 600 : 400,
              }}
              onClick={() => setActiveSector(sector)}
            >
              {sector}
            </div>
          </div>
        );
      })}
    </div>
  );
}
