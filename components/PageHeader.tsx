export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-x py-16 md:py-20">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </span>
        <h1 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-muted">{description}</p>
        )}
      </div>
    </section>
  );
}
