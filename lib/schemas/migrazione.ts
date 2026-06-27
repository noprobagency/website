import { z } from 'zod'

/**
 * Qualification form for the "Migrazione a Shopify" landing page.
 * Italian-first error messages (the page ships IT-only for now). The same schema
 * validates on the client (zodResolver) and on the server (/api/migrazione-lead).
 */
export const migrazioneSchema = z.object({
  name: z.string().min(2, 'Inserisci nome e cognome'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  brand: z.string().min(2, 'Inserisci il nome del brand'),
  websiteUrl: z.string().min(1, 'Inserisci l’URL del tuo sito'),
  platform: z.string().min(1, 'Seleziona un’opzione'),
  revenue: z.string().min(1, 'Seleziona un’opzione'),
  timeline: z.string().min(1, 'Seleziona un’opzione'),
  reason: z.string().min(30, 'Spiega in almeno 30 caratteri il motivo del passaggio'),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Devi accettare la Privacy Policy',
  }),
  locale: z.enum(['en', 'it']).optional(),
})

export type MigrazioneFormData = z.infer<typeof migrazioneSchema>
