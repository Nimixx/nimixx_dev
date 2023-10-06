import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
   return {
      h1: ({ children }) => <h1 className="text-4xl font-extrabold uppercase">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-semibold">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl">{children}</h3>,
      h4: ({ children }) => <h4 className="text-lg">{children}</h4>,
      h5: ({ children }) => <h5 className="text-base">{children}</h5>,
      h6: ({ children }) => <h6 className="text-sm">{children}</h6>,
      p: ({ children }) => <p className="text-base text-secondary_text">{children}</p>,
   
      ...components
   }
}
