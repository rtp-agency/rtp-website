"use client";

import { useState } from "react";

// Posts to Web3Forms, which emails the submission to you — no backend needed.
// Web3Forms access keys are public by design (client-side, with built-in spam
// protection), so it's fine to ship in the bundle. Env var overrides if set.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
  "e689946f-fc82-4a66-a2b5-8c50a46dd941";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "Новая заявка (RTP Agency)");
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
      <input type="text" name="name" placeholder="Ваше имя" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea
        name="message"
        placeholder="Что вы делаете и где болит по стоимости или надёжности ИИ?"
        rows={4}
        required
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending" || status === "ok"}
      >
        {status === "sending"
          ? "Отправляем…"
          : status === "ok"
            ? "Отправлено ✓"
            : "Отправить"}
        {status === "idle" && <span className="arrow">→</span>}
      </button>
      {status === "ok" && (
        <p className="contact-form-status">Спасибо — скоро ответим.</p>
      )}
      {status === "error" && (
        <p className="contact-form-status">
          Что-то пошло не так. Напишите напрямую на{" "}
          <a href="mailto:solutions@rtp-agency.com">solutions@rtp-agency.com</a>.
        </p>
      )}
    </form>
  );
}
