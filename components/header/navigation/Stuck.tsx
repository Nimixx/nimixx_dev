'use client'

import React from 'react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import NavContent from './layouts/NavContent'
import TechStuck from './links/TechStuck'
import DesignStuck from './links/DesignStuck'

export default function Stuck() {
   return (
      <NavigationMenu.Item>
         <NavigationMenu.Trigger className="rounded-md px-4 py-1 transition-colors hover:bg-primary_light">
            Stuck
         </NavigationMenu.Trigger>
         <NavContent className='flex-col'>
            <TechStuck />
            <DesignStuck />
         </NavContent>
      </NavigationMenu.Item>
   )
}
