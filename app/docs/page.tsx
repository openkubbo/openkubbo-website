"use client"

import { useLanguage } from "@/lib/language-context"
import { t, type DictKey } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"
import { KeyRound, LayoutDashboard, Terminal, Copy, Check } from "lucide-react"
import { useState } from "react"

const steps: { titleKey: DictKey; cmdKey: DictKey }[] = [
  { titleKey: "docs.step1.title", cmdKey: "docs.step1.cmd" },
  { titleKey: "docs.step2.title", cmdKey: "docs.step2.cmd" },
  { titleKey: "docs.step3.title", cmdKey: "docs.step3.cmd" },
]

const sections: {
  titleKey: DictKey
  descKey: DictKey
  icon: React.ElementType
}[] = [
  { titleKey: "docs.auth.title", descKey: "docs.auth.desc", icon: KeyRound },
  {
    titleKey: "docs.repos.title",
    descKey: "docs.repos.desc",
    icon: LayoutDashboard,
  },
  { titleKey: "docs.local.title", descKey: "docs.local.desc", icon: Terminal },
]

const flowKeys: DictKey[] = [
  "docs.flow1",
  "docs.flow2",
  "docs.flow3",
  "docs.flow4",
  "docs.flow5",
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label="Copy command"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-primary" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  )
}

export default function DocsPage() {
  const { locale } = useLanguage()

  return (
    <div className="noise-bg relative">
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-4 pt-32 pb-20 md:px-6 md:pt-40 md:pb-28">
        {/* Header */}
        <div className="mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
          >
            {t("nav.docs", locale)}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("docs.title", locale)}
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            {t("docs.subtitle", locale)}
          </p>
        </div>

        {/* Getting Started */}
        <section className="mb-20">
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            {t("docs.getting_started", locale)}
          </h2>
          <p className="mb-8 text-sm text-muted-foreground">
            {t("docs.getting_started.desc", locale)}
          </p>

          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <div
                key={step.titleKey}
                className="overflow-hidden rounded-2xl border border-border/40 bg-card/60"
              >
                <div className="border-b border-border/30 bg-secondary/20 px-5 py-3">
                  <h3 className="text-sm font-semibold text-foreground">
                    {t(step.titleKey, locale)}
                  </h3>
                </div>
                <div className="relative px-5 py-4">
                  <code className="block pr-10 font-mono text-sm text-primary">
                    <span className="text-muted-foreground/50 select-none">
                      ${" "}
                    </span>
                    {t(step.cmdKey, locale)}
                  </code>
                  <CopyButton text={t(step.cmdKey, locale)} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            {t("docs.how_it_works", locale)}
          </h2>
          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div className="absolute left-4 top-5 bottom-5 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            {flowKeys.map((key, i) => (
              <div key={key} className="relative flex items-start gap-5 py-3">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background font-mono text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm text-foreground/90">
                  {t(key, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Sections */}
        <section>
          <div className="flex flex-col gap-4">
            {sections.map((sec) => {
              const Icon = sec.icon
              return (
                <div
                  key={sec.titleKey}
                  className="group rounded-2xl border border-border/40 bg-card/60 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-card/80"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {t(sec.titleKey, locale)}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(sec.descKey, locale)}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
