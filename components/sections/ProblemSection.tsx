'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

const problemImages = [
  '/images/originals/vea64dgdN9StI4fAs6PXXKFyE.png',
  '/images/originals/BwTYAhLAepLBYZo2TxC9P40G5aU.png',
  '/images/originals/p6hRcI15hP2jkD7fjTm3I0v15WI.png',
]

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

export default function ProblemSection({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)

  return (
    <section id="problem" className="pb-0 pt-[60px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{t.problem.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-np-dark text-center">
            {t.problem.heading} <br /> <span className="line-through">{t.problem.headingStrike}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[660px] font-sans text-body-lg font-medium text-noprob-text">
            {t.problem.body}
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-4 lg:flex-row">
          {t.problem.items.map((problem, i) => (
            <motion.article
              key={problem.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className="section-card flex-1"
            >
              <Image
                src={problemImages[i]}
                alt=""
                width={55}
                height={55}
                className="h-[55px] w-[55px] object-cover"
                aria-hidden
              />
              <h3 className="text-np-h3 text-noprob-text">
                {problem.title}
              </h3>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {problem.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
