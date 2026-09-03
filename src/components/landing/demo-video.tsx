import {
  VIDEO_APPLICATION_FORM_ID,
  VIDEO_DIRECTOR_PANEL_ID,
} from "@/lib/site-config";
import { LiteYouTube } from "./lite-youtube";
import { Section, SectionHeader } from "./ui";

const VIDEOS = [
  {
    id: VIDEO_APPLICATION_FORM_ID,
    title: "Formularz zgłoszenia pod projekt",
    caption:
      "Sam ustalasz, jakie dane są wymagane na casting lub nabór. Zgłoszenia przychodzą kompletne, bez dopytywania o brakujące zdjęcia.",
  },
  {
    id: VIDEO_DIRECTOR_PANEL_ID,
    title: "Panel wyboru dla klienta",
    caption:
      "Reżyser lub brand manager przegląda kandydatów, notuje i wybiera pod jednym linkiem. Ty widzisz decyzje na żywo.",
  },
];

export function DemoVideo() {
  return (
    <Section id="demo" tone="paper">
      <SectionHeader
        eyebrow="Demo"
        title="Dwa nagrania z systemu: nabór i wybór klienta"
        description="Tak biuro agencji zbiera zgłoszenia i oddaje wybór reżyserowi albo brand managerowi."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {VIDEOS.map((video) => (
          <figure key={video.id}>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-paper-border bg-ink shadow-card-lg">
              <LiteYouTube videoId={video.id} title={video.title} />
            </div>
            <figcaption className="mt-4">
              <p className="font-display text-lg font-medium text-ink">{video.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{video.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
