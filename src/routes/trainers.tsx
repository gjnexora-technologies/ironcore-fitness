import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { PageHero } from "@/components/site/Layout";
import { TrainerGrid, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Our Trainers — Expert Coaches | IronCore Fitness" },
      { name: "description", content: "Meet the IronCore coaching team in strength & conditioning, personal training, functional fitness and nutrition & wellness." },
      { property: "og:title", content: "Meet the IronCore Coaches" },
      { property: "og:description", content: "Experienced coaches ready to guide your training. Book a session." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Trainers" title={<>Coached by <span className="text-primary">the best.</span></>} text="Experienced coaches who care about your technique, progress and consistency." image={images.personal} />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><TrainerGrid /></section>
      <FinalCTA />
    </>
  ),
});
