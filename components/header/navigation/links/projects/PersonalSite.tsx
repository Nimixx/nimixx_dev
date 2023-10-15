import React from 'react'

import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export default function PersonalSite() {
   return (
      <NavigationMenu.Link className="h-32 w-full rounded-md bg-primary_light/20">
         <Link href="/projects/nimixx">
            <article className="flex h-full w-full flex-col items-start justify-end gap-2 p-4 ">
               <Icon className="h-6 w-6 text-amber-400" name="CodeSquare" />
               <h3 className="text-lg font-bold">Nimixx.dev</h3>
               <p className="text-sm text-secondary_text">Small personal app</p>
            </article>
         </Link>
      </NavigationMenu.Link>
   )
}
