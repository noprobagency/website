'use client'

import * as CookieConsent from 'vanilla-cookieconsent'

export default function CookiePreferencesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      data-tracking="cookie_policy_preferences"
      className="button-principal mt-5"
    >
      {label}
    </button>
  )
}
