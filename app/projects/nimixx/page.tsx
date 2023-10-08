'use client'

import React, { useState } from 'react'
import { Projects } from '@/components/layouts/project'

import DevPick from '@/public/images/night_develop.jpg'
import { ProjectImage } from '@/components/ui/projects/project-image'
import { IconAside } from '@/components/ui/projects/icon-aside'
import MDXContent from '@/content/projects/nimixx.mdx'
import { ProjectRoadmap } from '@/components/ui/projects/Project-Roadmap'
import { Icon } from '@/components/ui/Icon'

export default function page() {
   const [links] = useState([
      { icon: 'Github', href: '/' },
      { icon: 'LinkIcon', href: '/' }
   ])

   const [icons] = useState([
      { icon: 'NextJs' },
      { icon: 'Typescript' },
      { icon: 'TailwindCSS' },
      { icon: 'RadixUi' },
      { icon: 'Mdx' }
   ])

   const items = [
      { text: 'Build project page with mdx & reuseable layouts', isChecked: true },
      { text: 'Build own reuseable svg icon pack', isChecked: true },
      { text: 'Address bugs and issues', isChecked: false }
   ]

   return (
      <Projects className="mx-auto lg:w-3/5">
         <section className="space-y-10 py-10">
            <article className="flex space-x-10">
               <aside className="sticky top-10 h-96 space-y-4">
                  <h1 className="text-2xl font-extrabold uppercase">Nimixx.dev</h1>
                  <ProjectImage
                     width={255}
                     height={60}
                     src={DevPick}
                     alt="Nažerem.se"
                     shoutout="Unseen Studio"
                     shoutoutLink="https://unsplash.com/@craftedbygc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  />
                  <IconAside icons={icons} />
                  <IconAside icons={links} forLinks galery />
               </aside>
               <section className="w-full space-y-4 rounded-lg border border-primary_light/50 bg-primary_light/20 p-5">
                  <MDXContent />
                  <ProjectRoadmap items={items} />
                  <Icon name="Github" />
               </section>
            </article>
         </section>
      </Projects>
   )
}
