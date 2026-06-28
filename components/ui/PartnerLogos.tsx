import Image from 'next/image'

import { cn } from '@/lib/utils'
import { siteAssets } from '@/lib/site'

/**
 * Shared partner-logo row (Shopify / Google / Meta / Klaviyo).
 * Single source of truth so size and vertical alignment stay consistent on
 * every hero. Always 4 columns, vertically centered, with heights tuned so the
 * logos read at a similar visual weight relative to each other.
 */
const PARTNERS = [
  {
    name: 'Shopify Partners',
    src: siteAssets.heroPartners[0],
    width: 288,
    height: 76,
    className: 'h-[22px] min-[810px]:h-[30px]',
  },
  {
    name: 'Google Partner',
    src: siteAssets.heroPartners[1],
    width: 288,
    height: 76,
    className: 'h-[30px] min-[810px]:h-[40px]',
  },
  {
    name: 'Meta Business Partner',
    src: siteAssets.heroPartners[2],
    width: 288,
    height: 76,
    className: 'h-[20px] min-[810px]:h-[28px]',
  },
  {
    name: 'Klaviyo Partners',
    src: siteAssets.heroPartners[3],
    width: 500,
    height: 233,
    className: 'h-[30px] min-[810px]:h-[38px]',
  },
] as const

export default function PartnerLogos({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid w-full max-w-[640px] grid-cols-4 items-center gap-3 min-[810px]:gap-6',
        className
      )}
    >
      {PARTNERS.map((partner) => (
        <div key={partner.name} className="flex items-center justify-center">
          <Image
            src={partner.src}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            className={cn('max-w-full object-contain opacity-80', partner.className)}
          />
        </div>
      ))}
    </div>
  )
}
