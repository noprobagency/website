import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'

import { buildMetadata, siteConfig } from '@/lib/site'

const LEGACY_ROOT = path.join(process.cwd(), 'content/legacy-site')

export const legacyPages = {
  home: {
    file: 'index.html',
    path: '/',
  },
  useCases: {
    file: 'use-cases/index.html',
    path: '/use-cases',
  },
  blog: {
    file: 'blog/index.html',
    path: '/blog',
  },
  ecommerceRebuild: {
    file: 'ecommerce-rebuild/index.html',
    path: '/ecommerce-rebuild',
  },
  trustpilot: {
    file: 'trustpilot/index.html',
    path: '/trustpilot',
  },
} as const

export type LegacyPageKey = keyof typeof legacyPages

type LegacyPageData = {
  title: string
  description: string
  styles: string
  bodyHtml: string
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .trim()
}

function sanitizeLegacyBody(markup: string): string {
  return markup
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\b(href|src|action)=("|')\.\/(.*?)\2/gi, (_match, attr: string, quote: string, value: string) => {
      return `${attr}=${quote}/${value}${quote}`
    })
    .trim()
}

export const loadLegacyPage = cache(async (pageKey: LegacyPageKey): Promise<LegacyPageData> => {
  const page = legacyPages[pageKey]
  const filePath = path.join(LEGACY_ROOT, page.file)
  const rawHtml = await readFile(filePath, 'utf8')

  const titleMatch = rawHtml.match(/<title>([\s\S]*?)<\/title>/i)
  const descriptionMatch = rawHtml.match(
    /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']\s*\/?>/i,
  )
  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)

  const styles = Array.from(rawHtml.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi))
    .map((match) => match[1].trim())
    .filter(Boolean)
    .join('\n')

  return {
    title: decodeHtmlEntities(titleMatch?.[1] ?? siteConfig.defaultTitle),
    description: decodeHtmlEntities(descriptionMatch?.[1] ?? siteConfig.description),
    styles,
    bodyHtml: sanitizeLegacyBody(bodyMatch?.[1] ?? ''),
  }
})

export async function buildLegacyMetadata(pageKey: LegacyPageKey) {
  const page = legacyPages[pageKey]
  const legacyPage = await loadLegacyPage(pageKey)

  return buildMetadata({
    title: legacyPage.title || siteConfig.defaultTitle,
    description: legacyPage.description || siteConfig.description,
    path: page.path,
  })
}
