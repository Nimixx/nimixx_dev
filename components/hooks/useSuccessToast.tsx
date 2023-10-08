import { useToast } from '@/components/ui/use-toast'
import { Icon } from '../ui/Icon'

type AlertToastProps = {
   message: string
   label?: string
}

export const useSuccessToast = () => {
   const { toast } = useToast()

   const successToast = ({ message, label }: AlertToastProps) => {
      const title = label || ''

      toast({
         title,
         description: (
            <div className="flex items-center">
               <Icon name="Success" className="mr-2 w-5 h-5 text-lime-400" />
               <span>{message}</span>
            </div>
         )
      })
   }

   return { successToast }
}
