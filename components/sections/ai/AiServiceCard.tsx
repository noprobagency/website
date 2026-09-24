import Link from 'next/link'

import { ZapIcon } from '@/components/sections/ai/PowerLayer'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

/**
 * Contextual link card to the AI Accelerator landing, shown under the
 * services grid on the home pages. Copy reuses the landing hero eyebrow
 * and benefits (no new claims).
 */
export default function AiServiceCard({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale)
  const href = ROUTE_PATHS.aiAccelerator[locale]

  return (
    <section className="ai-scope px-5 pb-12 min-[810px]:px-9">
      <div className="mx-auto w-full max-w-[1120px]">
        <Link
          href={href}
          data-tracking="home_ai_accelerator_card"
          className="border-card-thick shadow-card flex flex-col items-start gap-3 rounded-card bg-noprob-card p-6 transition-transform hover:-translate-y-[2px] min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-between min-[810px]:p-8"
        >
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold tracking-[-0.02em] text-[color:var(--ai-accent-text)]">
              <ZapIcon size={14} />
              {d.hero.eyebrow}
            </span>
            <span className="font-display text-[22px] font-semibold leading-[1.2em] tracking-[-0.04em] text-np-dark min-[810px]:text-[26px]">
              AI Accelerator
            </span>
            <span className="font-sans text-body-sm font-medium text-noprob-text">
              {d.hero.benefits.join(' · ')}
            </span>
          </div>
          <span className="button-principal ai-cta shrink-0">{d.hero.cta}</span>
        </Link>
      </div>
    </section>
  )
}
