import Image from 'next/image'
import Link from 'next/dist/client/link'
import { StaticImageData } from 'next/image'

interface ImageProps {
   src: string | StaticImageData
   alt: string
   shoutout: string
   shoutoutLink: string
   width: number
   height: number
}

export function ProjectImage({ src, alt, shoutout, shoutoutLink, width, height }: ImageProps) {
   return (
      <div className="relative h-36 overflow-hidden rounded-lg border border-primary_light/20">
         <Image src={src} alt={alt} quality={20} placeholder="blur" width={width} height={height} />
         <section className="absolute bottom-0 left-0 rounded-tr-md bg-primary_light/40 px-4 py-2 text-sm text-accent_3 backdrop-blur-sm">
            <Link href={shoutoutLink}>{shoutout}</Link>
         </section>
      </div>
   )
}
