'use client'

import Image from 'next/image'
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

const solutionImages = [
  '/images/originals/mLxRO32RYdrkA8A3LeYtI1YsShQ.png',
  '/images/originals/VsUV6XwKbarU0lTCxeyHOgrVaCU.png',
  '/images/originals/Vcll2J5RvsXWeyROzs7IjM4yiY.png',
]

export default function MigrazioneSolution({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).solution

  return (
    <section className="pb-[80px] pt-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {d.headingPart1}
            <mark className="bg-[rgb(206,232,204)] px-2 font-serif italic text-noprob-text">
              {d.headingEm}
            </mark>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{d.description}</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 lg:grid-cols-3">
          {d.items.map((item, i) => (
            <motion.article
              key={item.title}
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
              <h3 className="text-np-h3 text-noprob-text">{item.title}</h3>
              <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text text-balance break-words whitespace-pre-wrap">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Fourth, full-width horizontal card (yellow border) */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
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
      </div>
    </section>
  )
}
