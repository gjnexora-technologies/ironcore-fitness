import { createFileRoute, Link } from "@tanstack/react-router";
import { images, gallery } from "@/lib/site-data";
import { Reveal, SectionHead } from "@/components/site/Layout";
import { StatsStrip, ProgramGrid, WhyUs, TrainerGrid, PlanGrid, Testimonials, FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IronCore Fitness — Train Hard. Move Better. Become Stronger." },
      { name: "description", content: "Premium gym with expert coaches, modern equipment and strength, HIIT and personal training programs. Book your free trial." },
      { property: "og:title", content: "IronCore Fitness — Build Strength. Build Confidence." },
      { property: "og:description", content: "Expert coaching, modern equipment and programs that make you stronger. Book a free trial." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img src={images.hero} alt="Athlete performing a heavy barbell squat at IronCore" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-fade-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 lg:px-8">
          <p className="eyebrow animate-in fade-in slide-in-from-bottom-4 duration-700">IronCore Fitness</p>
          <h1 className="mt-5 max-w-4xl text-7xl sm:text-8xl lg:text-[9rem] animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Build Strength.<br /><span className="text-gradient">Build Confidence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            Train with expert coaches, modern equipment, and programs designed to help you become stronger, healthier, and more consistent.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">Start Your Journey</Link>
            <Link to="/programs" className="btn-outline">View Programs</Link>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Programs" title={<>Train with <span className="text-primary">purpose.</span></>} text="From your first lift to your next personal best — a program for every goal." />
          <Link to="/programs" className="btn-outline mb-12">Explore Programs</Link>
        </div>
        <ProgramGrid limit={4} />
      </section>

      <WhyUs />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHead eyebrow="Coaches" title={<>Meet your <span className="text-primary">team.</span></>} />
        <TrainerGrid />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Inside IronCore" title="The floor. The work." />
          <Link to="/gallery" className="btn-outline mb-12">Full Gallery</Link>
        </div>
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.slice(0, 6).map((g) => (
            <Reveal key={g.alt} className={`group overflow-hidden ${g.span ?? ""}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHead center eyebrow="Membership" title={<>Pick your <span className="text-primary">plan.</span></>} text="Simple monthly memberships. No complicated contracts." />
          <PlanGrid />
        </div>
      </section>

      <Testimonials />
      <FinalCTA />
    </>
  );
}
