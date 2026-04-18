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

const solutionImages = [
  '/images/originals/mLxRO32RYdrkA8A3LeYtI1YsShQ.png',
  '/images/originals/VsUV6XwKbarU0lTCxeyHOgrVaCU.png',
  '/images/originals/Vcll2J5RvsXWeyROzs7IjM4yiY.png',
]

export default function EcommerceRebuildSolution({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const d = t.ecommerceRebuild.solution

  return (
    <section className="pb-0 pt-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-np-dark text-center">
            {d.headingPart1}{' '}
            <br />
            <mark className="bg-[rgb(206,232,204)] px-2 font-serif italic text-noprob-text">
              {d.headingPart2}
            </mark>
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 lg:grid-cols-3">
          {d.items.map((solution, i) => (
            <motion.article
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'some' }}
              variants={cardVariants}
              className="border-card-thick shadow-card flex h-full flex-col items-start justify-center gap-[10px] overflow-visible rounded-card bg-noprob-card p-6"
            >
              <Image
                src={solutionImages[i]}
                alt=""
                width={55}
                height={55}
                className="h-[55px] w-[55px] object-cover"
                aria-hidden
              />
              <h3 className="text-np-h3 text-noprob-text">
                {solution.title}
              </h3>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text text-balance break-words whitespace-pre-wrap">
                {solution.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
