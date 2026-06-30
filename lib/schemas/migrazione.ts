import { z } from 'zod'

/**
 * Qualification form for the "Migrazione a Shopify" / "Shopify Migration" page.
 * Same validation runs on the client (zodResolver) and on the server
 * (/api/migrazione-lead). Messages are injected from the i18n copy so the schema
 * is locale-aware (factory pattern).
 */
export type MigrazioneErrors = {
  name: string
  email: string
  brand: string
  websiteUrl: string
  platform: string
  revenue: string
  timeline: string
  reason: string
  privacy: string
}

export function makeMigrazioneSchema(e: MigrazioneErrors) {
  return z.object({
    name: z.string().min(2, e.name),
    email: z.string().email(e.email),
    brand: z.string().min(2, e.brand),
    websiteUrl: z.string().min(1, e.websiteUrl),
    platform: z.string().min(1, e.platform),
    revenue: z.string().min(1, e.revenue),
    timeline: z.string().min(1, e.timeline),
    reason: z.string().min(30, e.reason),
    privacy: z.boolean().refine((val) => val === true, { message: e.privacy }),
    locale: z.enum(['en', 'it']).optional(),
  })
}

// Static schema (server-side fallback / type source). Messages here are generic;
// the client uses the localized factory above.
export const migrazioneSchema = makeMigrazioneSchema({
  name: 'Invalid name',
  email: 'Invalid email',
  brand: 'Invalid brand',
  websiteUrl: 'Invalid URL',
  platform: 'Select an option',
  revenue: 'Select an option',
  timeline: 'Select an option',
  reason: 'Too short',
  privacy: 'Privacy required',
})

export type MigrazioneFormData = z.infer<typeof migrazioneSchema>
