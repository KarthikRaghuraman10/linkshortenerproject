# Agent Instructions

This file is the entry point for LLM coding agents. All coding standards and conventions for this project are documented in the `/docs` directory.

> **CRITICAL — NON-NEGOTIABLE**: You **MUST** read every relevant `.md` file inside the `/docs` directory **BEFORE generating a single line of code**. This is not optional. Skipping this step will result in incorrect implementations. No exceptions.



## Docs

- [Authentication](/docs/auth.md) — Clerk-only auth, protected routes, modal sign in/sign up.
- [UI Components](/docs/ui.md) — shadcn/ui only, no custom components.

## Critical Rules (Never Violate)

1. **`proxy.ts`, not `middleware.ts`** — Next.js 16 renamed Middleware to Proxy.
2. **`params` is a Promise** — always `await params` in pages and layouts.
3. **`"use client"` is opt-in** — pages and layouts are Server Components by default.
4. **Always authenticate in Server Functions** — they are reachable via direct POST requests.
5. **Never expose `DATABASE_URL` to the client** — it must remain server-only.
6. **Use `cn()` for className merging** — never concatenate Tailwind classes manually.
7. **Use `import type` for type-only imports** — keeps runtime bundles lean.

