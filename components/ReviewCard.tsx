export default function ReviewCard({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
      <div className="flex gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.3l7.1-.7L12 2z" />
          </svg>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/85">
        «{text}»
      </p>
      <p className="mt-5 text-sm font-semibold text-foreground">{name}</p>
    </div>
  );
}
