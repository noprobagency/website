# AGENT.md

## Project Context

- Project: `noprob.agency`
- Stack target: Next.js 15, TypeScript, Tailwind CSS, App Router
- Priority: replicate the current `https://noprob.agency` homepage as faithfully as possible while setting up strong SEO and tracking foundations
- Current session goal: rebuild the homepage to the correct light theme, match the live visual hierarchy more closely, and keep `pnpm tsc --noEmit` and `pnpm build` passing

## Working Rules

- Do not invent metrics or brand claims. Reuse copy and figures from the live site.
- Default to Server Components. Use client components only when interaction requires them.
- Avoid inline styles whenever a Tailwind or CSS-variable solution is practical.
- Keep the visual language consistent with the live site:
  - light theme
  - warm off-white backgrounds
  - black primary actions
  - green Trustpilot accents
  - rounded pill actions
  - modern Geist typography
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

## Decisions

- A local `pnpm` shim was added because `pnpm` was not installed in PATH on this machine. It forwards to `corepack pnpm`.
- The initial `create-next-app@latest` scaffold produced a Next 16 + Tailwind 4 template. The project is being realigned to Next 15 and Tailwind 3 to match the requested config shape.
- The project is now pinned to Next.js `15.5.14`, which is the current maintained Next 15 backport line published on the npm registry.
- Live copy and structure are being taken from the published `https://noprob.agency` homepage and not from invented placeholder content.
- The exact “PARTE 2” source for this file was not included in the prompt, so this document is a working equivalent synthesized from the task brief.
- The homepage now uses locally downloaded assets from `public/images`, including renamed hero partner logos for Shopify, WooCommerce, Google Partner, Meta Business Partner, and Klaviyo Partners.
- The earlier dark-theme draft was intentionally replaced with a light system based on the live site’s warm off-white backgrounds and dark text.
- GA4 and Meta are wired behind GDPR consent via `vanilla-cookieconsent`; IDs remain environment-driven through `.env.example`.

## Notes

- The Sanity CLI syntax has changed from the one in the brief, so a local Sanity scaffold was created manually with `sanity.config.ts`, `sanity.cli.ts`, and an empty schema entrypoint to keep the codebase ready without blocking the homepage sprint.
- Visual reference for this redesign was taken from the live `https://noprob.agency` homepage plus the user-provided screenshots of the correct light-theme layout.
