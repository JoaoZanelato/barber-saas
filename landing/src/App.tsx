import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { FeaturesB2B } from '@/components/landing/features-b2b'
import { FeaturesB2C } from '@/components/landing/features-b2c'
import { Pricing } from '@/components/landing/pricing'
import { CTAFinal } from '@/components/landing/cta-final'
import { Footer } from '@/components/landing/footer'

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <FeaturesB2B />
      <FeaturesB2C />
      <Pricing />
      <CTAFinal />
      <Footer />
    </main>
  )
}
