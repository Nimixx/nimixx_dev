'use client'

import { twMerge as tw } from 'tailwind-merge'
import Link from 'next/link'
import { Icon } from './Icon'

type SocialIconProps = {
   className?: string
}

export function SocialIcons({className }: SocialIconProps) {
   const socialIcons = [
      { icon: "Github", href: 'https://github.com/' },
      { icon: "X", href: 'https://example.com/' },
      { icon: "LinkedIn", href: 'https://www.linkedin.com/' },
      { icon: "Youtube", href: 'https://www.youtube.com/' }
   ]

   return (
      <ul className="flex items-center gap-4 text-accent_1">
         {socialIcons.map((socialIcon, index) => (
            <li key={index}>
               <Link
                  href={socialIcon.href}
                  className={tw('transition hover:text-accent_3', className)}
               >
                  <Icon name={socialIcon.icon} />
               </Link>
            </li>
         ))}
      </ul>
   )
}
