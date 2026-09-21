import { z } from 'zod'

/**
 * Step-by-step application funnel (/af-1-1). Same schema validates each step on
 * the client and the full payload on the server (/api/funnel-lead).
 */
export const funnelSchema = z.object({
  qualified: z.enum(['si', 'no']),
  firstName: z.string().trim().min(2, 'Inserisci il tuo nome'),
  lastName: z.string().trim().min(2, 'Inserisci il tuo cognome'),
  email: z.string().trim().email('Inserisci un’email valida'),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s().-]{7,20}$/, 'Inserisci un numero valido'),
  websiteUrl: z.string().trim().min(4, 'Inserisci l’URL del tuo sito'),
  revenue: z.string().min(1, 'Seleziona un’opzione'),
  reason: z.string().trim().min(20, 'Scrivi almeno un paio di righe'),
  privacy: z.literal(true, { message: 'Devi accettare la privacy policy' }),
  source: z.string().max(40).optional(),
  // Anti-spam: honeypot field (must stay empty) + time the form was on screen.
  hp: z.string().optional(),
  elapsedMs: z.number().optional(),
})

export type FunnelData = z.infer<typeof funnelSchema>
