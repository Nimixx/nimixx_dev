import React from 'react'
import { twMerge as tw } from 'tailwind-merge'
import * as icons from '../svgs/index'
import { IconNames } from '../svgs/index'

type IconProps = {
   name?: IconNames | React.ReactNode
   className?: string
}

export function Icon({ name, className }: IconProps) {
   let SelectedIcon

   const isValidIconName = (name: string): name is IconNames => {
      return Object.keys(icons).includes(name)
   }

   if (typeof name === 'string' && isValidIconName(name)) {
      SelectedIcon = icons[name]
   } else if (React.isValidElement(name)) {
      SelectedIcon = name
   } else {
      console.warn('Icon name or icon component is not provided')
      return null
   }

   return (
      <i>
         <SelectedIcon className={tw(`h-4 w-4 text-inherit`, className)} />
      </i>
   )
}
