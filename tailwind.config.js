/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ['class'],
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}'
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
            secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
            secondary_hover: 'rgb(var(--color-secondary-hover) / <alpha-value>)',
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))'
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))'
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))'
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))'
            },
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))'
            }
         },
      }
   },
   plugins: [require('tailwindcss-debug-screens', '@tailwindcss/typography', '@tailwindcss/forms')]
}
