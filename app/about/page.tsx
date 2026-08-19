import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/sections/ContactSection";
import { LinkButton } from "@/components/ui/Button";
import { advantages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Обо мне — Данил Колодин, видеограф и режиссёр",
  description:
    "Снимаю коммерческие видео и ролики уже несколько лет. Работаю с командой и в одиночку, ценю чёткие сроки и качественную картинку.",
};

const stats = [
  { value: "150+", label: "снятых проектов" },
  { value: "5 лет", label: "в видеопродакшене" },
  { value: "30+", label: "клиентов-компаний" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Обо мне"
        title="Видео — это моя профессия и моя страсть"
      />

      <section className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/portfolio/work-6.jpg"
              alt="Данил Колодин за камерой"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-foreground/90">
              Меня зовут Данил, я видеограф и режиссёр. Снимаю рекламные
              ролики, видео о производствах, мероприятия и контент для
              соцсетей — для компаний, заводов, организаторов и блогеров
              моего города.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              На крупных проектах собираю команду: оператора, света, монтажёра
              и продюсера. Для небольших задач — снимаю и монтирую сам, чтобы
              клиент получал результат быстро и без лишних затрат. Я слежу за
              трендами видеопродакшена и стараюсь, чтобы каждое видео выглядело
              современно и работало на цель клиента — продажи, узнаваемость
              или атмосферу мероприятия.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <LinkButton href="/contacts#booking">Обсудить проект</LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-x py-16">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Как я работаю
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {advantages.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-border bg-background p-6">
                <span className="font-display text-3xl font-semibold text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
