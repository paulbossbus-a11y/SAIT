import { services } from "@/lib/site";
import ServiceCard from "@/components/ServiceCard";
import { LinkButton } from "@/components/ui/Button";

export default function ServicesPreview() {
  return (
    <section className="border-b border-border">
      <div className="container-x py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Услуги и цены
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Работаю по фиксированным пакетам и под индивидуальные задачи.
              Итоговая стоимость зависит от объёма и сроков.
            </p>
          </div>
          <LinkButton href="/services" variant="ghost">
            Все услуги →
          </LinkButton>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
