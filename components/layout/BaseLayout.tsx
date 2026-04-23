import Navbar from '@/components/layout/Navbar'
import ConsentBanner from '@/components/tracking/ConsentBanner'
import StickyContact from '@/components/ui/StickyContact'
import Preloader from '@/components/ui/Preloader'

export default function BaseLayout({
  children,
}: {
  locale: string
  children: React.ReactNode
}) {
  return (
    <>
      <Preloader />
      <Navbar />
      <ConsentBanner />
      <StickyContact />
      {children}
    </>
  )
}
