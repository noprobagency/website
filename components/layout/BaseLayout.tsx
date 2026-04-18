import Navbar from '@/components/layout/Navbar'
import ConsentBanner from '@/components/tracking/ConsentBanner'
import StickyContact from '@/components/ui/StickyContact'

export default function BaseLayout({
  children,
}: {
  locale: string
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <ConsentBanner />
      <StickyContact />
      {children}
    </>
  )
}
