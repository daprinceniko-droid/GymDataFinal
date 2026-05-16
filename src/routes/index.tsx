import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { MethodSection } from "@/components/MethodSection";
import { SiteFooter } from "@/components/SiteFooter";
import { Wave } from "@/components/Wave";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Body Like Tea — Cute Calorie & Macro Calculator for Gym Girlies" },
      {
        name: "description",
        content:
          "Get your daily calories, protein, carbs and fat targets — visualised in chicken breasts, pasta bowls and avocados. Free, personal, gymgirly-approved.",
      },
      { property: "og:title", content: "Body Like Tea — Calorie & Macro Calculator" },
      {
        property: "og:description",
        content:
          "Free calorie & macro calculator with cute scrollytelling food equivalents. Made for gym girlies.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const goCalculate = () => navigate({ to: "/calculate" });

  return (
    <main className="min-h-screen">
      <Hero onScrollDown={goCalculate} />
      <MethodSection />
      <Wave from="green" to="pink" />
      <SiteFooter />
    </main>
  );
}
