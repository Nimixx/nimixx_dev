import Link from 'next/link'
import Image from 'next/image'

export function SiteName() {
   return (
      <Link href="/">
           <Image
            src="/images/nimixx.svg"
            alt="Picture of the author"
            width={35}
            height={35}
         />
      </Link>
   )
}
