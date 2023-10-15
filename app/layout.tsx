import './globals.css'

import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Header } from '@/components/header/header'
import { Toaster } from 'sonner'
import { Provider } from 'react-wrap-balancer'
import { Footer } from '@/components/footer/Footer'

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
      <html lang="en" className="scroll-smooth">
         <body
            className={`${open_sans.className} debug-screens min-h-screen bg-gradient-to-b from-primary to-primary_dark text-primary_text`}
         >
            <Provider>
               <Header />
               {children}
               <Footer />
               <Toaster position="bottom-center" />
            </Provider>
         </body>
      </html>
   )
}
