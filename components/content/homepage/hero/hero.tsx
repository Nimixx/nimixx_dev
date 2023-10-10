import { Content } from '@/components/layouts/content'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/Icon'
import Image from 'next/image'

export function Hero() {
   return (
      <Content className="flex min-h-[45rem] w-full flex-col items-center gap-4 lg:flex-row lg:justify-between">
         <article className="flex flex-col items-start justify-center gap-4 py-8">
            <h1 className="text-4xl font-extrabold uppercase lg:max-w-xl lg:text-8xl">
               <span className='text-secondary'>UI&UX,</span>
               <br />
               <span>FrontEnd</span>
            </h1>
            <p className="text-lg text-secondary_text lg:max-w-xl">
               In my role as a frontend developer, I act as a bridge between design and technology.
               By blending my love for UI/UX design with my technical expertise, I create digital
               solutions that harmoniously combine aesthetics with functionality, providing users
               with exceptional experiences.
            </p>
            <section className='space-x-4'>
               <Button variant="outline" size="lg" className="space-x-2">
                  <Icon name="Github" size="md" />
                  <p>Github</p>
               </Button>
               <Button size="lg" className="space-x-2">
                  <Icon name="CodeSquare" size="md" />
                  <p>My work</p>
               </Button>
            </section>
         </article>
         <Image
            src="./images/hero.svg"
            alt="Picture of the author"
            width={640}
            height={500}
            className="w-full lg:w-1/2"
         />
      </Content>
   )
}
