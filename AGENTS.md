# AGENTS.md

## Behavioral Guidelines

1. Avoid assumptions. Present all viable options upfront with brief summaries and one recommendation. For minor, reversible decisions, proceed with your recommendation and note it.
2. Make the smallest agreed-upon change. Expand scope only when required for correctness, such as related lint, test, build, or security issues.
3. Keep logic inline unless abstraction clearly improves the result. Prefer simple functions over complex patterns.

## Project Guidelines

This is a Next.js App Router project.

<!-- BEGIN:nextjs-agent-rules -->

### Next.js

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated; the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

### Styles

- Use Sass modules (`.module.scss`) for component and page styles.
- `src/app/global.scss` owns the reset, baseline styles, and `:root` design tokens. Reuse its tokens rather than defining equivalents locally.
- Sass breakpoints, functions, and mixins in `src/styles` are automatically injected into modules. Reuse them without importing or redeclaring them.
