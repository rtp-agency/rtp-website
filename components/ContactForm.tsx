"use client";

import { useState } from "react";
import { ui, type Lang } from "@/lib/i18n";

// Posts to Web3Forms, which emails the submission to you — no backend needed.
// Web3Forms access keys are public by design (client-side, with built-in spam
// protection), so it's fine to ship in the bundle. Env var overrides if set.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
  "e689946f-fc82-4a66-a2b5-8c50a46dd941";

export function ContactForm({ lang }: { lang: Lang }) {
  const t = ui[lang].form;
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", t.subject);
    data.append("from_name", "RTP Agency");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
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
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="text" name="name" placeholder={t.name} required />
      <input type="text" name="business" placeholder={t.business} />
      <textarea
        name="message"
        placeholder={t.message}
        rows={4}
        required
      />
      <input type="text" name="contact" placeholder={t.contact} required />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending" || status === "ok"}
      >
        {status === "sending"
          ? t.sending
          : status === "ok"
            ? t.sent
            : t.send}
        {status === "idle" && <span className="arrow">→</span>}
      </button>
      {status === "ok" && <p className="contact-form-status">{t.ok}</p>}
      {status === "error" && (
        <p className="contact-form-status">
          {t.error}
          <a href="mailto:solutions@rtp-agency.com">solutions@rtp-agency.com</a>.
        </p>
      )}
    </form>
  );
}
