import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import ContactSection from "@/components/sections/ContactSection";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Услуги и цены — Данил Колодин, видеограф",
  description:
    "Рекламные ролики, видео для производств, съёмка мероприятий и контент для соцсетей. Прозрачные цены и сроки.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Услуги"
        title="Услуги и цены"
        description="Подберу формат под ваш бюджет и задачу — от компактной съёмки в одиночку до полноценного продакшена с командой."
      />
      <section className="container-x py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Цены ориентировочные и зависят от объёма съёмки, локации, сроков и
          сложности монтажа. Точную смету пришлю после короткого созвона.
        </p>
      </section>
      <ContactSection />
    </>
  );
}
