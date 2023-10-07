'use client'

import React, { useState } from 'react'
import { Projects } from '@/components/layouts/project'
import {
   NextJs,
   Typescript,
   TailwindCSS,
   Github,
   LinkIcon,
   RadixUi,
   ReactQuery,
   PlanetScale
} from '@/components/svgs'

import KitchenPic from '@/public/images/nazerme_se.jpg'

import { ProjectImage } from '@/components/ui/projects/project-image'
import { IconAside } from '@/components/ui/projects/icon-aside'
import MDXContent from '@/content/projects/nazerem-se.mdx'

import { ProjectRoadmap } from '@/components/ui/projects/Project-Roadmap'

export default function page() {
   const [links] = useState([
      { icon: <Github />, href: '/' },
      { icon: <LinkIcon />, href: '/' }
   ])

   const [icons] = useState([
      { icon: <NextJs /> },
      { icon: <Typescript /> },
      { icon: <PlanetScale /> },
      { icon: <ReactQuery /> },
      { icon: <TailwindCSS /> },
      { icon: <RadixUi /> }
   ])

   const items = [
      { text: 'Perform unit testing', isChecked: true },
      { text: 'Conduct integration testing', isChecked: false },
      { text: 'Address bugs and issues', isChecked: false }
   ]

   return (
      <Projects className="mx-auto lg:w-3/5">
         <section className="space-y-10 py-10">
            <article className="flex space-x-10">
               <aside className="sticky top-10 h-96 space-y-4">
                  <h1 className="text-2xl font-extrabold uppercase">Nažeremse.cz</h1>
                  <ProjectImage
                     width={255}
                     height={60}
                     src={KitchenPic}
                     alt="Nažerem.se"
                     shoutout="Anthony DELANOIX"
                     shoutoutLink="https://unsplash.com/@anthonydelanoix?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  />
                  <IconAside icons={icons} />
                  <IconAside icons={links} forLinks galery />
               </aside>
               <section className="w-full space-y-4 rounded-lg border border-primary_light/50 bg-primary_light/20 p-5">
                  <MDXContent />
                  <ProjectRoadmap items={items} />
               </section>
            </article>
         </section>
      </Projects>
   )
}
