'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

const logoRows = [
  [
    { src: '/images/originals/T1UW1kS41RaUauBrmK5dUj0txA.png', isLarge: true },
    { src: '/images/originals/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg' },
    { src: '/images/originals/N0Tx01aMkN7R9VRqxvyyVyhYwQk.png' },
    { src: '/images/originals/HvA5aLVjEBt6fJXZIKt8YOmWX30.svg' },
    { src: '/images/originals/vN14wZ29u2zUpcqrMSGkycbAUf0.svg' },
    { src: '/images/originals/8occchv7EZ1XL94VC9bEoysJDPU.svg' },
  ],
  [
    { src: '/images/originals/TkZPz7oSBvfmLnhfuoopRtZMGOg.svg' },
    { src: '/images/originals/XbNI9XSTG5RsPHfZYFc2XLBJmw.webp' },
    { src: '/images/originals/4WXTDogs69o24LfYlTlhkJwFNis.svg' },
    { src: '/images/originals/dKDeBQLhklB2IlsixCrTFByIQ1w.svg' },
    { src: '/images/originals/qwWohvBrgJlSHfTWtvnnrKMguM.svg' },
    { src: '/images/originals/qN88QvWhz41zWATtn6ZnzXM2cE.png' },
  ],
  [
    { src: '/images/originals/ZdmuSU05kPctAmOJTND91Yiov7Y.svg' },
    { src: '/images/originals/HFB669NKhBu4jn7AhQ5uvYL0cY.svg' },
    { src: '/images/originals/43oBOi4PKxtyVmYCQkDgPI.svg' },
    { src: '/images/originals/SewUzXcHAaqioXr7g1lRajka5Mc.svg' },
    { src: '/images/originals/SXlf93ZkIQ5nC06iYVj2bs4d7vg.png' },
  ],
] as const

const logoVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function LogoWall({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const allLogos = logoRows.flat()

  return (
    <section className="pb-0 pt-[80px] scroll-mt-[150px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel>{t.logoWall.label}</SectionLabel>
          <h2 className="mt-5 font-display text-np-h2-sm lg:text-np-h2 text-center text-np-dark">
            {t.logoWall.heading}
          </h2>
        </div>

        {/* Mobile Marquee */}
        <div className="mt-10 overflow-hidden py-4 min-[810px]:hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_10%,rgb(0,0,0)_90%,rgba(0,0,0,0)_100%)]">
          <div className="flex w-max animate-marquee items-center gap-10 [animation-duration:25s]">
            {[...allLogos, ...allLogos].map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="relative flex shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
              >
                <img
                  src={logo.src}
                  alt="Client logo"
                  className="max-h-[42px] max-w-[150px] block object-contain opacity-[0.8] transition-opacity hover:opacity-100"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="mx-auto mt-14 hidden max-w-[1000px] space-y-10 min-[810px]:block">
          {logoRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`flex flex-wrap items-center justify-center gap-y-6 ${rowIndex === 2 ? 'gap-x-10' : 'gap-x-[10px]'
                }`}
            >
              {row.map((logo, logoIndex) => {
                const globalIndex = rowIndex * 6 + logoIndex
                return (
                  <motion.div
                    key={logo.src}
                    custom={globalIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 'some' }}
                    variants={logoVariants}
                    className={`flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 ${'isLarge' in logo && logo.isLarge
                      ? 'h-[42px] w-[150px] hover:scale-105'
                      : 'h-[36px] w-[130px] hover:scale-105'
                      }`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={logo.src}
                        alt="Client logo"
                        fill
                        className="object-contain opacity-[0.8] transition-opacity hover:opacity-100"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
