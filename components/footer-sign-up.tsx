"use client";

import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function FooterSignUp() {
  return (
    <SignUpButton mode="modal">
      <Button size="lg" className="px-10">
        Create free account
      </Button>
    </SignUpButton>
  );
}
