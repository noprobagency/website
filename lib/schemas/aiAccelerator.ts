import { z } from 'zod'

/**
 * Multi-step application form for the "AI Accelerator" landing page.
 * Same validation runs on the client (per-step checks) and on the server
 * (/api/ai-accelerator-lead). Messages are injected from the i18n copy so the
 * schema is locale-aware (factory pattern, same as lib/schemas/migrazione.ts).
 */
export type AiErrors = {
  choice: string
  pain: string
  name: string
  email: string
  legalName: string
  phone: string
  website: string
  privacy: string
}

/** Accepts bare domains ("azienda.com") as well as full URLs. */
function isWebsite(raw: string): boolean {
  return /^(https?:\/\/)?[^\s./]+(\.[^\s./]+)+(\/\S*)?$/i.test(raw.trim())
}

/** Optional phone: empty, or at least 6 digits with the usual separators. */
function isPhoneOrEmpty(raw: string | undefined): boolean {
  if (!raw || raw.trim() === '') return true
  return /^[+\d][\d\s().-]*$/.test(raw.trim()) && (raw.match(/\d/g) ?? []).length >= 6
}

export function makeAiSchema(e: AiErrors) {
  return z.object({
    businessType: z.string().min(1, e.choice),
    role: z.string().min(1, e.choice),
    aiUsage: z.string().min(1, e.choice),
    // Kept as `mainPain` for backend compatibility; now holds the goal / context answer.
    mainPain: z.string().min(20, e.pain),
    name: z.string().min(2, e.name),
    email: z.string().email(e.email),
    legalName: z.string().min(2, e.legalName),
    phone: z.string().optional().refine(isPhoneOrEmpty, { message: e.phone }),
    website: z.string().refine(isWebsite, { message: e.website }),
    // Backward compatibility: mirrors legalName for anything reading `company`.
    company: z.string().optional(),
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
  phone: 'Invalid phone',
  website: 'Invalid website',
  privacy: 'Privacy required',
})

export type AiFormData = z.infer<typeof aiSchema>
