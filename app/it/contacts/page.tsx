import type { Metadata } from 'next'

import ContactsHero from '@/components/sections/ContactsHero'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Prenota il tuo sprint e inizia una conversazione di crescita tecnica con noprob agency.',
  alternates: {
    canonical: `${siteConfig.url}/it/contacts`,
    languages: {
      en: `${siteConfig.url}/contacts`,
      it: `${siteConfig.url}/it/contacts`,
    },
  },
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
