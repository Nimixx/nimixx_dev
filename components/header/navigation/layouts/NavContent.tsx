import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { twMerge as tw } from 'tailwind-merge'

type NavContentProps = {
   children: React.ReactNode
   className?: string
}

export default function NavContent({ children, className }: NavContentProps) {
   return (
      <NavigationMenu.Content className="absolute -left-20 top-10 z-50 h-72">
         <ul
            className={tw(
               'flex h-full items-start justify-start gap-6 rounded-md border border-primary_light/50 bg-primary_dark/80 p-4 backdrop-blur-md overflow-hidden ',
               className
            )}
         >
            {children}
         </ul>
      </NavigationMenu.Content>
   )
}
