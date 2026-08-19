import { LinkButton } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--color-surface-muted),_transparent_60%)]" />
      <div className="container-x flex flex-col items-start gap-6 py-24 md:py-32">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted">
          Видеограф и режиссёр
        </span>
        <h1 className="animate-fade-up delay-1 font-display max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Снимаю видео, которое{" "}
          <span className="text-accent">запоминается и продаёт</span>
        </h1>
        <p className="animate-fade-up delay-2 max-w-xl text-lg leading-relaxed text-muted">
          Рекламные ролики, видео для производств и мероприятий, контент для
          соцсетей. Работаю с командой на крупных проектах и в одиночку —
          для более компактных задач.
        </p>
        <div className="animate-fade-up delay-3 flex flex-col gap-3 pt-2 sm:flex-row">
          <LinkButton href="/contacts#booking">Оставить заявку</LinkButton>
          <LinkButton href="/services" variant="secondary">
            Смотреть услуги и цены
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
