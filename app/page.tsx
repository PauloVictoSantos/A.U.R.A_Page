"use client"
import { Header } from "@/components/header"
import Hero from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Galeria } from "@/components/galeria"
import { HeroScrollDemo } from "@/components/patrocinador"
import {Footer} from "@/components/Footer"
import { AppleCardsCarouselDemo } from "@/components/lideres"
import Metodologia from "@/components/metodologia"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <About />
      <Metodologia />
      <AppleCardsCarouselDemo />
      <Features />
      <Galeria/>
      <HeroScrollDemo/>
      <Footer />
    </main>
  )
}
