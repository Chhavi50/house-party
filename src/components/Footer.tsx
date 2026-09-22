import { eventConfig } from "@/config/event";

export function Footer() {
  return (
    <footer className="section-pad border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl text-white">OUR FIRST HOUSE PARTY</p>
          <p className="mt-2 font-brush text-xl text-neon">Good people. Bad decisions.</p>
          <p className="mt-4 max-w-md text-sm text-muted">
            {eventConfig.location} · {eventConfig.date} {eventConfig.day} ·{" "}
            {eventConfig.time}
          </p>
        </div>
        <div className="text-sm text-muted">
          <p>Exact location shared after confirmation.</p>
          <p className="mt-2">
            © {eventConfig.year} {eventConfig.eventName}
          </p>
        </div>
      </div>
    </footer>
  );
}
