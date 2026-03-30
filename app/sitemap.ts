import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticPages = [
    { url: siteConfig.url, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/use-cases`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/contacts`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/data-driven-team`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/ecommerce-rebuild`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/it`, priority: 0.7, changeFrequency: 'weekly' as const },
  ]

  return staticPages.map((page) => ({ ...page, lastModified }))
}
