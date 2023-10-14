import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

type InputProps = {
   id: string
   type: string
   placeholder: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ id, type, placeholder }: InputProps) {
   const [state] = useForm('mnqklbpg')

   return (
      <div className="pb-4">
         <label htmlFor={id} className="mb-2 block text-sm">
            {placeholder}
         </label>
         <input
            id={id}
            type={type}
            name={id}
            placeholder={placeholder}
            required
            className="w-full appearance-none rounded-md border border-primary_light bg-primary_light/10 px-3 py-2 leading-tight text-secondary_text shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-secondary"
         />
         <ValidationError prefix={placeholder} field={id} errors={state.errors} />
      </div>
   )
}

export function ContactForm() {
   const [state, handleSubmit] = useForm('mnqklbpg')

   if (state.succeeded) {
      return (
         <div className="mx-auto flex h-full w-2/3 items-center justify-center">
            <p className="text-center text-xl font-bold text-secondary">
               Thank you, I will answer you as soon as I can
            </p>
         </div>
      )
   }

   return (
      <div className="w-full">
         <form onSubmit={handleSubmit}>
            <Input id="username" type="text" placeholder="Username" />
            <Input id="email" type="text" placeholder="Your email" />
            <Input id="subject" type="text" placeholder="Subject" />
            <div className="pb-4">
               <label htmlFor="message" className="mb-2 block text-sm">
                  Your message
               </label>
               <textarea
                  name="message"
                  id="message"
                  placeholder="Your message..."
                  className="h-24 w-full appearance-none rounded-md border border-primary_light bg-primary_light/10 px-3 py-2 leading-tight text-secondary_text shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-secondary"
               />
               <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <Button type="submit" disabled={state.submitting} className="w-full">
               Submit
            </Button>
         </form>
      </div>
   )
}
