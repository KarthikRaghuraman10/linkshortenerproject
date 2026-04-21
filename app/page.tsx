import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Link2, BarChart2, Zap, Share2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { HomeCta } from "@/components/home-cta";
import { FooterSignUp } from "@/components/footer-sign-up";

const features = [
  {
    icon: Zap,
    title: "Instant Shortening",
    description:
      "Paste any long URL and get a clean, short link in seconds. No friction, no fuss.",
  },
  {
    icon: Link2,
    title: "Custom Short Links",
    description:
      "Choose a memorable slug for your links so they're easy to share and recognise.",
  },
  {
    icon: BarChart2,
    title: "Click Analytics",
    description:
      "See exactly how many times each link has been clicked and track your reach over time.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description:
      "Copy your short link with one click and share it anywhere — social, email, or SMS.",
  },
];

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Shorten. Share.{" "}
          <span className="text-muted-foreground">Track.</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Turn any long URL into a short, memorable link — then watch the clicks
          roll in with built-in analytics.
        </p>
        <HomeCta />
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything you need to manage your links
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border px-6 py-16 text-center">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          Ready to get started?
        </h2>
        <p className="mb-8 text-muted-foreground">
          Create your free account and start shortening links today.
        </p>
        <FooterSignUp />
      </section>
    </main>
  );
}
