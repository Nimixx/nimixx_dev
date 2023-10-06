'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { EmailPlus, EmailLock } from '../svgs'
import { useSuccessToast } from '../hooks/useSuccessToast'

export function EmailBtn() {
   const { successToast } = useSuccessToast()

   const email = 'tadeas.thelen@proton.me'
   const [isCopied, setIsCopied] = useState(false)

   const copyToClipboard = () => {
      const message = 'Email was copied to clipboard!'
      successToast({ message})
    
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
