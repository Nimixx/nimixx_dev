import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: "Nimixx.dev - Nimixx's personal website",
   description: 'Personal website of Nimixx, a frontend developer from the Czech Republic.',
}

type LayoutProps = {
   children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
   return (
      <html lang="en">
         <body className={`${inter.className} bg-primary text-primary_text`}>{children}</body>
      </html>
   )
}
