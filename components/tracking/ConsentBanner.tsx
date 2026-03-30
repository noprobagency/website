'use client'

import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'

import { CONSENT_UPDATE_EVENT } from '@/lib/consent'

export default function ConsentBanner() {
  useEffect(() => {
    void CookieConsent.run({
      mode: 'opt-in',
      autoShow: true,
      revision: 1,
      cookie: {
        name: 'noprob_agency_consent',
        secure: true,
      },
      guiOptions: {
        consentModal: {
          layout: 'box wide',
          position: 'bottom right',
          equalWeightButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: false,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          readOnly: false,
        },
        marketing: {
          enabled: false,
          readOnly: false,
        },
      },
      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'Your growth stack needs consent too',
              description:
                'We use essential cookies to run the site and optional analytics and marketing cookies to understand performance, attribution, and campaign quality.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject non-essential',
              showPreferencesBtn: 'Manage preferences',
            },
            preferencesModal: {
              title: 'Privacy preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject non-essential',
              savePreferencesBtn: 'Save preferences',
              closeIconLabel: 'Close',
              sections: [
                {
                  title: 'Cookie usage',
                  description:
                    'We keep essential storage active for site functionality and let you opt into measurement and ad attribution separately.',
                },
                {
                  title: 'Strictly necessary',
                  description:
                    'Required for navigation, security, form integrity, and storing your consent choices.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analytics',
                  description:
                    'Enables GA4 and related measurement so we can understand traffic quality and improve the experience.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Marketing',
                  description:
                    'Enables Meta Pixel and future ad platforms used for campaign attribution and remarketing.',
                  linkedCategory: 'marketing',
                },
              ],
            },
          },
        },
      },
      onConsent: () => window.dispatchEvent(new Event(CONSENT_UPDATE_EVENT)),
      onChange: () => window.dispatchEvent(new Event(CONSENT_UPDATE_EVENT)),
    })
  }, [])

  return null
}
