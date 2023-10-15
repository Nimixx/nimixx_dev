import React from 'react'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'

const linksData = [
   { name: 'Websites & Apps', href: '/websites-apps', icon: 'ArrowRight' },
   { name: 'Components', href: '/components', icon: 'ArrowRight' },
   { name: 'Graphic & Design', href: '/graphic-design', icon: 'ArrowRight' },
   { name: 'Others', href: '/others', icon: 'ArrowRight' }
]

export default function OtherWork() {
   return (
      <ul className="flex w-full flex-col gap-1">
         {linksData.map((link, index) => (
            <li key={index}>
               <Link
                  href={link.href}
                  className="flex items-center gap-2 transition hover:text-accent_2"
               >
                  <Icon className="text-accent_2" name={link.icon} /> {link.name}
               </Link>
            </li>
         ))}
      </ul>
   )
}
