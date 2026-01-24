import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Bruno_Ace } from "next/font/google"
import "./main.css"

const inter = Inter({ subsets: ["latin"] })
const brunoAce = Bruno_Ace({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bruno-ace",
})

export const metadata: Metadata = {
  title: "Cyber Peace Corps - KIIT Chapter",
  description: "Safeguarding Your Digital Identity - Cyber Peace Corps KIIT Chapter",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${brunoAce.variable}`}>
        <div className="min-h-screen animated-bg">{children}</div>
      </body>
    </html>
  )
}
