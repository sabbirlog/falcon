import HeroSection from "@/components/Hero"
import ProductGrid from "@/components/ProductGrid"

export default function HomePage() {
  return (
      <main className="min-h-screen flex flex-col flex-1">
        <HeroSection />
        <ProductGrid />
      </main>
  )
}
