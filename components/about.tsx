// components/about.tsx  
import React, { type JSX } from "react";
import { cn } from "@/lib/utils";
import AnimatedBeamDemo from "./animated-beam-demo";
import { FeatureShowcase } from "./feature-showcase";
import { Info } from "lucide-react";
import { Tooltip } from "./ui/tooltip-card";

interface FeatureCardProps { children: React.ReactNode; className?: string; }
interface FeatureItem {
  title: string;
  description: string;
  skeleton: React.ReactNode;
  className?: string;
}

export function About(): JSX.Element {
  const features: FeatureItem[] = [
    {
      title: "Peças e Componentes do AURA",
      description:
        "Uma visão detalhada de todos os componentes físicos utilizados no projeto: servos MG995, estrutura em PLA impressa em 3D, Arduino Uno, fontes de alimentação e mecanismos que tornam o movimento possível.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Tecnologias que impulsionam o AURA",
      description:
        "O conjunto de tecnologias que permite a tradução de voz para Libras: Next.js, reconhecimento de voz, comunicação serial, Arduino, lógica de movimento e processamento inteligente.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Demonstração Visual",
      description:
        "Um vídeo ilustrativo mostrando o funcionamento geral de uma mão robótica ao lado de uma mão humana, apenas como referência visual de movimento.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "AURA em Evolução",
      description:
        "Uma visão sobre o crescimento contínuo do projeto e suas futuras melhorias, acompanhando o avanço da acessibilidade tecnológica.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div id="about" className="relative z-20 py-16 lg:py-40 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="flex items-start gap-2 mb-4">
          <h2 className="text-[6rem] font-semibold leading-none">
            Sobre o AURA
            <Tooltip
              containerClassName="text-neutral-600 dark:text-neutral-400"
              content="Os cards abaixo são clicáveis."
            >
              <Info className="w-4 h-4 mb-8" />
            </Tooltip>
          </h2>
        </div>

        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Uma coleção visual que apresenta diferentes etapas do desenvolvimento, destacando processos, protótipos e resultados técnicos.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="w-full mt-4 flex-1">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard: React.FC<FeatureCardProps> = ({ children, className }) => {
  return <div className={cn(`p-6 sm:p-10 relative overflow-hidden flex flex-col h-full justify-start`, className)}>{children}</div>;
};

const FeatureTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <p className="text-left text-black dark:text-white font-semibold text-xl md:text-2xl">
      {children}
    </p>
  );
};

const FeatureDescription: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-md text-left my-2",
        "text-neutral-600 dark:text-neutral-300"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => (
  <div>
    <FeatureShowcase />
  </div>
);

export const SkeletonFour: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-4 text-left text-neutral-700 dark:text-neutral-300 space-y-4">
      <p>
        <strong>• Pesquisa & Planejamento:</strong> Fundamentou toda a estrutura do projeto. Incluiu relatórios, documentação técnica, estudo de Libras, viabilidade mecânica e definição dos requisitos essenciais.
      </p>

      <p>
        <strong>• Marketing Estratégico:</strong> Criou identidade visual, fotos, vídeos, banners e comunicação do projeto. Também cuidou de parcerias e da presença visual do AURA.
      </p>

      <p>
        <strong>• Programação & Engenharia:</strong> Desenvolvimento completo do site, integração do sistema de voz→texto→movimento, lógica do Arduino e montagem da mão robótica.
      </p>

      <p className="italic opacity-80">
        “Quando áreas distintas trabalham em sincronia, a tecnologia deixa de ser ferramenta e se torna impacto.”
      </p>
    </div>
  );
};

export const SkeletonThree: React.FC = () => (
  <div className="w-full mx-auto bg-transparent group h-full">
    <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
      <video
        src="images/6153453-uhd_4096_2160_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover rounded-md group-hover/image:blur-sm transition-all duration-200"
      />
    </div>
  </div>
);

export const SkeletonTwo: React.FC = () => <AnimatedBeamDemo />;
