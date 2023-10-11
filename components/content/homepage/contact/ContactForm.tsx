import { Button } from '@/components/ui/button'
import React from 'react'

export function ContactForm() {
   return (
      <div className="w-full max-w-xs">
         <form>
            <div className='pb-4'>
               <label htmlFor="username" className="mb-2 block text-sm">
                  Username
               </label>
               <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                  className="w-full appearance-none rounded-md border border-primary_light bg-primary_light/10 px-3 py-2 leading-tight text-secondary_text shadow focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
               />
            </div>
            <div className='pb-4'>
               <label htmlFor="email" className="mb-2 block text-sm">
                  Email
               </label>
               <input
                  id="email"
                  type="text"
                  placeholder="Your email"
                  required
                  className="w-full appearance-none rounded-md border border-primary_light bg-primary_light/10 px-3 py-2 leading-tight text-secondary_text shadow focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
               />
            </div>
            <div className='pb-4'>
               <label htmlFor="message" className="mb-2 block text-sm">
                  Your message
               </label>
               <input
                  id="message"
                  type="text"
                  placeholder="Your message"
                  required
                  className="w-full appearance-none rounded-md border border-primary_light bg-primary_light/10 px-3 py-2 leading-tight text-secondary_text shadow focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
               />
            </div>
            <Button type="submit" className="w-full">Submit form</Button>
         </form>
      </div>
   )
}
