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
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function MigrazioneProblem({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).problem

  return (
    <section id="problem" className="py-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {d.heading}
            <span className="font-serif italic">{d.headingEm}</span>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{d.description}</p>
        </div>

        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-4 lg:flex-row">
          {d.items.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className="section-card flex-1"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgb(206,232,204)] font-serif text-[14px] font-semibold italic text-noprob-text">
                {i + 1}
              </span>
              <h3 className="text-np-h3 text-noprob-text">{item.title}</h3>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
