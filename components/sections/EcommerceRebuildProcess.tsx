'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

function PhasePill({ duration }: { duration: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center 60%'],
  })
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgb(220, 220, 220)', 'rgb(206, 232, 204)']
  )
  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor }}
      className="w-full rounded-[8px] px-3 py-[7px] text-center font-sans text-[0.75rem] font-bold tracking-[0.06em] text-[#363636] min-[810px]:text-[0.875rem]"
    >
      {duration}
    </motion.div>
  )
}

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

        {/* Phase timeline */}
        <div className="mx-auto mt-10 flex max-w-[800px] flex-col">
          {d.phases.map((phase, i) => (
            <div key={phase.number} className="flex flex-row gap-6 min-[810px]:gap-12">

              {/* Left: pill + dashed connector */}
              <div className="flex w-[100px] shrink-0 flex-col items-center min-[810px]:w-[120px]">
                <PhasePill duration={phase.duration} />
                {i < d.phases.length - 1 && (
                  <div className="my-3 w-[2px] flex-1 border-l-2 border-dashed border-[#d6d6d6]" style={{ minHeight: '80px' }} />
                )}
              </div>

              {/* Right: text content */}
              <div className={`flex flex-1 flex-col gap-[6px] ${i < d.phases.length - 1 ? 'pb-10 min-[810px]:pb-14' : 'pb-1'}`}>
                <div className="flex flex-row flex-wrap items-baseline gap-[6px]">
                  <span
                    className="font-sans text-[1.1rem] font-semibold leading-[1.4em] tracking-[-0.04em] min-[810px]:text-[1.8rem]"
                    style={{ color: '#a9a9a9' }}
                  >
                    {phase.number}
                  </span>
                  <span className="font-sans text-[1.1rem] font-semibold leading-[1.4em] tracking-[-0.04em] text-black min-[810px]:text-[1.8rem]">
                    {phase.title}
                  </span>
                </div>
                <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                  {phase.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
