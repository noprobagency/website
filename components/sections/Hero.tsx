import Image from 'next/image'

import Button from '@/components/ui/Button'
import { siteAssets } from '@/lib/site'
import { cn } from '@/lib/utils'

const heroPartners = [
  { name: 'Shopify Partners', src: siteAssets.heroPartners[0], className: 'h-5 w-auto' },
  { name: 'WooCommerce', src: siteAssets.heroPartners[1], className: 'h-8 w-auto' },
  { name: 'Google Partner', src: siteAssets.heroPartners[2], className: 'h-6 w-auto' },
  { name: 'Meta Business Partner', src: siteAssets.heroPartners[3], className: 'h-7 w-auto' },
  { name: 'Klaviyo Partners', src: siteAssets.heroPartners[4], className: 'h-7 w-auto' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-noprob-bg">
      <div className="pointer-events-none absolute -right-[571px] -top-[76px] -bottom-[77px] hidden w-[1344px] aspect-[1.48636] -rotate-[240deg] lg:block">
        <Image
          src={siteAssets.heroBlob}
          alt=""
          fill
          priority
          className="object-contain"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[5] [mask-image:linear-gradient(rgba(0,0,0,0)_75%,#000_97%)] [-webkit-mask-image:linear-gradient(rgba(0,0,0,0)_75%,#000_97%)] bg-noprob-bg" />

      <div className="relative z-10">
        <div className="container-noprob grid min-h-screen grid-cols-1 items-center gap-16 pb-[160px] pt-[250px] lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <div className="flex max-w-md flex-col gap-1">
              <div className="flex items-center gap-[5px]">
                <Image
                  src={siteAssets.trustpilotStars}
                  alt="Trustpilot stars"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                <span className="font-sans text-[12px] font-medium tracking-[-0.04em] text-[rgb(36,143,98)]">
                  4,9
                </span>
                <span className="font-sans text-[12px] font-medium tracking-[-0.04em] text-[rgb(36,143,98)]">
                  Trustpilot
                </span>
              </div>
              <p className="font-sans text-tiny font-medium tracking-[-0.04em] text-noprob-dark">
                Trusted by Fashion, Supplements, and DTC eCommerce brands
              </p>
            </div>

            <h1 className="max-w-[12ch] font-display text-[3.8rem] font-semibold leading-[1em] tracking-[-0.05em] text-noprob-text lg:text-hero">
              Your Brand is premium. Your eCommerce partner should be{' '}
              <em className="font-serif italic">too</em>.
            </h1>

            <p className="max-w-[662px] font-sans text-body-lg font-medium text-noprob-text">
              We rebuild your store from the ground up and offer a dedicated team in Development,
              Marketing, and Strategy, available together or separately based on your needs.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contacts" trackingLabel="hero_cta_primary">
                Reserve your sprint
              </Button>
              <Button href="/#pricing" variant="secondary" trackingLabel="hero_cta_secondary">
                Explore what we do
              </Button>
            </div>

            <div className="grid max-w-[720px] grid-cols-2 items-center gap-x-5 gap-y-5 pt-2 sm:grid-cols-3 lg:grid-cols-5">
              {heroPartners.map((partner) => (
                <div key={partner.name} className="flex h-10 items-center">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={220}
                    height={84}
                    className={cn(
                      partner.className,
                      'w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0',
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[680px] items-center justify-center lg:flex">
            <div className="animate-float hero-float-card relative z-10">
              <div className="rounded-[10px] bg-white/70 p-4">
                <div>
                  <p className="font-sans text-tiny font-medium tracking-[-0.04em] text-noprob-muted">
                    Profit
                  </p>
                  <p className="mt-1 font-sans text-body-sm font-medium text-noprob-text">
                    With NoProb® vs Without NoProb®
                  </p>
                </div>

                <div className="mt-4 rounded-[10px] bg-[#f9f9f9] p-4">
                  <div className="mb-4 flex items-center gap-4 font-sans text-tiny font-medium tracking-[-0.04em] text-noprob-grey">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#121212]" />
                      With NoProb®
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#d6d6d6]" />
                      Without NoProb®
                    </span>
                  </div>

                  <svg viewBox="0 0 320 180" className="h-auto w-full" aria-label="Profit chart">
                    <path
                      d="M12 148H308"
                      fill="none"
                      stroke="#d6d6d6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M60 26V148M140 26V148M220 26V148"
                      fill="none"
                      stroke="#ececec"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                    />
                    <path
                      d="M20 136C58 138 90 131 124 121C158 111 188 99 220 74C246 54 270 34 300 24"
                      fill="none"
                      stroke="#121212"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 142C60 141 96 139 128 136C166 132 202 128 236 122C260 118 279 115 300 111"
                      fill="none"
                      stroke="#bdbdbd"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="7 8"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="hero-float-card absolute -bottom-8 left-6 z-20 w-[280px]">
              <div className="flex items-start gap-3">
                <Image
                  src={siteAssets.heroAntonio}
                  alt="Antonio Manitta"
                  width={40}
                  height={40}
                  className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="font-sans text-[12px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-text">
                    Success comes from long-term thinking and a team that truly knows your
                    industry and each other
                  </p>
                  <p className="mt-1 font-sans text-[9.6px] font-medium tracking-[-0.04em] text-noprob-muted">
                    Antonio Manitta - noprob.agency eCommerce Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
