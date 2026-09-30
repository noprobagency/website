import Image from 'next/image'

import MarqueeScroll from '@/components/ui/MarqueeScroll'
import { siteAssets } from '@/lib/site'
import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlCta from './ZlCta'

/**
 * Client + partner logos for the hero strip. Client marks reuse the assets
 * already in the repo (same files as the homepage LogoWall).
 */
export const ZL_STRIP_LOGOS = [
  { name: 'Cumini', src: '/images/originals/T1UW1kS41RaUauBrmK5dUj0txA.png', width: 228, height: 36, h: 'h-[26px]' },
  { name: 'DDglobal Store', src: '/images/originals/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg', width: 288, height: 76, h: 'h-[34px]' },
  // Mark taken from the homepage LogoWall (stylized S): confirm it is the Sfogliate&Sfogliatelle logo.
  { name: 'Sfogliate&Sfogliatelle', src: '/images/originals/ZdmuSU05kPctAmOJTND91Yiov7Y.svg', width: 288, height: 76, h: 'h-[36px]' },
  { name: 'Shopify Partners', src: siteAssets.heroPartners[0], width: 288, height: 76, h: 'h-[26px]' },
  { name: 'Meta Business Partner', src: siteAssets.heroPartners[2], width: 288, height: 76, h: 'h-[24px]' },
  { name: 'Google Partner', src: siteAssets.heroPartners[1], width: 288, height: 76, h: 'h-[34px]' },
  { name: 'Klaviyo Partners', src: siteAssets.heroPartners[3], width: 500, height: 233, h: 'h-[32px]' },
] as const

function TrustpilotBadge({ score, label }: { score: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <Image src={siteAssets.trustpilotWordmark} alt="Trustpilot" width={72} height={16} className="h-4 w-auto object-contain" />
      <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">{score}</span>
      <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-np-grey">{label}</span>
    </span>
  )
}

export default function ZlHero({ copy }: { copy: ZlCopy['hero'] }) {
  return (
    <section className="pt-10 min-[810px]:pt-16">
      <div className="container-noprob">
        <span className="np-eyebrow !normal-case">{copy.eyebrow}</span>

        <h1 className="mt-6 max-w-[980px] font-display text-[2.2rem] font-semibold leading-[1.02em] tracking-[-0.06em] text-np-dark min-[810px]:text-[3.6rem] lg:text-[4.2rem]">
          {copy.h1}
        </h1>

        <p className="mt-6 max-w-[760px] font-sans text-[17px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-text min-[810px]:text-[19px]">
          {copy.paragraph}
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-4">
          <div className="flex flex-col items-start gap-[6px]">
            <ZlCta label={copy.ctaPrimary} position="hero" />
            <span className="pl-1 font-sans text-[12px] font-medium tracking-[-0.03em] text-np-grey">{copy.ctaNote}</span>
          </div>
          <a href="#prove" className="button-secondary min-[810px]:self-start">
            {copy.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Logo strip: label, scrolling client + partner marks, Trustpilot to close */}
      <div className="mt-12 border-y border-black/[0.06] py-5 min-[810px]:mt-16">
        <div className="container-noprob mb-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p className="font-sans text-[12px] font-medium tracking-[-0.03em] text-np-dark">{copy.logosLabel}</p>
          <TrustpilotBadge score={copy.trustpilotScore} label={copy.trustpilotLabel} />
        </div>
        <MarqueeScroll speed="slow" className="np-mask-x">
          {ZL_STRIP_LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className={`w-auto max-w-[160px] object-contain opacity-80 grayscale ${logo.h}`}
            />
          ))}
        </MarqueeScroll>
      </div>
    </section>
  )
}
