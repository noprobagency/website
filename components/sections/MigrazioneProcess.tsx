'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'

function PhaseCard({ number, title, description }: { number: string; title: string; description: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center 65%'],
  })
  // Badge fades from grey to black as the card scrolls into view.
  const badgeBg = useTransform(scrollYProgress, [0, 1], ['rgb(140, 140, 140)', 'rgb(18, 18, 18)'])

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-card-thick shadow-card flex flex-col gap-4 overflow-visible rounded-card bg-noprob-card p-6 min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-10 min-[810px]:p-8"
    >
      <div className="flex flex-col gap-3 min-[810px]:w-[44%] min-[810px]:shrink-0">
        <motion.span
          style={{ backgroundColor: badgeBg }}
          className="inline-flex self-start rounded-[8px] px-3 py-[5px] font-sans text-[12px] font-bold tracking-[0.04em] text-[#f0f0f0]"
        >
          Fase {number}
        </motion.span>
        <h3 className="text-np-h3 text-noprob-text">{title}</h3>
      </div>
      <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text min-[810px]:flex-1">
        {description}
      </p>
    </motion.article>
  )
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

        {/* Phase cards — single column, horizontal */}
        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-4">
          {d.phases.map((phase) => (
            <PhaseCard
              key={phase.number}
              number={phase.number}
              title={phase.title}
              description={phase.description}
            />
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
