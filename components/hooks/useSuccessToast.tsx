import { useToast } from '@/components/ui/use-toast'
import { Icon } from '../ui/icon'
import { Success } from '../svgs'

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
               <Icon icon={<Success />} className="mr-2 text-xl text-lime-400" />
               <span>{message}</span>
            </div>
         )
      })
   }

   return { successToast }
}
