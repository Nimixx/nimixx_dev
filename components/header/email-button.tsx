'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Icon } from '@iconify/react'

export function EmailBtn() {
   const email = 'tadeas.thelen@proton.me'
   const [isCopied, setIsCopied] = useState(false)

   const copyToClipboard = () => {
      navigator.clipboard.writeText(email)
      console.log('copied')
      setIsCopied(!isCopied)

      setTimeout(() => {
         setIsCopied(false)
      }, 2000)
   }

   return (
      <Button size="sm" onClick={copyToClipboard} disabled={isCopied}>
         <Icon
            icon={isCopied ? 'mdi:email-lock' : 'mdi:email-plus'}
            fontSize={18}
            className="mr-2"
         />
         Contact me
      </Button>
   )
}
