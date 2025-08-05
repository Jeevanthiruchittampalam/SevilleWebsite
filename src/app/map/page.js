'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Header from '../components/Header';
import Footer from '../components/Footer';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 49.2385, // Roughly between the two locations
  lng: -123.0736,
};

const locations = [
  {
    name: '3925 Kingsway Avenue',
    position: { lat: 49.2323, lng: -123.0205 },
  },
  {
    name: '2233 W 35th Ave',
    position: { lat: 49.2396, lng: -123.1624 },
  },
];

export default function MapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Rental Locations</h1>

        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
          >
            {locations.map((loc, i) => (
              <Marker key={i} position={loc.position} title={loc.name} />
            ))}
          </GoogleMap>
        </LoadScript>
      </main>

      <Footer />
    </div>
  );
}
