import React from 'react'
import { Content } from '@/components/layouts/content'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/button'

export function ContactSection() {
   return (
      <Content className="lg:py-36 flex flex-col items-center justify-center gap-14">
         <h2 className="text-center text-6xl font-bold">
            <span className="text-secondary"> What i can</span> do for you?
         </h2>
         <section className='w-2/3 mx-auto flex justify-between items-center gap-10 flex-wrap'>
            <div className="w-72 rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
               <Icon name="React" size='xl' />
               <h2 className='text-xl py-4 font-semibold'>From scratch...</h2>
               <p className='text-secondary_text'>I can build a custom website for you with a nice modern fealing and look.</p>
            </div>
            <div className="w-72 rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
               <Icon name="Wordpress" size='xl' />
               <h2 className='text-xl py-4 font-semibold'>From theme...</h2>
               <p className='text-secondary_text'>I can build a CMS website with almost every popular themes and plugins.</p>
            </div>
            <div className="w-72 rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
               <Icon name="Figma" size='xl' />
               <h2 className='text-xl py-4 font-semibold'>No code...</h2>
               <p className='text-secondary_text'>I can design a whole new website for your next journey without coding.</p>
            </div>
         </section>
         <section className='w-2/3 mx-auto h-96 border border-primary_light/80 bg-primary_light/20 p-5 rounded-xl'></section>
      </Content>
   )
}
