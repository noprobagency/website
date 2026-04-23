'use client'

import Image from 'next/image'
import { getDictionary, type Locale } from '@/lib/i18n'

export default function PrinciplesSection({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale).about.principles

  return (
    <section id="principles" className="py-16 lg:py-32 bg-noprob-bg">
      <div className="container-noprob">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-stretch lg:gap-20">
          {/* Left Column: Image */}
          <div className="relative min-h-[400px] w-full overflow-hidden rounded-card-lg lg:w-[45%]">
            <Image
              src="/images/about-no-prob.webp"
              alt="Photo of Hamza"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-10 lg:w-[55%]">
            <h2 className="text-[32px] lg:text-[44px] font-semibold leading-[1.1] tracking-[-0.05em] text-noprob-text">
              {t.heading}
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-bold tracking-[-0.04em] text-noprob-text">
                  {t.card1Title}
                </h3>
                <p className="font-sans text-body-lg font-medium leading-[1.6em] text-noprob-text">
                  {t.card1Body}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-bold tracking-[-0.04em] text-noprob-text">
                  {t.card2Title}
                </h3>
                <p className="font-sans text-body-lg font-medium leading-[1.6em] text-noprob-text">
                  {t.card2Body}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-bold tracking-[-0.04em] text-noprob-text">
                  {t.card3Title}
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-body-lg font-medium leading-[1.6em] text-noprob-text">
                    {t.card3Body1}
                  </p>
                  <p className="font-sans text-body-lg font-bold leading-[1.6em] text-noprob-text">
                    {t.card3Body2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
