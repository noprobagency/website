export const legacyBackedRoutes = ['/', '/use-cases', '/blog', '/ecommerce-rebuild', '/trustpilot'] as const

export function isLegacyBackedPath(pathname: string): boolean {
  return (
    pathname === '/' ||
    pathname === '/use-cases' ||
    pathname === '/blog' ||
    pathname.startsWith('/blog/') ||
    pathname === '/ecommerce-rebuild' ||
    pathname === '/trustpilot'
  )
}
