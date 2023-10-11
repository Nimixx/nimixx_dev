import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'

export function CallActions() {
   return (
      <section className="space-x-6">
         <Link href="https://github.com/Nimixx" target='_blank' rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="space-x-2">
               <Icon name="Github" size="md" />
               <p>Github</p>
            </Button>
         </Link>
         <Link href="/projects">
            <Button size="lg" className="space-x-2">
               <Icon name="CodeSquare" size="md" />
               <p>My work</p>
            </Button>
         </Link>
      </section>
   )
}
