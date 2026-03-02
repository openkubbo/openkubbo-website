"use client"

import { useLanguage } from "@/lib/language-context"
import { t, type DictKey } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, FlaskConical } from "lucide-react"

type Status = "available" | "beta" | "planned"

const roadmapItems: {
  labelKey: DictKey
  status: Status
  category: DictKey
}[] = [
  // Core
  { labelKey: "road.oauth", status: "available", category: "roadmap.cat.core" },
  { labelKey: "road.repos", status: "available", category: "roadmap.cat.core" },
  { labelKey: "road.prs", status: "available", category: "roadmap.cat.core" },
  { labelKey: "road.commits", status: "available", category: "roadmap.cat.core" },
  { labelKey: "road.ci", status: "available", category: "roadmap.cat.core" },
  { labelKey: "road.tags", status: "available", category: "roadmap.cat.core" },
  { labelKey: "road.discussions", status: "available", category: "roadmap.cat.core" },
  { labelKey: "road.local", status: "available", category: "roadmap.cat.core" },
  { labelKey: "road.worktrees", status: "available", category: "roadmap.cat.core" },
  // Advanced
  { labelKey: "road.multiagent", status: "beta", category: "roadmap.cat.advanced" },
  { labelKey: "road.apikeys", status: "planned", category: "roadmap.cat.advanced" },
  { labelKey: "road.providers", status: "planned", category: "roadmap.cat.advanced" },
  // Platform
  { labelKey: "road.macos", status: "planned", category: "roadmap.cat.platform" },
  { labelKey: "road.windows", status: "planned", category: "roadmap.cat.platform" },
]

const statusConfig: Record<
  Status,
  {
    labelKey: DictKey
    icon: React.ElementType
    color: string
    badgeClass: string
    dotClass: string
  }
> = {
  available: {
    labelKey: "status.available",
    icon: CheckCircle2,
    color: "text-primary",
    badgeClass: "border-primary/20 bg-primary/10 text-primary",
    dotClass: "bg-primary",
  },
  beta: {
    labelKey: "status.beta",
    icon: FlaskConical,
    color: "text-chart-4",
    badgeClass: "border-chart-4/20 bg-chart-4/10 text-chart-4",
    dotClass: "bg-chart-4",
  },
  planned: {
    labelKey: "status.planned",
    icon: Clock,
    color: "text-muted-foreground",
    badgeClass: "border-border/60 bg-secondary/40 text-muted-foreground",
    dotClass: "bg-muted-foreground",
  },
}

const categories: DictKey[] = [
  "roadmap.cat.core",
  "roadmap.cat.advanced",
  "roadmap.cat.platform",
]

export default function RoadmapPage() {
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
            {t("nav.roadmap", locale)}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("roadmap.title", locale)}
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            {t("roadmap.subtitle", locale)}
          </p>
        </div>

        {/* Legend */}
        <div className="mb-10 flex flex-wrap gap-5">
          {(["available", "beta", "planned"] as Status[]).map((status) => {
            const config = statusConfig[status]
            return (
              <div key={status} className="flex items-center gap-2 text-sm">
                <span
                  className={`h-2 w-2 rounded-full ${config.dotClass}`}
                />
                <span className="text-muted-foreground">
                  {t(config.labelKey, locale)}
                </span>
              </div>
            )
          })}
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {categories.map((catKey) => {
            const items = roadmapItems.filter(
              (item) => item.category === catKey
            )
            return (
              <section key={catKey}>
                <h2 className="mb-4 text-lg font-bold text-foreground">
                  {t(catKey, locale)}
                </h2>
                <div className="flex flex-col gap-2">
                  {items.map((item) => {
                    const config = statusConfig[item.status]
                    const Icon = config.icon
                    return (
                      <div
                        key={item.labelKey}
                        className="group flex items-center justify-between rounded-xl border border-border/40 bg-card/60 px-5 py-4 transition-all duration-200 hover:border-border/60 hover:bg-card/80"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className={`h-4 w-4 shrink-0 ${config.color}`}
                          />
                          <span className="text-sm font-medium text-foreground">
                            {t(item.labelKey, locale)}
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-[11px] ${config.badgeClass}`}
                        >
                          {t(config.labelKey, locale)}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
