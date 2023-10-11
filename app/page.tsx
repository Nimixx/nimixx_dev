import React from 'react'
import { HeroSection as Hero } from '@/components/content/homepage/hero/HeroSection'
import { StorySection } from '@/components/content/homepage/story/StorySection'
import { ContactSection } from '@/components/content/homepage/contact/ContactSection'

export default function Page() {
   return (
      <>
         <Hero />
         <StorySection />
         <ContactSection />
      </>
   )
}
