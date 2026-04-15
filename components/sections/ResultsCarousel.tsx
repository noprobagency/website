import Image from 'next/image'

const resultCards = [
  {
    image: '/images/originals/lXYpLfNsEJ0igk2CBCTjY1Irqw.png',
    logo: '/images/originals/iWbz1XLCfNQ5rbC2z8HrFO8.png',
    logoClass: 'h-[48px] w-auto',
    metrics: ['+347% revenue growth', '+38% MER Improvement'],
  },
  {
    image: '/images/originals/i9Ht9Hdb61eYmBH3DZyKGjIm6s.webp',
    logo: '/images/originals/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg',
    logoClass: 'h-[80px] w-auto',
    metrics: ['-14% Cost per Acquisition', '+9% MER Improvement'],
  },
  {
    image: '/images/originals/HACWQoGOAZHSLqcFjpYb1fb90wk.jpg',
    logo: '/images/originals/UR9tJ9ihRaU7gaL1jcgl0kwQY5g.svg',
    logoClass: 'h-[56px] w-auto',
    metrics: ['57% Retention Cost Reduction', '+7% AOV Growth'],
  },
  {
    image: '/images/originals/xikMpaXW3G0T00o5bsdB5bWnpuU.png',
    logo: '/images/originals/3D4Ji7c6LSsawGoOucoTS6dFA.png',
    logoClass: 'h-[52px] w-auto',
    metrics: ['€9.03 Cost per Acquisition', '32% Avg. YoY Revenue Growth'],
  },
  {
    image: '/images/originals/cOnThGiudnDZv0DuLTLxFgBBoc.webp',
    logo: '/images/originals/8GgYF2twbCK7Wa70vrBTzBY7kg.svg',
    logoClass: 'h-[44px] w-auto',
    metrics: ['+2% MER Improvement', '+13% LTV'],
  },
] as const

export default function ResultsCarousel() {
  return (
    <section id="results" className="scroll-mt-[150px] px-0 py-0">
      <div className="px-5 lg:px-0">
        <div className="overflow-hidden py-4 lg:py-6 [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_5%,rgb(0,0,0)_95%,rgba(0,0,0,0)_100%)] lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_10%,rgb(0,0,0)_90%,rgba(0,0,0,0)_100%)]">
          <div className="flex w-max animate-marquee gap-4 [animation-duration:35s]">
            {[...resultCards, ...resultCards].map((card, index) => (
              <article
                key={`${card.image}-${index}`}
                className="relative h-[220px] w-[340px] lg:h-[277px] lg:w-[428px] shrink-0 overflow-hidden rounded-card-lg border-2 border-noprob-border bg-noprob-card-off"
              >
                <Image src={card.image} alt="" fill className="object-cover" aria-hidden />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_24.09%,#f9f9f9_70.74%)]" />
                <Image
                  src="/images/originals/UKOEHbiYnbExoWnbKlr4yrGf8.svg"
                  alt=""
                  fill
                  className="object-cover opacity-[0.09]"
                  aria-hidden
                />

                <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                  <div className="flex min-h-[90px] lg:min-h-[112px] flex-col items-center justify-end gap-3 lg:gap-5">
                    <Image
                      src={card.logo}
                      alt="Client logo"
                      width={220}
                      height={90}
                      className={card.logoClass}
                    />
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {card.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="inline-flex items-center rounded-xl border border-noprob-border-dk bg-noprob-dark px-3 py-1.5 font-sans text-[10.5px] lg:text-[12px] font-medium tracking-[-0.04em] text-[#f0f0f0] whitespace-nowrap"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
