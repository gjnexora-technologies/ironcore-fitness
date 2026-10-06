import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { images, gallery, galleryCats, type GalleryCat } from "@/lib/site-data";
import { PageHero } from "@/components/site/Layout";
import { FinalCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside IronCore Fitness" },
      { name: "description", content: "Training sessions, group classes, coaches and our modern gym floor — see inside IronCore Fitness." },
      { property: "og:title", content: "IronCore Fitness Gallery" },
      { property: "og:description", content: "See the training, classes, coaches and gym at IronCore." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [cat, setCat] = useState<GalleryCat | "All">("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = cat === "All" ? gallery : gallery.filter((g) => g.cat === cat);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o! + 1) % list.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o! - 1 + list.length) % list.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, list.length]);

  return (
    <>
      <PageHero eyebrow="Gallery" title={<>Inside <span className="text-primary">IronCore.</span></>} text="The people, the energy and the floor where the work gets done." image={images.interior} />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div role="tablist" aria-label="Gallery categories" className="mb-10 flex flex-wrap gap-2">
          {(["All", ...galleryCats] as const).map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] border transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
          {list.map((g, i) => (
            <button key={g.alt} onClick={() => setOpen(i)} aria-label={`View ${g.alt}`} className={`group relative overflow-hidden ${cat === "All" ? g.span ?? "" : ""}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute bottom-3 left-3 bg-background/80 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em]">{g.cat}</span>
            </button>
          ))}
        </div>
      </section>
      {open !== null && list[open] && (
        <div role="dialog" aria-modal="true" aria-label={list[open].alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay/95 p-4" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute right-5 top-5 p-2" onClick={() => setOpen(null)}><X className="h-7 w-7" /></button>
          <button aria-label="Previous" className="absolute left-3 p-2" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + list.length) % list.length); }}><ChevronLeft className="h-8 w-8" /></button>
          <img src={list[open].src} alt={list[open].alt} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <button aria-label="Next" className="absolute right-3 p-2" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % list.length); }}><ChevronRight className="h-8 w-8" /></button>
        </div>
      )}
      <FinalCTA />
    </>
  );
}
