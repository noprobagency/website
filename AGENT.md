# AGENT.md

## Project Context

- Project: `noprob.agency`
- Stack target: Next.js 15, TypeScript, Tailwind CSS, App Router
- Priority: replicate the current `https://noprob.agency` homepage as faithfully as possible while setting up strong SEO and tracking foundations
- Current session goal: remove all remaining legacy Framer-export rendering and ship the homepage as pure React + Tailwind using only local assets, while keeping `pnpm tsc --noEmit` and `pnpm build` passing

## Working Rules

- Do not invent metrics or brand claims. Reuse copy and figures from the live site.
- Default to Server Components. Use client components only when interaction requires them.
- Avoid inline styles whenever a Tailwind or CSS-variable solution is practical.
- Keep the visual language consistent with the live site:
  - light theme
  - `#f0f0f0` page background with white and off-white cards
  - black primary actions and black footer/pricing section
  - green Trustpilot/status accents
  - Source Serif 4 italic for emphasis and section personality
  - Inter / Inter Display typographic hierarchy from the Framer export
- Increment `siteConfig.version` in `lib/site.ts` on every content or code change so the footer always exposes the latest shipped version.
- End each completed change with `pnpm tsc --noEmit`, `pnpm build`, a clear conventional-style git commit, and `git push`.
- Do not commit `.env.local`
- Update this file as work is completed

## Session Checklist

- [x] Bootstrap the Next.js project
- [x] Install core dependencies
- [x] Install dev dependencies
- [x] Initialize Sanity Studio scaffold
- [x] Align base config files
- [x] Build shared UI primitives
- [x] Build layout shell
- [x] Implement homepage sections
- [x] Wire SEO helpers and metadata
- [x] Wire tracking foundations
- [x] Add sitemap and robots
- [x] Add `.env.example`
- [x] Run `pnpm tsc --noEmit`
- [x] Run `pnpm build`
- [x] Remap the design system to the light theme
- [x] Switch the homepage to local assets instead of Framer-hosted dependencies
- [x] Rebuild the hero, pricing, proof sections, and footer around the live light-theme structure
- [x] Replace the homepage tokens with the exact Framer-extracted light design system
- [x] Rebuild navbar and hero from the Framer layout and asset mapping
- [x] Add results carousel, revised problem/solution sections, and case study card
- [x] Rebuild black pricing section with embedded testimonials
- [x] Rebuild logo wall, FAQ card, final orbit CTA, and black footer
- [x] Run a screenshot-based fidelity pass on hero and results carousel details
- [x] Import the original hero chart SVG as a local asset and wire it into the hero card
- [x] Remap the above-the-fold desktop and mobile variants directly from the Framer export
- [x] Remove the temporary static-export / legacy Framer renderer from the Next app
- [x] Restore homepage and supporting routes to pure React/Tailwind components only
- [x] Remove Framer CDN dependencies and serve local assets/fonts only
- [x] Add `lib/design-tokens.ts` as a centralized design-source file
- [x] Rebuild the navbar with semantic HTML, text logo, and responsive drawer behavior
- [x] Add the desktop `Services` dropdown and expand service links in the mobile drawer
- [x] Reduce navbar menu typography to `16px / 400` on both desktop and mobile
- [x] Stabilize the desktop `Services` dropdown hover so it does not close while moving into the panel
- [x] Refine hero CTA sizing, replace the broken Trustpilot icon with an inline star, and normalize partner logo sizing/alignment
- [x] Standardize CTA styling site-wide around a shared black/white responsive pattern
- [x] Increase hero partner logo scale on desktop for better readability

## Decisions

- A local `pnpm` shim was added because `pnpm` was not installed in PATH on this machine. It forwards to `corepack pnpm`.
- The initial `create-next-app@latest` scaffold produced a Next 16 + Tailwind 4 template. The project is being realigned to Next 15 and Tailwind 3 to match the requested config shape.
- The project is now pinned to Next.js `15.5.14`, which is the current maintained Next 15 backport line published on the npm registry.
- Live copy and structure are being taken from the published `https://noprob.agency` homepage and not from invented placeholder content.
- The exact “PARTE 2” source for this file was not included in the prompt, so this document is a working equivalent synthesized from the task brief.
- The homepage now uses locally downloaded assets from `public/images`, including renamed hero partner logos for Shopify, WooCommerce, Google Partner, Meta Business Partner, and Klaviyo Partners.
- The earlier dark-theme draft was intentionally replaced with a light system based on the live site’s warm off-white backgrounds and dark text.
- Footer versioning is now sourced from `siteConfig.version` in `lib/site.ts`; future edits must bump that value before shipping.
- GA4 and Meta are wired behind GDPR consent via `vanilla-cookieconsent`; IDs remain environment-driven through `.env.example`.
- The current homepage refactor is aligned to Framer-export tokens and structure: `#f0f0f0` page background, black pricing/footer blocks, Inter-led typography, and Source Serif 4 italic emphasis.
- The homepage footer is not rendered in `app/layout.tsx`; it remains part of the homepage composition to match the live landing structure.
- The latest polish pass focuses on screenshot fidelity: hero headline breaks, integrated chart/quote card, partner logo scale, and results-carousel badge placement.
- The hero chart now uses the imported original SVG asset `public/images/originals/hero-profit-chart.svg` instead of a hand-drawn approximation.
- The above-the-fold now follows the pasted Framer DOM more literally, including the mobile `Menu` pill, centered mobile hero copy, and the graphic card rendered below the partner logos on phone.
- The temporary static-export fallback has now been removed; the app is back to pure React/Tailwind rendering with local assets only.
- Framer-hosted runtime dependencies are no longer used in the app code or image configuration.
- Local `@font-face` declarations are used from `public/fonts` to avoid shipping Google Fonts or Framer-hosted font dependencies.
- `lib/design-tokens.ts` is now the canonical token reference for palette, type scale, spacing, radius, and reusable component values; new UI work should pull from it instead of hardcoding raw values first.
- The navbar now uses semantic HTML, a text-based `noprob®` logo, responsive desktop/mobile visibility helpers, ESC-to-close mobile behavior, and no HTTP logo asset dependency.
- The navbar logo size has been nudged up to `1.625rem`, and the desktop `Services` item now opens a token-driven hover/click dropdown with direct links to the key service pages.
- Menu typography has been softened to `16px / 400` for desktop links, dropdown items, and mobile drawer links to better match the latest visual direction.
- The `Services` dropdown now keeps a small hover buffer and delayed close behavior so the panel remains stable while moving the cursor from the trigger into the menu.
- The hero CTA pair now uses the larger `14px` radius / `14x28` padding treatment, the Trustpilot badge no longer depends on the broken external SVG icon, and the partner logo row is normalized to a constrained `480px` grid with fixed visual heights.
- CTA buttons now share a unified responsive system: black/white variants, `10px` radius, `16px / 400` desktop typography, and proportionally reduced mobile padding/text sizing defined once in the global button utilities.
- The hero partner logos now step up in size on desktop breakpoints only, so the brand marks read more clearly without crowding the mobile layout.

## 13. Stack Analytics, SEO & LLM Optimization

- Site live: https://noprob.agency
- Hosting: Vercel (branch main → production)
- Framework: Next.js 15 App Router, route groups `(en)` + `it/`
- Current version: v0.7.1

### Analytics active

- Google Analytics 4 — ID: G-JD0T1HWWWV (env: `NEXT_PUBLIC_GA4_ID`)
- Meta Pixel — ID: 1174058738142037 (env: `NEXT_PUBLIC_META_PIXEL_ID`)
- Meta Conversions API server-side (endpoint: `/api/meta-capi`)
  - Token in env `META_CAPI_ACCESS_TOKEN` (server-only, never exposed)
  - Deduplication browser Pixel + CAPI via `event_id` UUID shared per event
  - Test event code env `META_CAPI_TEST_EVENT_CODE` active only in Preview environment

### Event tracking

Helper in `lib/analytics/events.ts`:
- `trackEvent(name, params)` — fires Pixel + GA4 + CAPI with same `event_id`
- `trackPageView(url)` — automatic on route change via `RouteChangeTracker`
- `trackContactClick(location)` — triggered on CTA clicks
- `trackPricingView()`, `trackCaseStudyView(slug)` — content-specific events
- `ClickTrackingDelegator` intercepts all `[data-tracking]` elements in DOM

### SEO infrastructure

- Sitemap: `/sitemap.xml` generated from `app/sitemap.ts` + `lib/sitemap/routes.ts`
  - Single source of truth: add page to `ROUTES` array → sitemap auto-updates
  - Includes hreflang `en`/`it`/`x-default` alternates inline
- Robots: `/robots.txt` (`app/robots.ts`) — explicit allow for GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- Hreflang: EN root + `/it/` subfolder, `x-default` → EN
- GSC verification: meta tag via env `GSC_VERIFICATION_TOKEN`
- Canonical: self-referencing per page via `buildMetadata()`

### GEO / LLM Optimization

- `llms.txt`: structured document for LLM crawlers (ChatGPT, Claude, Perplexity) at `/llms.txt` (static public file)
- Schema.org Organization JSON-LD in `app/(en)/layout.tsx` body
- Schema.org Service JSON-LD on `/data-driven-team` and `/ecommerce-rebuild` with offers and pricing
- Entity consistency: founder "Antonio Manitta" + company "NoProb Agency LLC" mentioned cross-page

### GDPR / Consent

- `ConsentGate` component currently in **pass-through mode** (analytics always load)
- TODO: install Iubenda Consent Solution, change `consentGranted` default to `false`, wire `_iub` callbacks

### Runbook — Adding a new indexable page

1. Create page under `app/(en)/[route]/page.tsx` AND `app/it/[route]/page.tsx`
2. Add entry in `lib/sitemap/routes.ts`
3. Add `seo.[pageKey]` (title + description EN/IT) in `lib/i18n/index.ts`
4. Sitemap auto-updates on next build
5. If service page, add Service JSON-LD schema in the page component

### Analytics files created

- `components/analytics/GoogleAnalytics.tsx`
- `components/analytics/MetaPixel.tsx`
- `components/analytics/ConsentGate.tsx`
- `components/analytics/AnalyticsProvider.tsx`
- `components/analytics/RouteChangeTracker.tsx`
- `components/analytics/ClickTrackingDelegator.tsx`
- `lib/analytics/events.ts`
- `app/api/meta-capi/route.ts`
- `app/sitemap.ts` (replaced — now uses `lib/sitemap/routes.ts`)
- `app/robots.ts` (updated — LLM crawlers explicitly allowed)
- `lib/sitemap/routes.ts`
- `public/llms.txt`

---

## 14. Blog Architecture & SEO

### Pattern blog post

Every new post under `/blog/[slug]` (or `/it/blog/[slugIt]`) must include:

- Cover image SVG + PNG `1200×630` in `public/images/blog/[slug]-cover.{svg,png}`
- Article entry in `data/articles/index.ts` with: `title`, `excerpt`, `slug`, `image`, `imageAlt`, `articleType`, `date`, `datePublishedIso`, `readingTimeMinutes`, `wordCount`, `articleSection`, `keywordsIt` / `keywordsEn`
- Localized fields when available: `titleIt`, `excerptIt`, `ledeIt`, `slugIt`, `contentIt`, `faqIt`
- BlogPosting JSON-LD via `<StructuredData />` (built from article fields in the page component)
- FAQPage JSON-LD when `faqIt` (or `faqEn`) is populated
- `<BlogPostMeta />` under the H1 (date + author + reading time)
- `<RelatedCTA />` and `<AuthorBio />` after the article body
- At least 2 internal links to service pages (`/it/team-ecommerce-dedicato`, `/it/rifacimento-ecommerce`, `/it/casi-studio`, `/it/contatti`)
- At least 2 outbound links to authoritative sources (McKinsey, Bain, HBR, Shopify, etc.)
- Sitemap is generated dynamically from the `articles` array in `app/sitemap.ts` — no manual entry required

### Inline content syntax

Paragraphs and list items support markdown-style inline tokens via `parseInline` in `components/article/renderSection.tsx`:

- `[testo](/path)` → internal `<Link>` (no rel/target)
- `[testo](https://...)` → external `<a target="_blank" rel="noopener noreferrer">`
- `**testo**` → `<strong>`

### Reusable blog components

- `components/blog/StructuredData.tsx` — emits one or more JSON-LD `<script>` tags
- `components/blog/BlogPostMeta.tsx` — author + date + reading time row under H1
- `components/blog/AuthorBio.tsx` — Antonio Manitta bio card (locale-aware)
- `components/blog/RelatedCTA.tsx` — contextual CTA (defaults to Data-Driven Team)

### Keyword strategy primaria (Italia)

- Topic primario: "strategia ecommerce" (150 vol/mo, KD 2)
- Topic secondari: "kpi ecommerce", "gestire un ecommerce", "ottimizzazione ecommerce"
- Keyword commerciali fondo funnel: "agenzia shopify" (150 vol KD 0), "consulente ecommerce" (150 vol KD 0)
- Keyword da NON targettizzare: "scalare ecommerce" (0 vol IT), "crescita ecommerce" (10 vol IT)

### Primo articolo pubblicato (riferimento)

- IT: `/it/blog/strategia-ecommerce-long-term`
- EN slug originale: `/blog/ecommerce-growth-secrets` (traduzione EN da rifare)
- Pubblicato: 2026-04-29
- Reading time: 9 min · Word count: ~2600
- Target keyword: "strategia ecommerce"

### Locale-specific slugs

- Article fields: `slug` (EN, required), `slugIt` (IT override, optional)
- IT routes match on `slugIt ?? slug`
- 301 redirect from any old IT slug lives in `next.config.ts > redirects()`

---

## Notes

- The Sanity CLI syntax has changed from the one in the brief, so a local Sanity scaffold was created manually with `sanity.config.ts`, `sanity.cli.ts`, and an empty schema entrypoint to keep the codebase ready without blocking the homepage sprint.
- Visual reference for this redesign was taken from the live `https://noprob.agency` homepage plus the Framer-extracted CSS/HTML values provided in the brief.
- The temporary zip-export mounting phase has been fully rolled back in favor of a local pure-component build, so future work should extend the React sections/routes directly rather than reintroducing static Framer exports.
