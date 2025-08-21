import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SelectedWorkSection } from "@/components/selected-work-section"
import { ClientsSection } from "@/components/clients-section"
import { CraftMaterialsSection } from "@/components/craft-materials-section"
import { StartProjectSection } from "@/components/start-project-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SelectedWorkSection />
      <ClientsSection />
      <CraftMaterialsSection />
      <StartProjectSection />
      <Footer />
    </main>
  )
}
