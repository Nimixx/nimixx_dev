import { twMerge as tw } from 'tailwind-merge'

type ProjectsProps = {
   children: React.ReactNode
   className?: string
}

export function Projects({ children, className }: ProjectsProps) {
   return <section className={tw('mx-auto px-4 lg:w-3/4 lg:px-0', className)}>{children}</section>
}
