'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function MySevillePage() {
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign-in placeholder — connect your auth here.');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO with required copy */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-12 w-full overflow-hidden">
        {/* Soft gradient backdrop (keeps header area dark) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
              Welcome to MySeville
            </h1>
            <p className="text-base md:text-lg text-zinc-200">
              For tenants, clients, and community members of Seville Investments. View account details,
              receive important updates, access exclusive content, and file service requests — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Simple centered login */}
      <main className="flex-grow px-6 py-16 flex items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-6">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold tracking-wide text-zinc-300 mb-1.5">
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold tracking-wide text-zinc-300 mb-1.5">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPw ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-md bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 px-4 py-2.5 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="absolute inset-y-0 right-0 px-3 text-zinc-400 hover:text-zinc-200"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2.5 text-white hover:bg-zinc-800 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Sign In
            </button>

            <p className="text-center text-xs text-zinc-400">
              Trouble signing in?{' '}
              <a href="mailto:gierly@sevilleinvestments.ca" className="underline text-yellow-400 hover:text-yellow-300">
                gierly@sevilleinvestments.ca
              </a>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
