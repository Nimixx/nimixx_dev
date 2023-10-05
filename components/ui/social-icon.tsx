'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

type SocialIconProps = {
   iconSize: number
}

export function SocialIcons({ iconSize }: SocialIconProps) {
   const socialIcons = [
      { icon: 'simple-icons:github', href: 'https://github.com/' },
      { icon: 'simple-icons:x', href: 'https://example.com/' },
      { icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/' },
      { icon: 'simple-icons:youtube', href: 'https://www.youtube.com/' }
   ]

   return (
      <ul className="flex items-center gap-4 text-accent_1">
         {socialIcons.map((socialIcon, index) => (
            <li key={index}>
               <Link href={socialIcon.href} className="transition hover:text-accent_3">
                  <Icon icon={socialIcon.icon} fontSize={iconSize} />
               </Link>
            </li>
         ))}
      </ul>
   )
}
