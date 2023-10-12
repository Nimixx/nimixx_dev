import { SiteName } from './siteName'
import { FullNav } from './navigation/FullNav'
import { SocialIcons } from '../ui/social-icon'
import { CopyEmail } from './CopyEmail'

export function Header() {
   return (
      <header className="w-full border-b border-primary_light/50 bg-primary_dark sticky top-0">
         <section className="mx-auto flex h-16 w-full items-center justify-between px-4 lg:w-3/4 lg:px-0">
            <nav className="flex items-center gap-10">
               <SiteName />
               <FullNav />
            </nav>
            <section className="flex items-center gap-10">
               <SocialIcons className="hidden lg:flex" />
               <CopyEmail />
            </section>
         </section>
      </header>
   )
}
