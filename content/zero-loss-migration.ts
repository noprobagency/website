import type { Locale } from '@/lib/i18n'

import { zeroLossIt } from './zero-loss-migration.it'
import { zeroLossEn } from './zero-loss-migration.en'
import type { ZlCopy } from './zero-loss-migration.shared'

/**
 * Entry point for the Zero-Loss Migration Sprint content: constants, types
 * and the per-locale copy getter. Constants and types live in
 * `zero-loss-migration.shared.ts` so the locale files can import them without
 * a circular dependency.
 */
export * from './zero-loss-migration.shared'

export function getZeroLossCopy(locale: Locale): ZlCopy {
  return locale === 'it' ? zeroLossIt : zeroLossEn
}

