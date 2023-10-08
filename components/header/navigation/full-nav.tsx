'use client'

import { useState } from 'react'
import Link from 'next/link'
import { twMerge as tw } from 'tailwind-merge'
import { usePathname as path } from 'next/navigation'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/button'
import { DropDown } from './dropdown'

export function FullNav() {
   const currentPath = path()
   const links = [{ href: '/bio', label: 'Bio' }]

   const [isWorkOpen, setIsWorkOpen] = useState(false)

   const handleWorkClick = () => {
      setIsWorkOpen((prev) => !prev)
   }

   const closeDropdown = () => {
      setIsWorkOpen(false)
   }

   return (
      <div className="flex items-center gap-4">
         <section className="relative">
            <Button
               variant="link"
               size="link"
               className="flex items-center gap-2 hover:text-accent_3"
               onMouseEnter={handleWorkClick}
            >
               Work{' '}
               <Icon
                  name="ArrowDown"
                  className={`transition-transform ${isWorkOpen ? 'rotate-180' : 'rotate-0'}`}
               />
            </Button>
            {isWorkOpen && <DropDown closeDropdown={closeDropdown} isDropdownOpen />}
         </section>
         <ul className="hidden items-center gap-4 lg:flex">
            {links.map((link, index) => (
               <li key={index}>
                  <Link
                     className={tw(
                        'text-secondary_text transition hover:text-accent_3',
                        currentPath === link.href &&
                           'text-secondary underline underline-offset-8 hover:text-secondary'
                     )}
                     href={link.href}
                  >
                     {link.label}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
}
