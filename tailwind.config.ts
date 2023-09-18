import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundSize: {
				'body': '24px 24px',
			},
			backgroundImage:{
				'gradient':'radial-gradient(rgba(var(--foreground-rgb),.1) 0.6px,transparent 1.2px)',
			},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
