'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO: larger image (600px) with dark overlay */}
      <section className="relative -mt-16 w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/paintsplash.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              We’re here to help. Let’s connect.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="flex-grow px-6 py-16 max-w-3xl mx-auto space-y-8 text-center sm:text-left">
        <section className="rounded-2xl bg-zinc-950/70 backdrop-blur-md ring-1 ring-zinc-800 p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <h2 className="text-2xl font-semibold mb-4">Office Information</h2>

          <div className="space-y-3 text-zinc-300">
            <p>
              <span className="text-zinc-400">Address:</span><br />
              2233 W 35th Ave<br />
              Vancouver, BC V6M 1J4
            </p>

            <p>
              <span className="text-zinc-400">Phone:</span>{' '}
              <a href="tel:+16042667162" className="underline decoration-white/30 hover:decoration-white">
                (604) 266-7162
              </a>
            </p>

            <p>
              <span className="text-zinc-400">Province:</span> British Columbia
            </p>
          </div>

          <hr className="my-6 border-zinc-800" />

          <h3 className="text-xl font-semibold mb-3">Email Contacts</h3>
          <div className="space-y-2 text-zinc-300">
            <p>
              <span className="text-zinc-400">Rental:</span>{' '}
              <a href="mailto:geirly@sevilleinvestments.ca" className="underline text-yellow-400 hover:text-yellow-300">
                geirly@sevilleinvestments.ca
              </a>
            </p>
            <p>
              <span className="text-zinc-400">Technical:</span>{' '}
              <a href="mailto:jeevan@sevilleinvestments.ca" className="underline text-yellow-400 hover:text-yellow-300">
                jeevan@sevilleinvestments.ca
              </a>
            </p>
            <p>
              <span className="text-zinc-400">Financial:</span>{' '}
              <a href="mailto:palas@sevilleinvestments.ca" className="underline text-yellow-400 hover:text-yellow-300">
                palas@sevilleinvestments.ca
              </a>
            </p>
          </div>
        </section>

        <p className="text-center text-sm text-zinc-400">
          Whether you&apos;re a current tenant, prospective client, or vendor — we’re ready to support you.
        </p>
      </main>

      <Footer />
    </div>
  );
}
