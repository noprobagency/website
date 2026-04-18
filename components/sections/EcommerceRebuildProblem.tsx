'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

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

const problemImages = [
  '/images/originals/vea64dgdN9StI4fAs6PXXKFyE.png',
  '/images/originals/BwTYAhLAepLBYZo2TxC9P40G5aU.png',
  '/images/originals/p6hRcI15hP2jkD7fjTm3I0v15WI.png',
]

export default function EcommerceRebuildProblem({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const d = t.ecommerceRebuild.problem

  return (
    <section id="problem" className="pb-0 pt-0">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-np-dark text-center">
            {d.heading}{' '}
            <br />
            <em
              className="font-serif italic"
              style={{
                background: 'rgb(232, 204, 204)',
                borderRadius: '4px',
                padding: '0 6px',
              }}
            >
              {d.headingEm}
            </em>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">
            {d.description}
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-4 lg:flex-row">
          {d.items.map((problem, i) => (
            <motion.article
              key={problem.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className="border-card-thick shadow-card flex flex-1 flex-col items-start justify-center gap-[10px] overflow-visible rounded-card bg-noprob-card p-6"
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
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text text-balance break-words whitespace-pre-wrap">
                {problem.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
