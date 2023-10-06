'use clinet'

import Link from 'next/link'
import { Icon } from '@/components/ui/icon'
import { Button } from '../button'
import { Galery } from '@/components/svgs'
import { useAlertToast } from '@/components/hooks/useAlertToast'
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
      <div className="flex items-center rounded-md border border-primary_light/50 bg-primary_light/20 px-4 py-3">
         <ul className="flex space-x-4">
            {icons.map((icon, index) => (
               <li key={index}>
                  {forLinks && icon.href ? (
                     <Link href={icon.href}>
                        <Icon
                           icon={icon.icon}
                           className="text-2xl text-secondary_text transition hover:text-primary_text"
                        />
                     </Link>
                  ) : (
                     <Icon icon={icon.icon} className="text-2xl" />
                  )}
               </li>
            ))}
         </ul>
         {galery && <ProjectGalery />}
      </div>
   )
}
