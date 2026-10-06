import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { images, contact } from "@/lib/site-data";
import { PageHero } from "@/components/site/Layout";
import { BookingForm } from "@/components/site/BookingForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Trial Booking | IronCore Fitness" },
      { name: "description", content: "Book a free trial session at IronCore Fitness. Find our address, opening hours, phone and email." },
      { property: "og:title", content: "Book a Free Trial at IronCore Fitness" },
      { property: "og:description", content: "Ready to start training? Book your free trial session today." },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "ExerciseGym", name: "IronCore Fitness", telephone: contact.phone, email: contact.email, address: contact.address }) }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Free Trial" title={<>Ready to start <span className="text-primary">training?</span></>} text="Tell us your goals and we'll set up your free trial session." image={images.beginner} />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <BookingForm />
        <aside className="space-y-8">
          {[
            { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
            { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
            { icon: MapPin, label: "Address", value: contact.address },
            { icon: Instagram, label: "Instagram", value: contact.instagramHandle, href: contact.instagram },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex gap-4">
              <Icon className="mt-1 h-5 w-5 text-primary" aria-hidden />
              <div>
                <p className="eyebrow !text-[0.65rem]">{label}</p>
                {href ? <a href={href} className="text-lg hover:text-primary">{value}</a> : <p className="text-lg">{value}</p>}
              </div>
            </div>
          ))}
          <div className="flex gap-4">
            <Clock className="mt-1 h-5 w-5 text-primary" aria-hidden />
            <div className="w-full">
              <p className="eyebrow !text-[0.65rem]">Opening Hours</p>
              {contact.hours.map((h) => <p key={h.day} className="flex justify-between border-b border-border py-2"><span>{h.day}</span><span className="text-muted-foreground">{h.time}</span></p>)}
            </div>
          </div>
        </aside>
      </section>
      <iframe title="IronCore Fitness location map" src={contact.mapEmbed} loading="lazy" className="h-[420px] w-full grayscale invert-[0.9]" />
    </>
  );
}
