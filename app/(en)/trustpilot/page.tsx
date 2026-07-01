import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

// Utility redirect to /contacts. Kept out of the index (and out of the sitemap).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function TrustpilotPage() {
  redirect('/contacts')
}
