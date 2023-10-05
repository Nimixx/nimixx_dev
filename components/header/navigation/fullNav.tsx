'use client'

import Link from 'next/link'
import { twMerge as tw } from 'tailwind-merge'
import { usePathname as path } from 'next/navigation'

export function FullNav() {
   
   const currentPath = path()

   const links = [
      { href: '/', label: 'Home' },
      { href: '/projects', label: 'Work' },
      { href: '/blog', label: 'Blog' },
      { href: '/bio', label: 'Bio' }
   ]

   return (
      <ul className="flex items-center gap-4">
         {links.map((link, index) => (
            <li key={index}>
               <Link
                  className={tw(
                     'text-secondary_text transition hover:text-accent_3',
                     currentPath === link.href && 'text-secondary hover:text-secondary underline underline-offset-8'
                  )}
                  href={link.href}
               >
                  {link.label}
               </Link>
            </li>
         ))}
      </ul>
   )
}
