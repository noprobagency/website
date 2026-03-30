# AGENT.md

## Project Context

- Project: `noprob.agency`
- Stack target: Next.js 15, TypeScript, Tailwind CSS, App Router
- Priority: replicate the current `https://noprob.agency` homepage as faithfully as possible while setting up strong SEO and tracking foundations
- Current session goal: initialize the project, build the homepage first draft, and make `pnpm tsc --noEmit` and `pnpm build` pass

## Working Rules

- Do not invent metrics or brand claims. Reuse copy and figures from the live site.
- Default to Server Components. Use client components only when interaction requires them.
- Avoid inline styles whenever a Tailwind or CSS-variable solution is practical.
- Keep the visual language consistent with the live site:
  - dark theme
  - neon green accents
  - rounded pill actions
  - modern editorial typography
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

## Decisions

- A local `pnpm` shim was added because `pnpm` was not installed in PATH on this machine. It forwards to `corepack pnpm`.
- The initial `create-next-app@latest` scaffold produced a Next 16 + Tailwind 4 template. The project is being realigned to Next 15 and Tailwind 3 to match the requested config shape.
- The project is now pinned to Next.js `15.5.14`, which is the current maintained Next 15 backport line published on the npm registry.
- Live copy and structure are being taken from the published `https://noprob.agency` homepage and not from invented placeholder content.
- The exact “PARTE 2” source for this file was not included in the prompt, so this document is a working equivalent synthesized from the task brief.
- The live homepage assets are currently loaded from `framerusercontent.com` where useful, while keeping the project ready to localize/migrate those assets later.
- GA4 and Meta are wired behind GDPR consent via `vanilla-cookieconsent`; IDs remain environment-driven through `.env.example`.

## Notes

- The Sanity CLI syntax has changed from the one in the brief, so a local Sanity scaffold was created manually with `sanity.config.ts`, `sanity.cli.ts`, and an empty schema entrypoint to keep the codebase ready without blocking the homepage sprint.
- Final verification completed successfully with `./pnpm tsc --noEmit` and `./pnpm build`.
