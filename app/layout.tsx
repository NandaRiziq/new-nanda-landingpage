import type React from "react"
import type { Metadata } from "next"
import { Newsreader } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "New Nanda — Special Custom Made | Packaging, Menu Covers & Stationery",
  description:
    "New Nanda crafts custom packaging, menu covers, stationery, and presentation pieces with premium materials and modern finishes. Small batches welcome. Indonesia-wide delivery.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
