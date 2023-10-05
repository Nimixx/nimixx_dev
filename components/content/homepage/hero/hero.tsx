import { Content } from '@/components/layouts/content'
import Image from 'next/image'

export function Hero() {
   return (
      <Content className="flex min-h-[45rem] items-center justify-between">
         <article className="flex flex-col items-start justify-center gap-4">
            <h1 className="max-w-xl text-8xl font-extrabold uppercase">
               UI&UX
               <br />
               FrontEnd
            </h1>
            <p className="max-w-xl text-lg text-secondary_text">
               In my role as a frontend developer, I act as a bridge between design and technology.
               By blending my love for UI/UX design with my technical expertise, I create digital
               solutions that harmoniously combine aesthetics with functionality, providing users
               with exceptional experiences.
            </p>
         </article>
         <Image src="./images/hero.svg" alt="Picture of the author" width={800} height={600} />
      </Content>
   )
}
