import React from 'react'
import * as icons from '../svgs/index'
import { IconNames } from '../svgs/types'
import { IconSizes } from '../svgs/types'
import { cn } from '@/lib/utils'
import { getSizeClass } from '../svgs/iconSizes'

type IconProps = {
   name?: IconNames | React.ReactNode
   className?: string
   size?: IconSizes
}

export function Icon({ name, className, size }: IconProps) {
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

   const sizeClass = size ? getSizeClass(size) : ''

   return (
      <i>
         <SelectedIcon className={cn(sizeClass, className)} />
      </i>
   )
}
