import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'

export function CallActions() {
   return (
      <section className="flex w-full flex-col items-center gap-6 sm:flex-row sm:max-w-sm">
         <Link
            href="https://github.com/Nimixx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow w-full"
         >
            <Button variant="outline" size="lg" className='w-full'>
               <Icon name="Github" size="md" className="mr-2" />
               <p>Github</p>
            </Button>
         </Link>
         <Link href="/projects" className="flex-grow w-full">
            <Button size="lg" className='w-full'>
               <Icon name="CodeSquare" size="md" className="mr-2" />
               <p>My work</p>
            </Button>
         </Link>
      </section>
   )
}
