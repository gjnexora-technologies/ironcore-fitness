import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { contact } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="font-display text-xl tracking-wide uppercase">
      Iron<span className="text-primary">core</span>
      <span className="ml-1 text-xs font-sans font-bold tracking-[0.3em] text-muted-foreground">Fitness</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/75 hover:text-foreground transition-colors"
              activeProps={{ className: "!text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden sm:inline-flex !py-3 !px-5">Start Your Journey</Link>
          <button className="lg:hidden p-2" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="lg:hidden border-t border-border px-5 pb-6">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
              className="block py-3 font-display text-2xl uppercase border-b border-border" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">Start Your Journey</Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal pb-24 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 font-display text-3xl uppercase">Train Hard. Move Better. <span className="text-primary">Become Stronger.</span></p>
        </div>
        <div>
          <h2 className="eyebrow mb-4 font-sans">Explore</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {nav.slice(1).map((n) => <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-4 font-sans">Visit</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0" />{contact.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-primary" /><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-primary" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li className="flex gap-2"><Instagram className="h-4 w-4 text-primary" /><a href={contact.instagram} target="_blank" rel="noreferrer">{contact.instagramHandle}</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} IronCore Fitness. All rights reserved.</p>
    </footer>
  );
}

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <Link to="/contact" className="btn-primary w-full">Book Free Trial</Link>
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: ReactNode; text: string; image: string }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-fade-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-6xl md:text-8xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/80">{text}</p>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: ReactNode; text?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-12 ${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-5xl md:text-7xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-muted-foreground">{text}</p>}
    </Reveal>
  );
}
