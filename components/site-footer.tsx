"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/i18n"
import { Github } from "lucide-react"

export function SiteFooter() {
  const { locale } = useLanguage()

  return (
    <footer className="relative border-t border-border/40">
      {/* Glow line at top */}
      <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-mono text-sm font-bold text-foreground"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-black">
                K
              </span>
              OpenKubbo
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.oss", locale)}
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {locale === "pt" ? "Produto" : "Product"}
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.docs", locale)}
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.roadmap", locale)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {locale === "pt" ? "Comunidade" : "Community"}
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://github.com/openkubbo/openkubbo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/openkubbo/openkubbo/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {locale === "pt" ? "Reportar Bug" : "Report Bug"}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/openkubbo/openkubbo/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {locale === "pt" ? "Discussoes" : "Discussions"}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / License */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {locale === "pt" ? "Legal" : "Legal"}
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://github.com/openkubbo/openkubbo/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {locale === "pt" ? "Licenca MIT" : "MIT License"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} OpenKubbo.{" "}
            {locale === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
          </p>
          <p className="text-xs text-muted-foreground">
            {locale === "pt"
              ? "Feito com amor pela comunidade open source."
              : "Made with love by the open source community."}
          </p>
        </div>
      </div>
    </footer>
  )
}
