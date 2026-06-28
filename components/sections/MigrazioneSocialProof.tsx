import CaseStudy from '@/components/sections/CaseStudy'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'

export default function MigrazioneSocialProof({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).socialProof

  return (
    <>
      {/* Reuse the existing Cumini case study box as-is */}
      <CaseStudy locale={locale} noPadding={true} />

      {/* Bridge to other verticals */}
      <section className="px-5 pb-0 min-[810px]:px-9">
        <p className="mx-auto max-w-[640px] text-center font-sans text-body-lg font-medium leading-[1.5em] text-noprob-text">
          {d.bridgeLine}
        </p>
      </section>
    </>
  )
}
