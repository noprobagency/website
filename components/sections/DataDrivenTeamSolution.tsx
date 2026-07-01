'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { getDictionary, type Locale } from '@/lib/i18n'
import { siteAssets } from '@/lib/site'
import SectionLabel from '@/components/ui/SectionLabel'

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

export default function DataDrivenTeamSolution({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const d = t.dataDrivenTeam.solution

  return (
    <section className="pb-0 pt-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-np-dark text-center">
            {d.heading}{' '}
            <br />
            <mark className="bg-[rgb(206,232,204)] px-2 font-serif italic text-noprob-text">
              {d.headingMark}
            </mark>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">
            {d.description}
          </p>
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

        {/* Partner Venn: from noprob team + brand comes the partner (with a face) */}
        {locale === 'it' && (
          <div className="mx-auto mt-14 flex max-w-[560px] flex-col items-center text-center">
            <div className="relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-full border-2 border-white shadow-card">
              <Image
                src={siteAssets.heroAntonio}
                alt="Antonio Manitta"
                fill
                sizes="84px"
                className="object-cover grayscale"
              />
            </div>
            <p className="mt-3 font-sans text-[13px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-text">
              <span className="font-semibold">Antonio Manitta</span>, eCommerce Manager.
              <br className="min-[520px]:hidden" /> Seguirà il tuo progetto.
            </p>

            <svg
              viewBox="0 0 800 560"
              className="mt-1 w-full max-w-[520px]"
              role="img"
              aria-label="Dall'incontro tra il team noprob e il tuo brand nasce il partner"
            >
              <defs>
                <clipPath id="ddt-venn-left">
                  <circle cx="250" cy="360" r="200" />
                </clipPath>
              </defs>
              <circle cx="250" cy="360" r="200" fill="rgb(206,232,204)" />
              <circle cx="560" cy="360" r="200" fill="rgb(219,204,232)" />
              <g clipPath="url(#ddt-venn-left)">
                <circle cx="560" cy="360" r="200" fill="#121212" />
              </g>

              {/* arrow from the intersection up to the "partner" label */}
              <line x1="405" y1="234" x2="405" y2="96" stroke="#121212" strokeWidth="2.5" />
              <path d="M405 82 L398 98 L412 98 Z" fill="#121212" />

              <g
                fill="#1a1a1a"
                fontFamily='"Source Serif 4", Georgia, serif'
                fontStyle="italic"
                textAnchor="middle"
              >
                <text x="405" y="40" fontSize="26">noprob</text>
                <text x="405" y="68" fontSize="26">partner</text>
                <text x="196" y="348" fontSize="30">noprob</text>
                <text x="196" y="384" fontSize="30">team</text>
                <text x="620" y="372" fontSize="30">brand</text>
              </g>
            </svg>
          </div>
        )}
      </div>
    </section>
  )
}
