'use client'

import React from 'react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import NavContent from './layouts/NavContent'
import RecipeBook from './links/projects/RecipeBook'
import PersonalSite from './links/projects/PersonalSite'
import OtherWork from './links/OtherWork'

export default function Work() {
   return (
      <NavigationMenu.Item>
         <NavigationMenu.Trigger className="rounded-md px-4 py-1 transition-colors hover:bg-primary_light">
            Work
         </NavigationMenu.Trigger>
         <NavContent>
            <RecipeBook />
            <section className="flex w-full flex-col gap-4">
               <PersonalSite />
               <OtherWork />
            </section>
         </NavContent>
      </NavigationMenu.Item>
   )
}
