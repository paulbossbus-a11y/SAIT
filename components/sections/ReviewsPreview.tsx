import { reviews } from "@/lib/site";
import ReviewCard from "@/components/ReviewCard";
import { LinkButton } from "@/components/ui/Button";

export default function ReviewsPreview() {
  return (
    <section className="border-b border-border">
      <div className="container-x py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Отзывы клиентов
          </h2>
          <LinkButton href="/reviews" variant="ghost">
            Все отзывы →
          </LinkButton>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {reviews.slice(0, 2).map((r) => (
            <ReviewCard key={r.name} name={r.name} text={r.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
