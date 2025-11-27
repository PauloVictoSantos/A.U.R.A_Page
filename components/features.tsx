import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Features() {
  const data = [
    {
      title: "Setembro",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Planejamento
          </h3>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-[15px]">
            Durante o primeiro mês, o foco foi exclusivamente na estruturação conceitual e documentacional do projeto.
            A equipe realizou pesquisas sobre Libras, analisou parâmetros gestuais, definiu requisitos técnicos e estudou
            limitações mecânicas e de software.
            <br /><br />
            Também foram elaborados relatórios, documentação interna, levantamento de materiais, testes iniciais de
            viabilidade e definição do escopo funcional do protótipo A.U.R.A.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img
              src="images/banner.png"
              alt="Atividades de Novembro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
            <img
              src="images/dacumentaçao.png"
              alt="Atividades de Novembro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Outubro",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Marketing & Programação
          </h3>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-[15px]">
            No segundo mês, duas frentes essenciais avançaram simultaneamente: comunicação e desenvolvimento técnico.
            <br /><br />
            <strong className="font-medium text-neutral-900 dark:text-neutral-100">
              Marketing:
            </strong>{" "}
            definição da identidade visual, produção de vídeos e fotos, criação de banners e materiais gráficos,
            parcerias e construção da narrativa institucional do A.U.R.A.
            <br /><br />
            <strong className="font-medium text-neutral-900 dark:text-neutral-100">
              Programação:
            </strong>{" "}
            início do site, criação da interface principal, construção do fluxo voz → texto → ID, e os primeiros testes
            de integração com o sistema de movimentos da mão robótica.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img
              src="images/AURA-removebg-preview.png"
              alt="Atividades de Outubro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
            <img
              src="images/arduino.png"
              alt="Atividades de Outubro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
            <img
              src="images/IMG_2616.jpg"
              alt="Atividades de Outubro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
            <img
              src="images/camisa.png"
              alt="Atividades de Novembro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Novembro",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Programação & Marketing 
          </h3>

          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-[15px]">
            No terceiro mês, o projeto entrou na fase final.
            <br /><br />
            A Programação concluiu o site, refinou o sistema do A.U.R.A, corrigiu bugs e finalizou a montagem física da
            mão robótica, incluindo testes completos de movimento.
            <br /><br />
            Enquanto isso, o Marketing consolidou campanhas, produziu materiais visuais finais, reforçou parcerias e
            estruturou toda a apresentação oficial do projeto — garantindo clareza, impacto e profissionalismo.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img
              src="images/IMG_2487.jpg"
              alt="Atividades de Novembro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
            <img
              src="images/IMG_2614.jpg"
              alt="Atividades de Novembro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
            <img
              src="images/IMG_2486.jpg"
              alt="Atividades de Novembro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
            <img
              src="images/IMG_2600.jpg"
              alt="Atividades de Novembro"
              className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover shadow-md border border-neutral-200 dark:border-neutral-700"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="features" className="relative w-full overflow-clip py-10">
      <Timeline data={data} />
    </div>
  );
}
