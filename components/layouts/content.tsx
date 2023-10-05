import { twMerge as tw } from 'tailwind-merge'

type ContentProps = {
   children: React.ReactNode
   className?: string
}

export function Content({ children, className }: ContentProps) {
   return <section className={tw('mx-auto lg:w-3/4 px-4 lg:px-0', className)}>{children}</section>
}
