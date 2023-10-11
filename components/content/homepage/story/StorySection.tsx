import React from 'react'
import { Content } from '@/components/layouts/content'
import { Icon } from '@/components/ui/Icon'

export function StorySection() {
   return (
      <Content className="h-[60rem] lg:pt-36">
         <h2 className="pb-8 text-center text-8xl font-bold">Who i <span className='text-secondary'>am</span>.</h2>
         <section className="mx-auto flex w-2/3 justify-between pt-10">
            <section>
               <h2 className="text-4xl font-bold pb-10 text-center">Iam a Coder...</h2>
               <div className='w-96 rounded-lg bg-primary_light/20 border border-primary_light/80 p-5'>
                <p className='text-secondary_text pb-4 text-center'>I love to code minimalistic web app with modern stuck and techniques...</p>
                <ul className='flex items-center gap-8 w-full justify-center'>
                    <li><Icon name="NextJs" size="xl" /></li>
                    <li><Icon name="Typescript" size="xl" /></li>
                    <li><Icon name="TailwindCSS" size="xl" /></li>
                    <li><Icon name="MongoDb" size="xl" /></li>
                </ul>
               </div>
            </section>
            <section>
               <h2 className="text-4xl font-bold pb-10 text-center">Iam a Designer...</h2>
               <div className='w-96 rounded-lg bg-gradient-to-r from-green-300 to-purple-400 border border-primary_light/80 p-5'>
                <p className='text-black pb-4 text-center'>I love to design a minimalistic layouts base on geometric items and patterns...</p>
                <ul className='flex items-center gap-8 w-full justify-center'>
                    <li><Icon name="Figma" size="xl" /></li>
                    <li><Icon name="Sketch" size="xl" /></li>
                    <li><Icon name="AffinityDesigner" size="xl" /></li>
                </ul>
               </div>
            </section>
         </section>
      </Content>
   )
}
