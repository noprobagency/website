'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

const serviceTags = ['Meta Ads', 'eCommerce', 'Klaviyo', 'Shopify', 'Google Ads', 'SEO']

export default function CaseStudy({
  locale = 'en',
  noPadding = false,
}: {
  locale?: Locale
  noPadding?: boolean
}) {
  const t = getDictionary(locale)

  return (
    <section
      className={
        noPadding
          ? 'px-5 pb-20 min-[810px]:px-9 min-[810px]:pb-[100px]'
          : 'px-9 pb-[80px] pt-[80px]'
      }
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
        <div className="max-w-[550px] text-center">
          <SectionLabel>{t.caseStudy.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {t.caseStudy.heading}
          </h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="shadow-card flex w-full max-w-[850px] flex-col overflow-hidden rounded-[16px] bg-[#f9f9f9] border-[6px] border-[#f0f0f0] lg:flex-row"
        >
          <div className="relative w-full h-[200px] flex-none lg:h-auto lg:flex-1">
            <Image
              src="/images/originals/2QNUkNFRX0OUC0qTVjeplIvlFS0.jpg"
              alt="Cumini fashion case study"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-1 flex-col gap-[15px] p-[32px] lg:gap-5 lg:px-8 lg:py-5 lg:pr-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-[#666]">
                  {t.caseStudy.category}
                </p>

                <Image
                  src="/images/originals/T1UW1kS41RaUauBrmK5dUj0txA.png"
                  alt="Cumini logo"
                  width={228}
                  height={36}
                  className="h-9 w-auto object-contain object-left"
                />
              </div>

              <p className="max-w-[480px] font-sans text-body-sm font-medium leading-[1.5em] text-np-text">
                {t.caseStudy.description}
              </p>
            </div>

            <div className="border-b border-[rgba(164,164,164,0.5)] pb-2 lg:pb-6">
              <p className="flex items-center gap-2 font-sans text-body-lg font-medium text-np-dark">
                <span className="text-np-green">{t.caseStudy.metric.charAt(0)}</span>
                {t.caseStudy.metric.slice(2)}
              </p>
              <p className="mt-2 font-sans text-[11px] lg:text-[12px] font-medium tracking-[-0.04em] text-np-text whitespace-nowrap lg:whitespace-normal">
                {t.caseStudy.metricNote}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {serviceTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-pill bg-white px-3 py-[2px] font-sans text-[14px] font-semibold tracking-[-0.04em] text-[#121212]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
