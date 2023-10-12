import { Content } from '@/components/layouts/content'
import Image from 'next/image'
import { MainTitle as Title } from './MainTitle'
import { DescribeMe as Describe } from './DescribeMe'
import { CallActions } from './CallActions'

export function HeroSection() {
   return (
      <Content className="flex w-full flex-col items-center justify-center md:pt-10 lg:flex-row lg:justify-between gap-16 py-8 md:py-16">
         <article className="flex flex-col gap-8 items-center justify-center lg:justify-start lg:items-start">
            <Title />
            <Describe />
            <CallActions />
         </article>
         <Image
            src="./images/hero.svg"
            alt="Picture of the author"
            width={640}
            height={500}
            priority
            className="hidden lg:block lg:w-2/5 2xl:w-2/4"
         />
      </Content>
   )
}
