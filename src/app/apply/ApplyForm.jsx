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

export default function ApplyForm() {
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');

  // ---------- core fields ----------
  const [app, setApp] = useState({
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

  const [prop, setProp] = useState({
    accommodationAddress: { country: 'Canada', street: '', city: '', province: 'BC', postal: '' },
    adults: 1, bedrooms: 1, bathrooms: 1, children: 0,
    desiredMoveInDate: '', leaseDuration: '', desiredRent: '',
  });

  const [employment, setEmployment] = useState([
    { employer: '', address: { country:'Canada', street:'', city:'', province:'BC', postal:'' },
      phone:'', email:'', position:'', start:'', end:'', monthlyGross:'', supervisorTitle:'', supervisorFirst:'', supervisorLast:'' }
  ]);

  const [emergency, setEmergency] = useState({ first:'', last:'', relationship:'', phone:'', email:'' });
  const [vehicles, setVehicles] = useState([{ make:'', model:'', year:'', color:'', plate:'' }]);
  const [utilities, setUtilities] = useState({ bchydro:'No', gas:'No' });
  const [criminal, setCriminal] = useState('No');
  const [reference, setReference] = useState({
    first:'', last:'', address:{ country:'Canada', street:'', city:'', province:'BC', postal:'' }, phone:'', email:'', relationship:''
  });
  const [occupants, setOccupants] = useState([{ name:'', relationship:'' }]);

  // ---------- files ----------
  const [files, setFiles] = useState({
    idImage: null,
    petsImage: null,
    creditReport: null,
    paystubsOrBank: null,
    t4OrNoa: null,
  });

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
      setOk(true);
      setStep(0);
      setSending(false);
    } catch (e) {
      setSending(false);
      setErr(e.message || 'Unexpected error');
    }
  }

  return (
    <main className="flex-1 px-4 md:px-6 pb-20 max-w-6xl mx-auto w-full">
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-6">
        {/* LEFT rail */}
        <aside className="md:sticky md:top-20 h-fit rounded-2xl bg-zinc-950/70 ring-1 ring-zinc-800 p-4">
          <h3 className="text-sm font-semibold text-zinc-200 mb-3">Rental application</h3>
          <ol className="space-y-2 text-sm">
            {steps.map((label, i) => (
              <li key={label} className="flex items-center gap-3">
                <span className={`grid place-items-center h-6 w-6 rounded-full text-xs ${i<=step ? 'bg-yellow-400 text-black' : 'bg-zinc-800 text-zinc-400'}`}>
                  {i+1}
                </span>
                <button type="button" onClick={() => setStep(i)} className={`text-left ${i===step ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`}>
                  {label}
                </button>
              </li>
            ))}
          </ol>
          <div className="mt-4 text-[11px] text-zinc-500">
            Docs accepted: PDF/JPG/PNG • up to ~5MB each.
          </div>
        </aside>

        {/* RIGHT panel */}
        <section className="space-y-8">
          {/* STEP 0: YOUR INFORMATION */}
          {step===0 && (
            <div className="rounded-2xl bg-zinc-950/70 ring-1 ring-zinc-800 p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold">Your information</h2>
              <p className="text-sm text-zinc-400 max-w-2xl">
                Personal Credit Report is required. If no Canadian credit history, upload last two months’ bank statements.
              </p>

              {/* city + name + dob */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Which City are you applying for? *</label>
                  <input required value={app.cityApplyingFor} onChange={(e)=>setApp({...app, cityApplyingFor:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div />
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">First name *</label>
                  <input required value={app.firstName} onChange={(e)=>setApp({...app, firstName:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Last name *</label>
                  <input required value={app.lastName} onChange={(e)=>setApp({...app, lastName:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Birth date *</label>
                  <input type="date" required value={app.birthDate} onChange={(e)=>setApp({...app, birthDate:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
              </div>

              {/* contact + ID */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Home phone *</label>
                  <input required value={app.phone} onChange={(e)=>setApp({...app, phone:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Email *</label>
                  <input type="email" required value={app.email} onChange={(e)=>setApp({...app, email:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Driver’s License / ID # *</label>
                  <input required value={app.idNumber} onChange={(e)=>setApp({...app, idNumber:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
              </div>

              {/* ID upload */}
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Driver’s License / ID image upload *</label>
                <input required type="file" accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e)=>setFiles(f=>({...f, idImage: e.target.files?.[0] || null}))}
                  className="block w-full text-sm text-zinc-300 file:mr-3 file:px-3 file:py-2 file:rounded-md file:border-0 file:bg-zinc-800 file:text-white" />
              </div>

              {/* current address */}
              <div>
                <h3 className="font-medium mb-2">Current address *</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">Street address</label>
                    <input value={app.currentAddress.street} onChange={(e)=>update(e.target.value,setApp,['currentAddress','street'])} placeholder="Street address" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">City</label>
                    <input value={app.currentAddress.city} onChange={(e)=>update(e.target.value,setApp,['currentAddress','city'])} placeholder="City" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">Province</label>
                    <select value={app.currentAddress.province} onChange={(e)=>update(e.target.value,setApp,['currentAddress','province'])} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2">
                      {provinces.map(p=><option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">Postal code</label>
                    <input value={app.currentAddress.postal} onChange={(e)=>update(e.target.value,setApp,['currentAddress','postal'])} placeholder="Postal code" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-sm text-zinc-300 mb-1">When did you move into your current address? *</label>
                  <input type="month" required value={app.currentMoveInYYYYMM} onChange={(e)=>setApp({...app, currentMoveInYYYYMM:e.target.value})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                </div>
              </div>

              {/* current landlord */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Current Landlord First *</label>
                  <input value={app.currentLandlord.first} onChange={(e)=>update(e.target.value,setApp,['currentLandlord','first'])}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Current Landlord Last *</label>
                  <input value={app.currentLandlord.last} onChange={(e)=>update(e.target.value,setApp,['currentLandlord','last'])}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Landlord Phone *</label>
                  <input value={app.currentLandlord.phone} onChange={(e)=>update(e.target.value,setApp,['currentLandlord','phone'])}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Landlord Email *</label>
                  <input type="email" value={app.currentLandlord.email} onChange={(e)=>update(e.target.value,setApp,['currentLandlord','email'])}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Current Monthly Rent *</label>
                  <input value={app.currentMonthlyRent} onChange={(e)=>setApp({...app, currentMonthlyRent:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="$0.00" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-zinc-300 mb-1">Reason for leaving *</label>
                  <input value={app.reasonLeaving} onChange={(e)=>setApp({...app, reasonLeaving:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
              </div>

              {/* pets */}
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Pets (Breed/Size & Reg #) *</label>
                <input value={app.petsInfo} onChange={(e)=>setApp({...app, petsInfo:e.target.value})}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                <div className="mt-2">
                  <label className="block text-sm text-zinc-300 mb-1">Pets pictures</label>
                  <input type="file" accept=".jpg,.jpeg,.png" onChange={(e)=>setFiles(f=>({...f, petsImage: e.target.files?.[0] || null}))}
                    className="block w-full text-sm text-zinc-300 file:mr-3 file:px-3 file:py-2 file:rounded-md file:border-0 file:bg-zinc-800 file:text-white" />
                </div>
              </div>

              {/* previous landlord + address */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Previous Landlord First</label>
                  <input value={app.previousLandlord.first} onChange={(e)=>update(e.target.value,setApp,['previousLandlord','first'])}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Previous Landlord Last</label>
                  <input value={app.previousLandlord.last} onChange={(e)=>update(e.target.value,setApp,['previousLandlord','last'])}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Previous Landlord Phone</label>
                  <input value={app.previousLandlord.phone} onChange={(e)=>update(e.target.value,setApp,['previousLandlord','phone'])}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Previous Rent</label>
                  <input value={app.previousRent} onChange={(e)=>setApp({...app, previousRent:e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="$0.00" />
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Previous address</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">Street address</label>
                    <input value={app.previousAddress.street} onChange={(e)=>update(e.target.value,setApp,['previousAddress','street'])} placeholder="Street address" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">City</label>
                    <input value={app.previousAddress.city} onChange={(e)=>update(e.target.value,setApp,['previousAddress','city'])} placeholder="City" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">Province</label>
                    <select value={app.previousAddress.province} onChange={(e)=>update(e.target.value,setApp,['previousAddress','province'])} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2">
                      {provinces.map(p=><option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">Postal code</label>
                    <input value={app.previousAddress.postal} onChange={(e)=>update(e.target.value,setApp,['previousAddress','postal'])} placeholder="Postal code" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">When did you live there? (start)</label>
                    <input type="date" value={app.previousStart} onChange={(e)=>setApp({...app, previousStart:e.target.value})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300 mb-1">When did you live there? (end)</label>
                    <input type="date" value={app.previousEnd} onChange={(e)=>setApp({...app, previousEnd:e.target.value})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={()=>setStep(1)} className="rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 hover:bg-zinc-800">Continue</button>
              </div>
            </div>
          )}

          {/* STEP 1: PROPERTY INFO */}
          {step===1 && (
            <div className="rounded-2xl bg-zinc-950/70 ring-1 ring-zinc-800 p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold">Property information</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Street address</label>
                  <input value={prop.accommodationAddress.street} onChange={(e)=>update(e.target.value,setProp,['accommodationAddress','street'])} placeholder="Street address" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">City</label>
                  <input value={prop.accommodationAddress.city} onChange={(e)=>update(e.target.value,setProp,['accommodationAddress','city'])} placeholder="City" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Province</label>
                  <select value={prop.accommodationAddress.province} onChange={(e)=>update(e.target.value,setProp,['accommodationAddress','province'])} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2">
                    {provinces.map(p=><option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Postal code</label>
                  <input value={prop.accommodationAddress.postal} onChange={(e)=>update(e.target.value,setProp,['accommodationAddress','postal'])} placeholder="Postal code" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Adults *</label>
                  <input type="number" min={0} value={prop.adults} onChange={(e)=>setProp({...prop, adults:Number(e.target.value)})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="Adults *"/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Children</label>
                  <input type="number" min={0} value={prop.children} onChange={(e)=>setProp({...prop, children:Number(e.target.value)})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="Children"/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Bedrooms *</label>
                  <input type="number" min={0} value={prop.bedrooms} onChange={(e)=>setProp({...prop, bedrooms:Number(e.target.value)})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="Bedrooms *"/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Bathrooms *</label>
                  <input type="number" min={0} value={prop.bathrooms} onChange={(e)=>setProp({...prop, bathrooms:Number(e.target.value)})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="Bathrooms *"/>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Desired move-in date *</label>
                  <input type="date" value={prop.desiredMoveInDate} onChange={(e)=>setProp({...prop, desiredMoveInDate:e.target.value})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Lease duration</label>
                  <input value={prop.leaseDuration} onChange={(e)=>setProp({...prop, leaseDuration:e.target.value})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="Lease duration"/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Desired rent</label>
                  <input value={prop.desiredRent} onChange={(e)=>setProp({...prop, desiredRent:e.target.value})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="Desired rent $0.00"/>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={()=>setStep(0)} className="rounded-full border border-white/30 px-5 py-2">Back</button>
                <button type="button" onClick={()=>setStep(2)} className="rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 hover:bg-zinc-800">Continue</button>
              </div>
            </div>
          )}

          {/* STEP 2: EMPLOYMENT */}
          {step===2 && (
            <div className="rounded-2xl bg-zinc-950/70 ring-1 ring-zinc-800 p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold">Employment</h2>
              {employment.map((job, i)=>(
                <div key={i} className="rounded-xl ring-1 ring-zinc-800 p-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input value={job.employer} onChange={(e)=>update(e.target.value,setEmployment,[i,'employer'])} placeholder="Employer name *" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={job.phone} onChange={(e)=>update(e.target.value,setEmployment,[i,'phone'])} placeholder="Employer phone *" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={job.email} onChange={(e)=>update(e.target.value,setEmployment,[i,'email'])} placeholder="Employer email" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={job.position} onChange={(e)=>update(e.target.value,setEmployment,[i,'position'])} placeholder="Position held *" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-3">
                    <input type="date" value={job.start} onChange={(e)=>update(e.target.value,setEmployment,[i,'start'])} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="Start"/>
                    <input type="date" value={job.end} onChange={(e)=>update(e.target.value,setEmployment,[i,'end'])} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2" placeholder="End"/>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-3">
                    <input value={job.monthlyGross} onChange={(e)=>update(e.target.value,setEmployment,[i,'monthlyGross'])} placeholder="Monthly gross salary *" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={job.supervisorTitle} onChange={(e)=>update(e.target.value,setEmployment,[i,'supervisorTitle'])} placeholder="Supervisor title" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={job.supervisorFirst} onChange={(e)=>update(e.target.value,setEmployment,[i,'supervisorFirst'])} placeholder="Supervisor first" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={job.supervisorLast} onChange={(e)=>update(e.target.value,setEmployment,[i,'supervisorLast'])} placeholder="Supervisor last" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={()=>setEmployment(e=>[...e,{ employer:'', address:{country:'Canada',street:'',city:'',province:'BC',postal:''}, phone:'', email:'', position:'', start:'', end:'', monthlyGross:'', supervisorTitle:'', supervisorFirst:'', supervisorLast:'' }])}
                className="rounded-full border border-white/40 px-4 py-2 text-sm hover:bg-zinc-800"
              >
                + Add additional Employment
              </button>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={()=>setStep(1)} className="rounded-full border border-white/30 px-5 py-2">Back</button>
                <button type="button" onClick={()=>setStep(3)} className="rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 hover:bg-zinc-800">Continue</button>
              </div>
            </div>
          )}

          {/* STEP 3: EMERGENCY + OTHER DETAILS */}
          {step===3 && (
            <div className="rounded-2xl bg-zinc-950/70 ring-1 ring-zinc-800 p-6 md:p-8 space-y-8">
              <h2 className="text-2xl font-semibold">Emergency & other details</h2>

              <div>
                <h3 className="font-medium mb-2">Emergency Contact *</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input value={emergency.first} onChange={(e)=>setEmergency({...emergency, first:e.target.value})} placeholder="First name" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <input value={emergency.last} onChange={(e)=>setEmergency({...emergency, last:e.target.value})} placeholder="Last name" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <input value={emergency.relationship} onChange={(e)=>setEmergency({...emergency, relationship:e.target.value})} placeholder="Relationship" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <input value={emergency.phone} onChange={(e)=>setEmergency({...emergency, phone:e.target.value})} placeholder="Phone" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <input value={emergency.email} onChange={(e)=>setEmergency({...emergency, email:e.target.value})} placeholder="Email" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Vehicles</h3>
                {vehicles.map((v,i)=>(
                  <div key={i} className="grid sm:grid-cols-5 gap-3 mb-3">
                    <input value={v.make} onChange={(e)=>update(e.target.value,setVehicles,[i,'make'])} placeholder="Make" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={v.model} onChange={(e)=>update(e.target.value,setVehicles,[i,'model'])} placeholder="Model" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={v.year} onChange={(e)=>update(e.target.value,setVehicles,[i,'year'])} placeholder="Year" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={v.color} onChange={(e)=>update(e.target.value,setVehicles,[i,'color'])} placeholder="Color" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={v.plate} onChange={(e)=>update(e.target.value,setVehicles,[i,'plate'])} placeholder="Plate" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                ))}
                <button type="button" onClick={()=>setVehicles(v=>[...v,{make:'',model:'',year:'',color:'',plate:''}])} className="rounded-full border border-white/40 px-4 py-2 text-sm hover:bg-zinc-800">+ Add additional Vehicles</button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">BC HYDRO account?</label>
                  <select value={utilities.bchydro} onChange={(e)=>setUtilities({...utilities, bchydro:e.target.value})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"><option>Yes</option><option>No</option></select>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">PNG / Fortis account?</label>
                  <select value={utilities.gas} onChange={(e)=>setUtilities({...utilities, gas:e.target.value})} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"><option>Yes</option><option>No</option></select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-1">Criminal Record Check — any convictions without pardon? *</label>
                <select value={criminal} onChange={(e)=>setCriminal(e.target.value)} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"><option>No</option><option>Yes</option></select>
              </div>

              <div>
                <h3 className="font-medium mb-2">Personal Reference *</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input value={reference.first} onChange={(e)=>setReference({...reference, first:e.target.value})} placeholder="First name" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <input value={reference.last} onChange={(e)=>setReference({...reference, last:e.target.value})} placeholder="Last name" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <input value={reference.phone} onChange={(e)=>setReference({...reference, phone:e.target.value})} placeholder="Phone" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <input value={reference.email} onChange={(e)=>setReference({...reference, email:e.target.value})} placeholder="Email" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <input value={reference.relationship} onChange={(e)=>setReference({...reference, relationship:e.target.value})} placeholder="Relationship" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <input value={reference.address.street} onChange={(e)=>update(e.target.value,setReference,['address','street'])} placeholder="Street address" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <input value={reference.address.city} onChange={(e)=>update(e.target.value,setReference,['address','city'])} placeholder="City" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  <select value={reference.address.province} onChange={(e)=>update(e.target.value,setReference,['address','province'])} className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2">{provinces.map(p=><option key={p}>{p}</option>)}</select>
                  <input value={reference.address.postal} onChange={(e)=>update(e.target.value,setReference,['address','postal'])} placeholder="Postal code" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Additional occupants</h3>
                {occupants.map((o,i)=>(
                  <div key={i} className="grid sm:grid-cols-2 gap-3 mb-3">
                    <input value={o.name} onChange={(e)=>update(e.target.value,setOccupants,[i,'name'])} placeholder="Full name" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                    <input value={o.relationship} onChange={(e)=>update(e.target.value,setOccupants,[i,'relationship'])} placeholder="Relationship" className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2"/>
                  </div>
                ))}
                <button type="button" onClick={()=>setOccupants(o=>[...o,{name:'',relationship:''}])} className="rounded-full border border-white/40 px-4 py-2 text-sm hover:bg-zinc-800">+ Add Additional occupants</button>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={()=>setStep(2)} className="rounded-full border border-white/30 px-5 py-2">Back</button>
                <button type="button" onClick={()=>setStep(4)} className="rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 hover:bg-zinc-800">Continue</button>
              </div>
            </div>
          )}

          {/* STEP 4: UPLOADS & CONSENT */}
          {step===4 && (
            <div className="rounded-2xl bg-zinc-950/70 ring-1 ring-zinc-800 p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-semibold">Uploads & consent</h2>

              <div className="text-sm text-zinc-300 space-y-2">
                <p className="font-medium">Personal Credit Report (required)</p>
                <p>Use Borrowell (free): <a className="underline text-yellow-400" href="https://borrowell.com/free-credit-score?utm_campaign=Refer5&utm_medium=web&utm_source=refer2022-4121517" target="_blank">borrowell.com/free-credit-score</a></p>
                <ol className="list-decimal list-inside text-zinc-400">
                  <li>Open Credit Report in the top menu</li>
                  <li>Click “Download Your Credit Report”</li>
                  <li>Upload the PDF below (no screenshots)</li>
                </ol>
                <p className="text-zinc-400">If you have no Canadian credit history, upload last two months of bank statements.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Credit report PDF *</label>
                  <input required type="file" accept=".pdf" onChange={(e)=>setFiles(f=>({...f, creditReport: e.target.files?.[0] || null}))}
                    className="block w-full text-sm text-zinc-300 file:mr-3 file:px-3 file:py-2 file:rounded-md file:border-0 file:bg-zinc-800 file:text-white"/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Paystubs (3 mos) OR bank statements (3 mos) *</label>
                  <input required type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e)=>setFiles(f=>({...f, paystubsOrBank: e.target.files?.[0] || null}))}
                    className="block w-full text-sm text-zinc-300 file:mr-3 file:px-3 file:py-2 file:rounded-md file:border-0 file:bg-zinc-800 file:text-white"/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Last year’s T4 or NOA</label>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e)=>setFiles(f=>({...f, t4OrNoa: e.target.files?.[0] || null}))}
                    className="block w-full text-sm text-zinc-300 file:mr-3 file:px-3 file:py-2 file:rounded-md file:border-0 file:bg-zinc-800 file:text-white"/>
                </div>
              </div>

              <div className="space-y-3 text-sm text-zinc-300">
                <label className="flex items-start gap-2">
                  <input type="checkbox" required className="mt-1"/>
                  I consent to credit/background checks and understand this application is not a lease agreement.
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" required className="mt-1"/>
                  I certify the information is accurate and agree to Seville’s BC PIPA-compliant Privacy Policy.
                </label>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={()=>setStep(3)} className="rounded-full border border-white/30 px-5 py-2">Back</button>
                <button disabled={sending} className="rounded-full border border-white/40 bg-zinc-900/70 px-6 py-2 hover:bg-zinc-800 disabled:opacity-60">
                  {sending ? 'Submitting…' : 'Submit application'}
                </button>
              </div>

              {ok && <div className="text-emerald-400 text-sm">Thanks! Your application has been sent.</div>}
              {err && <div className="text-red-400 text-sm">{err}</div>}
            </div>
          )}
        </section>
      </form>

      <p className="text-center text-xs text-zinc-500 mt-6">
        Questions? Email <a href="mailto:gierly@sevilleinvestments.ca" className="underline text-yellow-400">gierly@sevilleinvestments.ca</a>
      </p>
    </main>
  );
}
