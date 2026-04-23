'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import { siteAssets } from '@/lib/site'
import { getDictionary, type Locale } from '@/lib/i18n'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function Testimonials({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale).about.testimonials

  return (
    <div className="mx-auto mt-16 max-w-[850px]">
      <div className="text-center">
        <h3 className="font-sans text-[1.6rem] font-bold leading-[1.4em] tracking-[-0.04em] text-[#f9f9f9]">
          {t.heading}
        </h3>
      </div>

      <div className="mt-6 grid gap-3 xl:grid-cols-2">
        {t.items.map((testimonial, i) => (
          <motion.article
            key={testimonial.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'some' }}
            variants={cardVariants}
            className="border-card-thick shadow-card flex h-auto flex-col items-start justify-between rounded-card bg-noprob-card p-6 overflow-visible"
          >
            <p className="font-sans text-[1rem] font-normal leading-[1.5em] tracking-[-0.02em] text-noprob-text">
              {testimonial.quote}
            </p>

            <div className="flex-1" />

            <div className="mt-[10px]">
              <div className="h-5 w-auto">
                <Image
                  src={siteAssets.trustpilotWordmark}
                  alt="Trustpilot rating"
                  width={100}
                  height={20}
                  className="h-full w-auto object-contain object-left"
                />
              </div>

              <div className="mt-[10px] flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-black/5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
