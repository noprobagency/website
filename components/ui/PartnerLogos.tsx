import Image from 'next/image'

import { cn } from '@/lib/utils'
import { siteAssets } from '@/lib/site'

/**
 * Shared partner-logo row (Shopify / Google / Meta / Klaviyo).
 * Single source of truth so size and vertical alignment stay consistent on
 * every hero. Logos are normalized to similar heights and vertically centered
 * (no more per-hero `place-self-start` / mismatched max-heights).
 */
const PARTNERS = [
  {
    name: 'Shopify Partners',
    src: siteAssets.heroPartners[0],
    width: 288,
    height: 76,
    className: 'h-[20px] min-[810px]:h-[22px]',
  },
  {
    name: 'Google Partner',
    src: siteAssets.heroPartners[1],
    width: 288,
    height: 76,
    className: 'h-[26px] min-[810px]:h-[28px]',
  },
  {
    name: 'Meta Business Partner',
    src: siteAssets.heroPartners[2],
    width: 288,
    height: 76,
    className: 'h-[18px] min-[810px]:h-[20px]',
  },
  {
    name: 'Klaviyo Partners',
    src: siteAssets.heroPartners[3],
    width: 500,
    height: 233,
    className: 'h-[26px] min-[810px]:h-[28px]',
  },
] as const

export default function PartnerLogos({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex w-full max-w-[460px] flex-wrap items-center justify-center gap-x-6 gap-y-3 min-[810px]:gap-x-9',
        className
      )}
    >
      {PARTNERS.map((partner) => (
        <Image
          key={partner.name}
          src={partner.src}
          alt={partner.name}
          width={partner.width}
          height={partner.height}
          className={cn('w-auto object-contain opacity-80', partner.className)}
        />
      ))}
    </div>
  )
}
