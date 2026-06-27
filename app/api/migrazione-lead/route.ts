import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { migrazioneSchema } from '@/lib/schemas/migrazione'
import { buildMigrazioneWelcomeEmail } from '@/lib/emails/migrazione-welcome'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ADMIN_FROM = 'noprob agency <noreply@noprob.agency>'
const ADMIN_TO = 'antonio@noprob.agency'
const WELCOME_FROM = 'Antonio @ NoProb <antonio@noprob.agency>'
const WELCOME_REPLY_TO = 'antonio@noprob.agency'

const WA_TEXT_IT =
  'Ciao%20Antonio%2C%20ho%20appena%20inviato%20la%20candidatura%20per%20la%20migrazione%20a%20Shopify%20su%20noprob.agency.'

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

  // 1) Admin notification — must succeed for the request to be considered OK
  try {
    const { error } = await resend.emails.send({
      from: ADMIN_FROM,
      to: [ADMIN_TO],
      replyTo: email,
      subject: `New migration lead from ${name} — ${brand}`,
      html: `
        <h2>New Shopify Migration Application</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Brand:</strong></td><td>${brand}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Website:</strong></td><td>${websiteUrl}</td></tr>
          <tr><td><strong>Current platform:</strong></td><td>${platform}</td></tr>
          <tr><td><strong>Annual revenue:</strong></td><td>${revenue}</td></tr>
          <tr><td><strong>Timeline:</strong></td><td>${timeline}</td></tr>
          <tr><td valign="top"><strong>Reason:</strong></td><td>${reason}</td></tr>
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

  // 2) Confirmation email to the lead — best-effort. A bounce or invalid recipient
  // shouldn't fail the whole request because the admin already has the lead.
  try {
    const { error } = await resend.emails.send({
      from: WELCOME_FROM,
      to: [email],
      replyTo: WELCOME_REPLY_TO,
      subject: 'Candidatura ricevuta — NoProb Agency',
      html: buildMigrazioneWelcomeEmail({
        name,
        waUrl: `https://wa.me/393204063459?text=${WA_TEXT_IT}`,
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
