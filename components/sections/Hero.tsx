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
    <section className="relative min-h-screen overflow-hidden bg-bg-primary">
      <div className="absolute right-0 top-0 hidden h-full w-[55%] pointer-events-none lg:block">
        <div className="hero-blob absolute right-[-10%] top-[6%] h-[620px] w-[620px] opacity-90" />
        <div className="absolute right-[7%] top-[20%] h-[240px] w-[240px] rounded-full bg-accent-green/10 blur-[90px]" />
      </div>

      <div className="container-custom relative pt-28 md:pt-32">
        <div className="grid min-h-[85vh] grid-cols-1 items-center gap-16 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20">
          <div className="space-y-8">
            <div className="flex max-w-md flex-col gap-1">
              <div className="flex items-center gap-2">
                <Image
                  src={siteAssets.trustpilotStars}
                  alt=""
                  width={94}
                  height={20}
                  className="h-4 w-auto"
                  aria-hidden
                />
                <span className="text-sm font-semibold text-accent-green">4,9</span>
                <span className="text-sm font-semibold text-accent-green">Trustpilot</span>
              </div>
              <p className="text-sm text-text-muted">
                Trusted by Fashion, Supplements, and DTC eCommerce brands
              </p>
            </div>

            <h1 className="max-w-[12ch] text-[3.7rem] font-[750] leading-[0.98] tracking-[-0.045em] text-text-primary sm:text-[4.6rem] lg:text-[5.2rem] xl:text-[5.85rem]">
              Your Brand is
              <br />
              premium.
              <br />
              Your eCommerce
              <br />
              partner should be <em className="italic">too.</em>
            </h1>

            <p className="max-w-[34rem] text-base leading-relaxed text-text-secondary md:text-lg">
              We rebuild your store from the ground up and offer a dedicated team in Development,
              Marketing, and Strategy, available together or separately based on your needs.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contacts" size="lg" trackingLabel="hero_cta_primary">
                Reserve your sprint
              </Button>
              <Button
                href="/#pricing"
                variant="secondary"
                size="lg"
                trackingLabel="hero_cta_secondary"
              >
                Explore what we do
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-5 pt-2">
              {heroPartners.map((partner) => (
                <div key={partner.name} className="flex items-center">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={220}
                    height={84}
                    className={cn(
                      partner.className,
                      'opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0',
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[640px] items-center justify-center lg:flex">
            <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-white/50 via-transparent to-accent-purple/5" />
            <div className="absolute right-[10%] top-[8%] h-[520px] w-[520px] rounded-full border border-white/30 bg-white/20 blur-3xl" />

            <div className="animate-float relative z-10 w-[390px] rounded-[28px] border border-border bg-white p-6 shadow-[0_24px_70px_rgba(17,17,17,0.12)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
                    Profit
                  </p>
                  <p className="mt-1 text-sm font-medium text-text-primary">
                    With NoProb® vs Without NoProb®
                  </p>
                </div>
                <span className="rounded-pill bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary">
                  36 months
                </span>
              </div>

              <div className="rounded-[24px] border border-border-subtle bg-[#fafaf8] p-4">
                <div className="mb-4 flex items-center gap-4 text-xs text-text-secondary">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
                    With NoProb®
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c7c7c3]" />
                    Without NoProb®
                  </span>
                </div>

                <svg viewBox="0 0 320 180" className="h-auto w-full" aria-label="Profit growth chart">
                  <path
                    d="M20 138C64 132 88 122 120 115C156 106 174 102 206 88C238 74 256 42 300 28"
                    fill="none"
                    stroke="#1DB954"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 142C66 140 89 136 124 134C160 132 182 129 211 126C243 123 266 119 300 113"
                    fill="none"
                    stroke="#D0D0CB"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="7 8"
                  />
                  <path
                    d="M20 154H300"
                    fill="none"
                    stroke="#E5E5E3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M60 24V154M140 24V154M220 24V154"
                    fill="none"
                    stroke="#ECECE8"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-[7%] left-[4%] z-20 max-w-[305px] rounded-[24px] border border-border bg-white p-4 shadow-[0_18px_45px_rgba(17,17,17,0.12)]">
              <div className="flex items-start gap-4">
                <Image
                  src={siteAssets.heroAntonio}
                  alt="Antonio Manitta"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-sm leading-relaxed text-text-primary">
                    Success comes from long-term thinking and a team that truly knows your
                    industry and each other
                  </p>
                  <p className="mt-2 text-xs text-text-muted">
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
