import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import { HeaderAuth } from "@/components/header-auth";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link Shortener — Shorten, Share & Track your URLs",
  description:
    "Turn any long URL into a short, memorable link and track clicks with built-in analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider appearance={{ baseTheme: shadcn }}>
          <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
            <span className="text-lg font-semibold tracking-tight">Link Shortener</span>
            <HeaderAuth />
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
