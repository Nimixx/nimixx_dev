import { useToast } from '@/components/ui/use-toast'
import { Icon } from '../svgs/Icon'

type AlertToastProps = {
   message: string
   label?: string
}

export const useAlertToast = () => {
   const { toast } = useToast()

   const alertToast = ({ message, label }: AlertToastProps) => {
      const title = label || ''

      toast({
         title,
         description: (
            <div className="flex items-center">
               <Icon name="AlertIcon" className="mr-2 w-5 h-5 text-red-400" />
               <span>{message}</span>
            </div>
         )
      })
   }

   return { alertToast }
}
