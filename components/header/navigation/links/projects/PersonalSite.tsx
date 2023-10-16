'use client'

import React from 'react'

import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function PersonalSite() {
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
         className="h-32 w-48 -translate-x-20 rounded-md border border-primary_light/80 bg-primary_light/20  p-4 opacity-0 hover:bg-primary_light/40"
      >
         <NavigationMenu.Link asChild>
            <Link href="/projects/nimixx">
               <article className="flex h-full w-full flex-col items-start justify-end gap-2">
                  <Icon className="h-6 w-6 text-amber-400" name="CodeSquare" />
                  <h3 className="text-lg font-bold">Nimixx.dev</h3>
                  <p className="text-sm text-secondary_text">Small personal app</p>
               </article>
            </Link>
         </NavigationMenu.Link>
      </li>
   )
}