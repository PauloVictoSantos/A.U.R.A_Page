"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: "estrutura1",
    title: "Estrutura Mecânica",
    description:
      "Visualização completa da estrutura do braço robótico, incluindo montagem, suporte, articulações e detalhes de construção.",
    image: "/images/Captura_de_tela_2025-11-23_153959-removebg-preview.png",
  },
  {
    id: "protoboard",
    title: "Protoboard e Circuito",
    description:
      "Protoboard responsável pela organização das conexões, distribuição dos sinais e integração entre servos, sensores e a placa controladora.",
    image: "/images/protoboard.png",
  },
  {
    id: "fonte15a",
    title: "Fonte Chaveada 15A",
    description:
      "Fonte chaveada de 15A que fornece energia suficiente para todos os servomotores MG995, garantindo torque estável sem queda de tensão.",
    image: "/images/fonte-chaveada-colmeia-15-a-removebg-preview.png",
  },
  {
    id: "arduino",
    title: "Arduino Mega 2560",
    description:
      "A placa controladora principal do sistema. O Arduino Mega 2560 oferece mais portas, maior capacidade e estabilidade para coordenar todos os movimentos do braço robótico.",
    image: "/images/mega2560.png",
  },
  {
    id: "servos",
    title: "Servomotores MG995",
    description:
      "Os servos MG995 garantem torque elevado e resposta rápida, essenciais para movimentos precisos e expressivos da Libras.",
    image: "/images/servos.png",
  },
];

export function FeatureShowcase() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const expanded = features.find((f) => f.id === expandedFeature);

  return (
    <div
      className="
        relative w-full min-h-screen
        grid grid-cols-1
        lg:grid-cols-[360px_1fr]
        gap-6
        px-4 md:px-10
        py-6 md:py-12
      "
    >
      {/* SIDEBAR - LISTA DE FEATURES */}
      <div
        className="
          flex flex-col gap-6
          bg-zinc-900/40 backdrop-blur-xl
          p-4 md:p-6
          rounded-2xl border border-zinc-800/60
          h-auto lg:h-[90vh]
          overflow-y-auto
        "
      >
        {features.map((feature, index) => {
          const isExpanded = expandedFeature === feature.id;

          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              className={`
                bg-zinc-900/70 backdrop-blur-xl
                border rounded-3xl overflow-hidden
                transition-all duration-300 shadow-lg
                ${isExpanded ? "border-zinc-600" : "border-zinc-800"}
              `}
            >
              <Button
                onClick={() =>
                  setExpandedFeature(isExpanded ? null : feature.id)
                }
                className="
                  w-full justify-start gap-4
                  bg-transparent hover:bg-zinc-800/40
                  text-white border-none rounded-none
                  px-6 py-6 h-auto
                "
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Plus className="h-5 w-5" />
                </motion.div>

                <span className="text-lg font-semibold tracking-tight">
                  {feature.title}
                </span>
              </Button>

              {/* TEXTO EXPANDIDO */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 pt-2 text-sm text-zinc-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* PAINEL DE VISUALIZAÇÃO */}
      <div
        className="
          relative w-full
          bg-zinc-950/40 backdrop-blur-xl
          border border-zinc-800/60
          rounded-2xl
          flex items-center justify-center
          overflow-hidden
          min-h-[280px]
          md:min-h-[460px]
          lg:h-[90vh]
          p-4 md:p-6
        "
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={expanded?.id || "default"}
            src={
              expanded?.image ||
              "/images/Captura_de_tela_2025-11-23_153959-removebg-preview.png"
            }
            alt={expanded?.title || "Pré-visualização"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 180 }}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
