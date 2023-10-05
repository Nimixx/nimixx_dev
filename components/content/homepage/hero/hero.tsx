import { Content } from '@/components/layouts/content'
import Image from 'next/image'

export function Hero() {
   return (
      <Content className="flex min-h-[45rem] items-center lg:justify-between flex-col lg:flex-row w-full gap-4">
         <article className="flex flex-col items-start justify-center gap-4 py-8">
            <h1 className="lg:max-w-xl text-4xl lg:text-8xl font-extrabold uppercase">
               UI&UX
               <br />
               FrontEnd
            </h1>
            <p className="lg:max-w-xl text-lg text-secondary_text">
               In my role as a frontend developer, I act as a bridge between design and technology.
               By blending my love for UI/UX design with my technical expertise, I create digital
               solutions that harmoniously combine aesthetics with functionality, providing users
               with exceptional experiences.
            </p>
         </article>
         <Image src="./images/hero.svg" alt="Picture of the author" width={640} height={500} className='w-full lg:w-1/2' />
      </Content>
   )
}
