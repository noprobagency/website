'use client'

import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'

// Per-phase label colors (green / purple / blue), dark text.
const BADGE_COLORS = [
  'bg-[rgb(206,232,204)] text-[rgb(24,24,24)]',
  'bg-[rgb(219,204,232)] text-[rgb(24,24,24)]',
  'bg-[rgb(204,225,232)] text-[rgb(24,24,24)]',
]

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

        {/* Phase cards — single column, label + title on one line, full-width description */}
        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-4">
          {d.phases.map((phase, i) => (
            <motion.article
              key={phase.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-card-thick shadow-card flex flex-col gap-3 overflow-visible rounded-card bg-noprob-card p-6 min-[810px]:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex shrink-0 rounded-[8px] px-3 py-[5px] font-sans text-[12px] font-bold tracking-[0.04em] ${BADGE_COLORS[i % BADGE_COLORS.length]}`}
                >
                  Fase {phase.number}
                </span>
                <h3 className="text-np-h3 text-noprob-text">{phase.title}</h3>
                <span className="font-serif text-[13px] font-medium italic tracking-[-0.02em] text-noprob-muted min-[520px]:ml-auto">
                  {phase.duration}
                </span>
              </div>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {phase.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Why 4 months — full-width horizontal card (yellow border) */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="shadow-card mx-auto mt-4 flex max-w-[800px] flex-col gap-4 overflow-visible rounded-card border-[6px] border-[#e8dfa3] bg-noprob-card p-6 min-[810px]:flex-row min-[810px]:items-start min-[810px]:gap-6 min-[810px]:p-8"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#121212"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="shrink-0"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          <div className="flex flex-col gap-2">
            <h3 className="text-np-h3 text-noprob-text">{d.fourMonths.title}</h3>
            <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
              {d.fourMonths.description}
            </p>
          </div>
        </motion.article>

        {/* Closing line */}
        <p className="mx-auto mt-8 max-w-[640px] text-center font-sans text-body-lg font-medium text-noprob-text">
          {d.closingLine}
        </p>
      </div>
    </section>
  )
}
