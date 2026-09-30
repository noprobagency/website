import type { Locale } from '@/lib/i18n'
import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlApplicationForm from './ZlApplicationForm'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="10" fill="#121212" />
      <path d="M7.5 12.5l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Section 12: final CTA is the form itself. Text left, form right on
 * desktop; stacked on mobile.
 */
export default function ZlApplication({ locale, copy, form }: { locale: Locale; copy: ZlCopy['finalCta']; form: ZlCopy['form'] }) {
  return (
    <section className="py-20 min-[810px]:py-28">
      <div className="container-noprob">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-np-h2 text-np-dark">{copy.h2}</h2>
            <p className="mt-5 font-sans text-[17px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">{copy.paragraph}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {copy.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 font-sans text-[15px] font-semibold tracking-[-0.02em] text-np-dark">
                  <CheckIcon />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="section-card !block !p-6 min-[810px]:!p-8">
            <ZlApplicationForm locale={locale} copy={form} />
          </div>
        </div>
      </div>
    </section>
  )
}
