import React from 'react'

import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export default function RecipeBook() {
   return (
      <NavigationMenu.Link
         asChild
         className="h-64 w-48 rounded-md bg-gradient-to-b from-primary_dark to-primary_light"
      >
         <Link href="/projects/nazerem-se">
            <article className="flex h-full w-full flex-col items-start justify-end gap-4 p-4">
               <Icon className="h-8 w-8 text-teal-400" name="FastFood" />
               <h3 className="text-xl font-bold">Nažeremse.se</h3>
               <p className="text-secondary_text">
                  Small fullstuck app fro collect recipes and more...
               </p>
            </article>
         </Link>
      </NavigationMenu.Link>
   )
}
