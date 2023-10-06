import Link from 'next/link'
import { Icon } from '@/components/ui/icon'

type IconObject = {
   icon: React.ReactNode
   href?: string
}

type IconListProps = {
   icons: IconObject[]
   forLinks?: boolean
}

export function IconAside({ icons, forLinks }: IconListProps) {
   return (
      <div className="rounded-md border border-primary_light/50 bg-primary_light/20 px-4 py-3 inline-block">
         <ul className="flex space-x-4">
            {icons.map((icon, index) => (
               <li key={index}>
                  {forLinks && icon.href ? (
                     <Link href={icon.href}>
                        <Icon icon={icon.icon} className="text-2xl hover:text-primary_text text-secondary_text transition" />
                     </Link>
                  ) : (
                     <Icon icon={icon.icon} className="text-2xl" />
                  )}
               </li>
            ))}
         </ul>
      </div>
   )
}
