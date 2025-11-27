"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Tooltip } from "./ui/tooltip-card";
import { Info, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="applecards" className="w-full h-full py-20">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="flex items-start gap-2 mb-4">
          <h2 className="text-[6rem] font-semibold leading-none">
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

      <Carousel items={cards} />
    </div>
  );
}


const BaseCardContent = ({ title, children }: any) => (
  <div
    className="bg-[#F5F5F7] dark:bg-neutral-800 p-10 md:p-16 rounded-3xl shadow-sm border border-neutral-200/70 dark:border-neutral-700/40"
  >
    <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-2xl leading-relaxed tracking-wide text-pretty">
      <span className="block font-semibold text-neutral-900 dark:text-white text-2xl md:text-3xl mb-4">
        {title}
      </span>

      {children}
    </p>
  </div>
);


const LiderContent = () => (
  <BaseCardContent title="Pedro — Líder Geral do Projeto">

    Como Líder Geral do projeto A.U.R.A., Pedro Henrique de Oliveira Azevedo foi responsável por coordenar a equipe de graduandos de Engenharia da Computação no desenvolvimento de um braço robótico tradutor de Libras. Seu trabalho assegurou a integração entre as áreas de programação, design e pesquisa, garantindo que o protótipo alcançasse seus objetivos de acessibilidade e impacto social

    <br /><br />

    <strong className="font-bold">Principais contribuições:</strong>
    <br />• Planejamento geral do projeto
    <br />• Gestão de cronograma e tarefas
    <br />• Comunicação entre equipes
    <br />• Supervisão da montagem final
    <br />• Garantia da qualidade e integração técnica

    <div className="flex gap-5 mt-5">
      <Button variant="outline" size="icon" >
        <a href="ph.oliveiraazevedo@gmail.com">
          <Mail />
        </a>
      </Button>
      <Button variant="outline" size="icon" >
        <a href="pedros_hh">
          <Linkedin />
        </a>
      </Button>
    </div>
  </BaseCardContent>
);

const ViceLiderMarketingLeviContent = () => (
  <BaseCardContent title="Levi Viana Nóbrega — Líder de Desenvolvimento">
    Levi Viana Nóbrega  atuou como um dos Líderes da Programação, dedicando-se à integração eletrônica/software do projeto A.U.R.A. O seu trabalho garantiu que a captura de voz e texto do usuário fosse processada de forma eficiente pelo microcontrolador (Arduino) e traduzida em comandos de movimento , viabilizando o fluxo de comunicação do sistema.
    <div className="flex gap-5 mt-5">
      <Button variant="outline" size="icon" >
        <a href="paulovictorsantos@gmail.com">
          <Mail />
        </a>
      </Button>
    </div>
  </BaseCardContent>
);

const LiderProgramaçãoPauloContent = () => (
  <BaseCardContent title="Paulo Victor— Líder de Desenvolvimento">
    Como um dos Líderes da Programação, Paulo Victor  foi essencial na implementação do software que controla o sistema A.U.R.A. Seu foco foi na lógica de tradução (Text-to-Sign) e na codificação em C++ e Arduino para que os servomotores do braço robótico executassem os sinais de Libras com precisão e clareza.

    <div className="flex gap-5 mt-5">
      <Button variant="outline" size="icon" >
        <a href="paulovictorsantos@gmail.com">
          <Mail />
        </a>
      </Button>
    </div>
  </BaseCardContent>
);

const LiderMarketingWarlisonContent = () => (
  <BaseCardContent title="Warlisson — Líder de Marketing">
    Na função de Líder do Marketing, Warlison Gabriel foi responsável por comunicar o valor e o impacto social do A.U.R.A.. Seu papel foi crucial para a apresentação da iniciativa, destacando a tecnologia como uma ferramenta de baixo custo e alta utilidade social para a inclusão da comunidade surda.

    <div className="flex gap-5 mt-5">
      <Button variant="outline" size="icon" >
        <a href="Warlisong48@gmail.com">
          <Mail />
        </a>
      </Button>
      <Button variant="outline" size="icon" >
        <a href="https://www.instagram.com/warlison___?igsh=MW93cXR4a2ZmOW16aA==">
          <Instagram />
        </a>
      </Button>
    </div>
  </BaseCardContent>
);

const ViceLiderMarketingTobiasContent = () => (
  <BaseCardContent title="Warlisson — Líder de Marketing">
    Como um dos Líderes do Marketing, Tobias Barbosa trabalhou na estratégia de comunicação do A.U.R.A.. Ele ajudou a disseminar a visão de uma tecnologia orientada à empatia e responsabilidade social , promovendo o projeto em feiras e eventos (Inov@tech da Fametro) e demonstrando seu potencial educativo e social.    <div className="flex gap-5 mt-5">
      <Button variant="outline" size="icon" >
        <a href="https://www.instagram.com/togato.brt?igsh=ZGF2aTNzZGU5YjY=">
          <Instagram />
        </a>
      </Button>
    </div>

  </BaseCardContent>
);

const LiderPesquisaContent = () => (
  <BaseCardContent title="Àgata — Líder de Pesquisa">
    Ágata Silva liderou a área de Pesquisa, sendo fundamental na Fase I da metodologia do A.U.R.A.. O seu papel envolveu a revisão bibliográfica detalhada sobre a Língua Brasileira de Sinais (Libras) e o mapeamento dos sinais , o que permitiu definir os requisitos técnicos e garantir a fidelidade do braço robótico na execução dos gestos.

    <div className="flex gap-5 mt-5">
      <Button variant="outline" size="icon" >
        <a href="agaatasilva21@gmail.com">
          <Mail />
        </a>
      </Button>
    </div>
  </BaseCardContent>
);



const data = [
  {
    category: "Líder",
    title: "Pedro",
    src: "/PEDRO.jpg",
    content: <LiderContent />,
  },
  {
    category: "Marketing",
    title: "Warlison",
    src: "/Warlisson.jpg",
    content: <LiderMarketingWarlisonContent />,
  },
  {
    category: "Desenvolvimento",
    title: "Paulo",
    src: "/Paulo.jpg",
    content: <LiderProgramaçãoPauloContent />,
  },
  {
    category: "Pesquisa",
    title: "Àgata",
    src: "/AgataPerfil.jpg",
    content: <LiderPesquisaContent />,
  },
  {
    category: "Marketing",
    title: "Tobias",
    src: "/toba.jpg",
    content: <ViceLiderMarketingTobiasContent />,
  },
  {
    category: "Desenvolvimento",
    title: "Levi",
    src: "/Levi.jpg",
    content: <ViceLiderMarketingLeviContent />,
  },
];
