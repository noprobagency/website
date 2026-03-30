import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'
import { liveAssets } from '@/lib/site'

export default function LogoWall() {
  return (
    <section className="section-padding bg-bg-secondary/20">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Clients</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-text-primary md:text-5xl">
            Brands that believed in us.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {liveAssets.logoWall.map((logo) => (
            <div
              key={logo}
              className="surface-panel flex min-h-28 items-center justify-center p-6"
            >
              <Image
                src={logo}
                alt="Client brand logo"
                width={240}
                height={96}
                unoptimized
                className="max-h-11 w-auto opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
