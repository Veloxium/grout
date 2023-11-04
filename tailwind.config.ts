import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#F2FBEA',
          100: '#E1F5D2',
          200: '#C4ECAA',
          300: '#9EDE78',
          400: '#7CCD4E',
          500: '#5DB230',
          600: '#458E22',
          700: '#366D1E',
          800: '#335F20',
          900: '#294A1D',
        },
        secondary: {
          50: '#FDF8ED',
          100: '#F9EBCC',
          200: '#F2D595',
          300: '#ECB95D',
          400: '#E7A23A',
          500: '#DF8121',
          600: '#C5621A',
          700: '#A44419',
          800: '#86361A',
          900: '#6E2E19',
        },
      },
      boxShadow: {
        'outline-primary': '0px 0px 0px 3px #E1F5D2',
        'outline-secondary': '0px 0px 0px 3px #F9EBCC',
      },
      padding: {
        'small': '0.25rem 0.75rem',
        'medium': '0.5rem 1rem',
        'large': '0.625rem 1.25rem',
        'xlarge': '0.75rem 1.5rem',
      },

      
    },
  },
  plugins: [],
}
export default config
