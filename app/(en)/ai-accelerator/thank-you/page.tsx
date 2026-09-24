import type { Metadata } from 'next'

import AiThankYou from '@/components/sections/ai/AiThankYou'
import Footer from '@/components/layout/Footer'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

export const metadata: Metadata = {
  title: getAiCopy('en').thankYou.metaTitle,
  robots: { index: false, follow: false },
}

export default function AiAcceleratorThankYouPage() {
  return (
    <>
      <AiThankYou locale="en" />
      <Footer locale="en" />
    </>
  )
}
