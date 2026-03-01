"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"

export function CTASection() {
  const { locale } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-10 text-center md:p-16">
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/8 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/5 blur-[80px]" />

          <div className="relative">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {locale === "pt"
                ? "Pronto para simplificar seu GitHub?"
                : "Ready to simplify your GitHub?"}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
              {locale === "pt"
                ? "Junte-se a comunidade open source. Contribua, use e ajude a construir o futuro do gerenciamento de repositorios."
                : "Join the open source community. Contribute, use and help build the future of repository management."}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                asChild
                className="gap-2 rounded-xl bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                <a
                  href="https://github.com/openkubbo/openkubbo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  {locale === "pt" ? "Ver no GitHub" : "View on GitHub"}
                </a>
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
          </div>
        </div>
      </div>
    </section>
  )
}
