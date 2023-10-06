import Image from 'next/image'
import Link from 'next/dist/client/link'
import { StaticImageData } from 'next/image'

interface ImageProps {
   src: string | StaticImageData
   alt: string
   shoutout: string
   shoutoutLink: string
}

export function ProjectImage({ src, alt, shoutout, shoutoutLink }: ImageProps) {
   return (
      <div className="relative w-64 h-36 overflow-hidden rounded-lg border border-primary_light/20 shadow-md shadow-primary_dark">
         <Image
            src={src}
            alt={alt}
            quality={20}
            // width={320}
            // height={320}
            placeholder="blur"
           objectFit='fill'
         />
         <section className="absolute bottom-0 left-0 rounded-tr-md bg-primary_light/40 px-4 py-2 text-accent_3 backdrop-blur-sm text-sm">
            <Link href={shoutoutLink}>{shoutout}</Link>
         </section>
      </div>
   )
}
