import type { Metadata } from 'next'

import ContactsHero from '@/components/sections/ContactsHero'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/contacts', locale: 'en', pageKey: 'contacts' })
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
