'use client'

import React from 'react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Work from './Work'
import Stuck from './Stuck'
import Indicator from './Indicator'

export default function Navigation() {
   return (
      <NavigationMenu.Root className="relative">
         <NavigationMenu.List className="flex">
            <Work />
            <Stuck />
            <Indicator />
         </NavigationMenu.List>
         <NavigationMenu.Viewport />
      </NavigationMenu.Root>
   )
}
