import { SiteName } from './siteName'
import { FullNav } from './navigation/fullNav'
import { SocialIcons } from '../ui/social-icon'

export function Header() {
   return (
      <header className="w-full border-b border-primary_light bg-primary_dark">
         <section className="mx-auto flex h-16 w-3/4 items-center justify-between">
            <nav className="flex items-center gap-10">
               <SiteName SiteName="Nimixx.dev" />
               <FullNav />
            </nav>
            <SocialIcons />
         </section>
      </header>
   )
}
