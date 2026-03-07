"use client"

import { useLanguage } from "@/lib/language-context"
import { t, type DictKey } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"
import { FeatureFlowDemos, LocalActionsRibbon } from "@/components/product-story-demo"
import {
  KeyRound,
  LayoutDashboard,
  GitPullRequest,
  Activity,
  Terminal,
  BarChart3,
  Bot,
} from "lucide-react"

const features: {
  titleKey: DictKey
  descKey: DictKey
  icon: React.ElementType
  span?: string
}[] = [
  {
    titleKey: "feat.oauth.title",
    descKey: "feat.oauth.desc",
    icon: KeyRound,
    span: "sm:col-span-2",
  },
  {
    titleKey: "feat.repos.title",
    descKey: "feat.repos.desc",
    icon: LayoutDashboard,
  },
  {
    titleKey: "feat.prs.title",
    descKey: "feat.prs.desc",
    icon: GitPullRequest,
  },
  {
    titleKey: "feat.ci.title",
    descKey: "feat.ci.desc",
    icon: Activity,
    span: "sm:col-span-2",
  },
  {
    titleKey: "feat.local.title",
    descKey: "feat.local.desc",
    icon: Terminal,
    span: "sm:col-span-2",
  },
  {
    titleKey: "feat.metrics.title",
    descKey: "feat.metrics.desc",
    icon: BarChart3,
  },
]

export function FeaturesSection() {
  const { locale } = useLanguage()

  return (
    <section className="relative">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-32">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            {locale === "pt" ? "Funcionalidades" : "Features"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t("features.title", locale)}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            {t("features.subtitle", locale)}
          </p>
        </div>

        <div className="mb-4">
          <FeatureFlowDemos locale={locale} />
        </div>

        <div className="mb-8">
          <LocalActionsRibbon locale={locale} />
        </div>

        {/* Bento grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.titleKey}
                className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card ${feat.span ?? ""}`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t(feat.titleKey, locale)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(feat.descKey, locale)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Multi-agent highlight card */}
        <div className="relative mt-4 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card/80 to-card/60 p-8 md:p-10">
          {/* Corner glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {t("multiagent.title", locale)}
                  </h3>
                  <Badge
                    variant="outline"
                    className="border-primary/30 bg-primary/5 text-xs text-primary"
                  >
                    {t("multiagent.badge", locale)}
                  </Badge>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {t("multiagent.desc", locale)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
