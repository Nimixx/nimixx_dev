import React from 'react'
import { Icon } from '@/components/ui/Icon'

export function Coder() {
   return (
      <section className='flex flex-col items-center justify-center gap-8'>
         <h2 className="text-center text-2xl sm:text-4xl font-bold">I&apos;am a Coder...</h2>
         <div className="w-full sm:w-80 lg:w-96 rounded-lg border border-primary_light/80 bg-primary_light/20 p-5">
            <p className="pb-4 text-center text-secondary_text">
               I love to code minimalistic web app with modern stuck and techniques...
            </p>
            <ul className="flex w-full items-center justify-center gap-8 flex-wrap">
               <li>
                  <Icon name="NextJs" size="xl" />
               </li>
               <li>
                  <Icon name="Typescript" size="xl" />
               </li>
               <li>
                  <Icon name="TailwindCSS" size="xl" />
               </li>
               <li>
                  <Icon name="MongoDb" size="xl" />
               </li>
            </ul>
         </div>
      </section>
   )
}
