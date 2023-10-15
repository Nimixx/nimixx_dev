'use client'

import React from 'react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export default function Indicator() {
   return (
      <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
         <div className="relative top-1 h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-primary_light" />
      </NavigationMenu.Indicator>
   )
}
