import { Button } from '@/components/ui/button'
import React from 'react'

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ id, type, placeholder }: InputProps) {
   return (
      <input
         id={id}
         type={type}
         placeholder={placeholder}
         required
         className="w-full appearance-none rounded-md border border-primary_light bg-primary_light/10 px-3 py-2 leading-tight text-secondary_text shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-secondary"
      />
   )
}

export function ContactForm() {
   return (
      <div className="w-full max-w-xs">
         <form>
            <div className="pb-4">
               <label htmlFor="username" className="mb-2 block text-sm">
                  Username
               </label>
               <Input id="username" type="text" placeholder="Username" />
            </div>
            <div className="pb-4">
               <label htmlFor="email" className="mb-2 block text-sm">
                  Email
               </label>
               <Input id="email" type="text" placeholder="Your email" />
            </div>
            <div className="pb-4">
               <label htmlFor="subject" className="mb-2 block text-sm">
                  Subject
               </label>
               <Input id="subject" type="text" placeholder="Subject" />
            </div>
            <div className="pb-4">
               <label htmlFor="message" className="mb-2 block text-sm">
                  Your message
               </label>
               <textarea name="" id="message" className='w-full h-24 appearance-none rounded-md border border-primary_light bg-primary_light/10 px-3 py-2 leading-tight text-secondary_text shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-secondary'></textarea>
            </div>
            <Button type="submit" className="w-full">
               Submit form
            </Button>
         </form>
      </div>
   )
}
