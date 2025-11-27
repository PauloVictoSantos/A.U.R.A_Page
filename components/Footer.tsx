"use client";

import { useEffect, useState } from "react";
import { Github, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/projetoaura.com.br?igsh=MTNxM2FybWV1OW1yeQ==", label: "Instagram" },
    { icon: Mail, href: "connectionaura@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-linear-to-b from-background to-primary/5 border-t border-border overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          style={{
            top: "10%",
            left: "-10%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{
            bottom: "-20%",
            right: "-5%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <img
                src="images/AURA-removebg-preview.png"
                alt="Logo do Projeto"
                className="w-20 h-20 object-contain"
              />
              <h2 className="text-3xl font-bold text-foreground">A.U.R.A</h2>

            </div>

            <p className="text-muted-foreground max-w-sm">
              Desenvolvendo soluções inteligentes de robótica para o futuro.
              Inovação, precisão e criatividade.
            </p>

            <div className="h-px bg-linear-to-r from-transparent via-border to-transparent my-5 flex justify-center" />

            <div className="flex flex-col  gap-6 pt-2">
              <h2>Patrocinadores</h2>
              <div className="flex">
                <Link
                  href="https://www.smartprojectsbrasil.com.br/?srsltid=AfmBOopiiR1GSdEbbtc_hBAB52SHk2ThqtrOGDXolqLgtVEikBlMvykc"
                >
                  <img
                    src="images/patrocinador1.png"
                    alt="Patrocinador 2"
                    className="w-36 h-22 object-contain cursor-pointer"
                  />
                </Link>
                <img
                  src="images/patrocinador2.png"
                  alt="Patrocinador 1"
                  className="w-36 h-22 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:justify-end">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 rounded-lg bg-primary/10 hover:bg-accent hover:text-accent-foreground text-foreground transition-all duration-500 transform hover:scale-110 ${isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${idx * 100}ms` : "0ms",
                  }}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>


        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50 transition-all duration-1000 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
          style={{
            transitionDelay: isVisible ? "400ms" : "0ms",
          }}
        >
          <p className="text-xs text-muted-foreground">
            © 2025 A.U.R.A. Todos os direitos reservados.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Desenvolvido por <span className="font-semibold no-underline hover:underline ">
              <a href="">
                Paulo Victor
              </a>
            </span>.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
      `}</style>
    </footer>
  );
}
