import { loadLegacyPage } from '@/lib/legacy-site'
import { siteConfig } from '@/lib/site'

type LegacyStaticPageProps = {
  pageKey: Parameters<typeof loadLegacyPage>[0]
}

export default async function LegacyStaticPage({ pageKey }: LegacyStaticPageProps) {
  const legacyPage = await loadLegacyPage(pageKey)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: legacyPage.styles }} />
      <div dangerouslySetInnerHTML={{ __html: legacyPage.bodyHtml }} suppressHydrationWarning />
      <div className="-mt-px bg-black px-6 pb-6 pt-2 text-center text-[11px] uppercase tracking-[0.12em] text-[#7c7c7c]">
        Version {siteConfig.version}
      </div>
    </>
  )
}
