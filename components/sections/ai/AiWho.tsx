'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { siteAssets } from '@/lib/site'
import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

export default function AiWho({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).who

  return (
    <section className="pb-[48px] pt-[40px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {d.headingPart1}
            <em className="font-serif italic">{d.headingEm}</em>
            {d.headingEnd}
          </h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="border-card-thick shadow-card mx-auto mt-8 flex max-w-[800px] flex-col items-center gap-5 rounded-card bg-noprob-card p-6 min-[810px]:flex-row min-[810px]:items-start min-[810px]:gap-8 min-[810px]:p-8"
        >
          <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-full border-2 border-[#f0f0f0] min-[810px]:h-[120px] min-[810px]:w-[120px]">
            <Image
              src={siteAssets.heroAntonio}
              alt={d.imageAlt}
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-sans text-body-sm font-medium leading-[1.7em] text-noprob-text min-[810px]:text-[1rem]">
              {d.text1}
            </p>
            <p className="font-sans text-body-sm font-medium leading-[1.7em] text-noprob-text min-[810px]:text-[1rem]">
              {d.text2}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
