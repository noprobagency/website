import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'
import { siteAssets } from '@/lib/site'

export default function LogoWall() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Clients</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-text-primary md:text-5xl">
            Brands that believed in us.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {siteAssets.logoWall.map((logo) => (
            <div
              key={logo}
              className="flex min-h-28 items-center justify-center rounded-[18px] border border-border bg-bg-secondary p-6 transition duration-300 hover:bg-white"
            >
              <Image
                src={logo}
                alt="Client brand logo"
                width={240}
                height={96}
                className="max-h-11 w-auto opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
