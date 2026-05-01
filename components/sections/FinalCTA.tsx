import Image from 'next/image'
import Link from 'next/link'

import { getDictionary, type Locale } from '@/lib/i18n'
import { siteAssets } from '@/lib/site'

const orbitArms = [
  ['/images/originals/D4OlAav8RISd0opp4Z1aT4ypRXw.png', '/images/originals/QbjA7E37T5SDQiAS2aDV1zMrG4.png'],
  ['/images/originals/w5X4QRiIXVeXf71DL6mW0nV6Awk.png', '/images/originals/UT4fxQBnxf542T5Cf7zZOvBxy0.png'],
  ['/images/originals/4UX9uXT3N0WRExPOcc1r8bpVQAk.png', '/images/originals/GSFkssTRojMMfTCPqH1HENDnw.png'],
  ['/images/originals/pSEmRq7TZ5niunpklVk0dvh1mDA.png', '/images/originals/WdMlO6P4eyTomKkSRBDtGLAio4.png'],
  ['/images/originals/AcrDBNPoA5kazwDFtUC2IeoPoo.png', '/images/originals/AcrDBNPoA5kazwDFtUC2IeoPoo.png'],
  ['/images/originals/d8p3LHFKtLnBbQ65oGYA48cZwYI.png', '/images/originals/d8p3LHFKtLnBbQ65oGYA48cZwYI.png'],
  ['/images/originals/505rrWNYkeLbF8KyvL2Owkhh7I.png', '/images/originals/AOAg5gzJT8elHJjF4ot4zv58UAE.png'],
  ['/images/originals/npXLqR8zSrRQ361syHkuwTjdeds.png', '/images/originals/npXLqR8zSrRQ361syHkuwTjdeds.png'],
  ['/images/originals/lEVDQNWDkdXcIlfM1j2Kfmp8at8.png', '/images/originals/lEVDQNWDkdXcIlfM1j2Kfmp8at8.png'],
  ['/images/originals/zRjU5BQHkKDyauYKM2E6MQnLpo.png', '/images/originals/zRjU5BQHkKDyauYKM2E6MQnLpo.png'],
  ['/images/originals/38I07rfLJ4DXJRQZ7YXCanY6ko.png', '/images/originals/38I07rfLJ4DXJRQZ7YXCanY6ko.png'],
  ['/images/originals/y3RHLfHQboDd91CD2B0QwpU4pno.png', '/images/originals/y3RHLfHQboDd91CD2B0QwpU4pno.png'],
] as const

export default function FinalCTA({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  return (
    <section className="overflow-hidden px-9 pb-0 pt-[80px]">
      <div className="container-noprob">
        <div className="relative flex min-h-[760px] items-center justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[1128px] w-[1128px] -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="relative h-full w-full animate-[spin_48s_linear_infinite]">
              {orbitArms.map((arm, index) => (
                <div
                  key={`${arm[0]}-${index}`}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${index * 15}deg)` }}
                >
                  <div className="relative h-full w-full">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                      <Image
                        src={arm[0]}
                        alt=""
                        width={144}
                        height={144}
                        className="h-36 w-36 rounded-[100px] border-card-thick object-cover"
                        aria-hidden
                      />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <Image
                        src={arm[1]}
                        alt=""
                        width={144}
                        height={144}
                        className="h-36 w-36 rounded-[100px] border-card-thick object-cover"
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-[720px] text-center">
            <h2 className="font-display text-np-h2-sm lg:text-np-h2 text-center text-np-dark">
              Ready to fix what&apos;s <span className="font-serif italic">slowing</span> you
              down?
            </h2>
            <div className="mt-8 flex justify-center">
              <Link
                href={t.hero.ctaPrimaryHref}
                className="button-principal flex-wrap justify-center gap-3 px-4 text-center sm:flex-nowrap sm:px-5"
                data-tracking="final_cta"
              >
                <Image
                  src={siteAssets.heroAntonio}
                  alt="Antonio Manitta"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-sans text-[16px] font-normal tracking-[-0.04em]">
                  Reserve Your Sprint
                </span>
                <span className="h-2 w-2 rounded-full bg-noprob-green" aria-hidden />
                <span className="font-sans text-tiny font-medium tracking-[-0.04em]">
                  {t.cta.availability}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
