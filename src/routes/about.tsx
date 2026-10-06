import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { PageHero, Reveal, SectionHead } from "@/components/site/Layout";
import { StatsStrip, WhyUs, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IronCore Fitness — Our Story & Philosophy" },
      { name: "description", content: "IronCore is a modern fitness destination focused on strength, conditioning, wellness and personal transformation." },
      { property: "og:title", content: "About IronCore Fitness" },
      { property: "og:description", content: "Strength, conditioning, wellness and personal transformation — meet the IronCore philosophy." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title={<>More than a <span className="text-primary">gym.</span></>} text="A modern fitness destination focused on strength, conditioning, wellness, and personal transformation." image={images.interior} />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <SectionHead eyebrow="Our Philosophy" title="Train hard. Move better. Become stronger." />
        <Reveal className="space-y-5 text-lg text-muted-foreground">
          <p>IronCore was built for people who want real progress — not gimmicks. We combine expert coaching, quality equipment and structured programming so every session moves you forward.</p>
          <p>Whether you're picking up a barbell for the first time or chasing a new personal best, our coaches meet you where you are and build a plan around your goals.</p>
          <p>Above all, we're a community. People who show up for themselves — and for each other.</p>
        </Reveal>
      </section>
      <StatsStrip />
      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-24 md:grid-cols-3 lg:px-8">
        {[images.personal, images.group, images.strength].map((src, i) => (
          <Reveal key={i} delay={i * 100} className="overflow-hidden"><img src={src} alt="Training at IronCore" loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105" /></Reveal>
        ))}
      </section>
      <WhyUs />
      <FinalCTA />
    </>
  );
}
