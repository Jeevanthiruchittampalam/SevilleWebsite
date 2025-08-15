// src/app/api/test-email/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const key = process.env.RESEND_API_KEY;
    const to = process.env.APPLICATION_TO || 'jeevan@sevilleinvestments.ca';
    const from = process.env.EMAIL_FROM || 'Seville Applications <onboarding@resend.dev>';

    if (!key) {
      return NextResponse.json({ ok: false, error: 'RESEND_API_KEY missing' }, { status: 500 });
    }

    const resend = new Resend(key);

    const result = await resend.emails.send({
      from,
      to,
      subject: 'Seville — Test email from localhost',
      text: 'If you got this, Resend env is wired correctly.',
    });

    return NextResponse.json({ ok: true, result });
  } catch (err) {
    console.error('TEST EMAIL ERROR:', err);
    return NextResponse.json({ ok: false, error: err?.message || 'Unexpected error' }, { status: 500 });
  }
}
 