import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { funnelSchema } from '@/lib/schemas/funnel'
import { buildWelcomeEmail } from '@/lib/emails/welcome'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ADMIN_FROM = 'noprob agency <noreply@noprob.agency>'
const ADMIN_TO = 'antonio@noprob.agency'
const WELCOME_FROM = 'Antonio @ NoProb <antonio@noprob.agency>'
const WELCOME_REPLY_TO = 'antonio@noprob.agency'
const WA_TEXT =
  'Ciao%20Antonio%2C%20ho%20appena%20compilato%20la%20candidatura%20su%20noprob.agency%20e%20volevo%20contattarti%20direttamente.'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = funnelSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Campi non validi. Controlla i dati inseriti.', issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  // Anti-spam gate: honeypot filled OR submitted implausibly fast = bot.
  // Respond 200 so the bot thinks it succeeded, but send nothing.
  const isBot =
    (parsed.data.hp ?? '').trim() !== '' ||
    (typeof parsed.data.elapsedMs === 'number' && parsed.data.elapsedMs < 4000)
  if (isBot) {
    console.warn('[funnel-lead] Dropped spam submission (honeypot/timing)')
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[funnel-lead] RESEND_API_KEY missing')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }
  const resend = new Resend(apiKey)

  const d = parsed.data
  const fullName = `${d.firstName} ${d.lastName}`
  const rows: [string, string][] = [
    ['Nome', fullName],
    ['Email', d.email],
    ['Cellulare', d.phone],
    ['Sito', d.websiteUrl],
    ['Fatturato 12 mesi', d.revenue],
    ['Sopra soglia', d.qualified === 'si' ? 'Sì' : 'No'],
    ['Motivo', d.reason],
    ['Funnel', d.source ?? 'af-1-1'],
  ]

  try {
    const { error } = await resend.emails.send({
      from: ADMIN_FROM,
      to: [ADMIN_TO],
      replyTo: d.email,
      subject: `Nuova candidatura funnel ${d.source ?? 'af-1-1'}: ${fullName} (${d.websiteUrl})`,
      html: `
        <h2>Nuova candidatura dal funnel ${esc(d.source ?? 'af-1-1')}</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
          ${rows
            .map(([k, v]) => `<tr><td valign="top"><strong>${k}:</strong></td><td>${esc(v)}</td></tr>`)
            .join('')}
        </table>
      `,
    })
    if (error) {
      console.error('[funnel-lead] Admin email Resend error:', error)
      return NextResponse.json({ error: 'Invio non riuscito, riprova.' }, { status: 502 })
    }
  } catch (err) {
    console.error('[funnel-lead] Admin email unexpected error:', err)
    return NextResponse.json({ error: 'Errore interno, riprova.' }, { status: 500 })
  }

  // Welcome email to the lead: best-effort, never fails the request.
  try {
    const { error } = await resend.emails.send({
      from: WELCOME_FROM,
      to: [d.email],
      replyTo: WELCOME_REPLY_TO,
      subject: 'Candidatura ricevuta · NoProb Agency',
      html: buildWelcomeEmail({
        name: d.firstName,
        isIT: true,
        waUrl: `https://wa.me/393204063459?text=${WA_TEXT}`,
        bookingUrl: 'https://noprob.agency/it/grazie',
      }),
    })
    if (error) console.error('[funnel-lead] Welcome email Resend error:', error)
  } catch (err) {
    console.error('[funnel-lead] Welcome email unexpected error:', err)
  }

  return NextResponse.json({ ok: true })
}
