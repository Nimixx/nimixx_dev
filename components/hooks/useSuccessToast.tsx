import { toast } from 'sonner'
import { Icon } from '../ui/Icon'

type AlertToastProps = {
   message: string
}

export const useSuccessToast = () => {
   const successToast = ({ message }: AlertToastProps) => {
      toast.custom(() => (
         <div className="border-1 flex w-96 items-center justify-center rounded-md border border-primary_light/50 bg-zinc-900 p-5 shadow-md shadow-zinc-950/30">
            <div className="flex items-center">
               <Icon name="Success" className="mr-2 h-5 w-5 text-lime-400" />
               <p>{message}</p>
            </div>
         </div>
      ))
   }

   return { successToast }
}
