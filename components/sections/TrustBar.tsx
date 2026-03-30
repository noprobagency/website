import Image from 'next/image'

import MarqueeScroll from '@/components/ui/MarqueeScroll'
import { liveAssets } from '@/lib/site'

const trustLogos = liveAssets.logoWall.slice(0, 8)

export default function TrustBar() {
  return (
    <section className="section-divider bg-bg-secondary/30 py-8">
      <MarqueeScroll className="container-custom">
        {trustLogos.map((logo) => (
          <div
            key={logo}
            className="flex h-16 items-center justify-center rounded-2xl border border-border bg-bg-card/70 px-6 backdrop-blur"
          >
            <Image
              src={logo}
              alt="Partner brand logo"
              width={240}
              height={96}
              unoptimized
              className="max-h-8 w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </MarqueeScroll>
    </section>
  )
}
