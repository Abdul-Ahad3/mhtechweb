"use client";

import "./engg-film.css";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { FILM_STAGES } from "@/lib/engg-film";

const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const subscribeVisibility = (cb: () => void) => {
  document.addEventListener("visibilitychange", cb);
  return () => document.removeEventListener("visibilitychange", cb);
};
const getVisible = () => document.visibilityState === "visible";

const ctrl =
  "inline-flex h-11 w-11 items-center justify-center rounded-md text-navy hover:bg-tag";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function EngineeringFilm() {
  const [current, setCurrent] = useState(0);
  const [manual, setManual] = useState<"play" | "pause" | null>(null);
  const [inView, setInView] = useState(true);
  const rootRef = useRef<HTMLElement>(null);

  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    getReducedMotion,
    () => false,
  );
  const pageVisible = useSyncExternalStore(
    subscribeVisibility,
    getVisible,
    () => true,
  );

  const count = FILM_STAGES.length;
  const stage = FILM_STAGES[current];
  const playing = manual ? manual === "play" : !reducedMotion;
  const stopped = !playing || !inView || !pageVisible;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const choose = (i: number) => {
    setCurrent((i + count) % count);
    setManual("pause");
  };

  return (
    <section
      ref={rootRef}
      aria-label="Animated product development journey"
      className={`engineering-film w-full min-w-0 overflow-hidden rounded-lg border bg-white shadow-[0_28px_70px_-28px_rgba(75,126,175,0.6)] dark:shadow-[0_28px_80px_-24px_rgba(91,143,192,0.4)] ${
        stopped ? "is-paused" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 text-[11px] font-semibold tracking-[0.12em] text-muted">
        <span className="flex items-center gap-2.5">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-steel opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-steel" />
          </span>
          THE ENGINEERING JOURNEY
        </span>
        <span className="tabular-nums tracking-[0.16em]">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </span>
      </div>

      <div
        aria-hidden="true"
        className="film-screen relative isolate mx-3 aspect-[520/312] overflow-hidden"
      >
        <div className="film-grid" />
        <div
          key={current}
          className="film-art relative z-10 h-full w-full pb-6 pt-1"
          dangerouslySetInnerHTML={{ __html: stage.art }}
        />
        <div className="absolute inset-x-5 bottom-3 z-10 flex justify-between text-[9px] tracking-[0.12em] text-[#9db7c8] sm:text-[10px]">
          <span>FROM AN IDEA</span>
          <span>TO A COMPLETE PRODUCT</span>
        </div>
      </div>

      <div className="px-5 pb-4 pt-5">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold tracking-[0.12em] text-steel-dark">
          <span>{stage.phase}</span>
          <span className="hidden text-[10px] font-medium tracking-[0.1em] text-muted sm:inline">
            EXPLORE OUR PROCESS
          </span>
        </div>

        <div aria-live={playing ? "off" : "polite"}>
          <p className="mt-3 font-heading text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            {stage.title}
          </p>
          <p className="mt-2 min-h-[4.5rem] max-w-[460px] text-sm text-muted sm:min-h-[3.5rem]">
            {stage.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t pt-3">
          <div
            role="group"
            aria-label="Choose a development stage"
            className="grid min-w-[15rem] flex-1 grid-cols-9 gap-1"
          >
            {FILM_STAGES.map((s, i) => (
              <button
                key={s.title}
                type="button"
                aria-label={`Stage ${i + 1}: ${s.title}`}
                aria-pressed={i === current}
                onClick={() => choose(i)}
                className={`film-step relative min-h-11 px-0 pb-2 pt-1 text-center text-xs tabular-nums hover:bg-tag hover:text-navy ${
                  i === current ? "active font-bold text-navy" : "text-muted"
                } ${i < current ? "done" : ""}`}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <i
                  aria-hidden="true"
                  onAnimationEnd={(e) => {
                    if (e.animationName === "film-progress" && i === current) {
                      setCurrent((c) => (c + 1) % count);
                    }
                  }}
                />
              </button>
            ))}
          </div>

          <div className="ml-auto flex shrink-0 gap-1">
            <button
              type="button"
              aria-label="Previous development stage"
              onClick={() => choose(current - 1)}
              className={ctrl}
            >
              <Icon>
                <path d="M11 4L6 9l5 5" />
              </Icon>
            </button>
            <button
              type="button"
              aria-label={playing ? "Pause animation" : "Play animation"}
              onClick={() => setManual(playing ? "pause" : "play")}
              className={ctrl}
            >
              <Icon>
                {playing ? (
                  <path d="M6 4v10M12 4v10" />
                ) : (
                  <path d="M5 3.5v11l9-5.5z" />
                )}
              </Icon>
            </button>
            <button
              type="button"
              aria-label="Next development stage"
              onClick={() => choose(current + 1)}
              className={ctrl}
            >
              <Icon>
                <path d="M7 4l5 5-5 5" />
              </Icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}