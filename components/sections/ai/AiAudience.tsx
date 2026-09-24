'use client'

import { motion, Variants } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
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

export default function AiAudience({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).audience

  return (
    <section className="pb-0 pt-[40px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {d.headingPart1}
            <em className="font-serif italic">{d.headingEm}</em>
            {d.headingEnd}
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{d.intro}</p>
        </div>

        {/* Two large audience cards */}
        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 min-[810px]:grid-cols-2">
          {d.cards.map((card, i) => (
            <motion.article
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className="border-card-thick shadow-card flex h-full flex-col items-start justify-start gap-[10px] overflow-visible rounded-card bg-noprob-card p-6 min-[810px]:p-8"
            >
              <h3 className="text-np-h3 text-noprob-text">{card.title}</h3>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* "Not for you if..." box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="shadow-card mx-auto mt-4 max-w-[800px] rounded-card border-[6px] border-[rgb(232_204_204_/_45%)] bg-noprob-card p-6 min-[810px]:p-8"
        >
          <h3 className="text-np-h3 text-noprob-text">{d.notForTitle}</h3>
          <ul className="mt-3 grid gap-2 min-[810px]:grid-cols-2">
            {d.notForItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text"
              >
                <span aria-hidden className="mt-[2px] font-semibold text-[#C0392B]">
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
