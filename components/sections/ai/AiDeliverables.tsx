'use client'

import { motion, Variants } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { ZapIcon } from '@/components/sections/ai/PowerLayer'
import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function AiDeliverables({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).deliverables

  return (
    <section className="pb-[40px] pt-[40px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {d.headingPart1}
            <em className="font-serif italic">{d.headingEm}</em>
            {d.headingEnd}
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 lg:grid-cols-3">
          {d.cards.map((card, i) => (
            <motion.article
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className="border-card-thick shadow-card flex h-full flex-col items-start justify-start gap-[10px] overflow-visible rounded-card bg-noprob-card p-6"
            >
              <span className="inline-flex rounded-[8px] bg-[rgba(47,107,255,0.12)] px-3 py-[5px] font-sans text-[12px] font-bold tracking-[0.04em] text-[color:var(--ai-accent-text)]">
                0{i + 1}
              </span>
              <h3 className="text-np-h3 text-noprob-text">{card.title}</h3>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Quick-win line with lightning icon */}
        <p className="mx-auto mt-6 flex max-w-[720px] items-start justify-center gap-2 text-center font-sans text-body-sm font-semibold leading-[1.6em] text-noprob-text">
          <ZapIcon size={16} className="mt-[3px] shrink-0 text-[color:var(--ai-accent-text)]" />
          {d.extra}
        </p>
      </div>
    </section>
  )
}
