"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MonitorSmartphone } from "lucide-react"
import { toast } from "sonner"

export function HeroSection() {
  const { locale } = useLanguage()

  function handleDownload() {
    toast(t("hero.coming_soon", locale), {
      description:
        locale === "pt"
          ? "O download para macOS estara disponivel em breve."
          : "The macOS download will be available soon.",
      style: {
        background: "oklch(0.42 0.15 160)",
        border: "1px solid oklch(0.52 0.15 160)",
        color: "oklch(0.98 0 0)",
      },
      descriptionClassName: "!text-white/90",
    })
  }

  return (
    <section className="noise-bg relative overflow-hidden">
      {/* Radial glow behind hero */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/8 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-[300px] w-[300px] translate-x-1/3 rounded-full bg-primary/5 blur-[100px]" />

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(oklch(0.30_0.005_260/0.4)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,black_20%,transparent_100%)]" />

      <div className="relative mx-auto max-w-5xl px-4 pb-24 pt-32 md:px-6 md:pb-32 md:pt-40 lg:pt-48">
        <div className="flex flex-col items-center text-center">
          {/* Animated badge */}
          <Badge
            variant="outline"
            className="mb-8 animate-[float_6s_ease-in-out_infinite] border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {t("hero.badge", locale)}
          </Badge>

          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {locale === "pt" ? (
              <>
                Uma forma simples de gerenciar
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-chart-2 bg-clip-text text-transparent">
                  seus repositorios e acelerar entregas.
                </span>
              </>
            ) : (
              <>
                A simple way to manage
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-chart-2 bg-clip-text text-transparent">
                  your repositories and accelerate delivery.
                </span>
              </>
            )}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("hero.subtitle", locale)}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              onClick={handleDownload}
              className="group relative gap-2 overflow-hidden rounded-xl bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <img src="/apple-line.svg" alt="" aria-hidden="true" className="h-5 w-5" />
              {t("hero.download_macos", locale)}
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 rounded-xl border-border/60 bg-secondary/30 px-8 text-foreground backdrop-blur-sm hover:border-border hover:bg-secondary/60"
            >
              <Link href="/docs">
                {t("hero.view_docs", locale)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
            <MonitorSmartphone className="h-3.5 w-3.5" />
            <span>{t("hero.windows_soon", locale)}</span>
          </div>
        </div>

        {/* Terminal preview */}
        <div className="mx-auto mt-20 max-w-3xl">
          <div className="group relative">
            {/* Outer glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute -inset-1 rounded-2xl bg-primary/5 blur-xl transition-opacity duration-500 group-hover:bg-primary/10" />

            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-background/80">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border/40 bg-secondary/30 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
                  <div className="h-2.5 w-2.5 rounded-full bg-chart-4/50" />
                  <div className="h-2.5 w-2.5 rounded-full bg-primary/50" />
                </div>
                <div className="flex-1 text-center">
                  <span className="font-mono text-[11px] text-muted-foreground/60">
                    OpenKubbo &mdash; Terminal
                  </span>
                </div>
                <div className="w-[52px]" />
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-[13px] leading-7">
                <div className="text-muted-foreground">
                  <span className="text-primary">{"~"}</span>
                  <span className="text-muted-foreground/50">{" $ "}</span>
                  <span className="text-foreground">openkubbo connect</span>
                </div>
                <div className="mt-1 text-muted-foreground/70">
                  {locale === "pt"
                    ? "Iniciando GitHub OAuth Device Flow..."
                    : "Starting GitHub OAuth Device Flow..."}
                </div>
                <div className="text-muted-foreground/70">
                  {locale === "pt"
                    ? "Abra o navegador e insira o codigo:"
                    : "Open your browser and enter the code:"}{" "}
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 font-bold text-primary">
                    ABCD-1234
                  </span>
                </div>
                <div className="text-primary">
                  {">"}{" "}
                  {locale === "pt"
                    ? "Conectado com sucesso!"
                    : "Successfully connected!"}
                </div>

                <div className="mt-4 text-muted-foreground">
                  <span className="text-primary">{"~"}</span>
                  <span className="text-muted-foreground/50">{" $ "}</span>
                  <span className="text-foreground">openkubbo repos</span>
                </div>
                <div className="mt-1 text-muted-foreground/70">
                  {locale === "pt"
                    ? "Carregando repositorios..."
                    : "Loading repositories..."}
                </div>

                {/* Repos table-like output */}
                <div className="mt-2 flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-x-3 text-foreground/90">
                    <span>openkubbo/openkubbo</span>
                    <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[11px] text-primary">
                      12 PRs
                    </span>
                    <span className="rounded bg-chart-4/10 px-1.5 py-0.5 text-[11px] text-chart-4">
                      3 issues
                    </span>
                    <span className="rounded bg-chart-2/10 px-1.5 py-0.5 text-[11px] text-chart-2">
                      CI: passing
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 text-foreground/90">
                    <span>openkubbo/docs</span>
                    <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[11px] text-primary">
                      2 PRs
                    </span>
                    <span className="rounded bg-chart-4/10 px-1.5 py-0.5 text-[11px] text-chart-4">
                      1 issue
                    </span>
                    <span className="rounded bg-chart-2/10 px-1.5 py-0.5 text-[11px] text-chart-2">
                      CI: passing
                    </span>
                  </div>
                </div>

                <div className="mt-3 animate-pulse text-primary/60">
                  {"_"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
