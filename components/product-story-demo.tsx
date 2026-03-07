"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import {
  Activity,
  ArrowUpRight,
  ChevronRight,
  Folder,
  FolderTree,
  GitBranch,
  GitPullRequest,
  Globe,
  Pin,
  Plus,
  RefreshCw,
  Settings,
  Terminal,
  Trash2,
  Undo2,
  X,
} from "lucide-react"

function useDemoActive() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsActive(true)
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, isActive }
}

type DemoShellProps = {
  eyebrow: string
  title: string
  description: string
  className?: string
  children: ReactNode
}

function DemoShell({ eyebrow, title, description, className = "", children }: DemoShellProps) {
  const { ref, isActive } = useDemoActive()

  return (
    <div
      ref={ref}
      data-active={isActive}
      className={`demo-shell group relative overflow-hidden rounded-[28px] border border-border/50 bg-[linear-gradient(180deg,oklch(0.16_0.008_250/.95),oklch(0.12_0.008_250/.98))] p-4 shadow-[0_24px_80px_rgba(0,0,0,.22)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.72_0.19_160/.16),transparent_40%),radial-gradient(circle_at_bottom_right,oklch(0.6_0.12_185/.12),transparent_35%)] opacity-70" />
      <div className="relative mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/75">
            {eyebrow}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
          Live loop
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

const repoContributionLevels = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 2,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 4, 3,
]

function contributionCellStyle(level: number, index: number) {
  const palette = [
    "rgba(255,255,255,0.035)",
    "rgba(43,216,127,0.34)",
    "rgba(43,216,127,0.52)",
    "rgba(43,216,127,0.72)",
    "rgba(43,216,127,0.92)",
  ]

  return {
    animationDelay: `${index * 28}ms`,
    backgroundColor: palette[level],
  }
}

function RepoHeroPanel() {
  return (
    <div className="demo-window repo-demo-panel mx-auto max-w-5xl rounded-[32px] border border-white/12 bg-[linear-gradient(180deg,rgba(18,20,24,.98),rgba(10,11,15,.99))] p-4 shadow-[0_40px_120px_rgba(0,0,0,.35)]">
      <div className="grid gap-4 md:grid-cols-[320px_1px_minmax(0,1fr)]">
        <div>
          <div className="mb-3 flex items-center justify-between px-2">
            <h3 className="text-[20px] font-semibold text-white">Repository</h3>
            <div className="flex items-center gap-2">
              {[Settings, RefreshCw, Pin, X].map((Icon, index) => (
                <div
                  key={index}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-white/75 ${
                    index === 2 ? "border-primary/30 bg-primary text-black" : "border-white/10 bg-white/[0.06]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-3">
            <div className="mb-3 flex items-center justify-between text-xs font-medium text-white/70">
              <span>529 contributions</span>
              <span>last 12 months</span>
            </div>
            <div className="mb-3 grid grid-cols-18 gap-1">
              {repoContributionLevels.map((level, index) => (
                <div
                  key={index}
                  className="repo-demo-heat aspect-square rounded-[3px] bg-white/[0.03]"
                  style={contributionCellStyle(level, index)}
                />
              ))}
            </div>
            <div className="flex items-center justify-end gap-2 pr-1 text-xs text-white/55">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((step) => (
                <span
                  key={step}
                  className="h-3.5 w-3.5 rounded-[4px]"
                  style={contributionCellStyle(step, step)}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 rounded-[20px] border border-white/8 bg-white/[0.03] p-1.5">
            {["All", "Pinned", "Work"].map((tab, index) => (
              <div
                key={tab}
                className={`rounded-2xl px-3 py-3 text-center text-sm font-medium ${
                  index === 0 ? "border border-primary/30 bg-primary/25 text-white" : "text-white/70"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="mt-3 space-y-2">
            {[
              { name: "openkubbo/openkubbo-website", meta: "0 Issues  0 PRs  0 Stars", active: true, time: "16 min. ago" },
              { name: "tarikvillalobos/openkubbo-site", meta: "0 Issues  1 PRs  0 Stars", active: false, time: "3 hr. ago" },
              { name: "openkubbo/openkubbo", meta: "0 Issues  0 PRs  1 Stars", active: false, time: "5 hr. ago" },
            ].map((repo, index) => (
              <div
                key={repo.name}
                className={`repo-demo-row rounded-[22px] border p-4 ${
                  repo.active ? "border-primary/20 bg-primary/18" : "border-white/8 bg-white/[0.03]"
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-[15px] font-semibold text-white">{repo.name}</p>
                        <p className="mt-1 text-xs text-white/60">{repo.meta}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-white/35" />
                        <div className="rounded-xl border border-primary/30 bg-primary/14 p-2 text-primary">
                          <Pin className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-white/55">
                      <span className="rounded-full border border-white/8 px-2 py-1">Open source</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-white/55">
                      <span className="inline-flex items-center gap-1">
                        <GitBranch className="h-3.5 w-3.5" />
                        main
                      </span>
                      <span>{repo.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/8 px-2 pt-3 text-sm text-white/65">
            <span>31 repositories</span>
            <span>GitHub</span>
          </div>
        </div>

        <div className="repo-demo-divider hidden w-px bg-white/8 md:block" />

        <div className="repo-demo-detail overflow-hidden rounded-[24px] border border-white/6 bg-black/10 p-4">
          <div className="repo-demo-block flex items-center justify-between border-b border-white/8 pb-4">
            <div className="inline-flex items-center gap-3 text-[17px] font-semibold text-white">
              <FolderTree className="h-5 w-5 text-white/70" />
              openkubbo/openkubbo-website
            </div>
            <ChevronRight className="h-4 w-4 text-white/45" />
          </div>

          <div className="mt-2 space-y-1">
            {[
              ["Open in GitHub", Globe],
              ["Open in Finder", Folder],
              ["Open in Terminal", Terminal],
              ["Open Kubbo Agent", Activity],
            ].map(([label, Icon], index) => {
              const EntryIcon = Icon as typeof Globe
              return (
                <div key={label} className="repo-demo-block flex items-center justify-between border-b border-white/8 py-3" style={{ animationDelay: `${900 + index * 80}ms` }}>
                  <div className={`inline-flex items-center gap-3 text-[15px] font-medium ${label === "Open Kubbo Agent" ? "text-primary" : "text-white"}`}>
                    <EntryIcon className="h-4 w-4" />
                    {label}
                  </div>
                  <ChevronRight className="h-4 w-4 text-white/40" />
                </div>
              )
            })}
          </div>

          <div className="repo-demo-block border-b border-white/8 py-4">
            <div className="flex items-center gap-2 text-[15px] font-semibold text-white">
              <GitBranch className="h-4 w-4 text-white/70" />
              main
              <span className="font-medium text-white/55">Up to date</span>
            </div>
            <p className="mt-2 text-sm text-white/50">Upstream origin/main · Fetched 1 min. ago</p>
            <p className="mt-1 text-sm text-white/50">Current local branch: main</p>
          </div>

          <div className="repo-demo-block flex items-center justify-between border-b border-white/8 py-3">
            <div className="inline-flex items-center gap-3 text-[15px] font-semibold text-white">
              <ArrowUpRight className="h-4 w-4 text-white/70" />
              Switch Worktree
            </div>
            <ChevronRight className="h-4 w-4 text-white/40" />
          </div>

          <div className="mt-2 space-y-1">
            {[
              ["Pull Requests", "0"],
              ["CI Runs", "0"],
              ["Issues", "0"],
              ["Open Commits", "0"],
              ["Branches", "1"],
              ["Tags", "0"],
              ["Releases", "0"],
              ["Discussions", "0"],
              ["Contributors", "0"],
            ].map(([label, value], index) => (
              <div key={label} className="repo-demo-block flex items-center justify-between border-b border-white/8 py-3 last:border-b-0" style={{ animationDelay: `${1400 + index * 70}ms` }}>
                <span className="text-[15px] font-medium text-white">{label}</span>
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-2 text-xs font-semibold text-white/80">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroProductDemo({ locale }: { locale: "pt" | "en" }) {
  return (
    <div className="mt-16 w-full max-w-6xl">
      <RepoHeroPanel />
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
        <span className="rounded-full border border-border/60 bg-card/40 px-3 py-1">
          {locale === "pt" ? "Fluxo automatico em 6s" : "Automatic 6s product loop"}
        </span>
        <span className="rounded-full border border-border/60 bg-card/40 px-3 py-1">
          {locale === "pt" ? "Repos, CI e contexto local" : "Repos, CI and local context"}
        </span>
        <span className="rounded-full border border-border/60 bg-card/40 px-3 py-1">
          {locale === "pt" ? "Sem motion decorativo" : "No decorative motion"}
        </span>
      </div>
    </div>
  )
}

export function FeatureFlowDemos({ locale }: { locale: "pt" | "en" }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <DemoShell
        eyebrow={locale === "pt" ? "Repositorios" : "Repositories"}
        title={locale === "pt" ? "Selecao compacta, expansao lateral" : "Compact selection, lateral expansion"}
        description={
          locale === "pt"
            ? "O card selecionado puxa o detalhe para dentro da tela, depois PRs, CI, metricas e acoes entram em cascade."
            : "The selected card pulls a detail workspace into view, then PRs, CI, metrics, and actions cascade in."
        }
      >
        <div className="rounded-[24px] border border-white/6 bg-black/20 p-3">
          <div className="grid gap-3 md:grid-cols-[152px_1px_minmax(0,1fr)]">
            <div>
              <div className="mb-2 rounded-[18px] border border-white/8 bg-white/[0.03] p-2">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div
                      key={index}
                      className="repo-demo-heat aspect-square rounded-[3px] bg-primary/12"
                      style={{ animationDelay: `${index * 50}ms` }}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                {["openkubbo/openkubbo", "openkubbo/openkubbo-website", "tarik/open-tasks"].map((item, index) => (
                  <div key={item} className={`repo-demo-row rounded-2xl border px-3 py-3 text-sm ${index === 1 ? "border-primary/20 bg-primary/18 text-white" : "border-white/6 bg-white/[0.03] text-white/65"}`} style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="truncate font-medium">{item}</div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-white/45">
                      <span>main</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="repo-demo-divider hidden w-px bg-white/8 md:block" />
            <div className="repo-demo-detail rounded-[20px] border border-white/6 bg-white/[0.03] p-3">
              <div className="repo-demo-block grid gap-2">
                {["Open in Terminal", "Switch Worktree", "Pull Requests", "CI Runs"].map((label, index) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/[0.03] p-3 text-sm text-white" style={{ animationDelay: `${400 + index * 80}ms` }}>
                    <span>{label}</span>
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-1.5 text-[10px] text-white/70">
                      {index < 2 ? ">" : "0"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DemoShell>

      <DemoShell
        eyebrow="PR / CI"
        title={locale === "pt" ? "Checks vivos, nao estaticos" : "Checks that move, not screenshots"}
        description={
          locale === "pt"
            ? "O status sai de pending para success, com pulse curto nos checks ainda em andamento e resolucao objetiva."
            : "Status moves from pending to success, with a short pulse on active checks and an objective resolve state."
        }
      >
        <div className="rounded-[24px] border border-white/6 bg-black/20 p-3">
          <div className="space-y-2">
            {[
              { name: "Build", delay: "0ms" },
              { name: "Unit tests", delay: "220ms" },
              { name: "Preview deploy", delay: "440ms" },
            ].map((item) => (
              <div key={item.name} className="rounded-[20px] border border-white/6 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="mt-1 text-xs text-white/45">github-actions</p>
                  </div>
                  <div className="ci-demo-status" style={{ animationDelay: item.delay }}>
                    <span className="ci-demo-pending rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-300">
                      pending
                    </span>
                    <span className="ci-demo-success rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-primary">
                      success
                    </span>
                  </div>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
                  <div className="ci-demo-bar h-full rounded-full bg-primary" style={{ animationDelay: item.delay }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </DemoShell>

      <DemoShell
        eyebrow="Tasks"
        title={locale === "pt" ? "Rapidez utilitaria com undo" : "Utility speed with undo"}
        description={
          locale === "pt"
            ? "Nova task entra rapido, reorder reposiciona o contexto, completa com compressao leve e traz undo no rodape."
            : "A new task enters fast, reorder repositions context, completion compresses lightly, and undo rises from the bottom."
        }
      >
        <div className="rounded-[24px] border border-white/6 bg-black/20 p-3">
          <div className="mb-3 flex items-center justify-between px-1">
            <h4 className="text-[18px] font-semibold text-white">Kubbo Task</h4>
            <div className="flex items-center gap-2">
              {[Settings, Pin, Plus, X].map((Icon, index) => (
                <div
                  key={index}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                    index === 1 ? "border-primary/30 bg-primary text-black" : "border-white/10 bg-white/[0.06] text-white/75"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/50">
            <span>{locale === "pt" ? "New simple task..." : "New simple task..."}</span>
            <Plus className="h-4 w-4 text-white/25" />
          </div>
          <div className="space-y-2">
            {[
              { label: locale === "pt" ? "Publicar landing com demos" : "Ship landing with demos", kind: "insert" },
              { label: locale === "pt" ? "Reordenar backlog de CI" : "Reorder CI backlog", kind: "drag" },
              { label: locale === "pt" ? "Fechar task de docs" : "Close docs task", kind: "done" },
            ].map((item) => (
              <div key={item.label} className={`task-demo-row task-demo-${item.kind} flex items-center gap-3 rounded-[18px] border border-white/6 bg-white/[0.03] px-3 py-3`}>
                <div className="pt-1 text-white/25">
                  <FolderTree className="h-3.5 w-3.5" />
                </div>
                <div className={`flex h-5 w-5 items-center justify-center rounded-full border ${item.kind === "done" ? "border-primary bg-primary/15 text-primary" : "border-white/20 text-transparent"}`}>
                  ✓
                </div>
                <span className="flex-1 text-sm font-semibold text-white/80">{item.label}</span>
                <div className="flex flex-col gap-1.5">
                  <div className="rounded-[10px] border border-white/10 bg-white/[0.04] p-1.5 text-white/60">
                    <GitPullRequest className="h-3 w-3" />
                  </div>
                  <div className="rounded-[10px] border border-white/10 bg-white/[0.04] p-1.5 text-white/60">
                    <Trash2 className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 h-24" />
          <div className="border-t border-white/8 pt-3">
            <div className="flex items-center justify-between text-sm font-semibold text-white/70">
              <span>1 pending</span>
              <span>50% completed</span>
            </div>
          </div>
          <div className="task-demo-toast mt-3 inline-flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.05] px-3 py-2 text-xs text-white/60">
            <Undo2 className="h-3.5 w-3.5 text-primary" />
            {locale === "pt" ? "Undo disponivel por alguns segundos" : "Undo available for a few seconds"}
          </div>
        </div>
      </DemoShell>
    </div>
  )
}

export function LocalActionsRibbon({ locale }: { locale: "pt" | "en" }) {
  return (
    <div className="grid gap-3 rounded-[28px] border border-primary/20 bg-gradient-to-br from-primary/8 via-card/80 to-card/70 p-4 md:grid-cols-4">
      {[
        {
          icon: Terminal,
          title: locale === "pt" ? "Open in Terminal" : "Open in Terminal",
          text: locale === "pt" ? "Terminal sobe do rodape no mockup." : "Terminal rises from the bottom in the mockup.",
        },
        {
          icon: GitBranch,
          title: locale === "pt" ? "Checkout branch" : "Checkout branch",
          text: locale === "pt" ? "Badge troca com transicao curta." : "Badge swaps with a short label transition.",
        },
        {
          icon: FolderTree,
          title: locale === "pt" ? "Create worktree" : "Create worktree",
          text: locale === "pt" ? "O card duplica para abrir contexto paralelo." : "The card duplicates to open a parallel context.",
        },
        {
          icon: Activity,
          title: locale === "pt" ? "Live status" : "Live status",
          text: locale === "pt" ? "CI pendente pulsa so quando importa." : "Pending CI pulses only when it matters.",
        },
      ].map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={item.title}
            className="rounded-[22px] border border-white/8 bg-black/10 p-4 backdrop-blur-sm"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        )
      })}
    </div>
  )
}
