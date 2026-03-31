import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noprob: {
          bg: '#f0f0f0',
          card: '#ffffff',
          'card-soft': '#f8f8f8',
          'card-off': '#f9f9f9',
          text: '#181818',
          dark: '#121212',
          muted: '#a9a9a9',
          grey: '#7c7c7c',
          border: '#d6d6d6',
          'border-dk': '#363636',
          green: '#1dcc5d',
          footer: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Inter Placeholder', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'Inter', 'Inter Display', 'sans-serif'],
        serif: [
          'var(--font-source-serif)',
          '"Source Serif 4"',
          '"Source Serif 4 Placeholder"',
          'Georgia',
          'serif',
        ],
      },
      maxWidth: {
        noprob: '1200px',
      },
      fontSize: {
        hero: ['3.8rem', { lineHeight: '1em', letterSpacing: '-0.05em', fontWeight: '600' }],
        'h2-xl': ['2.8rem', { lineHeight: '1.2em', letterSpacing: '-0.05em', fontWeight: '600' }],
        'h2-lg': ['2.25rem', { lineHeight: '1.2em', letterSpacing: '-0.07em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.4em', letterSpacing: '-0.02em' }],
        'body-sm': ['0.9rem', { lineHeight: '1.5em', letterSpacing: '-0.02em' }],
        label: ['0.875rem', { lineHeight: '1.4em', letterSpacing: '-0.04em' }],
        tiny: ['0.75rem', { lineHeight: '1.2em', letterSpacing: '-0.04em' }],
      },
      borderRadius: {
        pill: '50px',
        card: '16px',
        'card-lg': '24px',
      },
      boxShadow: {
        card: `rgba(108, 113, 128, 0.08) 0px 2px 4px 0px,
               rgba(108, 113, 128, 0.07) 0px 7px 7px 0px,
               rgba(108, 113, 128, 0.04) 0px 17px 10px 0px,
               rgba(108, 113, 128, 0.01) 0px 29px 12px 0px,
               rgba(108, 113, 128, 0) 0px 46px 13px 0px`,
        btn: 'rgba(26, 26, 26, 0.25) 0px 0px 4px 2px',
        'pricing-inner': 'rgba(0, 0, 0, 0.25) 0px 1px 2px 0px inset',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(48px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-240deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-240deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
