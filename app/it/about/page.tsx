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
  return buildMetadata({ path: '/it/about', locale: 'it', pageKey: 'about' })
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
