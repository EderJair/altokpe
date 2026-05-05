import { SectionContainer } from "@/components/section-container";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionContainer
        as="section"
        className="flex flex-1 flex-col items-center justify-center text-center"
      >
        <span className="rounded-full border border-foreground/15 px-3 py-1 text-xs font-medium tracking-wide uppercase text-foreground/70">
          Pronto en Perú
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          {siteConfig.name}
        </h1>

        <p className="mt-4 max-w-xl text-lg text-foreground/70 sm:text-xl">
          Lo que necesitas, <span className="font-semibold">al toke</span>.
        </p>

        <p className="mt-8 max-w-md text-sm text-foreground/50">
          Estamos preparando algo bueno. Web en construcción.
        </p>
      </SectionContainer>
    </main>
  );
}
