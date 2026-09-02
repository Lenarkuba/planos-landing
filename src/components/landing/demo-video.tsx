import {
  VIDEO_APPLICATION_FORM_ID,
  VIDEO_DIRECTOR_PANEL_ID,
} from "@/lib/site-config";
import { LiteYouTube } from "./lite-youtube";

const VIDEOS = [
  {
    id: VIDEO_APPLICATION_FORM_ID,
    title: "Dynamiczny formularz zgłoszenia",
    caption:
      "Sam ustalasz, jakie dane są wymagane na casting. Zgłoszenia przychodzą kompletne — bez dopytywania o brakujące zdjęcia.",
  },
  {
    id: VIDEO_DIRECTOR_PANEL_ID,
    title: "Panel selekcji dla reżysera",
    caption:
      "Reżyser przegląda kandydatów, notuje i wybiera pod jednym linkiem — a Ty widzisz jego decyzje na żywo.",
  },
];

export function DemoVideo() {
  return (
    <section
      id="demo"
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-16 md:py-24"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
          Demo
        </p>
        <h2
          id="demo-heading"
          className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          Zobacz PlanOS w działaniu
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Krótkie nagrania prosto z systemu — tak wygląda codzienna praca
          agencji w PlanOS.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {VIDEOS.map((video) => (
            <figure key={video.id}>
              {/* Aspect ratio reserved up-front to avoid layout shift */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-[0_20px_50px_-25px_rgba(15,35,63,0.35)]">
                <LiteYouTube videoId={video.id} title={video.title} />
              </div>
              <figcaption className="mt-4">
                <p className="font-semibold text-slate-900">{video.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{video.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
