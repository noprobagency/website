'use server'

import { Resend } from 'resend'
import { contactSchema, ContactFormData } from '@/lib/schemas/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: ContactFormData) {
  // Validate the data again on the server
  const validatedFields = contactSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: 'Invalid fields. Please check your data.' }
  }

  const {
    name,
    company,
    email,
    phone,
    websiteUrl,
    interest,
    revenue,
    adsSpend,
    additionalInfo,
  } = validatedFields.data

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'NoProb Agency <onboarding@resend.dev>', // Usually corrected once domain is verified
      to: ['hello@noprob.agency'],
      subject: `New Lead: ${name} from ${company}`,
      html: `
        <h1>New Lead Capture</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>eCommerce URL:</strong> ${websiteUrl}</p>
        <br />
        <p><strong>Interested in:</strong> ${interest}</p>
        <p><strong>Annual Revenue:</strong> ${revenue}</p>
        <p><strong>Monthly Ads Spend:</strong> ${adsSpend}</p>
        <p><strong>Additional Info:</strong> ${additionalInfo || 'None provided'}</p>
      `,
    })

    if (error) {
      console.error('Resend Error:', error)
      return { error: 'Failed to send email. Please try again later.' }
    }

    return { success: true }
  } catch (err: unknown) {
    console.error('Server Error:', err)
    return { error: 'An unexpected error occurred. Please try again.' }
  }
}
