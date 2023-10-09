import './globals.css'

import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Header } from '../components/header/header'
import { Toaster } from 'sonner'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: "Nimixx.dev - Nimixx's personal website",
   description: 'Personal website of Nimixx, a frontend developer from the Czech Republic.'
}

type LayoutProps = {
   children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
   return (
      <html lang="en" className='scroll-smooth'>
         <body className={`${open_sans.className} bg-gradient-to-b from-primary min-h-screen to-primary_dark text-primary_text`}>
            <Header />
            {children}
            <Toaster position="bottom-center" />
         </body>
      </html>
   )
}
