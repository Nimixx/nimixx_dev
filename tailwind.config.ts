import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   theme: {
      extend: {
         colors: {
            primary: 'rgb(var(--color-primary) / <alpha-value>)',
            primary_light: 'rgb(var(--color-primary-light) / <alpha-value>)',
            primary_dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
            primary_text: 'rgb(var(--color-primary-text) / <alpha-value>)',
            secondary_text: 'rgb(var(--color-secondary-text) / <alpha-value>)',
            accent_1: 'rgb(var(--color-accent) / <alpha-value>)',
            accent_2: 'rgb(var(--color-accent2) / <alpha-value>)',
            accent_3: 'rgb(var(--color-accent3) / <alpha-value>)',
            succes: 'rgb(var(--color-success) / <alpha-value>)',
            hero_ball: 'rgb(var(--color-hero-ball) / <alpha-value>)'
         }
      }
   },
   plugins: []
}
export default config
