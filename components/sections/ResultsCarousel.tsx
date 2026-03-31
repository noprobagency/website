import Image from 'next/image'

const resultCards = [
  {
    image: '/images/originals/lXYpLfNsEJ0igk2CBCTjY1Irqw.png',
    logo: '/images/originals/iWbz1XLCfNQ5rbC2z8HrFO8.png',
    metrics: ['+347% revenue', '+38% MER'],
  },
  {
    image: '/images/originals/i9Ht9Hdb61eYmBH3DZyKGjIm6s.webp',
    logo: '/images/originals/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg',
    metrics: ['-14% CPA', '+9% MER'],
  },
  {
    image: '/images/originals/HACWQoGOAZHSLqcFjpYb1fb90wk.jpg',
    logo: '/images/originals/UR9tJ9ihRaU7gaL1jcgl0kwQY5g.svg',
    metrics: ['57% Retention', '+7% AOV'],
  },
  {
    image: '/images/originals/xikMpaXW3G0T00o5bsdB5bWnpuU.png',
    logo: '/images/originals/3D4Ji7c6LSsawGoOucoTS6dFA.png',
    metrics: ['€9.03 CPA', '32% YoY'],
  },
  {
    image: '/images/originals/cOnThGiudnDZv0DuLTLxFgBBoc.webp',
    logo: '/images/originals/8GgYF2twbCK7Wa70vrBTzBY7kg.svg',
    metrics: ['+2% MER', '+13% LTV'],
  },
] as const

export default function ResultsCarousel() {
  return (
    <section id="results" className="scroll-mt-[150px] px-0 py-0">
      <div className="px-9">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_10%,rgb(0,0,0)_90%,rgba(0,0,0,0)_100%)]">
          <div className="flex w-max animate-marquee gap-4 [animation-duration:35s]">
            {[...resultCards, ...resultCards].map((card, index) => (
              <article
                key={`${card.image}-${index}`}
                className="relative h-[277px] w-[428px] shrink-0 overflow-hidden rounded-card-lg border-2 border-noprob-border bg-noprob-card-off"
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

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-end justify-between gap-4">
                    <Image
                      src={card.logo}
                      alt="Client logo"
                      width={180}
                      height={70}
                      className="max-h-10 w-auto object-contain"
                    />
                    <div className="flex flex-col gap-2">
                      {card.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="inline-flex items-center rounded-xl border border-noprob-border-dk bg-noprob-dark px-3 py-2 font-sans text-tiny font-medium tracking-[-0.04em] text-[#f0f0f0]"
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
