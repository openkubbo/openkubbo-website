"use client"

import { useLanguage } from "@/lib/language-context"
import { t, type DictKey } from "@/lib/i18n"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems: { q: DictKey; a: DictKey }[] = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
]

export function FAQSection() {
  const { locale } = useLanguage()

  return (
    <section className="relative">
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-3xl px-4 py-24 md:px-6 md:py-32">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("faq.title", locale)}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border/40 bg-card/40 px-5 data-[state=open]:border-primary/20 data-[state=open]:bg-card/60 transition-colors"
            >
              <AccordionTrigger className="py-5 text-left text-sm font-semibold text-foreground hover:text-primary transition-colors hover:no-underline">
                {t(item.q, locale)}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {t(item.a, locale)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
