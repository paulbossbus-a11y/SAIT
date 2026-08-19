"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

const serviceOptions = [
  "Рекламный ролик",
  "Видео для производства",
  "Съёмка мероприятия",
  "Контент для соцсетей",
  "Съёмка в одиночку",
  "Другое / не знаю",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: Errors = {};
    if (name.trim().length < 2) {
      next.name = "Укажите, пожалуйста, имя";
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      next.phone = "Проверьте номер телефона";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        id="booking"
        className="flex flex-col items-start gap-3 rounded-2xl border border-accent/40 bg-surface p-8 text-left"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-[#171512]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12l5 5L19 7" />
          </svg>
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground">
          Заявка отправлена!
        </h3>
        <p className="text-muted">
          Спасибо, {name}! Я свяжусь с вами в ближайшее время, чтобы обсудить
          детали проекта.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setMessage("");
          }}
          className="mt-2 text-sm font-medium text-accent underline underline-offset-4"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      id="booking"
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-8"
    >
      <div>
        <h3 className="font-display text-xl font-semibold text-foreground">
          Оставить заявку
        </h3>
        <p className="mt-1 text-sm text-muted">
          Расскажите коротко о проекте — отвечу в течение дня.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Имя
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Как к вам обращаться"
          className={`rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent ${
            errors.name ? "border-red-400" : "border-border"
          }`}
        />
        {errors.name && (
          <span className="text-xs text-red-500">{errors.name}</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Телефон
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 900 000-00-00"
          className={`rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent ${
            errors.phone ? "border-red-400" : "border-border"
          }`}
        />
        {errors.phone && (
          <span className="text-xs text-red-500">{errors.phone}</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          Какая услуга интересует
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Комментарий (необязательно)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Коротко о задаче, сроках, бюджете"
          className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <Button type="submit" className="mt-2 w-full sm:w-auto">
        Отправить заявку
      </Button>
    </form>
  );
}
