// src/app/apply/ApplyForm.jsx
'use client';

import { useState } from 'react';

const steps = [
  'Your information',
  'Property information',
  'Employment',
  'Emergency & other details',
  'Uploads & consent',
];

const provinces = ['BC','AB','SK','MB','ON','QC','NB','NS','PE','NL','YT','NT','NU'];

// ---- initial state factories so we can fully reset after submit ----
const createInitialApp = () => ({
  cityApplyingFor: '',
  firstName: '', lastName: '',
  birthDate: '',
  phone: '', email: '',
  idNumber: '',
  currentAddress: { country: 'Canada', street: '', city: '', province: 'BC', postal: '' },
  currentMoveInYYYYMM: '',
  currentLandlord: { first: '', last: '', phone: '', email: '' },
  currentMonthlyRent: '',
  reasonLeaving: '',
  petsInfo: '',
  previousLandlord: { first: '', last: '', phone: '' },
  previousAddress: { country: 'Canada', street: '', city: '', province: 'BC', postal: '' },
  previousRent: '',
  previousStart: '', previousEnd: '',
});

const createInitialProp = () => ({
  accommodationAddress: { country: 'Canada', street: '', city: '', province: 'BC', postal: '' },
  adults: 1, bedrooms: 1, bathrooms: 1, children: 0,
  desiredMoveInDate: '', leaseDuration: '', desiredRent: '',
});

const createInitialEmployment = () => ([
  { employer: '', address: { country:'Canada', street:'', city:'', province:'BC', postal:'' },
    phone:'', email:'', position:'', start:'', end:'', monthlyGross:'', supervisorTitle:'', supervisorFirst:'', supervisorLast:'' }
]);

const createInitialEmergency = () => ({ first:'', last:'', relationship:'', phone:'', email:'' });

const createInitialVehicles = () => ([{ make:'', model:'', year:'', color:'', plate:'' }]);

const createInitialUtilities = () => ({ bchydro:'No', gas:'No' });

const createInitialReference = () => ({
  first:'', last:'', address:{ country:'Canada', street:'', city:'', province:'BC', postal:'' }, phone:'', email:'', relationship:''
});

const createInitialOccupants = () => ([{ name:'', relationship:'' }]);

const createInitialFiles = () => ({
  idImage: null,
  petsImage: null,
  creditReport: null,
  paystubsOrBank: null,
  t4OrNoa: null,
});

export default function ApplyForm() {
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');

  // ---------- core fields ----------
  const [app, setApp] = useState(() => createInitialApp());
  const [prop, setProp] = useState(() => createInitialProp());
  const [employment, setEmployment] = useState(() => createInitialEmployment());
  const [emergency, setEmergency] = useState(() => createInitialEmergency());
  const [vehicles, setVehicles] = useState(() => createInitialVehicles());
  const [utilities, setUtilities] = useState(() => createInitialUtilities());
  const [criminal, setCriminal] = useState('No');
  const [reference, setReference] = useState(() => createInitialReference());
  const [occupants, setOccupants] = useState(() => createInitialOccupants());

  // ---------- files ----------
  const [files, setFiles] = useState(() => createInitialFiles());

  function update(obj, setter, path) {
    setter((prev) => {
      const next = structuredClone(prev);
      let cur = next;
      for (let i=0;i<path.length-1;i++) cur = cur[path[i]];
      cur[path.at(-1)] = obj;
      return next;
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true); setErr(''); setOk(false);

    try {
      const fd = new FormData();
      fd.set('app', JSON.stringify(app));
      fd.set('prop', JSON.stringify(prop));
      fd.set('employment', JSON.stringify(employment));
      fd.set('emergency', JSON.stringify(emergency));
      fd.set('vehicles', JSON.stringify(vehicles));
      fd.set('utilities', JSON.stringify(utilities));
      fd.set('criminal', criminal);
      fd.set('reference', JSON.stringify(reference));
      fd.set('occupants', JSON.stringify(occupants));

      // files (optional)
      Object.entries(files).forEach(([k, v]) => v && fd.append(k, v));

      const res = await fetch('/api/rental-application', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Submission failed');

      // --- SUCCESS: show message, go back to step 0, and CLEAR the entire form ---
      setOk(true);
      setStep(0);

      setApp(createInitialApp());
      setProp(createInitialProp());
      setEmployment(createInitialEmployment());
      setEmergency(createInitialEmergency());
      setVehicles(createInitialVehicles());
      setUtilities(createInitialUtilities());
      setCriminal('No');
      setReference(createInitialReference());
      setOccupants(createInitialOccupants());
      setFiles(createInitialFiles());

      setSending(false);
    } catch (e) {
      setSending(false);
      setErr(e.message || 'Unexpected error');
    }
  }

  const inputBase =
    'w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 ' +
    'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500';

  const selectBase =
    'w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-900 ' +
    'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500';

  const fileInputBase =
    'block w-full text-sm text-slate-700 ' +
    'file:mr-3 file:px-3 file:py-2 file:rounded-md file:border-0 ' +
    'file:bg-slate-100 file:text-slate-800 file:cursor-pointer';

  return (
    <main className="flex-1 px-4 md:px-6 pb-20 max-w-6xl mx-auto w-full">
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-6 mt-8 md:mt-10">
        {/* LEFT rail */}
        <aside className="md:sticky md:top-24 h-fit rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-4">
          <h3 className="text-sm font-semibold text-slate-800 mb-3">Rental application</h3>
          <ol className="space-y-2 text-sm">
            {steps.map((label, i) => (
              <li key={label} className="flex items-center gap-3">
                <span
                  className={`grid place-items-center h-6 w-6 rounded-full text-xs font-medium ${
                    i <= step ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {i+1}
                </span>
                <button
                  type="button"
                  onClick={() => setStep(i)}
                  className={`text-left transition-colors ${
                    i === step
                      ? 'text-slate-900 font-medium'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ol>
          <div className="mt-4 text-[11px] text-slate-500">
            Docs accepted: PDF/JPG/PNG • up to ~5MB each.
          </div>
        </aside>

        {/* RIGHT panel */}
        <section className="space-y-8">
          {/* STEP 0: YOUR INFORMATION */}
          {step===0 && (
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Your information</h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Personal Credit Report is required. If no Canadian credit history, upload last two months’ bank statements.
              </p>

              {/* city + name + dob */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Which City are you applying for? *</label>
                  <input
                    required
                    value={app.cityApplyingFor}
                    onChange={(e)=>setApp({...app, cityApplyingFor:e.target.value})}
                    className={inputBase}
                  />
                </div>
                <div />
                <div>
                  <label className="block text-sm text-slate-800 mb-1">First name *</label>
                  <input
                    required
                    value={app.firstName}
                    onChange={(e)=>setApp({...app, firstName:e.target.value})}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Last name *</label>
                  <input
                    required
                    value={app.lastName}
                    onChange={(e)=>setApp({...app, lastName:e.target.value})}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Birth date *</label>
                  <input
                    type="date"
                    required
                    value={app.birthDate}
                    onChange={(e)=>setApp({...app, birthDate:e.target.value})}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* contact + ID */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Home phone *</label>
                  <input
                    required
                    value={app.phone}
                    onChange={(e)=>setApp({...app, phone:e.target.value})}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={app.email}
                    onChange={(e)=>setApp({...app, email:e.target.value})}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Driver’s License / ID # *</label>
                  <input
                    required
                    value={app.idNumber}
                    onChange={(e)=>setApp({...app, idNumber:e.target.value})}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* ID upload */}
              <div>
                <label className="block text-sm text-slate-800 mb-1">Driver’s License / ID image upload *</label>
                <input
                  required
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e)=>setFiles(f=>({...f, idImage: e.target.files?.[0] || null}))}
                  className={fileInputBase}
                />
              </div>

              {/* current address */}
              <div>
                <h3 className="font-medium text-slate-900 mb-2">Current address *</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">Street address</label>
                    <input
                      value={app.currentAddress.street}
                      onChange={(e)=>update(e.target.value,setApp,['currentAddress','street'])}
                      placeholder="Street address"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">City</label>
                    <input
                      value={app.currentAddress.city}
                      onChange={(e)=>update(e.target.value,setApp,['currentAddress','city'])}
                      placeholder="City"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">Province</label>
                    <select
                      value={app.currentAddress.province}
                      onChange={(e)=>update(e.target.value,setApp,['currentAddress','province'])}
                      className={selectBase}
                    >
                      {provinces.map(p=><option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">Postal code</label>
                    <input
                      value={app.currentAddress.postal}
                      onChange={(e)=>update(e.target.value,setApp,['currentAddress','postal'])}
                      placeholder="Postal code"
                      className={inputBase}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-sm text-slate-800 mb-1">
                    When did you move into your current address? *
                  </label>
                  <input
                    type="month"
                    required
                    value={app.currentMoveInYYYYMM}
                    onChange={(e)=>setApp({...app, currentMoveInYYYYMM:e.target.value})}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* current landlord */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Current Landlord First *</label>
                  <input
                    value={app.currentLandlord.first}
                    onChange={(e)=>update(e.target.value,setApp,['currentLandlord','first'])}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Current Landlord Last *</label>
                  <input
                    value={app.currentLandlord.last}
                    onChange={(e)=>update(e.target.value,setApp,['currentLandlord','last'])}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Landlord Phone *</label>
                  <input
                    value={app.currentLandlord.phone}
                    onChange={(e)=>update(e.target.value,setApp,['currentLandlord','phone'])}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Landlord Email *</label>
                  <input
                    type="email"
                    value={app.currentLandlord.email}
                    onChange={(e)=>update(e.target.value,setApp,['currentLandlord','email'])}
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Current Monthly Rent *</label>
                  <input
                    value={app.currentMonthlyRent}
                    onChange={(e)=>setApp({...app, currentMonthlyRent:e.target.value})}
                    className={inputBase}
                    placeholder="$0.00"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-800 mb-1">Reason for leaving *</label>
                  <input
                    value={app.reasonLeaving}
                    onChange={(e)=>setApp({...app, reasonLeaving:e.target.value})}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* pets */}
              <div>
                <label className="block text-sm text-slate-800 mb-1">Pets (Breed/Size & Reg #) *</label>
                <input
                  value={app.petsInfo}
                  onChange={(e)=>setApp({...app, petsInfo:e.target.value})}
                  className={inputBase}
                />
                <div className="mt-2">
                  <label className="block text-sm text-slate-800 mb-1">Pets pictures</label>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e)=>setFiles(f=>({...f, petsImage: e.target.files?.[0] || null}))}
                    className={fileInputBase}
                  />
                </div>
              </div>

              {/* previous landlord + address */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Previous Landlord First</label>
                  <input
                    value={app.previousLandlord.first}
                    onChange={(e)=>update(e.target.value,setApp,['previousLandlord','first'])}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Previous Landlord Last</label>
                  <input
                    value={app.previousLandlord.last}
                    onChange={(e)=>update(e.target.value,setApp,['previousLandlord','last'])}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Previous Landlord Phone</label>
                  <input
                    value={app.previousLandlord.phone}
                    onChange={(e)=>update(e.target.value,setApp,['previousLandlord','phone'])}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Previous Rent</label>
                  <input
                    value={app.previousRent}
                    onChange={(e)=>setApp({...app, previousRent:e.target.value})}
                    className={inputBase}
                    placeholder="$0.00"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-medium text-slate-900 mb-2">Previous address</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">Street address</label>
                    <input
                      value={app.previousAddress.street}
                      onChange={(e)=>update(e.target.value,setApp,['previousAddress','street'])}
                      placeholder="Street address"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">City</label>
                    <input
                      value={app.previousAddress.city}
                      onChange={(e)=>update(e.target.value,setApp,['previousAddress','city'])}
                      placeholder="City"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">Province</label>
                    <select
                      value={app.previousAddress.province}
                      onChange={(e)=>update(e.target.value,setApp,['previousAddress','province'])}
                      className={selectBase}
                    >
                      {provinces.map(p=><option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">Postal code</label>
                    <input
                      value={app.previousAddress.postal}
                      onChange={(e)=>update(e.target.value,setApp,['previousAddress','postal'])}
                      placeholder="Postal code"
                      className={inputBase}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">When did you live there? (start)</label>
                    <input
                      type="date"
                      value={app.previousStart}
                      onChange={(e)=>setApp({...app, previousStart:e.target.value})}
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-800 mb-1">When did you live there? (end)</label>
                    <input
                      type="date"
                      value={app.previousEnd}
                      onChange={(e)=>setApp({...app, previousEnd:e.target.value})}
                      className={inputBase}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={()=>setStep(1)}
                  className="rounded-full border border-indigo-500 bg-indigo-600 text-white px-6 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 1: PROPERTY INFO */}
          {step===1 && (
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Property information</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Street address</label>
                  <input
                    value={prop.accommodationAddress.street}
                    onChange={(e)=>update(e.target.value,setProp,['accommodationAddress','street'])}
                    placeholder="Street address"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">City</label>
                  <input
                    value={prop.accommodationAddress.city}
                    onChange={(e)=>update(e.target.value,setProp,['accommodationAddress','city'])}
                    placeholder="City"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Province</label>
                  <select
                    value={prop.accommodationAddress.province}
                    onChange={(e)=>update(e.target.value,setProp,['accommodationAddress','province'])}
                    className={selectBase}
                  >
                    {provinces.map(p=><option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Postal code</label>
                  <input
                    value={prop.accommodationAddress.postal}
                    onChange={(e)=>update(e.target.value,setProp,['accommodationAddress','postal'])}
                    placeholder="Postal code"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Adults *</label>
                  <input
                    type="number"
                    min={0}
                    value={prop.adults}
                    onChange={(e)=>setProp({...prop, adults:Number(e.target.value)})}
                    className={inputBase}
                    placeholder="Adults *"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Children</label>
                  <input
                    type="number"
                    min={0}
                    value={prop.children}
                    onChange={(e)=>setProp({...prop, children:Number(e.target.value)})}
                    className={inputBase}
                    placeholder="Children"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Bedrooms *</label>
                  <input
                    type="number"
                    min={0}
                    value={prop.bedrooms}
                    onChange={(e)=>setProp({...prop, bedrooms:Number(e.target.value)})}
                    className={inputBase}
                    placeholder="Bedrooms *"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Bathrooms *</label>
                  <input
                    type="number"
                    min={0}
                    value={prop.bathrooms}
                    onChange={(e)=>setProp({...prop, bathrooms:Number(e.target.value)})}
                    className={inputBase}
                    placeholder="Bathrooms *"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Desired move-in date *</label>
                  <input
                    type="date"
                    value={prop.desiredMoveInDate}
                    onChange={(e)=>setProp({...prop, desiredMoveInDate:e.target.value})}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Lease duration</label>
                  <input
                    value={prop.leaseDuration}
                    onChange={(e)=>setProp({...prop, leaseDuration:e.target.value})}
                    className={inputBase}
                    placeholder="Lease duration"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Desired rent</label>
                  <input
                    value={prop.desiredRent}
                    onChange={(e)=>setProp({...prop, desiredRent:e.target.value})}
                    className={inputBase}
                    placeholder="Desired rent $0.00"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={()=>setStep(0)}
                  className="rounded-full border border-slate-300 bg-white text-slate-700 px-5 py-2 text-sm hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={()=>setStep(2)}
                  className="rounded-full border border-indigo-500 bg-indigo-600 text-white px-6 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: EMPLOYMENT */}
          {step===2 && (
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Employment</h2>
              {employment.map((job, i)=>(
                <div key={i} className="rounded-xl ring-1 ring-slate-200 bg-slate-50 p-4 space-y-3">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      value={job.employer}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'employer'])}
                      placeholder="Employer name *"
                      className={inputBase}
                    />
                    <input
                      value={job.phone}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'phone'])}
                      placeholder="Employer phone *"
                      className={inputBase}
                    />
                    <input
                      value={job.email}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'email'])}
                      placeholder="Employer email"
                      className={inputBase}
                    />
                    <input
                      value={job.position}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'position'])}
                      placeholder="Position held *"
                      className={inputBase}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="date"
                      value={job.start}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'start'])}
                      className={inputBase}
                      placeholder="Start"
                    />
                    <input
                      type="date"
                      value={job.end}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'end'])}
                      className={inputBase}
                      placeholder="End"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      value={job.monthlyGross}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'monthlyGross'])}
                      placeholder="Monthly gross salary *"
                      className={inputBase}
                    />
                    <input
                      value={job.supervisorTitle}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'supervisorTitle'])}
                      placeholder="Supervisor title"
                      className={inputBase}
                    />
                    <input
                      value={job.supervisorFirst}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'supervisorFirst'])}
                      placeholder="Supervisor first"
                      className={inputBase}
                    />
                    <input
                      value={job.supervisorLast}
                      onChange={(e)=>update(e.target.value,setEmployment,[i,'supervisorLast'])}
                      placeholder="Supervisor last"
                      className={inputBase}
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={()=>setEmployment(e=>[...e,{ employer:'', address:{country:'Canada',street:'',city:'',province:'BC',postal:''}, phone:'', email:'', position:'', start:'', end:'', monthlyGross:'', supervisorTitle:'', supervisorFirst:'', supervisorLast:'' }])}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                + Add additional Employment
              </button>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={()=>setStep(1)}
                  className="rounded-full border border-slate-300 bg-white text-slate-700 px-5 py-2 text-sm hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={()=>setStep(3)}
                  className="rounded-full border border-indigo-500 bg-indigo-600 text-white px-6 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: EMERGENCY + OTHER DETAILS */}
          {step===3 && (
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-6 md:p-8 space-y-8">
              <h2 className="text-2xl font-semibold text-slate-900">Emergency & other details</h2>

              <div>
                <h3 className="font-medium text-slate-900 mb-2">Emergency Contact *</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    value={emergency.first}
                    onChange={(e)=>setEmergency({...emergency, first:e.target.value})}
                    placeholder="First name"
                    className={inputBase}
                  />
                  <input
                    value={emergency.last}
                    onChange={(e)=>setEmergency({...emergency, last:e.target.value})}
                    placeholder="Last name"
                    className={inputBase}
                  />
                  <input
                    value={emergency.relationship}
                    onChange={(e)=>setEmergency({...emergency, relationship:e.target.value})}
                    placeholder="Relationship"
                    className={inputBase}
                  />
                  <input
                    value={emergency.phone}
                    onChange={(e)=>setEmergency({...emergency, phone:e.target.value})}
                    placeholder="Phone"
                    className={inputBase}
                  />
                  <input
                    value={emergency.email}
                    onChange={(e)=>setEmergency({...emergency, email:e.target.value})}
                    placeholder="Email"
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <h3 className="font-medium text-slate-900 mb-2">Vehicles</h3>
                {vehicles.map((v,i)=>(
                  <div key={i} className="grid sm:grid-cols-5 gap-3 mb-3">
                    <input
                      value={v.make}
                      onChange={(e)=>update(e.target.value,setVehicles,[i,'make'])}
                      placeholder="Make"
                      className={inputBase}
                    />
                    <input
                      value={v.model}
                      onChange={(e)=>update(e.target.value,setVehicles,[i,'model'])}
                      placeholder="Model"
                      className={inputBase}
                    />
                    <input
                      value={v.year}
                      onChange={(e)=>update(e.target.value,setVehicles,[i,'year'])}
                      placeholder="Year"
                      className={inputBase}
                    />
                    <input
                      value={v.color}
                      onChange={(e)=>update(e.target.value,setVehicles,[i,'color'])}
                      placeholder="Color"
                      className={inputBase}
                    />
                    <input
                      value={v.plate}
                      onChange={(e)=>update(e.target.value,setVehicles,[i,'plate'])}
                      placeholder="Plate"
                      className={inputBase}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={()=>setVehicles(v=>[...v,{make:'',model:'',year:'',color:'',plate:''}])}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  + Add additional Vehicles
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">BC HYDRO account?</label>
                  <select
                    value={utilities.bchydro}
                    onChange={(e)=>setUtilities({...utilities, bchydro:e.target.value})}
                    className={selectBase}
                  >
                    <option>Yes</option><option>No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">PNG / Fortis account?</label>
                  <select
                    value={utilities.gas}
                    onChange={(e)=>setUtilities({...utilities, gas:e.target.value})}
                    className={selectBase}
                  >
                    <option>Yes</option><option>No</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-800 mb-1">
                  Criminal Record Check — any convictions without pardon? *
                </label>
                <select
                  value={criminal}
                  onChange={(e)=>setCriminal(e.target.value)}
                  className={selectBase}
                >
                  <option>No</option><option>Yes</option>
                </select>
              </div>

              <div>
                <h3 className="font-medium text-slate-900 mb-2">Personal Reference *</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    value={reference.first}
                    onChange={(e)=>setReference({...reference, first:e.target.value})}
                    placeholder="First name"
                    className={inputBase}
                  />
                  <input
                    value={reference.last}
                    onChange={(e)=>setReference({...reference, last:e.target.value})}
                    placeholder="Last name"
                    className={inputBase}
                  />
                  <input
                    value={reference.phone}
                    onChange={(e)=>setReference({...reference, phone:e.target.value})}
                    placeholder="Phone"
                    className={inputBase}
                  />
                  <input
                    value={reference.email}
                    onChange={(e)=>setReference({...reference, email:e.target.value})}
                    placeholder="Email"
                    className={inputBase}
                  />
                  <input
                    value={reference.relationship}
                    onChange={(e)=>setReference({...reference, relationship:e.target.value})}
                    placeholder="Relationship"
                    className={inputBase}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <input
                    value={reference.address.street}
                    onChange={(e)=>update(e.target.value,setReference,['address','street'])}
                    placeholder="Street address"
                    className={inputBase}
                  />
                  <input
                    value={reference.address.city}
                    onChange={(e)=>update(e.target.value,setReference,['address','city'])}
                    placeholder="City"
                    className={inputBase}
                  />
                  <select
                    value={reference.address.province}
                    onChange={(e)=>update(e.target.value,setReference,['address','province'])}
                    className={selectBase}
                  >
                    {provinces.map(p=><option key={p}>{p}</option>)}
                  </select>
                  <input
                    value={reference.address.postal}
                    onChange={(e)=>update(e.target.value,setReference,['address','postal'])}
                    placeholder="Postal code"
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <h3 className="font-medium text-slate-900 mb-2">Additional occupants</h3>
                {occupants.map((o,i)=>(
                  <div key={i} className="grid sm:grid-cols-2 gap-3 mb-3">
                    <input
                      value={o.name}
                      onChange={(e)=>update(e.target.value,setOccupants,[i,'name'])}
                      placeholder="Full name"
                      className={inputBase}
                    />
                    <input
                      value={o.relationship}
                      onChange={(e)=>update(e.target.value,setOccupants,[i,'relationship'])}
                      placeholder="Relationship"
                      className={inputBase}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={()=>setOccupants(o=>[...o,{name:'',relationship:''}])}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  + Add Additional occupants
                </button>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={()=>setStep(2)}
                  className="rounded-full border border-slate-300 bg-white text-slate-700 px-5 py-2 text-sm hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={()=>setStep(4)}
                  className="rounded-full border border-indigo-500 bg-indigo-600 text-white px-6 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: UPLOADS & CONSENT */}
          {step===4 && (
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Uploads & consent</h2>

              <div className="text-sm text-slate-800 space-y-2">
                <p className="font-medium">Personal Credit Report (required)</p>
                <p>
                  Use Borrowell (free):{' '}
                  <a
                    className="underline text-indigo-600 hover:text-indigo-800"
                    href="https://borrowell.com/free-credit-score?utm_campaign=Refer5&utm_medium=web&utm_source=refer2022-4121517"
                    target="_blank"
                  >
                    borrowell.com/free-credit-score
                  </a>
                </p>
                <ol className="list-decimal list-inside text-slate-600">
                  <li>Open Credit Report in the top menu</li>
                  <li>Click “Download Your Credit Report”</li>
                  <li>Upload the PDF below (no screenshots)</li>
                </ol>
                <p className="text-slate-600">
                  If you have no Canadian credit history, upload last two months of bank statements.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Credit report PDF *</label>
                  <input
                    required
                    type="file"
                    accept=".pdf"
                    onChange={(e)=>setFiles(f=>({...f, creditReport: e.target.files?.[0] || null}))}
                    className={fileInputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">
                    Paystubs (3 mos) OR bank statements (3 mos) *
                  </label>
                  <input
                    required
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e)=>setFiles(f=>({...f, paystubsOrBank: e.target.files?.[0] || null}))}
                    className={fileInputBase}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-800 mb-1">Last year’s T4 or NOA</label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e)=>setFiles(f=>({...f, t4OrNoa: e.target.files?.[0] || null}))}
                    className={fileInputBase}
                  />
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-800">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>
                    I consent to credit/background checks and understand this application is not a lease agreement.
                  </span>
                </label>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>
                    I certify the information is accurate and agree to Seville’s BC PIPA-compliant Privacy Policy.
                  </span>
                </label>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={()=>setStep(3)}
                  className="rounded-full border border-slate-300 bg-white text-slate-700 px-5 py-2 text-sm hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button
                  disabled={sending}
                  className="rounded-full border border-indigo-500 bg-indigo-600 text-white px-6 py-2 text-sm font-medium hover:bg-indigo-700 disabled:opacity-60 transition-colors"
                >
                  {sending ? 'Submitting…' : 'Submit application'}
                </button>
              </div>

              {ok && <div className="text-emerald-600 text-sm mt-2">Thanks! Your application has been sent.</div>}
              {err && <div className="text-red-600 text-sm mt-2">{err}</div>}
            </div>
          )}
        </section>
      </form>

      <p className="text-center text-xs text-slate-500 mt-6">
        Questions? Email{' '}
        <a
          href="mailto:gierly@sevilleinvestments.ca"
          className="underline text-indigo-600 hover:text-indigo-800"
        >
          gierly@sevilleinvestments.ca
        </a>
      </p>
    </main>
  );
}
