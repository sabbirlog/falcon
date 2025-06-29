import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ReactQueryProvider from "@/providers/ReactQueryProvider"
import ReduxProvider from "@/providers/ReduxProvider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Falcon - Your Trusted Online Marketplace",
  description:
    "Discover amazing products at unbeatable prices. Electronics, home appliances, and more with fast delivery.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <ReactQueryProvider>
            <ReduxProvider>
              <Header />
              <div className="min-h-screen flex flex-col">{children}</div>
              <Footer />
            </ReduxProvider>
          </ReactQueryProvider>
        </Suspense>
      </body>
    </html>
  )
}
