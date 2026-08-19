import { advantages } from "@/lib/site";

export default function Advantages() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-x py-20">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Почему выбирают меня
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {advantages.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-display text-3xl font-semibold text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
