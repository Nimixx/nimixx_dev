import { twMerge as tw } from 'tailwind-merge'

type IconProps = {
   icon: React.ReactNode
   className?: string
}

export function Icon({ icon, className }: IconProps) {
   return <span className={tw('text-lg', className)}>{icon}</span>
}
