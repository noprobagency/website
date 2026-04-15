import type { Metadata } from 'next'

import ContactsHero from '@/components/sections/ContactsHero'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'
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
    <main>
      <ContactsHero />
      <ContactSection />
      <Footer />
    </main>
  )
}
