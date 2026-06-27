import Image from 'next/image'

import CaseStudy from '@/components/sections/CaseStudy'
import { siteAssets } from '@/lib/site'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'

export default function MigrazioneSocialProof({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).socialProof
  const testimonials = getDictionary(locale).about.testimonials.items.slice(0, 2)

  return (
    <>
      {/* Reuse the existing Cumini case study box as-is */}
      <CaseStudy locale={locale} noPadding={true} />

      <section className="px-5 pb-[80px] min-[810px]:px-9">
        <div className="mx-auto w-full max-w-[850px]">
          {/* Bridge to other verticals */}
          <p className="mx-auto max-w-[640px] text-center font-sans text-body-lg font-medium leading-[1.5em] text-noprob-text">
            {d.bridgeLine}
          </p>

          {/* Testimonials heading + Trustpilot badge */}
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <h3 className="font-sans text-[1.6rem] font-bold leading-[1.3em] tracking-[-0.04em] text-np-dark">
              {d.testimonialsHeading}
            </h3>
            <div className="flex items-center gap-[5px]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="rgb(36,143,98)"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">
                4,9
              </span>
              <span className="font-sans text-[13px] font-medium tracking-[-0.03em] text-np-green-trust">
                Trustpilot
              </span>
            </div>
          </div>

          {/* Testimonial cards (reused content) */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex h-auto flex-col items-start justify-between gap-[15px] overflow-visible rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-[24px] shadow-card"
              >
                <p className="font-sans text-[1rem] font-normal leading-[1.5em] tracking-[-0.02em] text-noprob-text">
                  {testimonial.quote}
                </p>

                <div className="mt-0 flex w-full flex-col gap-[15px]">
                  <div className="h-5 w-auto">
                    <Image
                      src={siteAssets.trustpilotWordmark}
                      alt="Trustpilot rating"
                      width={100}
                      height={20}
                      className="h-full w-auto object-contain object-left"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/5">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">
                        {testimonial.name}
                      </p>
                      <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-muted">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
