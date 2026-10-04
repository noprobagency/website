'use client'

import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'

import { CONSENT_UPDATE_EVENT } from '@/lib/consent'
import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

const policyLinks = (locale: Locale) =>
  `<a href="${ROUTE_PATHS.privacyPolicy[locale]}">Privacy Policy</a><a href="${ROUTE_PATHS.cookiePolicy[locale]}">Cookie Policy</a>`

export default function ConsentBanner({ locale = 'en' }: { locale?: Locale }) {
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
          autoClear: { cookies: [{ name: /^_ga/ }, { name: '_gid' }], reloadPage: true },
        },
        marketing: {
          enabled: false,
          readOnly: false,
          autoClear: { cookies: [{ name: '_fbp' }, { name: '_fbc' }], reloadPage: true },
        },
      },
      language: {
        default: locale,
        translations: {
          en: {
            consentModal: {
              title: 'Your growth stack needs consent too',
              description:
                'We use essential cookies to run the site and optional analytics and marketing cookies to understand performance, attribution, and campaign quality.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject non-essential',
              showPreferencesBtn: 'Manage preferences',
              footer: policyLinks('en'),
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
          it: {
            consentModal: {
              title: 'Anche il tracking ha bisogno del tuo consenso',
              description:
                'Usiamo cookie essenziali per far funzionare il sito e cookie facoltativi di statistica e marketing per capire come vanno il sito e le campagne.',
              acceptAllBtn: 'Accetta tutti',
              acceptNecessaryBtn: 'Rifiuta i non essenziali',
              showPreferencesBtn: 'Gestisci preferenze',
              footer: policyLinks('it'),
            },
            preferencesModal: {
              title: 'Preferenze privacy',
              acceptAllBtn: 'Accetta tutti',
              acceptNecessaryBtn: 'Rifiuta i non essenziali',
              savePreferencesBtn: 'Salva preferenze',
              closeIconLabel: 'Chiudi',
              sections: [
                {
                  title: 'Uso dei cookie',
                  description:
                    'Teniamo attivi solo i cookie essenziali per il funzionamento del sito e ti lasciamo scegliere separatamente statistiche e misurazione delle campagne.',
                },
                {
                  title: 'Strettamente necessari',
                  description:
                    'Servono per la navigazione, la sicurezza, il corretto invio dei form e per ricordare le tue scelte sul consenso.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Statistica',
                  description:
                    'Attiva Google Analytics 4, così capiamo la qualità del traffico e miglioriamo il sito.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Marketing',
                  description:
                    'Attiva Meta Pixel e le altre piattaforme pubblicitarie usate per misurare le campagne e fare remarketing.',
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
  }, [locale])

  return null
}
