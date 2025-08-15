// src/app/api/rental-application/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const TO = process.env.APPLICATION_TO || 'jeevan@sevilleinvestments.ca';
const FROM = process.env.EMAIL_FROM || 'Seville Applications <onboarding@resend.dev>';

// ---------- small helpers ----------
async function fileToAttachment(file) {
  if (!file || !file.arrayBuffer) return null;
  const buf = Buffer.from(await file.arrayBuffer());
  return { filename: file.name || 'file', content: buf };
}
const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const row = (label, value) => `
  <tr>
    <td style="padding:8px 12px;border-top:1px solid #eee;width:46%;color:#111;font-weight:600;">${esc(label)}</td>
    <td style="padding:8px 12px;border-top:1px solid #eee;color:#333;">${esc(value)}</td>
  </tr>
`;

const section = (title, inner) => `
  <table role="presentation" width="100%" style="border-collapse:collapse;margin:0 0 24px;background:#fff;border:1px solid #eee;border-radius:12px;overflow:hidden;">
    <thead>
      <tr>
        <th align="left" style="padding:14px 16px;background:#0f172a;color:#fff;font:600 14px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,Arial;border-bottom:1px solid #0b1021;text-transform:uppercase;letter-spacing:.3px;">
          ${esc(title)}
        </th>
      </tr>
    </thead>
    <tbody>
      ${inner}
    </tbody>
  </table>
`;

export async function POST(req) {
  try {
    const form = await req.formData();

    const app = JSON.parse(form.get('app') || '{}');
    const prop = JSON.parse(form.get('prop') || '{}');
    const employment = JSON.parse(form.get('employment') || '[]');
    const emergency = JSON.parse(form.get('emergency') || '{}');
    const vehicles = JSON.parse(form.get('vehicles') || '[]');
    const utilities = JSON.parse(form.get('utilities') || '{}');
    const criminal = form.get('criminal') || 'No';
    const reference = JSON.parse(form.get('reference') || '{}');
    const occupants = JSON.parse(form.get('occupants') || '[]');

    const attachments = [];
    for (const key of ['idImage', 'petsImage', 'creditReport', 'paystubsOrBank', 't4OrNoa']) {
      const a = await fileToAttachment(form.get(key));
      if (a) attachments.push(a);
    }

    if (!resend) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // ---- Subject: RENTAL APPLICATION: "THEIR NAME", "CITY REQUESTED"
    const name = [app.firstName, app.lastName].filter(Boolean).join(' ') || 'Unknown';
    const city = app.cityApplyingFor || 'Unknown';
    const subject = `RENTAL APPLICATION: ${name}, ${city}`;

    // --------- TEXT fallback (kept simple) ---------
    const pretty = (obj) => JSON.stringify(obj, null, 2);
    const text = `APPLICANT
Name: ${app.firstName || ''} ${app.lastName || ''}
Birth: ${app.birthDate || ''}
Phone: ${app.phone || ''}
Email: ${app.email || ''}
ID #: ${app.idNumber || ''}

CURRENT ADDRESS
${pretty(app.currentAddress || {})}
Move-in: ${app.currentMoveInYYYYMM || ''}

CURRENT LANDLORD
${pretty(app.currentLandlord || {})}
Current Rent: ${app.currentMonthlyRent || ''}
Reason Leaving: ${app.reasonLeaving || ''}
Pets: ${app.petsInfo || ''}

PREVIOUS LANDLORD / ADDRESS
${pretty(app.previousLandlord || {})}
${pretty(app.previousAddress || {})}
Previous Rent: ${app.previousRent || ''}
Prev Dates: ${app.previousStart || ''} – ${app.previousEnd || ''}

PROPERTY INFO
${pretty(prop || {})}

EMPLOYMENT (array)
${pretty(employment || [])}

EMERGENCY CONTACT
${pretty(emergency || {})}

VEHICLES (array)
${pretty(vehicles || [])}

UTILITIES
${pretty(utilities || {})}

CRIMINAL CHECK: ${criminal || ''}

PERSONAL REFERENCE
${pretty(reference || {})}

ADDITIONAL OCCUPANTS (array)
${pretty(occupants || [])}
`;

    // --------- HTML version (nice layout) ---------
    const htmlHeader = `
      <div style="padding:18px 0 10px;color:#64748b;font:500 12px/1 Inter,system-ui,Segoe UI,Roboto,Arial;">
        New rental application received for <strong style="color:#0f172a;">${esc(name)}</strong> – ${esc(city)}.
      </div>
    `;

    const sApplicant = section('Applicant', [
      row('City applying for', app.cityApplyingFor || ''),
      row('Name', `${app.firstName || ''} ${app.lastName || ''}`.trim()),
      row('Birth date', app.birthDate || ''),
      row('Phone', app.phone || ''),
      row('Email', app.email || ''),
      row('Driver’s License / ID #', app.idNumber || ''),
    ].join(''));

    const sCurrentAddr = section('Current address', [
      row('Street', app.currentAddress?.street || ''),
      row('City', app.currentAddress?.city || ''),
      row('Province', app.currentAddress?.province || ''),
      row('Postal code', app.currentAddress?.postal || ''),
      row('Move-in (YYYY-MM)', app.currentMoveInYYYYMM || ''),
    ].join(''));

    const sCurrentLL = section('Current Landlord', [
      row('Name', `${app.currentLandlord?.first || ''} ${app.currentLandlord?.last || ''}`.trim()),
      row('Phone', app.currentLandlord?.phone || ''),
      row('Email', app.currentLandlord?.email || ''),
      row('Current monthly rent', app.currentMonthlyRent || ''),
      row('Reason for leaving', app.reasonLeaving || ''),
      row('Pets (Breed/Size & Reg #)', app.petsInfo || ''),
    ].join(''));

    const sPrevious = section('Previous Landlord & Address', [
      row('Prev. Landlord', `${app.previousLandlord?.first || ''} ${app.previousLandlord?.last || ''}`.trim()),
      row('Prev. Landlord Phone', app.previousLandlord?.phone || ''),
      row('Prev. Street', app.previousAddress?.street || ''),
      row('Prev. City', app.previousAddress?.city || ''),
      row('Prev. Province', app.previousAddress?.province || ''),
      row('Prev. Postal', app.previousAddress?.postal || ''),
      row('Prev. Rent', app.previousRent || ''),
      row('Prev. Dates', `${app.previousStart || ''} – ${app.previousEnd || ''}`.trim()),
    ].join(''));

    const sProperty = section('Property information', [
      row('Street', prop.accommodationAddress?.street || ''),
      row('City', prop.accommodationAddress?.city || ''),
      row('Province', prop.accommodationAddress?.province || ''),
      row('Postal', prop.accommodationAddress?.postal || ''),
      row('Adults', prop.adults ?? ''),
      row('Children', prop.children ?? ''),
      row('Bedrooms', prop.bedrooms ?? ''),
      row('Bathrooms', prop.bathrooms ?? ''),
      row('Desired move-in date', prop.desiredMoveInDate || ''),
      row('Lease duration', prop.leaseDuration || ''),
      row('Desired rent', prop.desiredRent || ''),
    ].join(''));

    const sEmployment = section('Employment', employment.map((job, idx) => `
      <tr><td colspan="2" style="padding:10px 12px;background:#f8fafc;color:#0f172a;font-weight:600;border-top:1px solid #eee;">Job #${idx + 1}</td></tr>
      ${row('Employer', job.employer || '')}
      ${row('Phone', job.phone || '')}
      ${row('Email', job.email || '')}
      ${row('Position', job.position || '')}
      ${row('Start', job.start || '')}
      ${row('End', job.end || '')}
      ${row('Monthly gross salary', job.monthlyGross || '')}
      ${row('Supervisor', `${job.supervisorTitle ? `${job.supervisorTitle} ` : ''}${(job.supervisorFirst || '')} ${(job.supervisorLast || '')}`.trim())}
    `).join(''));

    const sEmergency = section('Emergency Contact', [
      row('Name', `${emergency.first || ''} ${emergency.last || ''}`.trim()),
      row('Relationship', emergency.relationship || ''),
      row('Phone', emergency.phone || ''),
      row('Email', emergency.email || ''),
    ].join(''));

    const sVehicles = section('Vehicles', (vehicles && vehicles.length
      ? vehicles.map((v, i) => `
        <tr><td colspan="2" style="padding:10px 12px;background:#f8fafc;color:#0f172a;font-weight:600;border-top:1px solid #eee;">Vehicle #${i + 1}</td></tr>
        ${row('Make', v.make || '')}
        ${row('Model', v.model || '')}
        ${row('Year', v.year || '')}
        ${row('Color', v.color || '')}
        ${row('Plate', v.plate || '')}
      `).join('')
      : row('Vehicles', 'None reported')
    ));

    const sUtilities = section('Utility Accounts', [
      row('BC Hydro', utilities.bchydro || 'No'),
      row('PNG / Fortis', utilities.gas || 'No'),
    ].join(''));

    const sCriminal = section('Criminal Record Check', [
      row('Any convictions without pardon?', criminal || 'No'),
    ].join(''));

    const sReference = section('Personal Reference', [
      row('Name', `${reference.first || ''} ${reference.last || ''}`.trim()),
      row('Relationship', reference.relationship || ''),
      row('Phone', reference.phone || ''),
      row('Email', reference.email || ''),
      row('Street', reference.address?.street || ''),
      row('City', reference.address?.city || ''),
      row('Province', reference.address?.province || ''),
      row('Postal', reference.address?.postal || ''),
    ].join(''));

    const sOccupants = section('Additional Occupants', (occupants && occupants.length
      ? occupants.map((o, i) => `
        <tr><td colspan="2" style="padding:10px 12px;background:#f8fafc;color:#0f172a;font-weight:600;border-top:1px solid #eee;">Occupant #${i + 1}</td></tr>
        ${row('Name', o.name || '')}
        ${row('Relationship', o.relationship || '')}
      `).join('')
      : row('Occupants', 'None reported')
    ));

    const html = `
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="color-scheme" content="light only">
    <meta name="supported-color-schemes" content="light">
  </head>
  <body style="margin:0;background:#f5f7fb;padding:24px 0;">
    <div style="max-width:720px;margin:0 auto;padding:0 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Inter,Arial;color:#0f172a;">
      <!-- header -->
      <table role="presentation" width="100%" style="border-collapse:collapse;margin:0 0 14px;">
        <tr>
          <td style="font:700 18px/1.2 Inter,system-ui,Segoe UI,Roboto,Arial;">Seville Applications</td>
          <td align="right" style="font:400 12px/1 Inter,system-ui,Segoe UI,Roboto,Arial;color:#64748b;">
            ${esc(new Date().toLocaleString())}
          </td>
        </tr>
      </table>

      ${htmlHeader}

      ${sApplicant}
      ${sCurrentAddr}
      ${sCurrentLL}
      ${sPrevious}
      ${sProperty}
      ${sEmployment}
      ${sEmergency}
      ${sVehicles}
      ${sUtilities}
      ${sCriminal}
      ${sReference}
      ${sOccupants}

      <p style="color:#64748b;font:12px/1.5 Inter,system-ui,Segoe UI,Roboto,Arial;margin-top:20px;">
        Attachments included: ${attachments.length}. Reply directly to this email to contact the applicant.
      </p>
    </div>
  </body>
</html>
`;

    const sendResp = await resend.emails.send({
      from: FROM,
      to: TO,
      subject,
      text,
      html,
      attachments,
      reply_to: app.email || undefined, // reply goes to applicant
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('Resend send result:', JSON.stringify(sendResp, null, 2));
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
