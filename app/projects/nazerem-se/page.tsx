'use client'

import React, { useState } from 'react'
import { Projects } from '@/components/layouts/project'
import {
   NextJs,
   Typescript,
   TailwindCSS,
   Firebase,
   Github,
   LinkIcon,
   RadixUi,
   ReactQuery
} from '@/components/svgs'

import KitchenPic from '@/public/images/nazerme_se.jpg'
import { ProjectImage } from '@/components/ui/projects/project-image'
import { IconAside } from '@/components/ui/projects/icon-aside'
import Content from '@/app/projects/nazerem-se/nazerem-se.mdx'

export default function page() {
   const [links] = useState([
      { icon: <Github />, href: '/' },
      { icon: <LinkIcon />, href: '/' }
   ])

   const [icons] = useState([
      { icon: <NextJs /> },
      { icon: <Typescript /> },
      { icon: <ReactQuery /> },
      { icon: <TailwindCSS /> },
      { icon: <RadixUi /> },
      { icon: <Firebase /> }
   ])

   return (
      <Projects className="mx-auto lg:w-3/5">
         <section className="space-y-10 py-10">
            <article className="flex space-x-10">
               <aside className="sticky top-10 h-96 space-y-4">
                  <h1 className='text-2xl font-extrabold uppercase'>Nažeremse.cz</h1>
                  <ProjectImage
                     src={KitchenPic}
                     alt="Nažerem.se"
                     shoutout="Anthony DELANOIX"
                     shoutoutLink="https://unsplash.com/@anthonydelanoix?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  />
                  <IconAside icons={icons} />
                  <IconAside icons={links} forLinks />
               </aside>
               <section className="w-full space-y-4 rounded-lg border border-primary_light/50 bg-primary_light/20 p-5">
                  <Content />
               </section>
            </article>
         </section>
      </Projects>
   )
}
