export type Locale = "pt" | "en"

export const dictionary = {
  // Navigation
  "nav.home": { pt: "Inicio", en: "Home" },
  "nav.docs": { pt: "Docs", en: "Docs" },
  "nav.roadmap": { pt: "Roadmap", en: "Roadmap" },
  "nav.github": { pt: "GitHub", en: "GitHub" },

  // Hero
  "hero.badge": { pt: "Open Source", en: "Open Source" },
  "hero.title": {
    pt: "Seu painel de comando para o GitHub.",
    en: "Your command center for GitHub.",
  },
  "hero.subtitle": {
    pt: "Conecte via OAuth, gerencie repositorios, PRs, commits, issues, CI, tags, releases e muito mais \u2014 tudo em um unico app desktop.",
    en: "Connect via OAuth, manage repos, PRs, commits, issues, CI, tags, releases and more \u2014 all in one desktop app.",
  },
  "hero.download_macos": { pt: "Baixar para macOS", en: "Download for macOS" },
  "hero.coming_soon": { pt: "Disponivel em breve", en: "Coming soon" },
  "hero.windows_soon": { pt: "Windows em breve", en: "Windows coming soon" },
  "hero.view_docs": { pt: "Ver Documentacao", en: "View Docs" },
  "hero.view_roadmap": { pt: "Ver Roadmap", en: "View Roadmap" },

  // Features
  "features.title": { pt: "O que voce pode fazer", en: "What you can do" },
  "features.subtitle": {
    pt: "Funcionalidades reais, disponiveis agora.",
    en: "Real features, available now.",
  },
  "feat.oauth.title": { pt: "GitHub OAuth Device Flow", en: "GitHub OAuth Device Flow" },
  "feat.oauth.desc": {
    pt: "Conecte sua conta GitHub de forma segura, sem tokens manuais.",
    en: "Connect your GitHub account securely, no manual tokens needed.",
  },
  "feat.repos.title": { pt: "Painel de Repositorios", en: "Repository Dashboard" },
  "feat.repos.desc": {
    pt: "Visualize e gerencie todos os seus repositorios em um so lugar.",
    en: "View and manage all your repositories in one place.",
  },
  "feat.prs.title": { pt: "Pull Requests & Issues", en: "Pull Requests & Issues" },
  "feat.prs.desc": {
    pt: "Acompanhe PRs, issues, labels e status em tempo real.",
    en: "Track PRs, issues, labels and status in real time.",
  },
  "feat.ci.title": { pt: "CI/CD & Workflows", en: "CI/CD & Workflows" },
  "feat.ci.desc": {
    pt: "Monitore pipelines, actions e status de builds.",
    en: "Monitor pipelines, actions and build statuses.",
  },
  "feat.local.title": { pt: "Acoes Locais", en: "Local Actions" },
  "feat.local.desc": {
    pt: "Clone, abra no terminal/finder, checkout e worktrees com um clique.",
    en: "Clone, open in terminal/finder, checkout and worktrees in one click.",
  },
  "feat.metrics.title": { pt: "Metricas & Insights", en: "Metrics & Insights" },
  "feat.metrics.desc": {
    pt: "Commits, contributors, releases, discussions \u2014 tudo visivel.",
    en: "Commits, contributors, releases, discussions \u2014 all visible.",
  },

  // Multi-agent
  "multiagent.badge": { pt: "Beta / Coming Soon", en: "Beta / Coming Soon" },
  "multiagent.title": { pt: "Multi-Agent", en: "Multi-Agent" },
  "multiagent.desc": {
    pt: "Sistema multi-agente em desenvolvimento. Automatize fluxos complexos com agentes que colaboram entre si.",
    en: "Multi-agent system in development. Automate complex workflows with agents that collaborate with each other.",
  },

  // FAQ
  "faq.title": { pt: "Perguntas Frequentes", en: "Frequently Asked Questions" },
  "faq.q1": { pt: "O OpenKubbo e open source?", en: "Is OpenKubbo open source?" },
  "faq.a1": {
    pt: "Sim. OpenKubbo e 100% open source.",
    en: "Yes. OpenKubbo is 100% open source.",
  },
  "faq.q2": { pt: "Posso usar no Windows?", en: "Can I use it on Windows?" },
  "faq.a2": {
    pt: "Suporte para Windows esta em desenvolvimento. Por enquanto, apenas macOS esta planejado para o primeiro release.",
    en: "Windows support is under development. For now, only macOS is planned for the first release.",
  },
  "faq.q3": { pt: "O que e o Multi-Agent?", en: "What is Multi-Agent?" },
  "faq.a3": {
    pt: "E um sistema beta que permitira a automacao de fluxos de trabalho com multiplos agentes inteligentes.",
    en: "It's a beta system that will enable workflow automation with multiple intelligent agents.",
  },
  "faq.q4": { pt: "Como me conecto ao GitHub?", en: "How do I connect to GitHub?" },
  "faq.a4": {
    pt: "Usamos OAuth Device Flow \u2014 voce autoriza de forma segura pelo navegador, sem colar tokens.",
    en: "We use OAuth Device Flow \u2014 you authorize securely via browser, no pasting tokens.",
  },

  // Footer
  "footer.oss": {
    pt: "Open source. Feito pela comunidade.",
    en: "Open source. Built by the community.",
  },

  // Docs page
  "docs.title": { pt: "Documentacao", en: "Documentation" },
  "docs.subtitle": {
    pt: "Tudo que voce precisa para comecar com o OpenKubbo.",
    en: "Everything you need to get started with OpenKubbo.",
  },
  "docs.getting_started": { pt: "Primeiros Passos", en: "Getting Started" },
  "docs.getting_started.desc": {
    pt: "Sera adicionado em breve.",
    en: "Coming soon.",
  },
  "docs.step1.title": { pt: "1. Clone o repositorio", en: "1. Clone the repository" },
  "docs.step1.cmd": { pt: "git clone https://github.com/openkubbo/openkubbo.git", en: "git clone https://github.com/openkubbo/openkubbo.git" },
  "docs.step2.title": { pt: "2. Instale as dependencias", en: "2. Install dependencies" },
  "docs.step2.cmd": { pt: "cd openkubbo && pnpm install", en: "cd openkubbo && pnpm install" },
  "docs.step3.title": { pt: "3. Inicie o app", en: "3. Start the app" },
  "docs.step3.cmd": { pt: "pnpm dev", en: "pnpm dev" },
  "docs.auth.title": { pt: "Autenticacao", en: "Authentication" },
  "docs.auth.desc": {
    pt: "O OpenKubbo usa GitHub OAuth Device Flow para autenticacao. Ao abrir o app, voce sera redirecionado para autorizar via navegador. Nenhum token manual e necessario.",
    en: "OpenKubbo uses GitHub OAuth Device Flow for authentication. When opening the app, you'll be redirected to authorize via browser. No manual tokens needed.",
  },
  "docs.repos.title": { pt: "Gerenciamento de Repositorios", en: "Repository Management" },
  "docs.repos.desc": {
    pt: "Apos conectar, voce vera todos os seus repositorios em um painel unificado. Acesse PRs, issues, commits, CI status, tags, releases, discussions e contributors.",
    en: "After connecting, you'll see all your repositories in a unified dashboard. Access PRs, issues, commits, CI status, tags, releases, discussions and contributors.",
  },
  "docs.local.title": { pt: "Acoes Locais", en: "Local Actions" },
  "docs.local.desc": {
    pt: "Clone repositorios diretamente, abra no terminal ou finder, faca checkout de branches e gerencie worktrees sem sair do app.",
    en: "Clone repos directly, open in terminal or finder, checkout branches and manage worktrees without leaving the app.",
  },
  "docs.how_it_works": { pt: "Como Funciona", en: "How It Works" },
  "docs.flow1": {
    pt: "Abra o OpenKubbo e inicie a autenticacao via Device Flow.",
    en: "Open OpenKubbo and start authentication via Device Flow.",
  },
  "docs.flow2": {
    pt: "Autorize no navegador com seu GitHub.",
    en: "Authorize in the browser with your GitHub.",
  },
  "docs.flow3": {
    pt: "Seus repositorios aparecem automaticamente no painel.",
    en: "Your repositories appear automatically in the dashboard.",
  },
  "docs.flow4": {
    pt: "Explore PRs, issues, commits, CI e mais.",
    en: "Explore PRs, issues, commits, CI and more.",
  },
  "docs.flow5": {
    pt: "Execute acoes locais: clone, checkout, worktrees.",
    en: "Execute local actions: clone, checkout, worktrees.",
  },

  // Roadmap page
  "roadmap.title": { pt: "Roadmap", en: "Roadmap" },
  "roadmap.subtitle": {
    pt: "Transparencia total. Veja o que esta disponivel, em beta e planejado.",
    en: "Full transparency. See what's available, in beta and planned.",
  },
  "status.available": { pt: "Disponivel", en: "Available" },
  "status.beta": { pt: "Beta", en: "Beta" },
  "status.planned": { pt: "Planejado", en: "Planned" },
  "roadmap.cat.core": { pt: "Core", en: "Core" },
  "roadmap.cat.advanced": { pt: "Esta vindo", en: "Is coming" },
  "roadmap.cat.platform": { pt: "Plataforma", en: "Platform" },

  // Roadmap items
  "road.oauth": { pt: "GitHub OAuth Device Flow", en: "GitHub OAuth Device Flow" },
  "road.repos": { pt: "Painel de Repositorios", en: "Repository Dashboard" },
  "road.prs": { pt: "Pull Requests & Issues", en: "Pull Requests & Issues" },
  "road.commits": { pt: "Commits & Contributors", en: "Commits & Contributors" },
  "road.ci": { pt: "CI/CD Status & Workflows", en: "CI/CD Status & Workflows" },
  "road.tags": { pt: "Tags & Releases", en: "Tags & Releases" },
  "road.discussions": { pt: "Discussions", en: "Discussions" },
  "road.local": { pt: "Acoes Locais (clone, terminal, finder)", en: "Local Actions (clone, terminal, finder)" },
  "road.worktrees": { pt: "Checkout & Worktrees", en: "Checkout & Worktrees" },
  "road.multiagent": {
    pt: "Multi-agent em desenvolvimento",
    en: "Multi-agent in development",
  },
  "road.apikeys": {
    pt: "API Keys (Codex, Claude, Gemini etc.) em desenvolvimento",
    en: "API Keys (Codex, Claude, Gemini etc.) in development",
  },
  "road.providers": {
    pt: "Integracao com outros provedores (Bitbucket, GitLab, Azure DevOps...)",
    en: "Integration with other providers (Bitbucket, GitLab, Azure DevOps...)",
  },
  "road.macos": { pt: "Download macOS", en: "macOS Download" },
  "road.windows": { pt: "Suporte Windows", en: "Windows Support" },
} as const

export type DictKey = keyof typeof dictionary

export function t(key: DictKey, locale: Locale): string {
  return dictionary[key]?.[locale] ?? key
}
