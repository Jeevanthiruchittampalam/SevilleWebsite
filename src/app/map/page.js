'use client';

import { GoogleMap, LoadScriptNext, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 49.2385,
  lng: -123.0736,
};

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
  {
    title: '1 Bedroom Unit',
    price: '$1,775',
    description: '650ft² - Available Sept 1, 2025 - $2000/month with $225 incentive.',
  },
  {
    title: '2 Bedroom Unit',
    price: '$2,100',
    description: '850ft² - Available Sept 1, 2025 - $2300/month with $200 incentive.',
  },
];

export default function MapPage() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [mapsApi, setMapsApi] = useState(null);
  const [mapKey, setMapKey] = useState(0); // ✅ force re-render

  // ✅ Force refresh of map on back navigation
  useEffect(() => {
    setMapKey(prev => prev + 1);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Rental Locations</h1>

        <LoadScriptNext
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            key={mapKey}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            onLoad={() => setMapsApi(window.google.maps)}
          >
            {ownedBuildings.map((building, index) => (
              <Marker
                key={index}
                position={building.position}
                onClick={() => setActiveMarker(index)}
                icon={
                  mapsApi
                    ? {
                        url: building.hasListing
                          ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                          : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                        scaledSize: new mapsApi.Size(40, 40),
                      }
                    : undefined
                }
              >
                {activeMarker === index && (
                  <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                    <div className="text-sm">
                      <p className="font-semibold mb-1">{building.name}</p>
                      {building.hasListing ? (
                        <div>
                          {kingswayListings.map((listing, i) => (
                            <div key={i} className="mb-2">
                              <p className="font-medium">{listing.title}</p>
                              <p className="text-xs text-gray-600">{listing.description}</p>
                            </div>
                          ))}
                          <Link href="/forrent" className="text-blue-600 underline text-xs">
                            View Listings
                          </Link>
                        </div>
                      ) : (
                        <p className="text-xs text-gray-600">No Current Vacancies</p>
                      )}
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </LoadScriptNext>
      </main>

      <Footer />
    </div>
  );
}
