'use client'

import { useToast } from '@/components/ui/use-toast'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Icon } from '@iconify/react'

export function EmailBtn() {
   const { toast } = useToast()
   const email = 'tadeas.thelen@proton.me'
   const [isCopied, setIsCopied] = useState(false)

   const copyToClipboard = () => {
      toast({
         description: (
            <div className="flex items-center">
               <Icon
                  icon="clarity:success-standard-line"
                  fontSize={18}
                  className="mr-2 text-lime-400"
               />
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
         className="bg-secondary text-black"
      >
         <Icon
            icon={isCopied ? 'mdi:email-lock' : 'mdi:email-plus'}
            fontSize={18}
            className="mr-2"
         />
         Contact me
      </Button>
   )
}
