import type { Locale } from '@/lib/i18n'

export type RouteKey =
  | 'home'
  | 'about'
  | 'useCases'
  | 'dataDrivenTeam'
  | 'ecommerceRebuild'
  | 'blog'
  | 'contacts'

export const ROUTE_PATHS: Record<RouteKey, { en: string; it: string }> = {
  home:             { en: '/',                   it: '/it' },
  about:            { en: '/about',              it: '/it/chi-siamo' },
  useCases:         { en: '/use-cases',          it: '/it/casi-studio' },
  dataDrivenTeam:   { en: '/data-driven-team',   it: '/it/team-ecommerce-dedicato' },
  ecommerceRebuild: { en: '/ecommerce-rebuild',  it: '/it/rifacimento-ecommerce' },
  blog:             { en: '/blog',               it: '/it/blog' },
  contacts:         { en: '/contacts',           it: '/it/contatti' },
}

export function getRoutePath(key: RouteKey, locale: Locale): string {
  return ROUTE_PATHS[key][locale]
}

/**
 * Map a path in one locale to the equivalent path in the other locale.
 * Handles fixed routes (lookup in ROUTE_PATHS) and dynamic /use-cases/[slug],
 * /blog/[slug] routes (slug is shared, only prefix changes).
 */
export function getAlternateLocalePath(path: string, currentLocale: Locale): string {
  const altLocale: Locale = currentLocale === 'en' ? 'it' : 'en'

  // Fixed routes
  for (const paths of Object.values(ROUTE_PATHS)) {
    if (paths[currentLocale] === path) return paths[altLocale]
  }

  // Dynamic routes: use-cases
  const useCasesCurrent = ROUTE_PATHS.useCases[currentLocale]
  const useCasesAlt = ROUTE_PATHS.useCases[altLocale]
  if (path.startsWith(useCasesCurrent + '/')) {
    return useCasesAlt + path.slice(useCasesCurrent.length)
  }

  // Dynamic routes: blog
  const blogCurrent = ROUTE_PATHS.blog[currentLocale]
  const blogAlt = ROUTE_PATHS.blog[altLocale]
  if (path.startsWith(blogCurrent + '/')) {
    return blogAlt + path.slice(blogCurrent.length)
  }

  // Fallback (unknown path)
  return path
}
