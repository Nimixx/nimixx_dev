'use client'

import React from 'react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Work from './Work'
import Stuck from './Stuck'
import Indicator from './Indicator'

export default function Navigation() {
   return (
      <NavigationMenu.Root className="relative w-full">
         <NavigationMenu.List className="flex list-none list-inside overflow-hidden">
            <Work />
            <Stuck />
            <Indicator />
         </NavigationMenu.List>
         <NavigationMenu.Viewport />
      </NavigationMenu.Root>
   )
}
