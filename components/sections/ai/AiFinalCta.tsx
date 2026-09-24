'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

/** Closing CTA after the FAQ: dark card with the electric line, back to #candidatura. */
export default function AiFinalCta({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).finalCta

  return (
    <section className="pb-[64px] pt-[24px]">
      <div className="container-noprob">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          data-header-theme="dark"
          className="relative mx-auto flex max-w-[800px] flex-col items-center gap-4 overflow-hidden rounded-card-lg bg-black px-6 py-12 text-center min-[810px]:px-12"
        >
          {/* Electric top line */}
          <span aria-hidden="true" className="ai-header-line !top-0 !bottom-auto" />

          <h2 className="text-np-h2-sm font-display text-[#f9f9f9] min-[810px]:text-[2.4rem] min-[810px]:leading-[1.15em] min-[810px]:tracking-[-0.05em]">
            {d.heading}
          </h2>
          <p className="max-w-[560px] font-sans text-body-lg font-medium text-[#c9c9c9]">{d.text}</p>
          <Link
            href="#candidatura"
            data-tracking="ai_final_cta"
            className="button-principal ai-cta mt-2 !bg-[#f0f0f0] !text-[#121212]"
          >
            {d.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
