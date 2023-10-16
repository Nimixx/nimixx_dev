'use client'

import React from 'react'

import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function DesignStuck() {
   const itemRef = useRef<HTMLLIElement>(null)

   useEffect(() => {
      const list = itemRef.current

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
      <li ref={itemRef} className="h-32 w-80 rounded-md border border-primary_light/80 bg-gradient-to-r from-green-300 to-purple-400 opacity-0 translate-x-20">
         <NavigationMenu.Link asChild>
            <Link href="/projects/nazerem-se">
               <article className="flex h-full w-full items-center justify-center gap-2 p-4">
                  <Icon className="h-8 w-8" name="Figma" />
                  <h3 className="text-xl font-bold text-neutral-900">DesignStuck</h3>
               </article>
            </Link>
         </NavigationMenu.Link>
      </li>
   )
}
