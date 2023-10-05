'use client'

import Link from 'next/link'
import { Github, X, LinkedIn, Youtube } from '../svgs'

type SocialIconProps = {
   iconSize: number
}

export function SocialIcons({ iconSize }: SocialIconProps) {
   const socialIcons = [
      { icon: <Github />, href: 'https://github.com/' },
      { icon: <X />, href: 'https://example.com/' },
      { icon: <LinkedIn />, href: 'https://www.linkedin.com/' },
      { icon: <Youtube />, href: 'https://www.youtube.com/' }
   ]

   return (
      <ul className="flex items-center gap-4 text-accent_1">
         {socialIcons.map((socialIcon, index) => (
            <li key={index}>
               <Link href={socialIcon.href} className="transition hover:text-accent_3">
                  {socialIcon.icon}
               </Link>
            </li>
         ))}
      </ul>
   )
}
