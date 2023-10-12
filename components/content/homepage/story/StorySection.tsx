import React from 'react'
import { Content } from '@/components/layouts/content'
import { Coder } from './Coder'
import { Designer } from './Designer'
import Balancer from 'react-wrap-balancer'

export function StorySection() {
   return (
      <Content className="py-8 sm:py-16 lg:py-32">
         <h2 className="pb-8 text-center text-6xl font-extrabold sm:font-bold md:text-8xl">
            <Balancer>
               Who <span className="text-secondary">i am</span>.
            </Balancer>
         </h2>
         <section className="flex flex-col items-center justify-center gap-8 lg:flex-row">
            <Coder />
            <Designer />
         </section>
      </Content>
   )
}
