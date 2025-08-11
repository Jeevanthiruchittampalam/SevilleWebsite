'use client';

import { GoogleMap, LoadScriptNext, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

// Map container size
const containerStyle = { width: '100%', height: '600px' };

// Vancouver center
const center = { lat: 49.2385, lng: -123.0736 };

// Dark map style
const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#1a1a1a' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1a1a1a' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#9ca3af' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#111827' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#27272a' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#0b0b0b' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#9ca3af' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#4b5563' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#111827' }] },
  { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#f3d19c' }] },
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#111827' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0b1220' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#64748b' }] },
];

const mapOptions = {
  styles: darkMapStyle,
  backgroundColor: '#000000',
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

// Data
const ownedBuildings = [
  { name: '3925 Kingsway Avenue', position: { lat: 49.2323, lng: -123.0205 }, hasListing: true },
  { name: 'Belmont Place - 250 East 2nd St', position: { lat: 49.3103, lng: -123.0755 }, hasListing: false },
  { name: '1050 Bidwell Street, Vancouver BC V6G 2K1', position: { lat: 49.2885, lng: -123.1398 }, hasListing: false },
  { name: 'Centennial Manor - 312 East 1st North Van', position: { lat: 49.3122, lng: -123.0664 }, hasListing: false },
  { name: 'Parkview Place - 328 3rd St East North Van', position: { lat: 49.3165, lng: -123.0669 }, hasListing: false },
  { name: 'St Andrews Manor - 215 St Andrews Ave', position: { lat: 49.3139, lng: -123.0717 }, hasListing: false },
  { name: 'Townhouse - 55 East 14th, Vancouver', position: { lat: 49.2549, lng: -123.1035 }, hasListing: false },
  { name: 'Westwood Apts - 161 4th St West, North Van, V7M 1H6', position: { lat: 49.3131, lng: -123.0772 }, hasListing: false },
];

const kingswayListings = [
  { title: '1 Bedroom Unit', price: '$1,775', description: '650ft² - Available Sept 1, 2025 - $2000/month with $225 incentive.' },
  { title: '2 Bedroom Unit', price: '$2,100', description: '850ft² - Available Sept 1, 2025 - $2300/month with $200 incentive.' },
];

// Build a bright haloed SVG marker as a data URL
const makeSvgMarker = ({ size = 28, fill = '#FACC15', halo = '#F59E0B' } = {}) => {
  const s = size;
  const r = s / 2;
  const inner = r - 4;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
      <circle cx="${r}" cy="${r}" r="${inner}" fill="none"
              stroke="${halo}" stroke-opacity="0.6" stroke-width="${Math.max(4, s * 0.22)}" />
      <circle cx="${r}" cy="${r}" r="${inner - 2}" fill="${fill}" />
      <circle cx="${r}" cy="${r}" r="${inner - 2}" fill="none" stroke="white" stroke-width="1.2" stroke-opacity="0.9" />
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function MapPage() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [mapsApi, setMapsApi] = useState(null);
  const [mapKey, setMapKey] = useState(0);
  const mapRef = useRef(null);

  // Force refresh of map on back navigation
  useEffect(() => setMapKey((prev) => prev + 1), []);

  // Icon factory using google.maps.Size/Point
  const getIcon = useCallback(
    ({ hasListing, isActive }) => {
      if (!mapsApi) return undefined;

      const baseSize = hasListing ? 30 : 26;
      const size = isActive ? baseSize + 8 : baseSize;

      // Listings: vibrant yellow; Non-listings: neon purple
      const fill = hasListing ? '#FACC15' /* yellow-400 */ : '#C084FC' /* violet-400 (neon-ish) */;
      const halo = hasListing ? '#F59E0B' /* amber-500 */ : '#A21CAF' /* fuchsia-700 halo */;

      const url = makeSvgMarker({ size, fill, halo });
      return {
        url,
        scaledSize: new mapsApi.Size(size, size),
        anchor: new mapsApi.Point(size / 2, size / 2),
      };
    },
    [mapsApi]
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* Dark header band so the sticky header sits on black */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-6 w-full bg-gradient-to-b from-black to-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Our Rental Locations</h1>
          <p className="mt-3 text-center text-zinc-400">Explore buildings we own and manage across the Lower Mainland.</p>
        </div>
      </section>

      <main className="flex-grow px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Map card */}
          <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
            <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                key={mapKey}
                onLoad={(map) => {
                  mapRef.current = map;
                  setMapsApi(window.google.maps);
                }}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
                options={mapOptions}
              >
                {ownedBuildings.map((building, index) => {
                  const isActive = activeMarker === index;
                  const icon = getIcon({ hasListing: building.hasListing, isActive });

                  return (
                    <Marker
                      key={index}
                      position={building.position}
                      onClick={() => setActiveMarker(index)}
                      icon={icon}
                      zIndex={isActive ? 1000 : building.hasListing ? 900 : 800}
                    >
                      {isActive && (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                          <div className="text-sm text-zinc-800">
                            <p className="font-semibold mb-1">{building.name}</p>
                            {building.hasListing ? (
                              <div>
                                {kingswayListings.map((listing, i) => (
                                  <div key={i} className="mb-2">
                                    <p className="font-medium">{listing.title}</p>
                                    <p className="text-xs text-zinc-600">{listing.description}</p>
                                  </div>
                                ))}
                                <Link href="/forrent" className="text-yellow-600 hover:text-yellow-500 underline text-xs font-medium">
                                  View Listings
                                </Link>
                              </div>
                            ) : (
                              <p className="text-xs text-zinc-600">No Current Vacancies</p>
                            )}
                          </div>
                        </InfoWindow>
                      )}
                    </Marker>
                  );
                })}
              </GoogleMap>
            </LoadScriptNext>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
