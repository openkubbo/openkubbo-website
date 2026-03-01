import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"

const FeaturesSection = dynamic(() =>
  import("@/components/features-section").then((module) => module.FeaturesSection)
)
const FAQSection = dynamic(() =>
  import("@/components/faq-section").then((module) => module.FAQSection)
)
const CTASection = dynamic(() =>
  import("@/components/cta-section").then((module) => module.CTASection)
)

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
