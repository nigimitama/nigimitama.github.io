import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from "./components/GoogleAnalytics"
import Header from "@/components/Header"

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Profile - Masayoshi Mita",
  description: "Profile Page of Masayoshi Mita",
  openGraph: {
    title: "Profile - Masayoshi Mita",
    siteName: "Profile - Masayoshi Mita",
    description: "Profile Page of Masayoshi Mita",
    url: "https://nigimitama.github.io/",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.variable} leading-5 font-sans antialiased text-gray-900`}>
        <GoogleAnalytics />
        <Header />
        {children}
      </body>
    </html>
  )
}
