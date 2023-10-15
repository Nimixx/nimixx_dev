import React from 'react'
import { SocialIcons } from '../ui/social-icon'

export function Footer() {
   const year = new Date().getFullYear()

   return (
      <footer className="flex h-96 items-center justify-center text-secondary_text flex-col gap-4">
         <p>&copy; {year} nimixx.dev</p>
         <SocialIcons />
      </footer>
   )
}
