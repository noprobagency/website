'use client'

import { motion, Variants } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconX() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0"
      fill="rgb(124,124,124)"
    >
      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
    </svg>
  )
}

function IconCheck({ color = 'rgb(61,209,50)' }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0"
      fill={color}
    >
      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  )
}

function IconCheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
        fill="rgb(18,18,18)"
      />
    </svg>
  )
}

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function EcommerceRebuildWhyUs({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const d = t.ecommerceRebuild.whyUs

  return (
    <>
      {/* ── Part 1: Comparison ── */}
      <section className="relative overflow-x-hidden min-[810px]:overflow-visible pb-0 pt-0">
        <div className="container-noprob relative" style={{ zIndex: 1 }}>
          {/* Header */}
          <div className="mx-auto max-w-[800px] text-center">
            <SectionLabel>{d.label}</SectionLabel>
            <h2 className="mt-5 text-np-h2 text-np-dark text-center">
              {d.heading}
            </h2>
            <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">
              {d.description}
            </p>
          </div>

          {/* Comparison cards container */}
          <div className="relative mx-auto mt-10 max-w-[900px]">
            {/* Conic gradient glow — positioned relative to the container */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-full top-1/2 min-[810px]:-mt-[50px]"
              style={{
                width: '400px',
                height: '400px',
                background:
                  'conic-gradient(#00ff1e 0deg, #04ff00 54.89deg, #00a6ff 106.7deg, #4797ff 162deg, #0044ff 252deg, #1aff00 306deg, #26ff00 360deg)',
                borderRadius: '50%',
                opacity: 0.7,
                filter: 'blur(80px)',
                zIndex: 0,
                transform: 'translate(-50%, -50%) rotate(228deg)',
              }}
            />

            <div className="relative z-10 grid grid-cols-1 gap-x-8 gap-y-12 min-[810px]:grid-cols-2">
              {/* Left column — Other Agency */}
              <div className="flex flex-col gap-5">
                <p
                  className="text-center font-sans italic text-[1.1rem] font-medium leading-[1.2em] tracking-[-0.04em] text-np-dark"
                  dangerouslySetInnerHTML={{ __html: d.agencyLabel }}
                />
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 'some' }}
                  variants={fadeIn}
                  className="shadow-card relative flex flex-col gap-5 rounded-card border-[6px] border-[#f8f8f8] bg-white p-6 min-[810px]:p-8"
                >
                  <ul className="flex flex-col gap-4">
                    {d.agencyItems.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <IconX />
                        <span
                          className="font-sans text-[0.9rem] font-medium leading-[1.4em]"
                          style={{ color: 'rgb(124,124,124)' }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Right column — noprob */}
              <div className="flex flex-col gap-5">
                <p className="text-center font-serif italic text-[2.2rem] font-medium leading-[1em] tracking-[-0.04em] text-np-dark">
                  noprob<sup className="text-[0.5em]">®</sup>
                </p>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 'some' }}
                  variants={fadeIn}
                  className="shadow-card relative flex flex-col gap-5 overflow-visible rounded-card border-[6px] border-[#f8f8f8] bg-white/60 p-6 backdrop-blur-xl min-[810px]:p-8"
                >
                  <ul className="flex flex-col gap-4">
                    {d.nobrobItems.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <IconCheck />
                        <span className="font-sans text-[0.9rem] font-medium leading-[1.4em] text-black">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Part 2: Features ── */}
      <section className="pb-[80px] pt-[60px]">
        <div className="container-noprob">
          <p className="mx-auto max-w-[700px] text-center font-sans text-[20px] font-medium italic leading-[1.4em] tracking-[-0.02em] text-[#181818]">
            {d.featuresDescription}
          </p>

          <div className="mx-auto mt-8 flex max-w-[1000px] flex-wrap items-center justify-center gap-x-[50px] gap-y-[5px]">
            {d.features.map((feature, i) => (
              <motion.div
                key={feature}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 'some' }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: (i % 3) * 0.07, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                  },
                }}
                className="flex items-start gap-[10px]"
              >
                <IconCheckCircle />
                <span className="font-sans text-[12px] font-medium leading-[1.4em] tracking-[-0.02em] text-[#181818]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
