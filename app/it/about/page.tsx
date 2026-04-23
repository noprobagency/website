import type { Metadata } from 'next'

import AboutHero from '@/components/sections/AboutHero'
import ResultsCarousel from '@/components/sections/ResultsCarousel'
import PrinciplesSection from '@/components/sections/PrinciplesSection'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Chi Siamo',
    description:
      'Incontra il partner tecnico e di crescita dietro noprob agency e il modello operativo che portiamo ai brand eCommerce.',
    path: '/it/about',
    locale: 'it',
  })
}

export default function ItalianAboutPage() {
  const locale = 'it'
  return (
    <main>
      <AboutHero locale={locale} />
      <ResultsCarousel locale={locale} />
      <PrinciplesSection locale={locale} />
      <Pricing locale={locale} />
      <FAQ locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
