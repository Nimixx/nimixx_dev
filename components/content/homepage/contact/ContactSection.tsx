'use client'

import React from 'react'
import { Content } from '@/components/layouts/content'
import { Icon } from '@/components/ui/Icon'
import { ContactForm } from './ContactForm'

export function ContactSection() {
   return (
      <Content className="flex flex-col items-center justify-center gap-14 py-8 sm:py-16 lg:py-32">
         <h2 className="text-center text-6xl font-extrabold sm:font-bold">
            <span className="text-secondary"> What i can</span> do for you?
         </h2>
         <section className="mx-auto grid w-full sm:w-3/4 grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="min-w-[10rem] rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
               <Icon name="React" size="xl" />
               <h2 className="py-4 text-xl font-semibold">From scratch...</h2>
               <p className="text-secondary_text">
                  I can build a custom website for you with a nice modern feeling and look.
               </p>
            </div>
            <div className=" min-w-[10rem] rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
               <Icon name="Wordpress" size="xl" />
               <h2 className="py-4 text-xl font-semibold">From theme...</h2>
               <p className="text-secondary_text">
                  I can build a CMS website with almost every popular theme and plugins.
               </p>
            </div>
            <div className=" min-w-[10rem] rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
               <Icon name="Figma" size="xl" />
               <h2 className="py-4 text-xl font-semibold">No code...</h2>
               <p className="text-secondary_text">
                  I can design a whole new website for your next journey without coding.
               </p>
            </div>
         </section>
            <article className='flex flex-col gap-4 w-full md:w-2/4 mx-auto items-center justify-center lg:pt-16'>
               <h2 className="text-center text-6xl md:text-8xl font-extrabold"><span className='text-secondary'>Hire</span> me</h2>
               <p className='max-w-lg text-center text-secondary_text'>
                  If you have any questions, feel free to contact me. I will try to respond as soon as possible.
               </p>
            </article>
         <section className="mx-auto flex w-full sm:w-3/4 md:w-3/6 xl:w-2/6 justify-between rounded-xl border border-primary_light/80 bg-primary_light/20 p-5 gap-8">
            <ContactForm />
         </section>
      </Content>
   )
}
