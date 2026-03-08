"use client"

import { startTransition, useEffect, useState } from "react"
import { Check, Circle, FolderGit2, GitBranch, GitPullRequest, Terminal, Workflow } from "lucide-react"

import { useLanguage } from "@/lib/language-context"

type RepoStatus = "Synced" | "Reviewing" | "Deploying"

type Repo = {
  name: string
  branch: string
  prs: number
  issues: number
  ci: RepoStatus
}

const repos: Repo[] = [
  { name: "openkubbo", branch: "main", prs: 4, issues: 12, ci: "Synced" },
  { name: "openkubbo-web", branch: "feature/demo", prs: 2, issues: 5, ci: "Reviewing" },
  { name: "kubbo-cli", branch: "release/v1", prs: 1, issues: 3, ci: "Deploying" },
]

const heatmap = [2, 5, 3, 6, 4, 7, 3, 1, 4, 6, 5, 2, 4, 7, 5, 6, 3, 2, 5, 7, 6, 4, 3, 5]

const baseTasks = [
  { id: 1, titlePt: "Revisar PR do dashboard", titleEn: "Review dashboard PR", done: false },
  { id: 2, titlePt: "Criar worktree da hotfix", titleEn: "Create hotfix worktree", done: false },
  { id: 3, titlePt: "Validar CI do release", titleEn: "Validate release CI", done: true },
]

export function ProductDemo() {
  const { locale } = useLanguage()
  const [selectedRepo, setSelectedRepo] = useState(0)
  const [taskPhase, setTaskPhase] = useState(0)

  useEffect(() => {
    const repoInterval = window.setInterval(() => {
      startTransition(() => {
        setSelectedRepo((current) => (current + 1) % repos.length)
      })
    }, 2600)

    const taskInterval = window.setInterval(() => {
      startTransition(() => {
        setTaskPhase((current) => (current + 1) % 4)
      })
    }, 1800)

    return () => {
      window.clearInterval(repoInterval)
      window.clearInterval(taskInterval)
    }
  }, [])

  const currentRepo = repos[selectedRepo]
  const tasks = buildTasks(taskPhase)
  const taskInputValue =
    taskPhase === 0
      ? ""
      : locale === "pt"
        ? "Organizar backlog do repo"
        : "Organize repository backlog"

  return (
    <div className="relative mt-16 w-full max-w-6xl">
      <div className="pointer-events-none absolute inset-x-[18%] top-8 h-48 rounded-full bg-primary/12 blur-3xl" />
      <div className="grid gap-5 lg:grid-cols-[1.55fr_0.95fr]">
        <section className="demo-shell demo-repo-stage">
          <div className="demo-topbar">
            <div className="flex items-center gap-2">
              <span className="demo-dot bg-red-400/80" />
              <span className="demo-dot bg-yellow-400/80" />
              <span className="demo-dot bg-green-400/80" />
            </div>
            <div className="demo-topbar-pill">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>{locale === "pt" ? "Painel de repositorios" : "Repository dashboard"}</span>
            </div>
          </div>

          <div className="demo-grid">
            <div className="demo-sidebar">
              <div className="demo-sidebar-header">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary/80">
                    {locale === "pt" ? "Repos ativos" : "Active repos"}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {locale === "pt" ? "Tudo em um painel compacto" : "Everything in one compact panel"}
                  </h3>
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                  {locale === "pt" ? "Live sync" : "Live sync"}
                </span>
              </div>

              <div className="demo-heatmap">
                {heatmap.map((value, index) => (
                  <span
                    key={index}
                    className="demo-heatmap-cell"
                    style={{
                      opacity: 0.22 + value * 0.09,
                      animationDelay: `${index * 60}ms`,
                    }}
                  />
                ))}
              </div>

              <div className="space-y-3">
                {repos.map((repo, index) => {
                  const active = index === selectedRepo
                  return (
                    <article
                      key={repo.name}
                      className={`demo-repo-card ${active ? "is-active" : ""}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <FolderGit2 className="h-4 w-4" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{repo.name}</p>
                              <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                                <GitBranch className="h-3 w-3" />
                                {repo.branch}
                              </p>
                            </div>
                          </div>
                        </div>
                        <span className="rounded-full border border-border/60 px-2 py-1 text-[11px] text-muted-foreground">
                          {repo.ci}
                        </span>
                      </div>
                      <div className="mt-4 flex gap-2 text-xs text-muted-foreground">
                        <span className="demo-chip">{repo.prs} PRs</span>
                        <span className="demo-chip">{repo.issues} issues</span>
                        <span className="demo-chip">{locale === "pt" ? "local ready" : "local ready"}</span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="demo-details">
              <div className="demo-details-panel">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-primary/70">
                      {locale === "pt" ? "Detalhes do repo" : "Repository details"}
                    </p>
                    <h4 className="mt-2 text-2xl font-semibold text-foreground">{currentRepo.name}</h4>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {locale === "pt"
                        ? "Selecione um repositorio e abra PRs, CI, branches e acoes locais sem sair do fluxo."
                        : "Select a repository and open PRs, CI, branches and local actions without leaving the flow."}
                    </p>
                  </div>
                  <div className="demo-status-pulse">
                    <span className="demo-status-dot" />
                    {currentRepo.ci}
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="demo-stat-card">
                    <div className="flex items-center justify-between">
                      <span className="demo-label">PRs</span>
                      <GitPullRequest className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mt-3 text-3xl font-semibold text-foreground">{currentRepo.prs}</p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/6">
                      <div
                        key={currentRepo.name + "-prs"}
                        className="demo-progress-fill"
                        style={{ width: `${Math.min(100, currentRepo.prs * 18 + 20)}%` }}
                      />
                    </div>
                  </div>

                  <div className="demo-stat-card">
                    <div className="flex items-center justify-between">
                      <span className="demo-label">CI</span>
                      <Workflow className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mt-3 text-lg font-semibold text-foreground">
                      {locale === "pt" ? "Checks e deploy" : "Checks and deploy"}
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="demo-chip is-success">lint</span>
                      <span className="demo-chip is-success">tests</span>
                      <span className={`demo-chip ${currentRepo.ci === "Deploying" ? "is-live" : ""}`}>
                        deploy
                      </span>
                    </div>
                  </div>

                  <div className="demo-stat-card md:col-span-2">
                    <div className="flex items-center justify-between">
                      <span className="demo-label">
                        {locale === "pt" ? "Acoes locais" : "Local actions"}
                      </span>
                      <Terminal className="h-4 w-4 text-primary" />
                    </div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      <div className="demo-action-card">
                        <span className="text-sm font-medium text-foreground">
                          {locale === "pt" ? "Abrir terminal" : "Open terminal"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {locale === "pt" ? "checkout rapido" : "quick checkout"}
                        </span>
                      </div>
                      <div className="demo-action-card">
                        <span className="text-sm font-medium text-foreground">Worktree</span>
                        <span className="text-xs text-muted-foreground">
                          {locale === "pt" ? "ambiente paralelo" : "parallel environment"}
                        </span>
                      </div>
                      <div className="demo-action-card is-terminal">
                        <span className="font-mono text-[11px] text-primary/90">
                          git checkout {currentRepo.branch}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="demo-shell demo-task-stage">
          <div className="demo-topbar">
            <div className="demo-topbar-pill">
              <Check className="h-3.5 w-3.5" />
              <span>{locale === "pt" ? "Kubbo Task" : "Kubbo Task"}</span>
            </div>
            <span className="rounded-full border border-border/60 px-2.5 py-1 text-[11px] text-muted-foreground">
              {locale === "pt" ? "fluxo rapido" : "fast flow"}
            </span>
          </div>

          <div className="rounded-[28px] border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.28em] text-primary/80">
                {locale === "pt" ? "Task panel" : "Task panel"}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {locale === "pt" ? "Adicionar, mover, concluir" : "Add, move, complete"}
              </h3>
            </div>

            <div className="demo-task-input">
              <span className={`truncate text-sm ${taskInputValue ? "text-foreground" : "text-muted-foreground"}`}>
                {taskInputValue || (locale === "pt" ? "Nova tarefa simples..." : "New simple task...")}
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/6 text-foreground">
                +
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {tasks.map((task, index) => (
                <article
                  key={task.id}
                  className={`demo-task-card ${task.done ? "is-done" : ""} ${task.id === 4 ? "is-new" : ""}`}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border ${task.done ? "border-primary/60 bg-primary/15 text-primary" : "border-white/15 text-muted-foreground"}`}>
                    {task.done ? <Check className="h-3.5 w-3.5" /> : <Circle className="h-3 w-3" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-medium ${task.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                      {locale === "pt" ? task.titlePt : task.titleEn}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {task.done
                        ? locale === "pt"
                          ? "concluida agora"
                          : "completed just now"
                        : locale === "pt"
                          ? "arraste para reorganizar"
                          : "drag to reorder"}
                    </p>
                  </div>
                  <span className="h-8 w-1.5 rounded-full bg-white/8" />
                </article>
              ))}
            </div>

            <div className={`demo-toast ${taskPhase === 3 ? "is-visible" : ""}`}>
              <span>{locale === "pt" ? "Tarefa removida. Desfazer?" : "Task removed. Undo?"}</span>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] text-primary">
                {locale === "pt" ? "undo" : "undo"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function buildTasks(taskPhase: number) {
  if (taskPhase === 0) {
    return baseTasks
  }

  if (taskPhase === 1) {
    return [
      { id: 4, titlePt: "Organizar backlog do repo", titleEn: "Organize repository backlog", done: false },
      ...baseTasks,
    ]
  }

  if (taskPhase === 2) {
    return [
      { id: 2, titlePt: "Criar worktree da hotfix", titleEn: "Create hotfix worktree", done: false },
      { id: 4, titlePt: "Organizar backlog do repo", titleEn: "Organize repository backlog", done: false },
      { id: 1, titlePt: "Revisar PR do dashboard", titleEn: "Review dashboard PR", done: true },
      { id: 3, titlePt: "Validar CI do release", titleEn: "Validate release CI", done: true },
    ]
  }

  return [
    { id: 2, titlePt: "Criar worktree da hotfix", titleEn: "Create hotfix worktree", done: false },
    { id: 4, titlePt: "Organizar backlog do repo", titleEn: "Organize repository backlog", done: true },
    { id: 3, titlePt: "Validar CI do release", titleEn: "Validate release CI", done: true },
  ]
}
