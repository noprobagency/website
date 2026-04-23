export type RouteConfig = {
  path: string
  priority: number
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
  hasIt: boolean
}

export const ROUTES: RouteConfig[] = [
  { path: '/',                  priority: 1.0, changeFrequency: 'weekly',  hasIt: true },
  { path: '/about',             priority: 0.8, changeFrequency: 'monthly', hasIt: true },
  { path: '/use-cases',         priority: 0.9, changeFrequency: 'weekly',  hasIt: true },
  { path: '/data-driven-team',  priority: 0.9, changeFrequency: 'monthly', hasIt: true },
  { path: '/ecommerce-rebuild', priority: 0.9, changeFrequency: 'monthly', hasIt: true },
  { path: '/blog',              priority: 0.7, changeFrequency: 'weekly',  hasIt: true },
  { path: '/contacts',          priority: 0.6, changeFrequency: 'yearly',  hasIt: true },
]
