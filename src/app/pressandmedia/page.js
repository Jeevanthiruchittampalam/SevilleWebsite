'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PressAndMediaPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-black bg-gray-50">
      <Header />

      {/* Hero */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/media.jpg')" }} // ✅ updated
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl font-bold mb-2">Press & Media</h1>
          <p className="text-base italic">In the spotlight — stories shaping our community</p>
        </div>
      </div>

      {/* Articles (Newest to Oldest) */}
      <main className="flex-grow px-6 py-16 max-w-5xl mx-auto space-y-16">
        {/* Article 3 */}
        <article className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
          <img
            src="/images/media/renovation2.jpg" // ✅ updated
            alt="Repaired unit interiors"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-500 text-sm mb-2">📅 August 2, 2025</p>
          <h2 className="text-2xl font-semibold mb-4">Four Units Repaired at Kingsway — Demand Growing</h2>
          <p className="text-gray-700 mb-3">
            In just under two weeks since the fire at 3925 Kingsway Avenue, Seville Management has already completed
            renovations on four of the ten affected units. All repaired spaces have undergone comprehensive updates,
            including new flooring, cabinetry, and fire-resistant materials.
          </p>
          <p className="text-gray-700 mb-3">
            With relocation support still underway, competition for restored units has surged. Leasing inquiries have
            increased across multiple platforms, and Seville has received strong interest from both displaced tenants
            and new applicants.
          </p>
          <p className="text-gray-700">
            “We’re seeing exceptional interest in these newly renovated units,” noted Palas Chauhan, Seville’s Financial
            Director. “It’s a testament to our resilience and the continued demand for high-quality rental housing in
            the Lower Mainland.”
          </p>
        </article>

        {/* Article 2 */}
        <article className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
          <img
            src="/images/media/renovation1.jpg" // ✅ updated
            alt="Renovation announcement"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-500 text-sm mb-2">📅 July 27, 2025</p>
          <h2 className="text-2xl font-semibold mb-4">Seville Pledges Immediate Support for Kingsway Tenants</h2>
          <p className="text-gray-700 mb-3">
            Following the July 22nd fire at 3925 Kingsway, Seville Management Ltd. has pledged to relocate affected
            tenants into temporary accommodations across other managed properties. The company has activated internal
            relocation teams and partnered with local contractors to expedite support.
          </p>
          <p className="text-gray-700 mb-3">
            Renovation and repair work has already begun on the damaged units, with a full structural review in process.
            Seville has committed to covering all moving costs for impacted tenants and will provide monthly rental
            credits during the repair period.
          </p>
          <p className="text-gray-700">
            “The well-being of our tenants is our top priority,” said Gierly Magrata, Tenant Relations Manager. “We’re
            treating this as an opportunity to improve the quality of these homes for the long term.”
          </p>
        </article>

        {/* Article 1 */}
        <article className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
          <img
            src="/images/media/mediafire.jpg" // ✅ updated
            alt="Fire damage at 3925 Kingsway"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-500 text-sm mb-2">📅 July 23, 2025</p>
          <h2 className="text-2xl font-semibold mb-4">Suspect Identified in 3925 Kingsway Fire Incident</h2>
          <p className="text-gray-700 mb-3">
            On July 22nd, emergency crews responded to a significant fire at one of Seville Management’s properties
            located at 3925 Kingsway Avenue. The fire, which began on the third floor, caused extensive damage to ten
            residential units before it was contained. Residents were safely evacuated and no injuries were reported.
          </p>
          <p className="text-gray-700 mb-3">
            Vancouver Police have now identified and charged a suspect in connection with the arson. The investigation
            remains ongoing, with further charges pending. The local community has rallied around the displaced
            residents, many of whom are long-term tenants of the building.
          </p>
          <p className="text-gray-700">
            Seville Management expressed gratitude to emergency responders and reassured tenants that long-term
            restoration plans were already underway. The company has committed to both structural and amenity upgrades
            as part of the post-incident recovery.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
