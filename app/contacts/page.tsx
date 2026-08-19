import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты — Данил Колодин, видеограф",
  description:
    "Свяжитесь со мной по телефону, Telegram или оставьте заявку на сайте — обсудим ваш проект.",
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Контакты"
        title="Давайте обсудим ваш проект"
        description="Оставьте заявку через форму — это быстрее всего, я отвечаю в течение дня. Либо свяжитесь напрямую любым удобным способом."
      />

      <section className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-4">
            <a
              href={site.phoneHref}
              className="flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">Телефон</p>
                <p className="mt-1 text-lg font-semibold text-foreground">{site.phone}</p>
              </div>
              <span className="text-accent">→</span>
            </a>
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">Telegram</p>
                <p className="mt-1 text-lg font-semibold text-foreground">Написать в мессенджере</p>
              </div>
              <span className="text-accent">→</span>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">Instagram</p>
                <p className="mt-1 text-lg font-semibold text-foreground">Смотреть работы</p>
              </div>
              <span className="text-accent">→</span>
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
