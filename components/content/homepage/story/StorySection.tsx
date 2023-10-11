import React from 'react'
import { Content } from '@/components/layouts/content'
import { Coder } from './Coder'
import { Designer } from './Designer'

export function StorySection() {
   return (
      <Content className="lg:py-36">
         <h2 className="pb-8 text-center text-8xl font-bold">Who i <span className='text-secondary'>am</span>.</h2>
         <section className="mx-auto flex w-2/3 justify-between">
            <Coder />
           <Designer />
         </section>
      </Content>
   )
}
