'use client'

import React, { useState } from 'react'
import { Projects } from '@/components/layouts/project'
import Link from 'next/link'
import {
   NextJs,
   Typescript,
   TailwindCSS,
   Firebase,
   Github,
   LinkIcon,
   RadixUi,
   ArrowRight
} from '@/components/svgs'
import { Icon } from '@/components/ui/icon'
import KitchenPic from '@/public/images/nazerme_se.jpg'
import { ProjectImage } from '@/components/ui/projects/project-image'

// Icon component
type IconObject = {
   icon: React.ReactNode
   href?: string
}

type IconListProps = {
   icons: IconObject[]
   forLinks?: boolean
}

const IconList = ({ icons, forLinks }: IconListProps) => {
   return (
      <div className="rounded-md border border-primary_light/50 bg-primary_light/20 px-4 py-3">
         <ul className="flex space-x-4">
            {icons.map((icon, index) => (
               <li key={index}>
                  {forLinks && icon.href ? (
                     <Link href={icon.href}>
                        <Icon icon={icon.icon} className="text-2xl" />
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

// Navigation component

const ProjectNav = () => {
   return (
      <ul className="space-y-2 rounded-md border border-primary_light/50 bg-primary_light/20 p-5">
         <li>
            <Link href="#idea" className="flex items-center gap-2 transition hover:text-accent_2">
               <Icon icon={<ArrowRight />} className="text-accent_2" /> First idea
            </Link>
         </li>
         <li>
            <Link
               href="#techstuck"
               className="flex items-center gap-2 transition hover:text-accent_2"
            >
               <Icon icon={<ArrowRight />} className="text-accent_2" /> TechStuck
            </Link>
         </li>
         <li>
            <Link
               href="#showcase"
               className="flex items-center gap-2 transition hover:text-accent_2"
            >
               <Icon icon={<ArrowRight />} className="text-accent_2" /> Showcase
            </Link>
         </li>
      </ul>
   )
}

export default function page() {
   const [links] = useState([
      { icon: <Github />, href: '/' },
      { icon: <LinkIcon />, href: '/' }
   ])

   const [icons] = useState([
      { icon: <NextJs /> },
      { icon: <Typescript /> },
      { icon: <TailwindCSS /> },
      { icon: <RadixUi /> },
      { icon: <Firebase /> }
   ])

   return (
      <Projects className="mx-auto lg:w-3/5">
         <section className="space-y-10 py-10">
            <ProjectImage
               src={KitchenPic}
               alt="Nažerem.se"
               shoutout="Brooke Lark"
               shoutoutLink="https://unsplash.com/@brookelark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            />
            <article className="flex space-x-10">
               <aside className="sticky top-10 h-96 space-y-4">
                  <IconList icons={links} forLinks />
                  <IconList icons={icons} />
                  <ProjectNav />
               </aside>
               <section className="w-full space-y-4 rounded-lg border border-primary_light/50 bg-primary_light/20 p-5">
                  <h1 className="text-6xl font-extrabold uppercase">Nažeremse</h1>
                  <h2 className="text-2xl">First idea</h2>
                  <p className="text-secondary_text">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt placeat
                     perferendis rerum. Neque corrupti facilis earum iure fuga accusamus
                     necessitatibus sint quidem repudiandae? Provident, laudantium. Laborum
                     molestias obcaecati aut?
                  </p>
               </section>
            </article>
         </section>
      </Projects>
   )
}
