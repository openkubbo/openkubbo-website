import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "OpenKubbo - Your Command Center for GitHub",
  description:
    "Open source, free desktop app to manage GitHub repositories, PRs, commits, issues, CI/CD and more.",
  openGraph: {
    title: "OpenKubbo - Your Command Center for GitHub",
    description:
      "Open source, free desktop app to manage GitHub repositories, PRs, commits, issues, CI/CD and more.",
    type: "website",
    url: "https://openkubbo.dev",
    siteName: "OpenKubbo",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenKubbo - Your Command Center for GitHub",
    description:
      "Open source, free desktop app to manage GitHub repositories, PRs, commits, issues, CI/CD and more.",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <div className="flex min-h-svh flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster position="bottom-center" />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
