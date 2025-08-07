'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MySevillePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero / Banner Section */}
      <section className="w-full bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MySeville</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            For tenants, clients, and community members of Seville Investments. View account details,
            receive important updates, access exclusive content, and file service requests — all in one place.
          </p>
        </div>
      </section>

      {/* Login Form Section */}
      <main className="flex-grow px-6 py-16 flex justify-center items-center bg-gray-100">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Sign In to Your Account
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Trouble signing in? Contact{' '}
              <a href="mailto:jeevan@sevilleinvestments.ca" className="text-blue-600 hover:underline">
                jeevan@sevilleinvestments.ca
              </a>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
