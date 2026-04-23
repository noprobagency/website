import type { Metadata } from 'next'

import ContactsHero from '@/components/sections/ContactsHero'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Contatti',
    description:
      'Prenota il tuo sprint e inizia una conversazione di crescita tecnica con noprob agency.',
    path: '/it/contacts',
    locale: 'it',
  })
}

export default function ItalianContactsPage() {
  return (
    <main>
      <ContactsHero />
      <ContactSection />
      <Footer locale="it" />
    </main>
  )
}
