const items = [
  "Al toke",
  "Envío 24h en Lima",
  "Pago contraentrega",
  "Garantía 7 días",
  "Yape disponible",
  "Hecho en Perú",
];

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-foreground/10 bg-primary py-6 text-primary-foreground">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {Array.from({ length: 4 }).map((_, group) => (
          <div key={group} className="flex shrink-0 items-center gap-12">
            {items.map((item, i) => (
              <div
                key={`${group}-${i}`}
                className="flex shrink-0 items-center gap-12"
              >
                <span className="text-display text-3xl sm:text-4xl">
                  {item}
                </span>
                <Star />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0 opacity-90"
      aria-hidden="true"
    >
      <path d="M12 2 L13.5 9 L20 9.5 L15 14 L17 21 L12 17 L7 21 L9 14 L4 9.5 L10.5 9 Z" />
    </svg>
  );
}
