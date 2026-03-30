import Image from 'next/image'

import Button from '@/components/ui/Button'
import { liveAssets } from '@/lib/site'

const heroMetrics = [
  '+347% revenue growth',
  '+38% MER improvement',
  '-14% cost per acquisition',
  '57% retention cost reduction',
  '+13% LTV',
]

export default function Hero() {
  return (
    <section className="section-grid noise-mask relative isolate overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,255,106,0.16),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-accent-green/60 to-transparent" />

      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -right-20 top-8 h-[38rem] w-[38rem] rounded-full bg-accent-green/10 blur-[140px]" />
        <div className="absolute inset-x-0 top-10 bottom-0">
          <div className="relative mx-auto h-full max-w-7xl">
            <Image
              src={liveAssets.heroBackdrop}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hidden object-contain object-top opacity-55 mix-blend-screen md:block"
            />
            <Image
              src={liveAssets.heroBackdropMobile}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-top opacity-35 mix-blend-screen md:hidden"
            />
          </div>
        </div>
      </div>

      <div className="container-custom relative flex min-h-[calc(100vh-6rem)] items-center">
        <div className="max-w-5xl py-20 text-center md:py-28 lg:py-32">
          <div className="mx-auto inline-flex max-w-full items-center gap-3 rounded-pill border border-border bg-bg-card/90 px-4 py-2 text-left text-xs text-text-secondary backdrop-blur">
            <span className="font-mono uppercase tracking-[0.18em] text-accent-green">4.9 Trustpilot</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span>Trusted by Fashion, Supplements, and DTC eCommerce brands</span>
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-hero">
            <span className="text-text-primary">Your Brand is premium.</span>
            <br />
            <span className="font-serif italic text-accent-green">Your eCommerce partner</span>
            <br />
            <span className="text-text-primary">should be too.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
            We rebuild your store from the ground up and offer a dedicated team in Development,
            Marketing, and Strategy, available together or separately based on your needs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contacts" size="lg" trackingLabel="hero_cta_primary">
              Reserve your sprint
            </Button>
            <Button href="/#pricing" size="lg" variant="secondary" trackingLabel="hero_cta_secondary">
              Explore what we do
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric}
                className="rounded-pill border border-border bg-bg-secondary/80 px-4 py-2 text-xs font-medium tracking-[-0.02em] text-text-secondary backdrop-blur"
              >
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
