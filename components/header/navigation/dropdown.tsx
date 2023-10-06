'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useClickOutside } from '@/components/hooks/useClickOutside'
import { ArrowRight, FastFood, CodeSquare } from '@/components/svgs'
import { Icon } from '@/components/ui/icon'
import { useEffect } from 'react'
import gsap from 'gsap'

type DropDownProps = {
   closeDropdown: () => void
   isDropdownOpen: boolean
}

export function DropDown({ closeDropdown, isDropdownOpen }: DropDownProps) {
   const dropdownRef = useRef<HTMLDivElement>(null)
   useClickOutside({ ref: dropdownRef, callback: closeDropdown })

   useEffect(() => {
      gsap.to(dropdownRef.current, {
         opacity: isDropdownOpen ? 1 : 0,
         y: isDropdownOpen ? 0 : 10,
         duration: 0.3,
         ease: 'power3.isNone'
      })
   }, [isDropdownOpen])

   const handleLinkClick = () => {
      closeDropdown() // Close the dropdown when a link is clicked
   }

   return (
      <nav
         ref={dropdownRef}
         className="absolute left-1/2 top-7 flex h-72 w-96 -translate-x-1/2 -translate-y-2 transform justify-between gap-4 rounded-md border border-primary_light/50 bg-primary_dark/80 p-4 opacity-0 shadow-xl shadow-primary_dark backdrop-blur-lg"
         onMouseLeave={closeDropdown}
      >
         <section className="h-64 w-48 rounded-md bg-gradient-to-b from-primary_dark to-primary_light">
            <Link onClick={handleLinkClick} href="/projects/nazerem-se">
               <article className="flex h-full w-full flex-col items-start justify-end gap-4 p-4">
                  <Icon className="text-4xl text-teal-400" icon={<FastFood />} />
                  <h3 className="text-xl font-bold">Nažeremse.se</h3>
                  <p className="text-secondary_text">
                     Small fullstuck app fro collect recipes and more...
                  </p>
               </article>
            </Link>
         </section>
         <section className="flex w-full flex-col gap-4">
            <Link href="/nimixx" className="h-32 w-full rounded-md bg-primary_light/20">
               <article className="flex h-full w-full flex-col items-start justify-end gap-2 p-4">
                  <Icon className="text-xl text-amber-400" icon={<CodeSquare />} />
                  <h3 className="text-lg font-bold">Nimixx.dev</h3>
                  <p className="text-sm text-secondary_text">Small personal app</p>
               </article>
            </Link>
            <ul className="w-full space-y-2">
               <li>
                  <Link
                     href="/projects"
                     className="flex items-center gap-2 transition hover:text-accent_2"
                  >
                     <Icon className="text-accent_2" icon={<ArrowRight />} /> Websites
                  </Link>
               </li>
               <li>
                  <Link
                     href="/projects"
                     className="flex items-center gap-2 transition hover:text-accent_2"
                  >
                     <Icon className="text-accent_2" icon={<ArrowRight />} /> Components
                  </Link>
               </li>
               <li>
                  <Link
                     href="/projects"
                     className="flex items-center gap-2 transition hover:text-accent_2"
                  >
                     <Icon className="text-accent_2" icon={<ArrowRight />} /> Graffic & Design
                  </Link>
               </li>
               <li>
                  <Link
                     href="/projects"
                     className="flex items-center gap-2 transition hover:text-accent_2"
                  >
                     <Icon className="text-accent_2" icon={<ArrowRight />} /> Others
                  </Link>
               </li>
            </ul>
         </section>
      </nav>
   )
}
