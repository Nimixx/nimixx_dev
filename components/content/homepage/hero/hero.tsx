import { Content } from '@/components/layouts/content'
import Image from 'next/image'
import heroPic from '@/public/images/hero.svg'

export function Hero() {
   return (
      <Content className="flex min-h-[45rem] items-center justify-between">
         <article className='flex flex-col justify-center items-start gap-4'>
            <h1 className="text-8xl font-extrabold uppercase">
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
         <Image
      src={heroPic}
      alt="Picture of the author"
      width={700}
    />
      </Content>
   )
}
