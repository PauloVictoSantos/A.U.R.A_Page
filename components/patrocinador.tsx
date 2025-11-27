"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Grupo <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                A.U.R.A
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`images/GrupoAURA.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="
            mx-auto
            rounded-2xl
            h-[380px]            /* 🔥 AJUSTE: altura boa para celular */
            w-full               /* ocupa toda largura */
            object-contain       /* mostra inteira no mobile */
            
            md:h-full            /* desktop ocupa tudo */
            md:object-cover      /* desktop faz o efeito hero */
            md:object-top
          "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
