"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Info } from "lucide-react"
import { Tooltip } from "./ui/tooltip-card"

const features = [
  {
    id: 1,
    title: "Inclusão",
    shortDescription: "Tecnologia criada para derrubar barreiras de comunicação",
    fullContent: {
      paragraphs: [
        "A metodologia do A.U.R.A foi estruturada para garantir que a tecnologia tivesse impacto direto na vida das pessoas. O projeto nasceu da compreensão de que Libras não é apenas um conjunto de gestos, mas uma língua completa, com gramática própria e profunda importância cultural para a comunidade surda. Por isso, a primeira etapa envolveu estudos detalhados sobre parâmetros essenciais da Libras — configuração de mão, movimento, orientação e ponto de articulação — assegurando que cada gesto reproduzido mantivesse fidelidade ao sinal original.",
        "Além da pesquisa teórica, a metodologia priorizou escolhas de design baseadas em acessibilidade e baixo custo, possibilitando que o sistema pudesse ser replicado em ambientes educacionais e instituições públicas. O uso de hardware amplamente disponível, impressão 3D e códigos Open Source reforça o compromisso com democratização tecnológica. A validação com membros da comunidade surda foi essencial para calibrar os sinais, avaliar clareza visual e garantir relevância social.",
        "Assim, o primeiro pilar revela que a acessibilidade não foi um objetivo secundário — ela guiou todas as decisões técnicas, de engenharia e de usabilidade.",
      ],
      testimonial:
        "A acessibilidade não é um recurso extra — é a base que define cada decisão do projeto.",
      company: "Camila Nogueira, Especialista em Acessibilidade e Inclusão Digital",
    },
    illustration: (
      <div className="relative w-full h-64 flex items-center justify-center">
        <img
          src="images/promessa-de-mindinho-unscreen.gif"
          alt="Inclusão através da tecnologia"
          className="w-full h-full object-contain opacity-30"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Arquitetura",
    shortDescription: "Integração precisa entre software, eletrônica e movimento",
    fullContent: {
      paragraphs: [
        "A metodologia do A.U.R.A foi estruturada para garantir que a tecnologia tivesse impacto direto na vida das pessoas. O projeto nasceu da compreensão de que Libras não é apenas um conjunto de gestos, mas uma língua completa, com gramática própria e profunda importância cultural para a comunidade surda. Por isso, a primeira etapa envolveu estudos detalhados sobre parâmetros essenciais da Libras — configuração de mão, movimento, orientação e ponto de articulação — assegurando que cada gesto reproduzido mantivesse fidelidade ao sinal original.",
        "Além da pesquisa teórica, a metodologia priorizou escolhas de design baseadas em acessibilidade e baixo custo, possibilitando que o sistema pudesse ser replicado em ambientes educacionais e instituições públicas. O uso de hardware amplamente disponível, impressão 3D e códigos Open Source reforça o compromisso com democratização tecnológica. A validação com membros da comunidade surda foi essencial para calibrar os sinais, avaliar clareza visual e garantir relevância social.",
        "Assim, o primeiro pilar revela que a acessibilidade não foi um objetivo secundário — ela guiou todas as decisões técnicas, de engenharia e de usabilidade.",
      ],
      testimonial:
        "Quando software, eletrônica e mecânica trabalham em harmonia, a tecnologia deixa de ser máquina e se torna ponte.",
      company: "Dr. Renato Alves, Engenheiro de Sistemas Robóticos",
    },
    illustration: (
      <div className="relative w-full h-64 flex items-center justify-center">
        <img
          src="images/chave-de-maos-unscreen.gif"
          alt="Engenharia integrada"
          className="w-full h-full object-contain opacity-30"
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Construído para evoluir",
    shortDescription: "Um protótipo funcional pronto para o futuro",
    fullContent: {
      paragraphs: [
        "Desde o início, o A.U.R.A foi idealizado como uma plataforma em constante evolução. O protótipo atual demonstra o fluxo completo da tradução — voz → texto → comando → movimento — validando o conceito e a viabilidade técnica do sistema. No entanto, sua arquitetura foi planejada para permitir crescimento contínuo. A estrutura modular da mão robótica possibilita testar diferentes configurações, aumentar o número de sinais ou adicionar novos graus de liberdade para movimentos mais complexos.",
        "No software, a lógica baseada em IDs permite adicionar novos gestos com facilidade, ampliando o vocabulário de Libras. Em versões futuras, o sistema pode incluir sensores de feedback, servos digitais mais precisos, reconhecimento de linguagem natural (NLP) e integração com redes neurais para tradução em tempo real. O objetivo é que o A.U.R.A evolua até se tornar uma solução completa, capaz de interpretar frases inteiras, expressões faciais e até variações regionais de Libras.",
        "O terceiro pilar representa o potencial transformador do projeto: um protótipo funcional que já entrega resultados claros, mas que nasce com visão de longo prazo, preparado para crescer, se adaptar e impactar cada vez mais pessoas.",
      ],
      testimonial:
        "Um protótipo cresce, mas uma plataforma evolui — e o A.U.R.A nasceu preparado para o futuro",
      company: "Marina Salles, Pesquisadora em Inovação Tecnológica",
    },
    illustration: (
      <div className="relative w-full h-64 flex items-center justify-center">
        <img
          src="images/designer-de-web-unscreen (1).gif"
          alt="Protótipo evolutivo"
          className="w-full h-full object-contain opacity-30"
        />
      </div>
    ),
  },
]


export default function Metodologia() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  return (
    <div className="min-h-screen" id="Metodologia" >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="flex items-start gap-2 mb-4">
          <h2
            className="
      text-4xl           /* celular */
      sm:text-5xl        /* >640px */
      md:text-6xl        /* >768px */
      lg:text-7xl        /* >1024px */
      xl:text-8xl        /* >1280px */
      2xl:text-[6rem]    /* telas muito grandes */
      font-semibold leading-none
    "
          >
            Metodologia de Desenvolvimento
            <Tooltip
              containerClassName="text-neutral-600 dark:text-neutral-400"
              content="Os cards abaixo são clicáveis."
            >
              <Info className="w-4 h-4 mb-8" />
            </Tooltip>
          </h2>
        </div>



        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Uma apresentação clara das etapas metodológicas do AURA — pesquisa, planejamento, engenharia e validação — mostrando como cada fase contribuiu para a construção do projeto.
        </p>
      </div>
      {/* Header Section */}
      <div className="container mx-auto py-16 px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20"></div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-y-2 gap-x-0">
          {features.map((feature) => (
            <div key={feature.id} className="mx-6">
              {" "}
              {selectedFeature !== feature.id && (
                <motion.div
                  layoutId={`feature-${feature.id}`}
                  className="relative bg-[#1a1a1a]/50 hover:bg-[#1f1f1f]/60 p-8 cursor-pointer group transition-all duration-300 h-full border border-[rgba(255,255,255,0.03)] rounded-4xl max-w-sm mx-auto"
                  onClick={() => setSelectedFeature(feature.id)}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    duration: 1.2,
                  }}
                >
                  <button className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-[#404040] flex items-center justify-center transition-colors">
                    <Plus className="w-4 h-4 text-[#8b8b8b] group-hover:text-[#cccccc]" />
                  </button>

                  <motion.div layoutId={`illustration-${feature.id}`}>{feature.illustration}</motion.div>

                  <div className="mt-6">
                    <motion.h3
                      layoutId={`title-${feature.id}`}
                      className="text-xl leading-tight h-14 flex items-center text-balance font-medium"
                    >
                      {feature.title}
                    </motion.h3>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-sm z-40"
              onClick={() => setSelectedFeature(null)}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pb-0 mt-5 pt-20">
              <motion.div
                layoutId={`feature-${selectedFeature}`}
                className="bg-[#1a1a1a] rounded-t-2xl p-12   max-w-3xl w-full h-full border-t border-[#2a2a2a] relative overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  duration: 1.2,
                }}
              >
                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full border border-[#404040] flex items-center justify-center hover:border-[#555555] transition-colors"
                >
                  <X className="w-4 h-4 text-[#8b8b8b]" />
                </motion.button>

                {features.find((f) => f.id === selectedFeature) && (
                  <>

                    <div className="mb-8">
                      <motion.h2
                        layoutId={`title-${selectedFeature}`}
                        className="text-4xl lg:text-5xl tracking-tight font-semibold leading-tight"
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          damping: 20,
                          duration: 1.2,
                        }}
                      >
                        {features.find((f) => f.id === selectedFeature)?.title}
                      </motion.h2>
                    </div>

                    {/* Additional content that appears only in modal */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="space-y-8 text-left max-w-2xl"
                    >
                      {features
                        .find((f) => f.id === selectedFeature)
                        ?.fullContent.paragraphs.map((paragraph, index) => (
                          <p key={index} className="text-[#8b8b8b] text-lg leading-relaxed text-pretty">
                            {paragraph}
                          </p>
                        ))}

                      {/* Testimonial */}
                      <div className="text-center space-y-6 py-8">
                        <blockquote className="text-xl text-white font-medium leading-relaxed text-balance">
                          "{features.find((f) => f.id === selectedFeature)?.fullContent.testimonial}"
                        </blockquote>
                        <div className="flex justify-center">
                          <div className="text-[#666666] font-medium text-lg">
                            {features.find((f) => f.id === selectedFeature)?.fullContent.company}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}


