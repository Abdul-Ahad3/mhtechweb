"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { hasRealImage } from "@/lib/projects";
import type { ProjectSlide } from "@/types";

const INTERVAL = 5000;

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

const grid = {
  backgroundImage:
    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};

const iconBtn =
  "inline-flex h-11 w-11 items-center justify-center rounded-md border bg-white text-navy hover:border-steel";

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

export default function ProjectSlideshow({
  name,
  slides,
}: {
  name: string;
  slides: ProjectSlide[];
}) {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [failed, setFailed] = useState<Set<number>>(new Set());

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

  const count = slides.length;
  const autoplay =
    count > 1 && !userPaused && !engaged && pageVisible && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => setIndex((index + 1) % count), INTERVAL);
    return () => clearTimeout(id);
  }, [autoplay, index, count]);

  const go = (i: number) => setIndex((i + count) % count);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${name} slideshow`}
      className="flex flex-col lg:max-w-[calc((100dvh_-_var(--header-height)_-_20rem)_*_1672/941)]"
      onMouseEnter={() => setEngaged(true)}
      onMouseLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={() => setEngaged(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
    >
      <div
        aria-live={autoplay ? "off" : "polite"}
        className="relative aspect-[1672/941] w-full overflow-hidden rounded-md border bg-hero"
      >
        {slides.map((slide, i) => (
          <div
            key={`${slide.src}-${i}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {failed.has(i) || !hasRealImage(slide.src) ? (
              <>
                <div className="absolute inset-0 opacity-60" style={grid} />
                <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-medium text-muted">
                  {count > 1
                    ? `Slide ${i + 1} image coming soon`
                    : "Image coming soon"}
                </p>
              </>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
                onError={() => setFailed((s) => new Set(s).add(i))}
              />
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className="flex h-11 w-8 items-center justify-center"
              >
                <span
                  className={`h-1 w-6 rounded-full transition-colors ${
                    i === index ? "bg-steel-dark" : "bg-border"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {!reducedMotion && (
              <button
                type="button"
                aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
                onClick={() => setUserPaused((v) => !v)}
                className={iconBtn}
              >
                <Icon>
                  {userPaused ? (
                    <path d="M5 3.5v11l9-5.5z" />
                  ) : (
                    <path d="M6 4v10M12 4v10" />
                  )}
                </Icon>
              </button>
            )}
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className={iconBtn}
            >
              <Icon>
                <path d="M11 4L6 9l5 5" />
              </Icon>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className={iconBtn}
            >
              <Icon>
                <path d="M7 4l5 5-5 5" />
              </Icon>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}