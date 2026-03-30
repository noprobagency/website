import type { Metadata } from 'next'

import PageIntro from '@/components/sections/PageIntro'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Contacts',
    description:
      'Reserve your sprint and start a technical growth conversation with noprob agency.',
    path: '/contacts',
  })
}

export default function ContactsPage() {
  return (
    <PageIntro
      eyebrow="Contacts"
      title="Reserve your sprint."
      description="The full contact flow will be connected in the next iteration with form handling, validation, tracking hooks, and Resend delivery. For now, the route and metadata are ready."
    />
  )
}
