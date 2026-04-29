import type { MetadataRoute } from 'next'
import { ROUTES } from '@/lib/sitemap/routes'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://noprob.agency'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const route of ROUTES) {
    const enUrl = `${BASE_URL}${route.enPath === '/' ? '' : route.enPath}`
    const itUrl = `${BASE_URL}${route.itPath}`

    entries.push({
      url: enUrl,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: route.hasIt
        ? { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } }
        : undefined,
    })

    if (route.hasIt) {
      entries.push({
        url: itUrl,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority * 0.9,
        alternates: { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } },
      })
    }
  }

  // TODO: when blog goes live, scan MDX/CMS and append dynamic blog post entries

  return entries
}
