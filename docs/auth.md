# Authentication

All authentication in this app is handled exclusively by **Clerk**. No other auth libraries or custom auth implementations should be used.

## Rules

- **Clerk only** — never implement custom auth, NextAuth, or any other auth solution.
- **`/dashboard` is a protected route** — users must be signed in to access it. Enforce this in `proxy.ts` using Clerk's middleware helpers.
- **Redirect signed-in users away from `/`** — if an authenticated user visits the homepage, redirect them to `/dashboard`.
- **Sign in and sign up always open as modals** — use `<SignInButton mode="modal">` and `<SignUpButton mode="modal">`. Never navigate to a dedicated sign-in/sign-up page.

## proxy.ts Pattern

Use Clerk's `clerkMiddleware` and `createRouteMatcher` in `proxy.ts` to protect routes:

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});
```

## Redirect Signed-In Users from Homepage

In the homepage Server Component (`app/page.tsx`), check auth and redirect:

```ts
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const { userId } = await auth();
if (userId) redirect("/dashboard");
```

## Modal Sign In / Sign Up

```tsx
import { SignInButton, SignUpButton } from "@clerk/nextjs";

<SignInButton mode="modal"><button>Sign in</button></SignInButton>
<SignUpButton mode="modal"><button>Sign up</button></SignUpButton>
```
