'use clinet'

import Link from 'next/link'
import { Icon } from '../Icon'
import { ProjectGalery } from './project-galery'

type IconObject = {
   icon: React.ReactNode
   href?: string
}

type IconListProps = {
   icons: IconObject[]
   forLinks?: boolean
   galery?: boolean
}

export function IconAside({ icons, forLinks, galery }: IconListProps) {
   return (
      <div className="flex items-center rounded-md border border-primary_light/50 bg-primary_light/20 px-4 py-3 w-64">
         <ul className="flex space-x-4">
            {icons.map((icon, index) => (
               <li key={index}>
                  {forLinks && icon.href ? (
                     <Link href={icon.href}>
                        <Icon
                           name={icon.icon}
                           className="w-6 h-6 text-secondary_text transition hover:text-primary_text"
                        />
                     </Link>
                  ) : (
                     <Icon name={icon.icon} className="w-6 h-6" />
                  )}
               </li>
            ))}
         </ul>
         {galery && <ProjectGalery />}
      </div>
   )
}
