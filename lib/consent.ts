export type ConsentCategory = 'analytics' | 'marketing'

export const CONSENT_UPDATE_EVENT = 'cookieconsent-update'

export function hasConsent(category: ConsentCategory) {
  if (typeof window === 'undefined') {
    return false
  }

  return Boolean(window.CookieConsent?.acceptedCategory?.(category))
}
