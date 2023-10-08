import React from 'react'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
   return {
      h1: ({ children }) => <h1 className="mb-2 mt-6 text-4xl font-bold">{children}</h1>,
      h2: ({ children }) => <h2 className="mb-2 mt-4 text-2xl font-bold">{children}</h2>,
      h3: ({ children }) => <h3 className="mb-2 mt-4 text-xl font-bold">{children}</h3>,
      h4: ({ children }) => <h4 className="mb-1 mt-3 text-lg font-bold">{children}</h4>,
      h5: ({ children }) => <h5 className="mb-1 mt-2 text-base font-bold">{children}</h5>,
      h6: ({ children }) => <h6 className="mb-1 mt-2 text-sm font-bold">{children}</h6>,
      p: ({ children }) => <p className="my-2 text-base text-gray-700">{children}</p>,
      a: ({ children, href }) => (
         <a href={href} className="text-blue-500 underline">
            {children}
         </a>
      ),
      ul: ({ children }) => (
         <ul className="list-inside list-disc text-secondary_text">{children}</ul>
      ),
      ...components
   }
}
