"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function HomeCta({ size = "lg" }: { size?: "default" | "sm" | "lg" }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <SignUpButton mode="modal">
        <Button size={size} className="px-8">
          Get started for free
        </Button>
      </SignUpButton>
      <SignInButton mode="modal">
        <Button variant="outline" size={size} className="px-8">
          Sign in
        </Button>
      </SignInButton>
    </div>
  );
}
