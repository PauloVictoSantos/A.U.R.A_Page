import type { ReactNode } from "react"
import type { Metadata } from "next"

import { Geist, Geist_Mono, Poppins, Sora } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/provaider-mode"

// --------- Fonts ----------
const fontGeist = Geist({ subsets: ["latin"] })
const fontGeistMono = Geist_Mono({ subsets: ["latin"] })

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
})

const fontSora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
})

export const metadata: Metadata = {
    title: "A.U.R.A – Sistema Inteligente de Controle Robótico",
    description:
      "O A.U.R.A é um sistema avançado de automação capaz de controlar um braço robótico utilizando servomotores e comandos inteligentes, oferecendo precisão, acessibilidade e inovação tecnológica.",
    generator: "Grupo AURA",
    icons: {
      icon: [
        {
          url: "/AURA-removebg-preview.png",
          media: "/AURA-removebg-preview.png",
        },
        {
          url: "/AURA-removebg-preview.png",
          media: "/AURA-removebg-preview.png",
        },
        {
          url: "/icon.svg",
          type: "/AURA-removebg-preview.png",
        },
      ],
      apple: "/AURA-removebg-preview.png",
    },
  }
  

// --------- Root Layout ----------
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={[
          fontPoppins.variable,
          fontSora.variable,
          fontGeist.className,
          "font-sans antialiased bg-background text-foreground",
        ].join(" ")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
