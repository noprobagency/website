import type { Metadata } from 'next'

import AiHero from '@/components/sections/ai/AiHero'
import AiProblem from '@/components/sections/ai/AiProblem'
import AiAudience from '@/components/sections/ai/AiAudience'
import AiSolution from '@/components/sections/ai/AiSolution'
import AiStartSteps from '@/components/sections/ai/AiStartSteps'
import AiTimeline from '@/components/sections/ai/AiTimeline'
import AiDeliverables from '@/components/sections/ai/AiDeliverables'
import AiScope from '@/components/sections/ai/AiScope'
import AiContrast from '@/components/sections/ai/AiContrast'
import AiWho from '@/components/sections/ai/AiWho'
import AiPricing from '@/components/sections/ai/AiPricing'
import AiAfter from '@/components/sections/ai/AiAfter'
import AiStickyCta from '@/components/sections/ai/AiStickyCta'
import { ElectricDivider, SideCables } from '@/components/sections/ai/PowerLayer'
import CaseStudy from '@/components/sections/CaseStudy'
import MigrazioneFAQ from '@/components/sections/MigrazioneFAQ'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

const locale = 'en' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    path: '/ai-accelerator',
    locale,
    pageKey: 'aiAccelerator',
    image: '/images/og-ai-accelerator-en.png',
    imageAlt: 'AI Accelerator - AI audit & roadmap in 30 days',
  })
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Accelerator',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'AI consulting',
  areaServed: ['IT', 'EU'],
  description:
    'A 30-day program to bring AI into your business with a method: business audit, 90-day roadmap, operating protocols and a company Context Document. Fixed price, no lock-in.',
  offers: {
    '@type': 'Offer',
    price: '1000',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://noprob.agency' },
    { '@type': 'ListItem', position: 2, name: 'AI Accelerator', item: 'https://noprob.agency/ai-accelerator' },
  ],
}

export default function AiAcceleratorPage() {
  const copy = getAiCopy(locale)

  return (
    <main className="ai-scope relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Decorative side cables (desktop only) */}
      <SideCables />

      <AiHero locale={locale} />
      <AiProblem locale={locale} />
      <AiAudience locale={locale} />
      <ElectricDivider className="py-6" />
      <AiSolution locale={locale} />
      <AiStartSteps locale={locale} />
      <AiTimeline locale={locale} />
      <ElectricDivider className="py-6" />
      <AiDeliverables locale={locale} />
      <AiScope locale={locale} />
      <AiContrast locale={locale} />
      <ElectricDivider className="py-6 pt-12" />
      <AiWho locale={locale} />
      <CaseStudy
        locale={locale}
        noPadding
        compact
        heading={
          <>
            {copy.caseStudyHeading.part1}
            <em className="font-serif italic">{copy.caseStudyHeading.em}</em>
            {copy.caseStudyHeading.end}
          </>
        }
      />
      <AiPricing locale={locale} />
      <AiAfter locale={locale} />
      <MigrazioneFAQ locale={locale} copy={copy.faq} />
      <Footer locale={locale} />
      <AiStickyCta locale={locale} />
    </main>
  )
}
