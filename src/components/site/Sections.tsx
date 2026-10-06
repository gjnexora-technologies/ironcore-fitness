import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Star, ChevronLeft, ChevronRight, Check, Dumbbell, Users, Target, HeartHandshake, CalendarClock, TrendingUp } from "lucide-react";
import { programs, reasons, trainers, plans, testimonials, stats, images } from "@/lib/site-data";
import { Reveal, SectionHead } from "./Layout";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(value); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return; io.disconnect();
      const start = performance.now();
      const tick = (t: number) => { const p = Math.min(1, (t - start) / 1400); setN(Math.round(value * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(el); return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function StatsStrip() {
  return (
    <section aria-label="Gym highlights" className="border-y border-border bg-charcoal">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-6 py-10 text-center ${i > 0 ? "md:border-l" : ""} ${i % 2 ? "border-l md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} border-border`}>
            <p className="font-display text-5xl md:text-6xl text-gradient"><Counter value={s.value} suffix={s.suffix} /></p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProgramGrid({ limit }: { limit?: number }) {
  const list = limit ? programs.slice(0, limit) : programs;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 4) * 80}>
          <article id={p.slug} className="group relative aspect-[3/4] overflow-hidden scroll-mt-28">
            <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-fade-overlay" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="font-display text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-1 text-3xl">{p.name}</h3>
              <p className="mt-2 text-sm text-foreground/75">{p.desc}</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-primary group-hover:gap-2 transition-all">
                View Program <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

const reasonIcons = [Dumbbell, Target, TrendingUp, Users, CalendarClock, HeartHandshake];
export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <img src={images.interior} alt="IronCore training floor" loading="lazy" width={1280} height={1024} className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-6 -right-4 bg-gradient-primary p-6 text-primary-foreground md:-right-8">
            <p className="font-display text-5xl">7 Days</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">A week, early to late</p>
          </div>
        </Reveal>
        <div>
          <SectionHead eyebrow="Why IronCore" title={<>Built for people who <span className="text-primary">show up.</span></>} />
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {reasons.map((r, i) => { const Icon = reasonIcons[i] ?? Dumbbell; return (
              <Reveal key={r.title} delay={i * 60} className="bg-background p-6">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-4 text-2xl">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </Reveal>
            ); })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrainerGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {trainers.map((t, i) => (
        <Reveal key={t.name} delay={i * 80}>
          <article className="group bg-card">
            <div className="overflow-hidden">
              <img src={t.image} alt={`${t.name}, ${t.specialty} coach`} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
            </div>
            <div className="p-6">
              <p className="eyebrow !text-[0.65rem]">{t.specialty}</p>
              <h3 className="mt-2 text-3xl">{t.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{t.years}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t.bio}</p>
              <Link to="/contact" className="btn-outline mt-5 w-full !py-3">Book Session</Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function PlanGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((p, i) => (
        <Reveal key={p.name} delay={i * 100}>
          <article className={`relative flex h-full flex-col border p-8 transition-transform duration-300 hover:-translate-y-1 ${p.featured ? "border-primary bg-card shadow-[var(--shadow-glow)]" : "border-border bg-charcoal"}`}>
            {p.featured && <span className="absolute -top-3 left-8 bg-gradient-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-foreground">Most Popular</span>}
            <h3 className="text-4xl">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <p className="mt-6"><span className="font-display text-6xl">{p.price}</span><span className="text-muted-foreground">{p.period}</span></p>
            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => <li key={f} className="flex gap-3 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" />{f}</li>)}
            </ul>
            <Link to="/contact" className={`${p.featured ? "btn-primary" : "btn-outline"} mt-8 w-full`}>Join Now</Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i]!;
  const go = (d: number) => setI((i + d + testimonials.length) % testimonials.length);
  return (
    <section className="bg-charcoal py-24" aria-roledescription="carousel" aria-label="Member testimonials">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <p className="eyebrow">Member Voices</p>
        <div className="mt-6 flex justify-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, k) => <Star key={k} className={`h-5 w-5 ${k < t.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />)}
        </div>
        <blockquote key={i} className="mt-6 font-display text-4xl uppercase leading-tight md:text-5xl animate-in fade-in duration-500">“{t.quote}”</blockquote>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground">— {t.name}</p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} aria-label="Previous testimonial" className="btn-outline !p-3"><ChevronLeft className="h-5 w-5" /></button>
          <div className="flex gap-2">{testimonials.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} className={`h-1 w-8 transition-colors ${k === i ? "bg-primary" : "bg-muted"}`} />)}</div>
          <button onClick={() => go(1)} aria-label="Next testimonial" className="btn-outline !p-3"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={images.hiit} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-overlay/80" />
      <div className="relative mx-auto max-w-5xl px-5 py-28 text-center">
        <p className="eyebrow">Your first session is on us</p>
        <h2 className="mt-4 text-6xl md:text-8xl">Ready to start <span className="text-gradient">training?</span></h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-primary">Book a Free Trial</Link>
          <Link to="/membership" className="btn-outline">View Membership</Link>
        </div>
      </div>
    </section>
  );
}
