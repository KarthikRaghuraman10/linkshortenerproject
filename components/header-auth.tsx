"use client";

import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function HeaderAuth() {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex items-center gap-2">
      {!isSignedIn && (
        <>
          <SignInButton mode="modal" forceRedirectUrl="/dashboard">
            <Button variant="outline" size="sm">Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
            <Button size="sm">Sign up</Button>
          </SignUpButton>
        </>
      )}
      {isSignedIn && <UserButton />}
    </div>
  );
}
