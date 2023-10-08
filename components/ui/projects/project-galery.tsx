import React from 'react'
import { Button } from '../button'
import { Icon } from '../Icon'
import { useAlertToast } from '@/components/hooks/useAlertToast'

export function ProjectGalery() {
   const { alertToast } = useAlertToast()

   const handleOpenGalery = () => {
      const message = 'Gallery is not ready for production yet!'
      alertToast({ message })
   }

   return (
      <Button onClick={handleOpenGalery} variant="link" size="sm" className="text-sm">
         <Icon name="Galery" className="w-6 h-6" />
      </Button>
   )
}
