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
    title: 'About',
    description:
      'Meet the technical and growth partner behind noprob agency and the operating model we bring to eCommerce brands.',
    path: '/about',
  })
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <ResultsCarousel />
      <PrinciplesSection />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
