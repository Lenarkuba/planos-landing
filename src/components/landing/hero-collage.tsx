import Image from "next/image";
import { CalendarDays, CheckCircle2, FileCheck2, Users } from "lucide-react";
import { StatusChip } from "./ui";
import { DOODLES } from "@/lib/graphics";

/**
 * Decorative "floating UI cards" collage behind the hero copy.
 * Mirrors the illustrated hero of the reference design: fake product cards with
 * gentle float animation plus low-opacity doodles. Purely presentational.
 */
export function HeroCollage() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden select-none lg:block"
    >
      {/* Mini calendar — top left */}
      <div className="lp-float absolute left-[3%] top-[12%] w-56 rounded-2xl border border-paper-border bg-paper-card p-4 shadow-card-lg" style={{ animationDelay: "0s" }}>
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-ink">Marzec — dni pracy</span>
          <CalendarDays className="h-3.5 w-3.5 text-ink-faint" />
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[0.6rem] text-ink-faint">
          {["P", "W", "Ś", "C", "P", "S", "N"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
          {Array.from({ length: 21 }).map((_, i) => {
            const busy = [2, 3, 4, 9, 10, 16, 17, 18].includes(i);
            return (
              <span
                key={i}
                className={
                  busy
                    ? "rounded-md bg-brand-soft py-0.5 font-semibold text-brand-ink"
                    : "py-0.5 text-ink"
                }
              >
                {i + 1}
              </span>
            );
          })}
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="rounded-md border-l-2 border-tag-green-tx bg-tag-green-bg px-2 py-1 text-[0.65rem] font-medium text-tag-green-tx">
            Serial „Nocna zmiana” · 12 osób · potwierdzone
          </div>
          <div className="rounded-md border-l-2 border-tag-blue-tx bg-tag-blue-bg px-2 py-1 text-[0.65rem] font-medium text-tag-blue-tx">
            Event Galeria · 8 hostess · 2 oczekujące
          </div>
        </div>
      </div>

      {/* Client selection — top right */}
      <div className="lp-float absolute right-[3%] top-[10%] w-60 rounded-2xl border border-paper-border bg-paper-card p-4 shadow-card-lg" style={{ animationDelay: "1.2s" }}>
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-ink">Wybór klienta</span>
          <StatusChip tone="green">na żywo</StatusChip>
        </div>
        <p className="mt-1 text-[0.65rem] text-ink-faint">Link bez logowania · 27 zgłoszeń</p>
        <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-paper-muted">
          <span className="w-[62%] bg-tag-green-tx" />
          <span className="w-[24%] bg-brand-bright" />
          <span className="w-[14%] bg-tag-red-tx/70" />
        </div>
        <div className="mt-2 flex justify-between text-[0.65rem] font-medium">
          <span className="text-tag-green-tx">18 TAK</span>
          <span className="text-brand-ink">6 MOŻE</span>
          <span className="text-tag-red-tx">3 NIE</span>
        </div>
        <div className="mt-3 flex -space-x-1.5">
          {["AK", "MW", "PZ", "JN", "IB"].map((i) => (
            <span
              key={i}
              className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-paper-card bg-brand-soft text-[0.55rem] font-bold text-brand-ink"
            >
              {i}
            </span>
          ))}
          <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-paper-card bg-paper-muted text-[0.55rem] font-bold text-ink-muted">
            +13
          </span>
        </div>
      </div>

      {/* Attendance — bottom left */}
      <div className="lp-float absolute bottom-[14%] left-[6%] w-52 rounded-2xl border border-paper-border bg-paper-card p-4 shadow-card-lg" style={{ animationDelay: "0.6s" }}>
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tag-green-bg">
            <CheckCircle2 className="h-4 w-4 text-tag-green-tx" />
          </span>
          <div className="text-xs">
            <p className="font-semibold text-ink">Obecność na miejscu</p>
            <p className="text-ink-faint">42 z 45 · 3 spóźnienia</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper-muted">
          <span className="block h-full w-[93%] rounded-full bg-tag-green-tx" />
        </div>
        <p className="mt-2 text-[0.65rem] text-ink-faint">
          Lista otwarta z linku przez koordynatora
        </p>
      </div>

      {/* Settlement — bottom right */}
      <div className="lp-float absolute bottom-[12%] right-[5%] w-56 rounded-2xl border border-paper-border bg-paper-card p-4 shadow-card-lg" style={{ animationDelay: "1.8s" }}>
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-ink">Rozliczenie miesiąca</span>
          <FileCheck2 className="h-3.5 w-3.5 text-ink-faint" />
        </div>
        <p className="mt-1 font-display text-2xl font-semibold text-ink">12 450 PLN</p>
        <p className="text-[0.65rem] text-tag-green-tx">↑ 96 dni pracy · 3 projekty</p>
        <div className="mt-3 space-y-1 text-[0.65rem]">
          <div className="flex justify-between text-ink-muted">
            <span>Pliki dla księgowości</span>
            <StatusChip tone="green">gotowe</StatusChip>
          </div>
          <div className="flex justify-between text-ink-muted">
            <span>Eksport ZUS</span>
            <StatusChip tone="blue">2 do zgłoszenia</StatusChip>
          </div>
        </div>
      </div>

      {/* Small pills */}
      <div className="lp-float absolute left-[24%] top-[6%] flex items-center gap-2 rounded-full border border-paper-border bg-paper-card px-3 py-1.5 shadow-card" style={{ animationDelay: "2.4s" }}>
        <Users className="h-3.5 w-3.5 text-brand-ink" />
        <span className="text-[0.65rem] font-medium text-ink">Zgłoszenie kompletne · zdjęcia + wymiary</span>
      </div>
      <div className="lp-float absolute right-[26%] bottom-[1%] flex items-center gap-2 rounded-full border border-paper-border bg-paper-card px-3 py-1.5 shadow-card" style={{ animationDelay: "3s" }}>
        <CheckCircle2 className="h-3.5 w-3.5 text-tag-green-tx" />
        <span className="text-[0.65rem] font-medium text-ink">Potwierdzone jednym kliknięciem</span>
      </div>

      {/* Doodles (generated graphics, low opacity) */}
      {DOODLES.map((d) => (
        <Image
          key={d.src}
          src={d.src}
          alt=""
          width={d.size}
          height={d.size}
          className="absolute opacity-70"
          style={{ left: d.left, right: d.right, top: d.top, bottom: d.bottom, transform: `rotate(${d.rotate}deg)` }}
        />
      ))}
    </div>
  );
}
