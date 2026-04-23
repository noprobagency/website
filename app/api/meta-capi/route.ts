import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export const runtime = 'nodejs'

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN
const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE

function hash(value: string | undefined): string | undefined {
  if (!value) return undefined
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

export async function POST(req: NextRequest) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ error: 'CAPI not configured' }, { status: 500 })
  }

  let body: {
    eventName?: string
    eventId?: string
    timestamp?: number
    customData?: Record<string, unknown>
    sourceUrl?: string
    userData?: { email?: string; phone?: string }
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { eventName, eventId, timestamp, customData, sourceUrl, userData } = body

  if (!eventName || !eventId) {
    return NextResponse.json({ error: 'Missing eventName or eventId' }, { status: 400 })
  }

  const userAgent = req.headers.get('user-agent') || ''
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    ''

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: timestamp || Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: sourceUrl,
        action_source: 'website',
        user_data: {
          client_user_agent: userAgent,
          client_ip_address: ip,
          em: hash(userData?.email),
          ph: hash(userData?.phone),
        },
        custom_data: customData || {},
      },
    ],
    ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
  }

  try {
    const resp = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    const data = await resp.json()

    if (!resp.ok) {
      console.error('[CAPI] Meta API error:', data)
      return NextResponse.json({ error: 'Upstream error' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, received: data.events_received })
  } catch (err) {
    console.error('[CAPI] fetch error:', err)
    return NextResponse.json({ error: 'Network error' }, { status: 500 })
  }
}
