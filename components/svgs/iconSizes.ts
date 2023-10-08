import { IconSizes } from './types'

export const getSizeClass = (size: IconSizes): string => {
   switch (size) {
      case 'sm':
         return 'h-4 w-4'
      case 'md':
         return 'h-6 w-6'
      case 'lg':
         return 'h-8 w-8'
      case 'xl':
         return 'h-10 w-10'
      default:
         return ''
   }
}
