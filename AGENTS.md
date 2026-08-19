# JAEU project rules

## Source of truth

- Existing `jaeu.kz/page1` is not a code or design source. Preserve only verified information and approved menu meanings.
- Materials from the supplied JAEU archive are content sources, but conflicting facts must be confirmed before publication.
- Never invent members, partners, achievements, dates, contacts, services, statistics, offices, awards or legal claims.

## Architecture

- Astro static output only unless the owner approves a backend.
- Russian is the default locale at `/`; Kazakh is `/kz/`; English is `/en/`.
- Keep reusable UI in `src/components`, layouts in `src/layouts`, language copy in `src/data` and pages in `src/pages`.
- Do not duplicate whole layouts for each locale.
- Use semantic HTML, progressive enhancement and minimal JavaScript.
- All internal production URLs use trailing slashes.

## SEO

- Exactly one meaningful H1 per page.
- Every indexable page needs a unique title, description, canonical and self-referencing hreflang set.
- Do not create a page merely for a keyword variation. One page must satisfy one distinct intent.
- Structured data must reflect visible, verified facts.
- Important content and links must exist in rendered HTML without interaction.

## Design

- Institutional premium, not luxury retail and not a jewellery shop.
- Light editorial layout, deep navy and graphite base, restrained gold accent from the logo.
- No black-and-gold cliché, excessive gradients, glossy 3D jewellery, decorative numbering or generic AI card grids.
- Desktop reference width: 1440 px. Verify 360, 390, 430, 768, 1024 and 1440 px.
- Accessibility: visible focus, keyboard navigation, sufficient contrast, reduced-motion support and meaningful image alt text.

## Workflow

- Work in a feature branch.
- Inspect `git status` before edits.
- Do not commit, push, merge, deploy or submit forms unless the current task explicitly authorizes it.
- After each implementation run `npm run check` and `npm run build`.
- Report changed files, tested routes, remaining risks and unverified facts.
