# Zero-Loss Migration Sprint landing

Standalone landing that sells one productized service. Routes:

- EN: `/zero-loss-migration` (`app/(zl-en)/zero-loss-migration/page.tsx`)
- IT: `/it/zero-loss-migration` (`app/(zl-it)/it/zero-loss-migration/page.tsx`)

Not linked from the global nav or footer: traffic comes from ads, cold email and
ambassadors. `/shopify-migration` and `/it/migrazione-shopify` are untouched.

## Indexing switch (`LP_ZERO_LOSS_INDEX`)

The page ships **noindex, nofollow** and is **out of the sitemap** until the
environment variable `LP_ZERO_LOSS_INDEX` is exactly `true`.

| `LP_ZERO_LOSS_INDEX` | `<meta name="robots">` | in `/sitemap.xml` |
| -------------------- | ---------------------- | ----------------- |
| unset / anything else | `noindex, nofollow`   | no                |
| `true`               | `index, follow`        | yes (EN + IT with hreflang) |

Where it is read: `lib/zero-loss/metadata.ts` (`ZL_INDEXABLE`) and
`lib/sitemap/routes.ts`. It is a build-time value: after changing it on Vercel,
redeploy. Hreflang EN/IT + canonical are always emitted (from `ROUTE_PATHS.zeroLossMigration`).

## Structure

- Own root layouts (`app/(zl-en)/layout.tsx`, `app/(zl-it)/layout.tsx`, both
  wrapping `ZeroLossRootLayout`), same pattern as the `(funnel)` group: no global
  navbar, no sticky contact pill, no preloader. Consent banner + analytics
  provider are included.
- Copy: `content/zero-loss-migration.it.ts`, `content/zero-loss-migration.en.ts`
  (typed `ZlCopy`), constants/types/tiers in `content/zero-loss-migration.shared.ts`,
  entry point `content/zero-loss-migration.ts` (`getZeroLossCopy(locale)`).
  Components never hardcode text.
- Page composition: `ZeroLossPage.tsx` (section order: nav, hero + logo strip,
  overview, checklist, deliverables, calendar, guarantees, why now, proof,
  scope, FAQ, application form, minimal footer).
- Reused site pieces: `SearchConsoleCharts` (unchanged), `Testimonials`
  (new optional `items` / `tone` / `className` props), `Accordion` (new optional
  `renderText` prop), `Footer` (new `minimal` prop), `MarqueeScroll`,
  partner/client logo assets, Trustpilot wordmark, `.button-principal`,
  `.button-secondary`, `.np-eyebrow`, `.section-card`, `container-noprob`.
- Form: `ZlApplicationForm.tsx` (4 steps, in-memory state on back, honeypot +
  time trap, per-step validation, zod schema `lib/schemas/zeroLoss.ts`, tier
  logic `lib/zero-loss/tier.ts`). Posts to `/api/migrazione-lead` with
  `source: "zero-loss-migration"`; the route has a dedicated branch
  (`handleZeroLoss`) with its own schema, server-side tier recompute, in-memory
  rate limit (5 requests / 10 min / IP) and admin email. The original
  migrazione/sviluppo/datateam flow of that route is unchanged. No welcome
  email is sent for this source (the landing promises a personal reply within
  48 hours and has no booking step).
- Tracking (`lib/zero-loss/tracking.ts`): dataLayer + GA4 `gtag` events
  `lp_view`, `cta_click{position}`, `checklist_change{checked_count}`,
  `form_start`, `form_step{step}`, `form_disqualified{reason}`,
  `form_submit{tier, estimated_price, platform, revenue_band, start_timing}`,
  `dashboard_demo_click{position}`. Every event carries `lp: "zero-loss-migration"`.
  A standard `Lead` (Pixel + GA4 + CAPI, shared event_id) also fires on a
  successful submit, like the other forms. `utm_*` are captured from the URL,
  kept in `sessionStorage` and sent with the payload.
- OG images: `public/images/og-zero-loss-migration-{it,en}.png`, regenerate with
  `node scripts/generate-zero-loss-og.mjs`.

## Placeholders ("[DA CONFERMARE]")

Values Antonio has not confirmed are `[[TOKEN]]` markers in the copy files and
render as `[DA CONFERMARE]` through `renderCopy()` (`Placeholder.tsx`). The
marker is highlighted in yellow everywhere except the Vercel **production**
environment (`NEXT_PUBLIC_VERCEL_ENV !== 'production'`).

### TODO list (open placeholders, by section)

| Section | What | Where to replace |
| --- | --- | --- |
| 3 Overview, "Cosa ottieni" line 1 | `[[N]]` number of checkout settings | `content/zero-loss-migration.it.ts` line 44, `.en.ts` line 44 |
| 3 Overview, result card 3 | `[[BRAND]]` brand of the CR 2%→5% / AOV +30% case | `content/zero-loss-migration.it.ts` line 77, `.en.ts` line 77 |
| 5 Deliverable 1 paragraph | `[[N]]` | `content/zero-loss-migration.it.ts` line 106, `.en.ts` line 106 |
| 5 Deliverables, images 1-5 | JSX mockups (`ZlMockups.tsx`) stand in for real screenshots: staging vs current site, report table, redirect CSV + test output, tracking spec + EMQ, signed checklist | replace `ZlMockup` in `ZlDeliverables.tsx` with `next/image` screenshots (or `ImagePlaceholder`) |
| 6 Calendar, week 2 Wednesday | `[[N]]` | `content/zero-loss-migration.it.ts` line 214, `.en.ts` line 214 |
| 9 Proof, Cumini before/after card | `[[CUMINI]]` origin platform, go-live date, organic clicks 90 days before/after, mobile LCP before/after | `content/zero-loss-migration.it.ts` lines 300-305, `.en.ts` lines 300-305 |
| 9 Proof + form success | `[LINK DEMO]` demo dashboard URL | `content/zero-loss-migration.shared.ts` `ZL_DEMO_DASHBOARD_URL` (currently `null`, link rendered disabled) |
| 9 Proof, testimonials | 3 hidden slots for the next migration testimonials | `content/zero-loss-migration.it.ts` lines 328-330, `.en.ts` lines 328-330 (set `hidden: false` and fill) |
| 11 FAQ, "Il sito sarà uguale a prima?" | `[[N]]` | `content/zero-loss-migration.it.ts` line 376, `.en.ts` line 376 |
| 2 Hero, logo strip | confirm the stylized "S" mark is the Sfogliate&Sfogliatelle logo | `components/sections/zero-loss/ZlHero.tsx` `ZL_STRIP_LOGOS` |

Line numbers refer to the files at the time of the PR; search the token to be safe.

## QA notes

- Indexing: with the flag off the page answers `noindex, nofollow` and is absent
  from `/sitemap.xml`; the other routes of the sitemap are unchanged.
- Locally, without `RESEND_API_KEY`, a submit returns 500 "Email service not
  configured": the form shows the inline error with "Riprova" and keeps the data.
  On Vercel the key exists and the admin email lands in the same inbox as
  `/shopify-migration` leads, subject `[Zero-Loss Sprint] Tier N · platform · store`.
