import React from 'react'
import { Content } from '@/components/layouts/content'

export function ContactSection() {
   return (
      <Content className="lg:py-10">
         <h2 className="pb-8 text-center text-6xl font-bold">
            <span className="text-secondary"> Ask me </span>anything.
         </h2>
         <section className="mx-auto flex w-2/3 justify-between"></section>
      </Content>
   )
}
