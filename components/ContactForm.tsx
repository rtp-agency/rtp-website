"use client";

import { useState } from "react";
import { Arrow } from "@/components/ee/Arrow";
import type { Locale } from "@/lib/locale";

// Posts to Web3Forms, which emails the submission to us — no backend needed.
// Web3Forms access keys are public by design (client-side, with built-in spam
// protection), so it's fine to ship in the bundle. Env var overrides if set.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
  "e689946f-fc82-4a66-a2b5-8c50a46dd941";
const EMAIL = "solutions@rtp-agency.com";

const T = {
  en: {
    name: "Name",
    contact: "Email",
    contactType: "email" as const,
    contactPh: "you@company.com",
    business: "Company",
    businessPh: "What your business does",
    message: "What's slowing you down?",
    messagePh: "The process, what takes too long, what you'd like to happen instead.",
    systems: "Tools involved",
    systemsPh: "e.g. HubSpot, Gmail, QuickBooks, Asana",
    optional: "optional",
    send: "Send",
    sending: "Sending…",
    sent: "Sent",
    note: "No pitch deck needed. A few sentences is enough.",
    ok: "Thank you. We'll reply shortly.",
    error: "Something went wrong. Write to us directly at ",
    subject: "New request (rtp-agency.com /en)",
  },
  ru: {
    name: "Имя",
    contact: "Контакт",
    contactType: "text" as const,
    contactPh: "Email, Telegram или телефон",
    business: "Компания",
    businessPh: "Чем занимается бизнес",
    message: "Что вас тормозит?",
    messagePh: "Какой процесс, что занимает слишком много времени и как должно быть.",
    systems: "Какие инструменты задействованы",
    systemsPh: "Например: amoCRM, Google Таблицы, 1С, Telegram",
    optional: "по желанию",
    send: "Отправить",
    sending: "Отправляем…",
    sent: "Отправлено",
    note: "Презентация не нужна. Достаточно пары предложений.",
    ok: "Спасибо. Скоро ответим.",
    error: "Что-то пошло не так. Напишите напрямую на ",
    subject: "Новая заявка (rtp-agency.com)",
  },
};

export function ContactForm({ locale }: { locale: Locale }) {
  const t = T[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", t.subject);
    data.append("from_name", "RTP — Routine to Profit");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="xform" onSubmit={onSubmit}>
      <input type="checkbox" name="botcheck" className="xform-hp" tabIndex={-1} aria-hidden="true" />
      <div className="xform-row">
        <div className="xfield">
          <label htmlFor="cf-name">{t.name}</label>
          <input id="cf-name" type="text" name="name" autoComplete="name" required />
        </div>
        <div className="xfield">
          <label htmlFor="cf-contact">{t.contact}</label>
          <input
            id="cf-contact"
            type={t.contactType}
            name={t.contactType === "email" ? "email" : "contact"}
            autoComplete={t.contactType === "email" ? "email" : "off"}
            placeholder={t.contactPh}
            required
          />
        </div>
      </div>
      <div className="xfield">
        <label htmlFor="cf-business">
          {t.business} <i>({t.optional})</i>
        </label>
        <input id="cf-business" type="text" name="business" autoComplete="organization" placeholder={t.businessPh} />
      </div>
      <div className="xfield">
        <label htmlFor="cf-message">{t.message}</label>
        <textarea id="cf-message" name="message" rows={4} placeholder={t.messagePh} required />
      </div>
      <div className="xfield">
        <label htmlFor="cf-systems">
          {t.systems} <i>({t.optional})</i>
        </label>
        <input id="cf-systems" type="text" name="systems" placeholder={t.systemsPh} />
      </div>
      <div className="xform-foot">
        <small>{t.note}</small>
        <button type="submit" className="xbtn xbtn-light" disabled={status === "sending" || status === "ok"}>
          {status === "sending" ? t.sending : status === "ok" ? t.sent : t.send}
          {status === "idle" && <Arrow dir="e" />}
        </button>
      </div>
      <div aria-live="polite">
        {status === "ok" && <p className="xform-status">{t.ok}</p>}
        {status === "error" && (
          <p className="xform-status">
            {t.error}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
