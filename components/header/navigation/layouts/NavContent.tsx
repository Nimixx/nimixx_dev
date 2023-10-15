import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

type NavContentProps = {
   children: React.ReactNode
}

export default function NavContent({ children }: NavContentProps) {
   return (
      <NavigationMenu.Content className="absolute -left-20 top-10 z-50 flex h-72 items-start justify-start gap-6 rounded-md border border-primary_light/50 bg-primary_dark/80 p-4 backdrop-blur-md">
         {children}
      </NavigationMenu.Content>
   )
}
