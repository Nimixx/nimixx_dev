import { Content } from '@/components/layouts/content'
import Image from 'next/image'
import { MainTitle as Title } from './MainTitle'
import { DescribeMe as Describe } from './DescribeMe'
import { CallActions } from './CallActions'

export function HeroSection() {
   return (
      <Content className="flex w-full justify-center flex-col items-center gap-4 pt-4 md:pt-10 lg:flex-row lg:justify-between lg:pt-36">
         <article className="space-y-8">
            <Title />
            <Describe />
            <CallActions />
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
