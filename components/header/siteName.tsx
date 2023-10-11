import Link from 'next/link'

export function SiteName() {
   return (
      <Link href="/">
         <h2 className="text-xl font-bold uppercase text-accent_3 transition hover:text-secondary">
            nimixx.dev
         </h2>
      </Link>
   )
}
