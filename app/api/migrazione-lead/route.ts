import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { migrazioneSchema } from '@/lib/schemas/migrazione'
import { buildWelcomeEmail } from '@/lib/emails/welcome'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ADMIN_FROM = 'noprob agency <noreply@noprob.agency>'
const ADMIN_TO = 'antonio@noprob.agency'
const WELCOME_FROM = 'Antonio @ NoProb <antonio@noprob.agency>'
const WELCOME_REPLY_TO = 'antonio@noprob.agency'

const WA_TEXT_EN =
  'Hi%20Antonio%2C%20I%20just%20applied%20for%20the%20Shopify%20migration%20on%20noprob.agency%20and%20wanted%20to%20connect%20directly.'
const WA_TEXT_IT =
  'Ciao%20Antonio%2C%20ho%20appena%20inviato%20la%20candidatura%20per%20la%20migrazione%20a%20Shopify%20su%20noprob.agency.'
const BOOKING_URL_EN = 'https://noprob.agency/thank-you'
const BOOKING_URL_IT = 'https://noprob.agency/it/grazie'

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[migrazione-lead] RESEND_API_KEY missing')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }
  const resend = new Resend(apiKey)

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = migrazioneSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Campi non validi. Controlla i dati inseriti.', issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { name, email, brand, websiteUrl, platform, revenue, timeline, reason } = parsed.data
  const locale = parsed.data.locale ?? 'it'

  // 1) Admin notification — must succeed for the request to be considered OK
  try {
    const { error } = await resend.emails.send({
      from: ADMIN_FROM,
      to: [ADMIN_TO],
      replyTo: email,
      subject: `Nuova candidatura migrazione — ${brand}`,
      html: `
        <h2>Nuova candidatura migrazione Shopify</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
          <tr><td><strong>Nome:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Brand:</strong></td><td>${brand}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Sito attuale:</strong></td><td>${websiteUrl}</td></tr>
          <tr><td><strong>Piattaforma:</strong></td><td>${platform}</td></tr>
          <tr><td><strong>Fatturato annuo:</strong></td><td>${revenue}</td></tr>
          <tr><td><strong>Partenza:</strong></td><td>${timeline}</td></tr>
          <tr><td valign="top"><strong>Motivo:</strong></td><td>${reason}</td></tr>
          <tr><td><strong>Lingua:</strong></td><td>${locale}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.error('[migrazione-lead] Admin email Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
    }
  } catch (err) {
    console.error('[migrazione-lead] Admin email unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  // 2) Welcome email to the lead — best-effort (never fails the request)
  const isIT = locale === 'it'
  try {
    const { error } = await resend.emails.send({
      from: WELCOME_FROM,
      to: [email],
      replyTo: WELCOME_REPLY_TO,
      subject: isIT ? 'Candidatura ricevuta — NoProb Agency' : 'Application received — NoProb Agency',
      html: buildWelcomeEmail({
        name,
        isIT,
        waUrl: `https://wa.me/393204063459?text=${isIT ? WA_TEXT_IT : WA_TEXT_EN}`,
        bookingUrl: isIT ? BOOKING_URL_IT : BOOKING_URL_EN,
      }),
    })

    if (error) {
      console.error('[migrazione-lead] Welcome email Resend error:', error)
    }
  } catch (err) {
    console.error('[migrazione-lead] Welcome email unexpected error:', err)
  }

  return NextResponse.json({ ok: true })
}
