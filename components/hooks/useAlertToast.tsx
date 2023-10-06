import { useToast } from '@/components/ui/use-toast'
import { Icon } from '../ui/icon'
import { AlertIcon } from '../svgs'

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
               <Icon icon={<AlertIcon />} className="mr-2 text-xl text-red-400" />
               <span>{message}</span>
            </div>
         )
      })
   }

   return { alertToast }
}
