import type { Metadata } from 'next'

import ContactsHero from '@/components/sections/ContactsHero'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/contatti', locale: 'it', pageKey: 'contacts' })
}

export default function ItalianContactsPage() {
  return (
    <main>
      <ContactsHero />
      <ContactSection successRedirect="/it/grazie" locale="it" />
      <Footer locale="it" />
    </main>
  )
}
