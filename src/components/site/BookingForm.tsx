import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { programs } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  goal: z.string().max(100).optional(),
  program: z.string().max(100).optional(),
  date: z.string().optional(),
  message: z.string().max(1000).optional(),
});

export function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs); return;
    }
    setErrors({}); setSent(true);
  };
  if (sent) return (
    <div className="border border-primary bg-card p-10 text-center">
      <h3 className="text-4xl">You're in.</h3>
      <p className="mt-3 text-muted-foreground">Thanks! Our team will contact you shortly to confirm your free trial.</p>
    </div>
  );
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 border border-border bg-card p-6 md:grid-cols-2 md:p-8">
      <Field errors={errors} id="name" label="Name *"><input id="name" name="name" className="field" autoComplete="name" /></Field>
      <Field errors={errors} id="phone" label="Phone *"><input id="phone" name="phone" type="tel" className="field" autoComplete="tel" /></Field>
      <Field errors={errors} id="email" label="Email *"><input id="email" name="email" type="email" className="field" autoComplete="email" /></Field>
      <Field errors={errors} id="goal" label="Fitness Goal">
        <select id="goal" name="goal" className="field" defaultValue="">
          <option value="">Select a goal</option>
          {["Build strength", "Lose weight", "Improve fitness", "Gain muscle", "Mobility & health"].map((g) => <option key={g}>{g}</option>)}
        </select>
      </Field>
      <Field errors={errors} id="program" label="Preferred Program">
        <select id="program" name="program" className="field" defaultValue="">
          <option value="">Select a program</option>
          {programs.map((p) => <option key={p.slug}>{p.name}</option>)}
        </select>
      </Field>
      <Field errors={errors} id="date" label="Preferred Date"><input id="date" name="date" type="date" className="field" /></Field>
      <div className="md:col-span-2"><Field errors={errors} id="message" label="Message"><textarea id="message" name="message" rows={4} className="field" /></Field></div>
      <button type="submit" className="btn-primary md:col-span-2">Book a Free Trial</button>
    </form>
  );
}

function Field({ id, label, children, errors }: { id: string; label: string; children: ReactNode; errors: Record<string, string> }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      {children}
      {errors[id] && <p className="mt-1 text-xs text-destructive" role="alert">{errors[id]}</p>}
    </div>
  );
}
