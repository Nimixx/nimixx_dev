'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { useSuccessToast } from '../hooks/useSuccessToast'
import { Icon } from '../ui/Icon'

export function CopyEmail() {
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
      >
         {isCopied ? (
            <Icon name="EmailLock" className="md:mr-2 w-5 h-5" />
         ) : (
            <Icon name="EmailPlus" className="md:mr-2 w-5 h-5" />
         )}
         <p className='hidden md:block'>Contact me</p>
      </Button>
   )
}
