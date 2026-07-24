"use client";

import { useEffect, useRef, useState } from "react";

const WORD = "RTP AGENCY";
type Phase = "type" | "ready" | "exit" | "done";

export function Intro() {
  const [phase, setPhase] = useState<Phase>("type");
  const [typed, setTyped] = useState("");
  const rainRef = useRef<HTMLCanvasElement>(null);

  // Skip on repeat visits within the session; lock scroll while active.
  useEffect(() => {
    if (typeof window === "undefined") return;
    // land at the top with the hero pinned; no browser scroll restore / jump
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (sessionStorage.getItem("introSeen")) {
      window.__rtpIntroDone = true;
      setPhase("done");
      return;
    }
    window.__rtpIntroActive = true;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Typewriter.
  useEffect(() => {
    if (phase !== "type") return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(WORD.slice(0, i));
      if (i >= WORD.length) {
        clearInterval(id);
        setTimeout(() => setPhase("ready"), 450);
      }
    }, 130);
    return () => clearInterval(id);
  }, [phase]);

  // Once ready, the first scroll / key / tap dissolves the intro.
  useEffect(() => {
    if (phase !== "ready") return;
    const exit = () => {
      sessionStorage.setItem("introSeen", "1");
      setPhase("exit");
    };
    const opts = { passive: true } as const;
    window.addEventListener("wheel", exit, opts);
    window.addEventListener("touchmove", exit, opts);
    window.addEventListener("keydown", exit);
    window.addEventListener("click", exit);
    return () => {
      window.removeEventListener("wheel", exit);
      window.removeEventListener("touchmove", exit);
      window.removeEventListener("keydown", exit);
      window.removeEventListener("click", exit);
    };
  }, [phase]);

  // Exit: binary rain, then unmount + unlock scroll.
  useEffect(() => {
    if (phase !== "exit") return;
    const canvas = rainRef.current;
    let raf = 0;
    const start = performance.now();
    const DURATION = 1100;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      if (ctx) {
        const g: CanvasRenderingContext2D = ctx;
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
        const font = 16;
        const cols = Math.floor(w / font);
        // start most streams near the middle (where the word was), then fall
        const drops = Array.from({ length: cols }, () => (h * 0.42) / font + Math.random() * 6);
        const speed = Array.from({ length: cols }, () => 0.6 + Math.random() * 1.2);
        g.font = `${font}px monospace`;
        const draw = (now: number) => {
          const p = Math.min((now - start) / DURATION, 1);
          g.fillStyle = "rgba(7, 7, 7, 0.22)";
          g.fillRect(0, 0, w, h);
          for (let i = 0; i < cols; i++) {
            const ch = Math.random() > 0.5 ? "1" : "0";
            const y = drops[i] * font;
            g.fillStyle = `rgba(255, ${40 + Math.floor(Math.random() * 60)}, 40, ${
              (1 - p) * 0.9
            })`;
            g.fillText(ch, i * font, y);
            drops[i] += speed[i] * (1 + p * 2.4);
            if (y > h && Math.random() > 0.975) drops[i] = 0;
          }
          if (p < 1) raf = requestAnimationFrame(draw);
        };
        raf = requestAnimationFrame(draw);
      }
    }

    const done = setTimeout(() => {
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
      window.__rtpIntroActive = false;
      window.__rtpIntroDone = true;
      window.dispatchEvent(new Event("rtp-intro-done"));
      setPhase("done");
    }, DURATION);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(done);
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`intro${phase === "exit" ? " intro-exit" : ""}`}>
      <canvas ref={rainRef} className="intro-rain" aria-hidden="true" />
      <div className="intro-inner">
        <div className="intro-terminal">
          <span className="intro-prompt">$</span>
          <span className="intro-word">{typed}</span>
          <span className="intro-caret" aria-hidden="true" />
        </div>
      </div>
      <div className={`intro-scroll${phase === "ready" ? " is-on" : ""}`}>
        <span className="intro-scroll-label">СКРОЛЛ</span>
        <span className="intro-chevrons" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}
