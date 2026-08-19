import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-semibold text-foreground">
            {site.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {site.role}. Снимаю рекламу, ролики о производстве, мероприятия и
            контент для соцсетей — {site.city}.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Разделы
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Контакты
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground/80">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-accent">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  Telegram
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="container-x text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
