import type { Metadata } from 'next'

import DataDrivenTeamHero from '@/components/sections/DataDrivenTeamHero'
import DataDrivenTeamProblem from '@/components/sections/DataDrivenTeamProblem'
import DataDrivenTeamSolution from '@/components/sections/DataDrivenTeamSolution'
import MigrazioneProcess from '@/components/sections/MigrazioneProcess'
import EcommerceRebuildWhyUs from '@/components/sections/EcommerceRebuildWhyUs'
import { getTeamRoadmapCopy } from '@/lib/i18n/teamRoadmap'
import CaseStudy from '@/components/sections/CaseStudy'
import MigrazionePricing from '@/components/sections/MigrazionePricing'
import { getDataTeamCopy } from '@/lib/i18n/dataTeam'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/team-ecommerce-dedicato', locale: 'it', pageKey: 'dataDrivenTeam' })
}

export default function ItalianDataDrivenTeamPage() {
  const locale = 'it'
  return (
    <main>
      <DataDrivenTeamHero locale={locale} />
      <DataDrivenTeamProblem locale={locale} />
      <DataDrivenTeamSolution locale={locale} />
      <MigrazioneProcess locale={locale} copy={getTeamRoadmapCopy(locale)} />
      <EcommerceRebuildWhyUs locale={locale} />
      <CaseStudy locale={locale} noPadding={true} />
      <MigrazionePricing
        locale={locale}
        copy={getDataTeamCopy(locale).pricing}
        formCopy={getDataTeamCopy(locale).form}
        formSource="datateam"
        ctaTracking="datateam_pricing_cta"
        formSubmitTracking="datateam_form_submit"
        showTiers={false}
        showPrice={false}
      />
      <FAQ locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
