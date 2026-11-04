import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Play, Pause, ArrowUpRight } from "lucide-react";

const slides = [
  {
    eyebrow: "01 / LIVE EXPERIENCES",
    title: "Moments that move people.",
    accent: "Events",
    description: "From leadership gatherings to landmark launches — human stories, considered details, and effortless execution.",
    image: "/images/hero/home-events-stage.webp",
    fallbackImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2400&q=85",
    alt: "Real audience immersed in a beautifully lit live event",
    cta: "Explore event experiences",
    href: "#services",
    type: "image",
  },
  {
    eyebrow: "02 / PHYSICAL WORLDS",
    title: "Designed to stop traffic.",
    accent: "Exhibitions",
    description: "Purposeful exhibition spaces where architecture, product stories and interaction turn attention into meaningful conversations.",
    image: "/images/hero/home-exhibition-booth.webp",
    fallbackImage: "https://i.ibb.co/mr7NBq6G/66755.jpg",
    alt: "Realistic exhibition booth design and brand presentation",
    cta: "Explore exhibitions",
    href: "#services",
    type: "image",
  },
  {
    eyebrow: "03 / STORIES IN MOTION",
    title: "Make every frame matter.",
    accent: "Creative & AV",
    description: "Concepts, films, 2D and 3D content, and show visuals composed to make your brand impossible to forget.",
    image: "/images/hero/home-creative-av-control.webp",
    fallbackImage: "https://images.unsplash.com/photo-1757845524683-611470b2d7ce?auto=format&fit=crop&w=2400&q=85",
    alt: "Professional camera and edit suite used for creative and AV production",
    cta: "Explore creative production",
    href: "#services",
    type: "image",
  },
  {
    eyebrow: "04 / THE HAPPYWIT STORY",
    title: "The feeling is the point.",
    accent: "Experience HappyWit",
    description: "Powered by Human Creativity. Enhanced by AI. Driven by Emotion.",
    image: "/images/hero/home-video-poster.webp",
    fallbackImage: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=2400&q=85",
    alt: "Immersive brand experience stage lighting",
    cta: "Start a conversation",
    href: "#contact",
    type: "video",
  },
] as const;

// Approved brand film. An environment URL can override the bundled static film if needed.
// The picture fallback remains visible until the uploaded film is deployed.
const brandFilmUrl = import.meta.env.VITE_BRAND_FILM_URL || "/videos/happywit-brand-introduction.mp4";

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [filmUnavailable, setFilmUnavailable] = useState(false);
  const [showFilm, setShowFilm] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 30000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);
  const current = slides[active];

  return (
    <section
      aria-label="HappyWit featured experiences"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false);
      }}
      className="relative isolate w-full overflow-hidden bg-[#081126] text-white min-h-[650px] h-[82svh] max-h-[940px]"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.eyebrow}
          className={"absolute inset-0 transition-opacity duration-1000 ease-in-out " + (i === active ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0")}
          aria-hidden={i !== active}
        >
          {slide.type === "video" && !filmUnavailable && i === active ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setFilmUnavailable(true)}
              poster={slide.image}
              src={brandFilmUrl}

              aria-label="HappyWit brand introduction film"
            />
          ) : (
            <img
              src={slide.image}
              alt={slide.alt}
              onError={(event) => {
                if (event.currentTarget.src !== slide.fallbackImage) event.currentTarget.src = slide.fallbackImage;
              }}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050b1b]/95 via-[#08132d]/75 to-[#08132d]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b1b]/80 via-transparent to-[#050b1b]/20" />
        </div>
      ))}

      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 pb-24 pt-16 md:px-12 lg:px-20">
        <div key={current.eyebrow} className="max-w-3xl animate-[fadeIn_0.75s_ease-out]">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFA63B]">
            <span className="h-px w-9 bg-[#FFA63B]" /> {current.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2.75rem,6.5vw,6.25rem)] leading-[1.02] font-black tracking-tight">
            <span className="block text-white">{current.accent}</span>
            <span className="mt-2 block max-w-3xl text-white/90">{current.title}</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-xl">{current.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={current.href} className="inline-flex items-center gap-2 rounded-full bg-[#1752C9] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#2D68E0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {current.cta} <ArrowUpRight size={17} />
            </a>
            {active === 3 && !filmUnavailable && (
              <button type="button" onClick={() => { setPaused(true); setShowFilm(true); }} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"><Play size={16} /> Watch with sound</button>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-6 right-6 z-30 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 md:left-12 md:right-12 lg:left-20 lg:right-20">
        <div className="flex min-w-0 flex-1 items-center gap-2" aria-label="Select featured slide">
          {slides.map((slide, i) => (
            <button
              key={slide.eyebrow}
              type="button"
              onClick={() => goTo(i)}
              aria-label={"Show " + slide.accent}
              aria-current={active === i ? "true" : undefined}
              className="group flex min-w-0 w-full max-w-28 flex-col gap-2 py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <span className={"h-1 w-full rounded-full transition-colors duration-300 " + (active === i ? "bg-[#FFA63B]" : "bg-white/30 group-hover:bg-white/60")} />
              <span className={"hidden text-[10px] font-semibold tracking-wider sm:block " + (active === i ? "text-white" : "text-white/50")}>{String(i + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={() => setPaused((v) => !v)} aria-label={paused ? "Resume automatic slides" : "Pause automatic slides"} className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25">
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous slide" className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25"><ArrowLeft size={19} /></button>
          <button type="button" onClick={() => goTo(active + 1)} aria-label="Next slide" className="grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25"><ArrowRight size={19} /></button>
        </div>
      </div>
      {showFilm && !filmUnavailable && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-3 md:p-8" role="dialog" aria-modal="true" aria-label="HappyWit brand introduction film" onKeyDown={(event) => { if (event.key === "Escape") { setShowFilm(false); setPaused(false); } }}>
          <button type="button" className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/60 px-5 py-2 text-sm font-bold text-white transition hover:bg-white/20" onClick={() => { setShowFilm(false); setPaused(false); }}>Close film ✕</button>
          <video autoPlay controls playsInline className="max-h-[83vh] w-full max-w-6xl rounded-xl object-contain" src={brandFilmUrl} poster={slides[3].image} onError={() => { setFilmUnavailable(true); setShowFilm(false); setPaused(false); }} />
        </div>
      )}
    </section>
  );
}
