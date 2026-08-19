import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ReviewCard from "@/components/ReviewCard";
import ContactSection from "@/components/sections/ContactSection";
import { reviews } from "@/lib/site";

export const metadata: Metadata = {
  title: "Отзывы — Данил Колодин, видеограф",
  description:
    "Отзывы компаний, организаторов мероприятий и блогеров о съёмке рекламных роликов и видео.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Отзывы"
        title="Что говорят клиенты"
        description="Несколько отзывов от компаний и организаторов, с которыми довелось поработать."
      />
      <section className="container-x py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.name} name={r.name} text={r.text} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
