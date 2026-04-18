'use client'

import Image from 'next/image'
import { siteAssets } from '@/lib/site'
import type { Locale } from '@/lib/i18n'

export default function AboutHero({ locale: _locale = 'en' }: { locale?: Locale }) {
  return (
    <section
      id="hero"
      className="relative flex w-full justify-center overflow-hidden bg-noprob-bg px-6 pt-[100px] pb-16 min-[810px]:py-24"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[800px] flex-col items-center text-center">
        {/* Trustpilot Badge */}
        <div className="mb-6 flex flex-col items-center gap-1">
          <div className="flex items-center gap-[5px]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="rgb(36,143,98)"
              aria-hidden="true"
              className="h-[14px] w-[14px] shrink-0"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-[rgb(36,143,98)]">
              4,9
            </span>
            <span className="font-sans text-[13px] font-medium tracking-[-0.03em] text-[rgb(36,143,98)]">
              Trustpilot
            </span>
          </div>
          <p className="font-sans text-[12px] font-medium leading-[1.4em] tracking-[-0.04em] text-noprob-dark">
            Trusted by Fashion, Supplements, and DTC eCommerce brands
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-np-hero text-noprob-text">
          Your technical partner <br className="hidden sm:block" />
          that makes eCommerce <em className="font-serif italic font-normal">simple</em>
        </h1>

        {/* Description */}
        <div className="mt-8 flex flex-col gap-6">
          <p className="font-sans text-[18px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text">
            A 7/7 team of developers, designers, and strategists combining code, data, and creativity
            to help Shopify and WooCommerce brands scale without stress.
          </p>
          <p className="font-sans text-[18px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text">
            We are not an agency you “delegate execution” to, we become part of your project at 360°.
          </p>
        </div>
      </div>
    </section>
  )
}
