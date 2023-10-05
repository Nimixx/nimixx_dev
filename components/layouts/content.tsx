import { twMerge as tw } from 'tailwind-merge'

type ContentProps = {
   children: React.ReactNode
   className?: string
}

export function Content({ children, className }: ContentProps) {
   return <section className={tw('mx-auto w-3/4', className)}>{children}</section>
}
