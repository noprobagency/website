'use client'

import { motion, Variants } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function MigrazioneProcess({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).process

  return (
    <section className="pb-0 pt-[80px]">
      <div className="container-noprob">
        {/* Header */}
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-np-dark text-center">
            {d.headingPart1}
            <em className="font-serif italic">{d.headingEm}</em>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{d.description}</p>
        </div>

        {/* Phase cards */}
        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 sm:grid-cols-2">
          {d.phases.map((phase, i) => (
            <motion.article
              key={phase.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className="border-card-thick shadow-card flex flex-col items-start gap-[10px] overflow-visible rounded-card bg-noprob-card p-6"
            >
              <span className="inline-flex rounded-[8px] bg-[#121212] px-3 py-[5px] font-sans text-[12px] font-bold tracking-[0.04em] text-[#f0f0f0]">
                Fase {phase.number}
              </span>
              <h3 className="text-np-h3 text-noprob-text">{phase.title}</h3>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {phase.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Closing line */}
        <p className="mx-auto mt-8 max-w-[640px] text-center font-sans text-body-lg font-medium text-noprob-text">
          {d.closingLine}
        </p>
      </div>
    </section>
  )
}
