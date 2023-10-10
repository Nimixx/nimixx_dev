import React from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/Icon'

export function CallActions() {
   return (
      <section className="space-x-6">
         <Button variant="outline" size="lg" className="space-x-2">
            <Icon name="Github" size="md" />
            <p>Github</p>
         </Button>
         <Button size="lg" className="space-x-2">
            <Icon name="CodeSquare" size="md" />
            <p>My work</p>
         </Button>
      </section>
   )
}
