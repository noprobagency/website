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
  company: string
  privacy: string
}

export function makeAiSchema(e: AiErrors) {
  return z.object({
    businessType: z.string().min(1, e.choice),
    role: z.string().min(1, e.choice),
    aiUsage: z.string().min(1, e.choice),
    mainPain: z.string().min(20, e.pain),
    name: z.string().min(2, e.name),
    email: z.string().email(e.email),
    company: z.string().min(2, e.company),
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
  company: 'Invalid company',
  privacy: 'Privacy required',
})

export type AiFormData = z.infer<typeof aiSchema>
