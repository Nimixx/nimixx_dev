'use client'

import { useToast } from '@/components/ui/use-toast'
import { useState } from 'react'
import { Button } from '../ui/button'
import { EmailPlus, EmailLock, Success } from '../svgs'

export function EmailBtn() {
   const { toast } = useToast()
   const email = 'tadeas.thelen@proton.me'
   const [isCopied, setIsCopied] = useState(false)

   const copyToClipboard = () => {
      toast({
         description: (
            <div className="flex items-center">
               <Success className="mr-2 text-xl text-lime-400" />
               <span>Email was copied to clipboard!</span>
            </div>
         )
      })
      navigator.clipboard.writeText(email)
      console.log('copied')
      setIsCopied(!isCopied)

      setTimeout(() => {
         setIsCopied(false)
      }, 3000)
   }

   return (
      <Button
         size="sm"
         onClick={copyToClipboard}
         disabled={isCopied}
         className="hover:bg-secondary_hover bg-secondary text-black"
      >
         {isCopied ? (
            <EmailLock className="mr-2 text-xl" />
         ) : (
            <EmailPlus className="mr-2 text-xl" />
         )}
         Contact me
      </Button>
   )
}
