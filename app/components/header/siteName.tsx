import Link from 'next/link'

type LogoProps = {
   SiteName: string
}

export function SiteName({ SiteName }: LogoProps) {
   return (
      <Link href="/">
         <h2 className="text-accent_1 hover:text-primary_text text-xl font-bold uppercase transition">
            {SiteName}
         </h2>
      </Link>
   )
}
