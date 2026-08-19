import Image from "next/image";

const works = [
  { src: "/images/portfolio/work-3.jpg", alt: "Кадр со съёмочной площадки" },
  { src: "/images/portfolio/work-2.jpg", alt: "Кадр из видеопроекта" },
  { src: "/images/portfolio/work-5.jpg", alt: "Портрет на съёмке" },
  { src: "/images/portfolio/work-4.jpg", alt: "Съёмка на локации" },
  { src: "/images/portfolio/work-6.jpg", alt: "Работа с камерой" },
  { src: "/images/portfolio/work-1.jpg", alt: "Съёмочный процесс" },
];

export default function Portfolio() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-x py-20">
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Немного из работ
        </h2>
        <p className="mt-2 max-w-xl text-muted">
          Кадры со съёмок последних проектов — рекламных роликов, мероприятий
          и портретной съёмки для брендов.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {works.map((work, i) => (
            <div
              key={work.src}
              className={`relative overflow-hidden rounded-2xl border border-border ${
                i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
