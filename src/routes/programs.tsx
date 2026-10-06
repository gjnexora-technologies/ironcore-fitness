import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { PageHero } from "@/components/site/Layout";
import { ProgramGrid, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Strength, HIIT, Personal Training | IronCore Fitness" },
      { name: "description", content: "Explore IronCore programs: strength, personal training, functional, HIIT, weight management, group fitness, mobility and beginner fitness." },
      { property: "og:title", content: "Training Programs at IronCore Fitness" },
      { property: "og:description", content: "Eight coached programs for every goal and fitness level." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Programs" title={<>Find your <span className="text-primary">program.</span></>} text="Eight coached programs built for every goal and every level." image={images.group} />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><ProgramGrid /></section>
      <FinalCTA />
    </>
  ),
});
