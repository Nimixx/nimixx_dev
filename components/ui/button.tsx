import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const button = cva('inline-flex items-center justify-center rounded-md', {
   variants: {
      variant: {
         primary: ['bg-blue-500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],
         link: ['bg-transparent', 'border-transparent']
      },
      size: {
         sm: ['h3', 'py-2', 'px-3'],
         md: ['text-base', 'py-2', 'px-4'],
         link: ['text-base', 'py-2', 'px-0']
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
