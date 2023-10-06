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
      <div className="relative mx-auto h-96 overflow-hidden rounded-lg border border-primary_light/20 shadow-md shadow-primary_dark">
         <Image
            src={src}
            alt={alt}
            quality={30}
            layout="responsive"
            width={640}
            height={210}
            placeholder="blur"
         />
         <section className="absolute bottom-0 left-0 rounded-tr-md bg-primary_light/40 px-4 py-2 text-accent_3 backdrop-blur-sm">
            <Link href={shoutoutLink}>{shoutout}</Link>
         </section>
      </div>
   )
}
