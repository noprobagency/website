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

export default function AiProblem({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).problem

  return (
    <section id="problem" className="pb-0 pt-0">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {d.headingPart1}
            <em
              className="font-serif italic"
              style={{ background: 'rgb(232, 204, 204)', borderRadius: '4px', padding: '0 6px' }}
            >
              {d.headingEm}
              {d.headingEnd}
            </em>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{d.intro}</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 min-[810px]:grid-cols-2">
          {d.items.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className="border-card-thick shadow-card flex flex-col items-start justify-start gap-[10px] overflow-visible rounded-card bg-noprob-card p-6"
            >
              <h3 className="text-np-h3 text-noprob-text">{item.title}</h3>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text text-balance break-words">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
