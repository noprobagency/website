'use client'

import { motion, Variants } from 'framer-motion'

import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function AiStartSteps({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).start

  return (
    <section className="pb-0 pt-[40px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px]">
          <h3 className="text-center font-sans text-[1.4rem] font-bold leading-[1.3em] tracking-[-0.04em] text-np-dark">
            {d.heading}
          </h3>

          <div className="mt-6 grid gap-4 min-[810px]:grid-cols-3">
            {d.steps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 'some' }}
                variants={cardVariants}
                className="border-card-thick shadow-card flex flex-col gap-2 rounded-card bg-noprob-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--ai-accent)] font-sans text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <h4 className="font-sans text-np-card-h text-noprob-text">{step.title}</h4>
                </div>
                <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
