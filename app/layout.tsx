import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kwiaciarnia Beata Sztachańska - Pompowanie balonów helem | Łomża",
  description:
    "Profesjonalne dekoracje ślubne, bukiety ślubne, dekoracje balonowe i pompowanie balonów helem w Łomży. Kwiaciarnia Beata Sztachańska - ul. Nowogrodzka 250.",
  keywords: "kwiaciarnia, Łomża, bukiety ślubne, dekoracje ślubne, balony helem, dekoracje balonowe",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${playfairDisplay.variable} ${lato.variable}`}>
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  )
}
