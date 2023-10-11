'use client'

import React from 'react'
import { Content } from '@/components/layouts/content'
import { Icon } from '@/components/ui/Icon'

export function ContactSection() {
   return (
      <Content className="flex flex-col items-center justify-center gap-14 lg:py-36">
         <h2 className="text-center text-6xl font-bold">
            <span className="text-secondary"> What i can</span> do for you?
         </h2>
         <section className="mx-auto flex w-2/3 flex-wrap items-center justify-between gap-10">
            <div className="w-72 rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
               <Icon name="React" size="xl" />
               <h2 className="py-4 text-xl font-semibold">From scratch...</h2>
               <p className="text-secondary_text">
                  I can build a custom website for you with a nice modern fealing and look.
               </p>
            </div>
            <div className="w-72 rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
               <Icon name="Wordpress" size="xl" />
               <h2 className="py-4 text-xl font-semibold">From theme...</h2>
               <p className="text-secondary_text">
                  I can build a CMS website with almost every popular themes and plugins.
               </p>
            </div>
            <div className="w-72 rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
               <Icon name="Figma" size="xl" />
               <h2 className="py-4 text-xl font-semibold">No code...</h2>
               <p className="text-secondary_text">
                  I can design a whole new website for your next journey without coding.
               </p>
            </div>
         </section>
         <section className="mx-auto w-2/3 rounded-xl border border-primary_light/80 bg-primary_light/20 p-5">
         </section>
      </Content>
   )
}
