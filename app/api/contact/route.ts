import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { contactSchema } from '@/lib/schemas/contact'
import { buildWelcomeEmail } from '@/lib/emails/welcome'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ADMIN_FROM = 'noprob agency <noreply@noprob.agency>'
const ADMIN_TO = 'antonio@noprob.agency'
const WELCOME_FROM = 'Antonio @ NoProb <antonio@noprob.agency>'
const WELCOME_REPLY_TO = 'antonio@noprob.agency'

const WA_TEXT_EN =
  'Hi%20Antonio%2C%20I%20just%20submitted%20the%20contact%20form%20on%20noprob.agency%20and%20wanted%20to%20connect%20directly.'
const WA_TEXT_IT =
  'Ciao%20Antonio%2C%20ho%20appena%20compilato%20il%20form%20su%20noprob.agency%20e%20volevo%20contattarti%20direttamente.'
const BOOKING_URL_EN = 'https://noprob.agency/thank-you'
const BOOKING_URL_IT = 'https://noprob.agency/it/grazie'

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY missing')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }
  const resend = new Resend(apiKey)

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid fields. Please check your data.', issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const {
    name,
    company,
    email,
    phone,
    websiteUrl,
    interest,
    revenue,
    adsSpend,
    additionalInfo,
  } = parsed.data
  const locale = parsed.data.locale ?? 'en'

  // 1) Admin notification — must succeed for the request to be considered OK
  try {
    const { error } = await resend.emails.send({
      from: ADMIN_FROM,
      to: [ADMIN_TO],
      replyTo: email,
      subject: `New contact request from ${name} — ${company || 'no company'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Company:</strong></td><td>${company || '—'}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone || '—'}</td></tr>
          <tr><td><strong>Website:</strong></td><td>${websiteUrl || '—'}</td></tr>
          <tr><td><strong>Interest:</strong></td><td>${interest || '—'}</td></tr>
          <tr><td><strong>Revenue:</strong></td><td>${revenue || '—'}</td></tr>
          <tr><td><strong>Ads Spend:</strong></td><td>${adsSpend || '—'}</td></tr>
          <tr><td><strong>Locale:</strong></td><td>${locale}</td></tr>
          <tr><td valign="top"><strong>Notes:</strong></td><td>${additionalInfo || '—'}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.error('[contact] Admin email Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
    }
  } catch (err) {
    console.error('[contact] Admin email unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  // 2) Welcome email to the lead — best-effort. A bounce or invalid-recipient
  // shouldn't fail the whole request because the admin already has the lead.
  const isIT = locale === 'it'
  try {
    const { error } = await resend.emails.send({
      from: WELCOME_FROM,
      to: [email],
      replyTo: WELCOME_REPLY_TO,
      subject: isIT
        ? 'Richiesta ricevuta — NoProb Agency'
        : 'Got your request — NoProb Agency',
      html: buildWelcomeEmail({
        name,
        isIT,
        waUrl: `https://wa.me/393204063459?text=${isIT ? WA_TEXT_IT : WA_TEXT_EN}`,
        bookingUrl: isIT ? BOOKING_URL_IT : BOOKING_URL_EN,
      }),
    })

    if (error) {
      console.error('[contact] Welcome email Resend error:', error)
    }
  } catch (err) {
    console.error('[contact] Welcome email unexpected error:', err)
  }

  return NextResponse.json({ ok: true })
}
