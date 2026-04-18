'use client'

import { motion, Variants } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

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

// Diagonal hatch pattern — same SVG tile as Framer original
const PATTERN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='126' height='126'%3E%3Cpath d='M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z' fill='rgba(136,136,136,0.2)' fill-rule='evenodd'/%3E%3C/svg%3E\")"

export default function EcommerceRebuildProcess({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const d = t.ecommerceRebuild.process

  return (
    <section className="pb-[80px] pt-[80px]">
      <div className="container-noprob">
        {/* Header */}
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-np-dark text-center">
            {d.headingPart1}
            <br />
            <em className="font-serif italic">{d.headingPart2}</em>.{' '}
            <br />
            <em className="font-serif italic">{d.headingPart3}</em>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">
            {d.description}
          </p>
        </div>

        {/* Phase cards */}
        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-4">
          {d.phases.map((phase, i) => (
            <motion.article
              key={phase.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className="shadow-card flex flex-row items-start gap-5 overflow-visible rounded-card border-[6px] border-[#f8f8f8] bg-white p-6 h-auto min-[810px]:h-[180px] min-[810px]:gap-8 min-[810px]:border-[6px]"
            >
              {/* Left hatch pattern box — self-stretch overrides items-start */}
              <div
                className="relative flex-none self-stretch"
                style={{ width: '80px', borderRadius: '8px', overflow: 'hidden' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'left top',
                    backgroundSize: '64px',
                    backgroundImage: PATTERN_BG,
                  }}
                />
              </div>

              {/* Text container: flex: 1, self-stretch → justify-center centers vertically */}
              <div className="flex min-w-0 flex-1 flex-col items-start justify-center self-stretch gap-[5px]">
                {/* Duration — white-space: pre, color #363636 */}
                <p
                  className="flex-none whitespace-pre font-sans text-[0.75rem] font-medium"
                  style={{ color: '#363636' }}
                >
                  {phase.duration}
                </p>

                {/* Heading row: number (gray) + title */}
                <div className="flex flex-none flex-row items-baseline gap-[6px]">
                  <h5
                    className="font-sans text-[1.1rem] font-semibold leading-[1.4em] tracking-[-0.04em] text-balance min-[810px]:text-[1.8rem]"
                    style={{ color: '#a9a9a9' }}
                  >
                    {phase.number}
                  </h5>
                  <h5 className="font-sans text-[1.1rem] font-semibold leading-[1.4em] tracking-[-0.04em] text-balance text-black min-[810px]:text-[1.8rem]">
                    {phase.title}
                  </h5>
                </div>

                {/* Description */}
                <p className="flex-none font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                  {phase.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
