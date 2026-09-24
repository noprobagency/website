import AiApplicationForm from '@/components/sections/ai/AiApplicationForm'
import { type Locale } from '@/lib/i18n'

/**
 * Standalone application-form section (#candidatura target), framed as its
 * own electric card. Placed right after the case study, before the
 * deliverables, so people can apply as soon as the offer is clear.
 */
export default function AiFormSection({ locale = 'it' }: { locale?: Locale }) {
  return (
    <section className="pb-[40px] pt-[40px]">
      <div className="container-noprob">
        <div className="ai-form-card mx-auto max-w-[800px] rounded-[20px] p-5 min-[810px]:p-10">
          <AiApplicationForm locale={locale} />
        </div>
      </div>
    </section>
  )
}
