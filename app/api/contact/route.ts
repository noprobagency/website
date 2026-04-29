import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { contactSchema } from '@/lib/schemas/contact'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const FROM_ADDRESS = 'noprob agency <noreply@noprob.agency>'
const TO_ADDRESS = 'antonio@noprob.agency'

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

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
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
          <tr><td valign="top"><strong>Notes:</strong></td><td>${additionalInfo || '—'}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
