import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "src/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Google Drive Clone",
  description: "A Google Drive clone UI with dark mode",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

