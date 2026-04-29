import { ROUTE_PATHS, type RouteKey } from '@/lib/i18n/routes'

export type RouteConfig = {
  key: RouteKey
  enPath: string
  itPath: string
  priority: number
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
  hasIt: boolean
}

const ROUTE_DEFS: Array<{
  key: RouteKey
  priority: number
  changeFrequency: RouteConfig['changeFrequency']
  hasIt: boolean
}> = [
  { key: 'home',             priority: 1.0, changeFrequency: 'weekly',  hasIt: true },
  { key: 'about',            priority: 0.8, changeFrequency: 'monthly', hasIt: true },
  { key: 'useCases',         priority: 0.9, changeFrequency: 'weekly',  hasIt: true },
  { key: 'dataDrivenTeam',   priority: 0.9, changeFrequency: 'monthly', hasIt: true },
  { key: 'ecommerceRebuild', priority: 0.9, changeFrequency: 'monthly', hasIt: true },
  { key: 'blog',             priority: 0.7, changeFrequency: 'weekly',  hasIt: true },
  { key: 'contacts',         priority: 0.6, changeFrequency: 'yearly',  hasIt: true },
]

export const ROUTES: RouteConfig[] = ROUTE_DEFS.map((def) => ({
  ...def,
  enPath: ROUTE_PATHS[def.key].en,
  itPath: ROUTE_PATHS[def.key].it,
}))
