# UI Components

## shadcn/ui

All UI elements in this app use [shadcn/ui](https://ui.shadcn.com/).

## Rules

- **Never create custom components** — always use an existing shadcn/ui component.
- **Add components via CLI** — `npx shadcn@latest add <component>` to install new ones into `components/ui/`.
- **Do not modify `components/ui/` files** — treat them as third-party. Extend behavior via props or wrapper composition.
- **Use `cn()` for conditional classes** — import from `lib/utils.ts`.
- **Primitive composition** — build complex UI by composing shadcn primitives (e.g. `Card`, `Dialog`, `Form`) rather than raw HTML.
