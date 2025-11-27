"use client";

import Carousel from "@/components/ui/carousel";

export function Galeria() {
  const slideData = [
    {
      src: "images/IMG_2462.jpg",
    },
    {
      src: "images/IMG_2464.jpg",
    },
    {
      src: "images/IMG_2466.jpg",
    },
    {
      src: "images/IMG_2486.jpg",
    },
    {
      src: "images/IMG_2487.jpg",
    },
    {
      src: "images/IMG_2504.jpg",
    },
    {
      src: "images/IMG_2513.jpg",
    },
    {
      src: "images/IMG_2600.jpg",
    },
    {
      src: "images/IMG_2614.jpg",
    },
    {
      src: "images/IMG_2616.jpg",
    },
  ];
  return (
    <div id="galeria" className="relative overflow-hidden w-full h-full py-20">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="
      text-4xl           /* celular */
      sm:text-5xl        /* >640px */
      md:text-6xl        /* >768px */
      lg:text-7xl        /* >1024px */
      xl:text-8xl        /* >1280px */
      2xl:text-[6rem]    /* telas muito grandes */
      font-semibold leading-none
    ">
          Galeria de Desenvolvimento
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Uma coleção visual que apresenta diferentes etapas do desenvolvimento, destacando processos, protótipos e resultados técnicos. Cada imagem representa parte da evolução do projeto, oferecendo uma visão clara e objetiva do progresso alcançado.
        </p>
      </div>



      <Carousel slides={slideData} />

    </div>
  );
}
