import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function ContactSection() {
  return (
    <section className="bg-surface-muted">
      <div className="container-x grid gap-10 py-20 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Готовы обсудить проект?
          </h2>
          <p className="mt-3 max-w-md text-muted">
            Заполните форму, и я свяжусь с вами, чтобы обсудить детали,
            сроки и стоимость. Также можно написать или позвонить напрямую.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-sm">
            <a href={site.phoneHref} className="flex items-center gap-3 text-foreground transition-colors hover:text-accent">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              {site.phone}
            </a>
            <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground transition-colors hover:text-accent">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                </svg>
              </span>
              Написать в Telegram
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
