import type { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      <h3 className="font-display text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.description}
      </p>
      <ul className="mt-4 flex flex-col gap-1.5">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <span className="font-display text-xl font-semibold text-accent">
          {service.price}
        </span>
      </div>
    </div>
  );
}
