import { z } from 'zod'

/**
 * Multi-step application form for the "AI Accelerator" landing page.
 * Same validation runs on the client (per-step checks) and on the server
 * (/api/ai-accelerator-lead). Messages are injected from the i18n copy so the
 * schema is locale-aware (factory pattern, same as lib/schemas/migrazione.ts).
 *
 * VAT: the Italian client normalizes to `IT` + 11 digits before submitting;
 * the English client accepts free-form international formats (min 5
 * alphanumerics). The server schema stays permissive (min 5 chars) to cover
 * both locales.
 */
export type AiErrors = {
  choice: string
  pain: string
  name: string
  email: string
  legalName: string
  vat: string
  privacy: string
}

/** IT VAT: 11 digits, optional IT prefix and spaces. Returns `IT<digits>` or null. */
export function normalizeItalianVat(raw: string): string | null {
  const cleaned = raw.replace(/\s+/g, '').toUpperCase().replace(/^IT/, '')
  return /^\d{11}$/.test(cleaned) ? `IT${cleaned}` : null
}

/** EN: free-form VAT / registration number with at least 5 alphanumerics. */
export function isValidInternationalVat(raw: string): boolean {
  return (raw.match(/[A-Za-z0-9]/g) ?? []).length >= 5
}

export function makeAiSchema(e: AiErrors) {
  return z.object({
    monthlyRevenue: z.string().min(1, e.choice),
    businessType: z.string().min(1, e.choice),
    role: z.string().min(1, e.choice),
    aiUsage: z.string().min(1, e.choice),
    mainPain: z.string().min(20, e.pain),
    name: z.string().min(2, e.name),
    email: z.string().email(e.email),
    legalName: z.string().min(2, e.legalName),
    vatNumber: z.string().refine(isValidInternationalVat, { message: e.vat }),
    // Backward compatibility: mirrors legalName for anything reading `company`.
    company: z.string().optional(),
    // Optional URL; accepts bare domains without protocol.
    website: z.string().optional(),
    privacy: z.boolean().refine((val) => val === true, { message: e.privacy }),
    locale: z.enum(['en', 'it']).optional(),
    formType: z.literal('ai-accelerator').optional(),
    // Anti-spam: honeypot field (must stay empty) + time the form was on screen.
    hp: z.string().optional(),
    elapsedMs: z.number().optional(),
  })
}

// Static schema (server-side fallback / type source). Messages here are generic;
// the client uses the localized factory above.
export const aiSchema = makeAiSchema({
  choice: 'Select an option',
  pain: 'Too short',
  name: 'Invalid name',
  email: 'Invalid email',
  legalName: 'Invalid company name',
  vat: 'Invalid VAT number',
  privacy: 'Privacy required',
})

export type AiFormData = z.infer<typeof aiSchema>
