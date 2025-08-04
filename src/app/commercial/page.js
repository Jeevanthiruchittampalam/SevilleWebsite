'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black">
      <Header />

      <main className="flex-grow p-8 text-center">
        <h1 className="text-3xl font-bold">Commercial</h1>
        <p className="mt-4 text-gray-600">This page is under construction :/</p>
      </main>

      <Footer />
    </div>
  );
}
