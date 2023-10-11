import React from 'react'
import { Icon } from '@/components/ui/Icon'

export function Designer() {
   return (
      <section>
         <h2 className="pb-10 text-center text-4xl font-bold">I&apos;am a Designer...</h2>
         <div className="w-96 rounded-lg border border-primary_light/80 bg-gradient-to-r from-green-300 to-purple-400 p-5">
            <p className="pb-4 text-center text-black">
               I love to design a minimalistic layouts base on geometric items and patterns...
            </p>
            <ul className="flex w-full items-center justify-center gap-8">
               <li>
                  <Icon name="Figma" size="xl" />
               </li>
               <li>
                  <Icon name="Sketch" size="xl" />
               </li>
               <li>
                  <Icon name="Framer" size="xl" />
               </li>
            </ul>
         </div>
      </section>
   )
}
