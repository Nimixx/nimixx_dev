type LayoutProps = {
   children: React.ReactNode
}

export default function MdxLayout({ children }: LayoutProps) {
   return (
      <section className="py-10">
         <article className="mx-auto min-h-[40rem] w-3/5 rounded-md border border-primary_light/50 bg-primary_dark p-5">
            {children}
         </article>
      </section>
   )
}
