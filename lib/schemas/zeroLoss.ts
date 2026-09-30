import { z } from 'zod'

import {
  ZL_FREE_EMAIL_PROVIDERS,
  ZL_LANGUAGE_BANDS,
  ZL_PLATFORMS,
  ZL_PRODUCT_BANDS,
  ZL_REVENUE_BANDS,
  ZL_SOURCE_ID,
  ZL_START_TIMINGS,
} from '@/content/zero-loss-migration'

/**
 * Multi-step qualification form of the Zero-Loss Migration Sprint landing.
 * The same schema runs on the client (per-step checks) and on the server
 * (/api/migrazione-lead, branch `source === 'zero-loss-migration'`).
 * Messages come from the locale copy (factory pattern, like migrazione.ts).
 */
export type ZeroLossErrors = {
  url: string
  choice: string
  erpName: string
  reason: string
  reasonMax: string
  name: string
  email: string
  emailFree: string
  phone: string
  privacy: string
}

export const ZL_REASON_MAX = 500

/** Accepts bare domains ("store.it") as well as full URLs. */
export function isStoreUrl(raw: string): boolean {
  return /^(https?:\/\/)?[^\s./]+(\.[^\s./]+)+(\/\S*)?$/i.test(raw.trim())
}

/** Business email only: rejects the common free mailbox providers. */
export function isBusinessEmail(email: string): boolean {
  const domain = email.trim().toLowerCase().split('@')[1] ?? ''
  const root = domain.split('.')[0]
  return !ZL_FREE_EMAIL_PROVIDERS.some((p) => root === p)
}

/** Optional phone: empty, or at least 6 digits with the usual separators. */
function isPhoneOrEmpty(raw: string | undefined): boolean {
  if (!raw || raw.trim() === '') return true
  return /^[+\d][\d\s().-]*$/.test(raw.trim()) && (raw.match(/\d/g) ?? []).length >= 6
}

const utm = z.string().max(200).optional()

export function makeZeroLossSchema(e: ZeroLossErrors) {
  return z
    .object({
      websiteUrl: z.string().refine(isStoreUrl, { message: e.url }),
      // "shopify" is a valid answer for the client (it shows the stop message)
      // but a submission with it is never sent, so the server rejects it.
      platform: z.enum(ZL_PLATFORMS, { message: e.choice }),
      revenue_band: z.enum(ZL_REVENUE_BANDS, { message: e.choice }),
      products: z.enum(ZL_PRODUCT_BANDS, { message: e.choice }),
      languages: z.enum(ZL_LANGUAGE_BANDS, { message: e.choice }),
      erp: z.enum(['yes', 'no'], { message: e.choice }),
      erpName: z.string().max(120).optional(),
      start_timing: z.enum(ZL_START_TIMINGS, { message: e.choice }),
      reason: z.string().trim().min(1, e.reason).max(ZL_REASON_MAX, e.reasonMax),
      name: z.string().trim().min(2, e.name),
      email: z.string().trim().email(e.email).refine(isBusinessEmail, { message: e.emailFree }),
      phone: z.string().optional().refine(isPhoneOrEmpty, { message: e.phone }),
      privacy: z.boolean().refine((v) => v === true, { message: e.privacy }),
      // Derived on the client, re-checked on the server.
      tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
      estimated_price: z.number().int().positive(),
      locale: z.enum(['en', 'it']),
      source: z.literal(ZL_SOURCE_ID),
      utm_source: utm,
      utm_medium: utm,
      utm_campaign: utm,
      utm_term: utm,
      utm_content: utm,
      // Anti-spam: honeypot (must stay empty) + time on screen.
      hp: z.string().optional(),
      elapsedMs: z.number().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.erp === 'yes' && !(data.erpName ?? '').trim()) {
        ctx.addIssue({ code: 'custom', path: ['erpName'], message: e.erpName })
      }
    })
}

// Static schema (server-side / type source). Messages are generic; the client
// uses the localized factory above.
export const zeroLossSchema = makeZeroLossSchema({
  url: 'Invalid URL',
  choice: 'Select an option',
  erpName: 'ERP name required',
  reason: 'Required',
  reasonMax: 'Too long',
  name: 'Invalid name',
  email: 'Invalid email',
  emailFree: 'Business email required',
  phone: 'Invalid phone',
  privacy: 'Privacy required',
})

export type ZeroLossFormData = z.infer<typeof zeroLossSchema>
