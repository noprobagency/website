import type { Metadata } from 'next'

import AiThankYou from '@/components/sections/ai/AiThankYou'
import Footer from '@/components/layout/Footer'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

export const metadata: Metadata = {
  title: getAiCopy('it').thankYou.metaTitle,
  robots: { index: false, follow: false },
}

export default function AiAcceleratorGraziePage() {
  return (
    <>
      <AiThankYou locale="it" />
      <Footer locale="it" />
    </>
  )
}
