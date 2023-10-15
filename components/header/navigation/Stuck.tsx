'use client'

import React from 'react'
import Link from 'next/link'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import NavContent from './layouts/NavContent'

export default function Stuck() {
   return (
      <NavigationMenu.Item>
         <NavigationMenu.Trigger className="rounded-md px-4 py-1 transition-colors hover:bg-primary_light">
            Stuck
         </NavigationMenu.Trigger>
         <NavContent>
            <NavigationMenu.Link>
               <Link
                  href="/work/"
                  className="block px-4 py-2 transition-colors hover:bg-primary_light"
               >
                  Stuck
               </Link>
            </NavigationMenu.Link>
         </NavContent>
      </NavigationMenu.Item>
   )
}
