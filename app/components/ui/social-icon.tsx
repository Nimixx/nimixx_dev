'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

export function SocialIcons() {
   const socialIcons = [
      { icon: 'simple-icons:github', href: 'https://github.com/' },
      { icon: 'simple-icons:x', href: 'https://example.com/' }, // Replace with actual link
      { icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/' },
      { icon: 'simple-icons:youtube', href: 'https://www.youtube.com/' }
   ]

   return (
      <ul className="flex items-center gap-4 text-accent_1">
         {socialIcons.map((socialIcon, index) => (
            <li key={index}>
               <Link href={socialIcon.href} className='hover:text-accent_3 transition'>
                  <Icon icon={socialIcon.icon} fontSize={20} />
               </Link>
            </li>
         ))}
      </ul>
   )
}
