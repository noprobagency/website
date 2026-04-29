import Link from 'next/link'

import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

const COPY: Record<
  Locale,
  { heading: string; body: string; buttonLabel: string; targetKey: 'dataDrivenTeam' | 'contacts' }
> = {
  en: {
    heading: 'Want to see how we apply this with B2C brands?',
    body: 'Our Data-Driven Team is a long-term technical partnership for fashion, supplement, and DTC brands. One stable team, one platform, compound results.',
    buttonLabel: 'Explore Data-Driven Team',
    targetKey: 'dataDrivenTeam',
  },
  it: {
    heading: 'Vuoi vedere come applichiamo questo ai brand B2C?',
    body: 'Il nostro Data-Driven Team è una partnership tecnica long-term per brand fashion, integratori e DTC. Un solo team stabile, una sola piattaforma, risultati che si compongono nel tempo.',
    buttonLabel: 'Scopri il Data-Driven Team',
    targetKey: 'dataDrivenTeam',
  },
}

export function RelatedCTA({ locale = 'it' }: { locale?: Locale }) {
  const copy = COPY[locale]
  const href = ROUTE_PATHS[copy.targetKey][locale]

  return (
    <aside className="my-12 rounded-[16px] border border-black/10 bg-[#f8f8f8] p-7">
      <h3 className="font-sans text-[20px] font-semibold leading-[1.25em] tracking-[-0.03em] text-black">
        {copy.heading}
      </h3>
      <p className="mt-3 font-sans text-[15px] leading-[1.6em] text-[#1c1c1c] tracking-[-0.02em]">
        {copy.body}
      </p>
      <Link
        href={href}
        data-tracking="blog_related_cta"
        className="mt-5 inline-block rounded-[10px] bg-[#1A1A1A] px-5 py-3 font-sans text-[14px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
      >
        {copy.buttonLabel} →
      </Link>
    </aside>
  )
}
