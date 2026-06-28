import CaseStudy from '@/components/sections/CaseStudy'
import { type Locale } from '@/lib/i18n'

export default function MigrazioneSocialProof({ locale = 'it' }: { locale?: Locale }) {
  // Reuse the existing Cumini case study box as-is.
  return <CaseStudy locale={locale} noPadding={true} />
}
