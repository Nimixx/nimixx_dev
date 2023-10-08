import React from 'react'
import { twMerge as tw } from 'tailwind-merge'
import * as icons from './index'
import { IconNames } from './index'

type IconProps = {
   name: IconNames
   className?: string
}

export function Icon({ name, className }: IconProps) {
   const SelectedIcon = icons[name]

   if (!name) {
      console.warn('Icon name is undefined or null')
      return null
   } else if (!SelectedIcon) {
      console.warn(`Icon "${name}" was not found in the icon list`)
      return null
   } else if (typeof SelectedIcon !== 'function') {
      console.warn(`Icon "${name}" is not a valid react component`)
      return null
   }

   return (
      <i>
         <SelectedIcon
            className={tw('h-4 w-4 text-inherit', className)}
         />
      </i>
   )
}
