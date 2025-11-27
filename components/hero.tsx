"use client"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { people } from "@/data/AnimatedTooltip"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={heroRef}
      className="
        min-h-screen w-full flex items-center px-8 md:px-20 lg:px-32 relative top-14
        overflow-hidden
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-0 right-10 w-[500px] h-[500px]
            bg-cyan-400/20 blur-[140px]
            dark:bg-cyan-700/10
          "
        />
      </div>

      <div className="grid md:grid-cols-2 items-center w-full gap-12">
        {/* LEFT - TEXT */}
        <div className="space-y-6">
          <Badge
            variant="secondary"
            className="
              bg-blue-500 text-white dark:bg-blue-600
              px-2 py-1
            "
          >
            A Evolução Definitiva em Robótica Inteligente
          </Badge>

          <h1
            className="
              text-5xl md:text-[70px] font-extrabold leading-tight
              text-black dark:text-white tracking-tight
            "
          >
            ROBÓTICA<br />ACESSIBILIDADE
          </h1>

          <p className="text-[17px] text-gray-600 dark:text-gray-300 max-w-lg">
            Apresentamos um braço robótico projetado para redefinir padrões.
            Inteligência avançada, precisão extrema e desempenho confiável — desenvolvido
            para impulsionar indústrias, laboratórios e projetos de alto impacto.
          </p>

          <div className="flex flex-row items-center justify-center relative -left-34 w-full pt-10">
            <AnimatedTooltip items={people} />
          </div>
        </div>

        {/* RIGHT - IMAGES + CARDS */}
        <div className="relative flex justify-end w-full h-full">
          <img
            src="/images/mao.png"
            alt="Robotic Hand"
            className="
    hidden          /* NÃO aparece no celular */
    md:block        /* APARECE só do tamanho md pra cima */
    w-[650px] lg:w-[750px] xl:w-[850px]
    max-w-none object-contain drop-shadow-2xl
    relative left-48 top-30
  "
          />


          <div
            className="
    hidden md:flex
    absolute top-20 right-72
    bg-white/80 dark:bg-white/10
    backdrop-blur-md p-4 rounded-2xl shadow-lg gap-3 items-center border
    dark:border-white/10
  "
          >

            <p className="text-sm font-semibold text-black dark:text-white">
              5000+<br />
              <span className="text-gray-500 dark:text-gray-300 font-normal">
                alcance
              </span>
            </p>
          </div>

          <div
            className="
    hidden md:block
    absolute bottom-10 right-28
    bg-white/80 dark:bg-white/10
    p-4 rounded-2xl shadow-lg border backdrop-blur-md
    dark:border-white/10
  "
          >

            <p className="text-sm font-semibold text-black dark:text-white pt-2">
              200+<br />
              <span className="text-gray-500 dark:text-gray-300 font-normal">
                Seguidores
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
