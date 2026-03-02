"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { t } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Globe, Github, Star } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const { locale, toggleLocale } = useLanguage()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [starCount, setStarCount] = useState(1)

  useEffect(() => {
    let frame: number | null = null

    const updateScrolledState = () => {
      frame = null
      const nextScrolled = window.scrollY > 20
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled))
    }

    const onScroll = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(updateScrolledState)
    }

    updateScrolledState()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    async function loadStars() {
      try {
        const response = await fetch("https://api.github.com/repos/openkubbo/openkubbo", {
          headers: {
            Accept: "application/vnd.github+json",
          },
          signal: controller.signal,
        })

        if (!response.ok) return

        const data: unknown = await response.json()
        if (
          typeof data === "object" &&
          data !== null &&
          "stargazers_count" in data &&
          typeof data.stargazers_count === "number"
        ) {
          setStarCount(data.stargazers_count)
        }
      } catch {
        // Keep fallback value when request fails.
      }
    }

    loadStars()

    return () => controller.abort()
  }, [])

  const links = [
    { href: "/", label: t("nav.home", locale) },
    { href: "/docs", label: t("nav.docs", locale) },
    { href: "/roadmap", label: t("nav.roadmap", locale) },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex w-full max-w-4xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-border/60 bg-background/80 shadow-lg shadow-background/50 backdrop-blur-xl"
            : "border-border/30 bg-background/50 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm font-bold tracking-tight text-foreground"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <Image
              src="/OpenKubbo.svg"
              alt="OpenKubbo logo"
              width={16}
              height={16}
              className="h-4 w-4"
              priority
            />
            <span className="absolute -inset-px -z-10 rounded-lg bg-primary/30 blur-sm" />
          </span>
          <span className="hidden sm:inline">OpenKubbo</span>
        </Link>

        {/* Desktop nav — centered */}
        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {pathname === link.href && (
                <span className="absolute inset-0 rounded-lg border border-primary/30 bg-primary/15" />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-1.5">
          <a
            href="https://github.com/openkubbo/openkubbo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-border/50 bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground sm:flex"
          >
            <Star className="h-3 w-3 fill-current text-chart-4" />
            <span>{starCount.toLocaleString(locale === "pt" ? "pt-BR" : "en-US")}</span>
            <span>
              {locale === "pt"
                ? starCount === 1
                  ? "Estrela no GitHub"
                  : "Estrelas no GitHub"
                : starCount === 1
                  ? "Star on GitHub"
                  : "Stars on GitHub"}
            </span>
          </a>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            className="h-8 w-8 rounded-lg p-0 text-muted-foreground hover:text-foreground"
            aria-label={locale === "en" ? "Mudar para Portugues" : "Switch to English"}
          >
            <Globe className="h-3.5 w-3.5" />
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 rounded-lg p-0"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-border bg-background">
              <SheetTitle className="text-foreground">Menu</SheetTitle>
              <nav
                className="mt-8 flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "border border-primary/30 bg-primary/15 text-primary"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://github.com/openkubbo/openkubbo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
