import Image from 'next/image'

import Button from '@/components/ui/Button'
import { siteAssets } from '@/lib/site'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[30px] bg-[#111111] px-8 py-14 md:px-14 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,185,84,0.24),transparent_30%)]" />
          <div className="absolute bottom-0 right-0 hidden md:block">
            <div className="absolute inset-0 rounded-tl-[28px] bg-gradient-to-t from-black/10 to-transparent" />
            <Image
              src={siteAssets.heroAntonio}
              alt="Antonio Manitta"
              width={260}
              height={320}
              className="h-[260px] w-[220px] rounded-tl-[28px] object-cover object-center"
            />
          </div>

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-pill border border-white/10 bg-white/5 px-4 py-2 text-xs text-accent-green">
              <span className="h-2 w-2 rounded-full bg-accent-green" aria-hidden />
              Reserve Your Sprint
            </div>
            <h2 className="mt-8 max-w-[12ch] text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">
              Ready to fix what’s slowing you down?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
              If your store needs a real technical partner, cleaner data, and faster execution,
              let’s map the next sprint together.
            </p>
            <div className="mt-10">
              <Button
                href="/contacts"
                size="lg"
                className="bg-accent-green text-[#111111] hover:bg-[#16a34a]"
                trackingLabel="final_cta"
              >
                Reserve Your Sprint
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
