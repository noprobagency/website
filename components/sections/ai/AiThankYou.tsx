'use client'

import { useEffect } from 'react'
import Script from 'next/script'

import { NeuralCircuits } from '@/components/sections/ai/PowerLayer'
import { type Locale } from '@/lib/i18n'
import { AI_TIDYCAL_PATH, getAiCopy } from '@/lib/i18n/aiAccelerator'

/**
 * Booking step after a successful AI Accelerator application: TidyCal embed
 * for the dedicated intro call. The Lead event is fired by the form before
 * the redirect; this page only fires a custom event so the booking step can
 * be measured (and targeted) separately in Meta and GA4.
 */
export default function AiThankYou({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).thankYou

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (typeof window.fbq === 'function') window.fbq('trackCustom', 'AiAcceleratorApplication')
    if (typeof window.gtag === 'function') window.gtag('event', 'ai_accelerator_thank_you')
  }, [])

  return (
    <main className="ai-scope flex min-h-screen flex-col items-center px-5 pb-[80px] pt-[100px] min-[810px]:px-9">
      <div className="relative flex w-full max-w-[900px] flex-col items-center gap-4 overflow-hidden rounded-card border-2 border-[#d6d6d6] px-6 py-10 text-center"
        style={{ background: 'linear-gradient(rgb(240, 240, 240) 40%, rgba(47, 107, 255, 0.12) 100%)' }}
      >
        <NeuralCircuits />
        <span className="relative z-[1] inline-flex items-center rounded-pill border border-[#d6d6d6] bg-white/80 px-4 py-[6px] font-sans text-[13px] font-semibold tracking-[-0.02em] text-np-dark">
          {d.eyebrow}
        </span>
        <h1 className="relative z-[1] font-display text-[2.1rem] font-semibold leading-[1.1em] tracking-[-0.05em] text-np-dark min-[810px]:text-[3rem]">
          {d.titlePart1}
          <em className="font-serif italic">{d.titleEm}</em>
          {d.titleEnd}
        </h1>
        <p className="relative z-[1] max-w-[600px] font-sans text-[16px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-text min-[810px]:text-[17px]">
          {d.text}
        </p>
      </div>

      <div className="ai-form-card mt-8 w-full max-w-[900px] rounded-[20px] p-2 min-[810px]:p-4">
        <div className="tidycal-embed" data-path={AI_TIDYCAL_PATH} />
      </div>

      <p className="mt-5 max-w-[640px] text-center font-sans text-[13px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-grey">
        {d.note}
      </p>

      <Script src="https://asset-tidycal.b-cdn.net/js/embed.js" strategy="lazyOnload" />
    </main>
  )
}
