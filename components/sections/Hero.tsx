import Image from 'next/image'

import Button from '@/components/ui/Button'
import { siteAssets } from '@/lib/site'
import { cn } from '@/lib/utils'

const heroPartners = [
  { name: 'Shopify Partners', src: siteAssets.heroPartners[0], className: 'h-[23px] w-auto' },
  { name: 'WooCommerce', src: siteAssets.heroPartners[1], className: 'h-[28px] w-auto' },
  { name: 'Google Partner', src: siteAssets.heroPartners[2], className: 'h-[32px] w-auto' },
  { name: 'Meta Business Partner', src: siteAssets.heroPartners[3], className: 'h-[31px] w-auto' },
  { name: 'Klaviyo Partners', src: siteAssets.heroPartners[4], className: 'h-[38px] w-auto' },
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
        <div className="container-noprob grid min-h-screen grid-cols-1 items-center gap-14 pb-10 pt-[132px] lg:grid-cols-[1.06fr_0.94fr] lg:gap-10 lg:pb-0">
          <div className="space-y-8 lg:-mt-2">
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

            <h1 className="max-w-[10.8ch] font-display text-[3.9rem] font-semibold leading-[0.94em] tracking-[-0.058em] text-noprob-text lg:text-[4.65rem]">
              Your Brand is premium.
              <br />
              Your eCommerce
              <br />
              partner should be <em className="font-serif italic">too.</em>
            </h1>

            <p className="max-w-[610px] font-sans text-body-lg font-medium text-noprob-text">
              We rebuild your store from the ground up and offer a dedicated team in Development,
              Marketing, and Strategy, available together or separately based on your needs.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href="/contacts"
                className="!rounded-[14px] !px-[30px] !py-[10px]"
                trackingLabel="hero_cta_primary"
              >
                Reserve your sprint
              </Button>
              <Button
                href="/#pricing"
                variant="secondary"
                className="!rounded-[14px] !px-[30px] !py-[10px] shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                trackingLabel="hero_cta_secondary"
              >
                Explore what we do
              </Button>
            </div>

            <div className="grid max-w-[720px] grid-cols-2 items-center gap-x-8 gap-y-5 pt-3 sm:grid-cols-3 lg:grid-cols-5">
              {heroPartners.map((partner) => (
                <div key={partner.name} className="flex h-10 items-center">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={220}
                    height={84}
                    className={cn(partner.className, 'w-auto opacity-100')}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[620px] items-center justify-center lg:flex">
            <div className="relative z-10 w-[372px] rounded-[22px] border border-[#d4d4d4] bg-white/85 p-4 shadow-[0_12px_24px_rgba(0,0,0,0.08)] backdrop-blur-md">
              <div className="rounded-[18px] bg-white/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-sans text-tiny font-medium tracking-[-0.04em] text-noprob-muted">
                    Profit
                  </p>
                  <div className="flex items-center gap-4 font-sans text-[10px] font-medium tracking-[-0.04em] text-noprob-grey">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#7a35f0]" />
                      With NoProb®
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#b6b6b6]" />
                      Without NoProb®
                    </span>
                  </div>
                </div>

                <div className="mt-3 rounded-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,238,255,0.9))] p-3">
                  <Image
                    src={siteAssets.heroChart}
                    alt="With NoProb versus Without NoProb chart"
                    width={235}
                    height={175}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="mt-3 flex items-start gap-3 border-t border-[#dcdcdc] pt-3">
                <Image
                  src={siteAssets.heroAntonio}
                  alt="Antonio Manitta"
                  width={40}
                  height={40}
                  className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="font-sans text-[12px] font-medium italic leading-[1.35em] tracking-[-0.02em] text-noprob-text">
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
