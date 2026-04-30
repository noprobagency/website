import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  websiteUrl: z.string().optional(),
  interest: z.string().min(1, 'Please select an option'),
  revenue: z.string().min(1, 'Please select an option'),
  adsSpend: z.string().min(1, 'Please select an option'),
  additionalInfo: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
