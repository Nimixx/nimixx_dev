'use client'

import React from 'react'

import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function RecipeBook() {
   const listRef = useRef<HTMLLIElement>(null)

   useEffect(() => {
      const list = listRef.current

      if (list) {
         const tl = gsap.timeline()

         tl.to(list, {
            duration: 0.5,
            opacity: 1,
            x: 0,
            ease: 'power3.out'
         })

         return () => {
            tl.kill()
         }
      }
   }, [])

   return (
      <li
         ref={listRef}
         className="h-64 w-48 rounded-md opacity-0 -translate-x-20 bg-gradient-to-b from-orange-300 to-violet-400"
      >
         <NavigationMenu.Link asChild>
            <Link href="/projects/nazerem-se">
               <article className="flex h-full w-full flex-col items-start justify-end gap-4 p-4">
                  <Icon className="h-8 w-8 text-neutral-900" name="FastFood" />
                  <h3 className="text-xl font-bold text-primary_dark">Nažeremse.se</h3>
                  <p className="text-primary_dark">
                     Small fullstuck app fro collect recipes and more...
                  </p>
               </article>
            </Link>
         </NavigationMenu.Link>
      </li>
   )
}
