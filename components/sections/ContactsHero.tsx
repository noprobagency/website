'use client'

import { siteAssets } from '@/lib/site'

export default function ContactsHero() {
  return (
    <section
      id="hero"
      className="relative flex w-full justify-center overflow-hidden bg-noprob-bg px-6 pt-[100px] pb-0 min-[810px]:pt-24 min-[810px]:pb-0"
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
          Book Your Call With an <br className="hidden sm:block" />
          eCommerce <em className="font-serif italic font-normal">Expert</em>
        </h1>

        {/* Description */}
        <div className="mt-8">
          <p className="font-sans text-[18px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text">
            Once you submit the form, you’ll be contacted by our senior ecommerce manager. <br className="hidden min-[810px]:block" />
            Together, you’ll analyze your current situation and define the best next steps for your growth.
          </p>
        </div>
      </div>
    </section>
  )
}
