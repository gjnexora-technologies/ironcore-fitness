import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { PageHero } from "@/components/site/Layout";
import { PlanGrid, Testimonials, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Starter, Performance, Elite | IronCore Fitness" },
      { name: "description", content: "Simple monthly gym memberships at IronCore Fitness. Choose Starter, Performance or Elite." },
      { property: "og:title", content: "IronCore Membership Plans" },
      { property: "og:description", content: "Starter, Performance and Elite memberships — simple monthly plans." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Membership" title={<>Commit to <span className="text-primary">yourself.</span></>} text="Simple monthly plans. Start with a free trial session." image={images.strength} />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><PlanGrid /></section>
      <Testimonials />
      <FinalCTA />
    </>
  ),
});
