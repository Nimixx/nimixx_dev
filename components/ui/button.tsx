import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const button = cva('inline-flex items-center justify-center rounded-md transition', {
   variants: {
      variant: {
         primary: ['bg-secondary', 'text-black', 'border-transparent', 'hover:bg-secondary/90'],
         outline: ['bg-transparent', 'text-secondary', 'border-secondary', 'border', 'hover:bg-secondary/10'],
         link: ['bg-transparent', 'border-transparent']
      },
      size: {
         sm: [ 'py-2', 'px-3'],
         md: ['py-2', 'px-4'],
         lg: ['py-3', 'px-6'],
         xl: ['py-4', 'px-8'],
         link: ['py-2', 'px-0']
      }
   },
   defaultVariants: {
      variant: 'primary',
      size: 'md'
   }
})

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ className, variant, size, ...props }) => (
   <button className={cn(button({ variant, size, className }))} {...props} />
)
