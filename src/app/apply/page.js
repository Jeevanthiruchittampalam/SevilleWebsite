// src/app/apply/page.js
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplyForm from './ApplyForm';

export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* HERO */}
      <section className="relative -mt-16 pt-28 md:pt-36 pb-10 w-full overflow-hidden min-h-[46vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/forrentbg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/15" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-black/40 backdrop-blur-sm ring-1 ring-white/10 rounded-xl p-8 md:p-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
              Rental Application
            </h1>
            <p className="text-base md:text-lg text-zinc-200 italic">
              Complete the steps below. You can upload a credit report and documents before submitting.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <ApplyForm />

      <Footer />
    </div>
  );
}
